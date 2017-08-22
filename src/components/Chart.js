import React from 'react';
import * as d3 from 'd3';
import '../App.css';

class Chart extends React.Component{

  componentWillReceiveProps = (nextProps) => {
    this.updateChart(nextProps.type)
  }

  updateChart = (type) => {
    let svg = d3.selectAll('svg')
    svg.selectAll('*').remove();
    switch(type){
      case 'line':
        this.makeLineChart();
        break;
      case 'bubble':
        this.makeBubbleChart();
        break;
    }

  }

  makeBubbleChart = () => {
    let width = 700
    let height = 500


    let radiusScale = d3.scaleSqrt().domain([1, 300]).range([10,150])

    console.log("bbubbble time")

    let svg = d3.selectAll("svg")


    let defs = svg.append('defs')
    defs.selectAll('.photos')
      .data(this.props.data)
      .enter().append("pattern")
      .attr("class", "photos")
      .attr('id', function(d){
        return `pic-${d.id}`
      })
      .attr('height', '100%')
      .attr('width', '100%')
      .attr('patternContentUnits', 'objectBoundingBox')
    .append('image')
      .attr('height', 1)
      .attr('width', 1)
      .attr('preserveAspectRatio', 'none')
      .attr("xlink:href", function(d){
        return d.thumbnail_url
      })

    let circles = svg.selectAll("circle").data(this.props.data)
    .enter().append("circle")
    .attr('class', 'picture')
    .attr('r', function(d){
      return radiusScale(d.likes_count)
    })
    .attr("fill", function(d){
      return `url(#pic-${d.id})`
    })
    .attr("xlink:href", function(d){return d.thumbnail_url})



    let simulation = d3.forceSimulation()
      .force("x", d3.forceX(width / 2).strength(0.05))
      .force("y", d3.forceY(height / 2).strength(0.05))
      .force("collide", d3.forceCollide(function(d){
        return radiusScale(d.likes_count) + 1
      }))





    simulation.nodes(this.props.data)
      .on('tick', ticked)

    function ticked(){
      circles
        .attr('cx', function(d){
          return d.x
        })
        .attr('cy', function(d){
          return d.y
        })
    }
  }


  makeLineChart = () => {
    d3.selection.prototype.moveToFront = function() {
      return this.each(function(){
      this.parentNode.appendChild(this);
      });
    };
    if (this.props.data){
      let svg = d3.selectAll("svg")
      let thumbnails = svg.selectAll("image").data(this.props.data)
      .enter()
      .append("image")

      let timeParser = d3.timeParse("%H:%M")
      let xScale = d3.scaleTime()
      .domain([ timeParser("00:01"), timeParser("23:59")])
      .range([0,500])

      let yScale = d3.scaleLinear()
      .domain([d3.max(this.props.data, function(d){ return d.likes_count }),
               d3.min(this.props.data, function(d){ return d.likes_count })])
      .range([0,325])

      let xAxis = d3.axisBottom()
      .scale(xScale)


      svg.append("g").call(xAxis)
      .attr('class', 'xAxis')
      .attr('transform', 'translate(20,360)')

      let yAxis = d3.axisLeft()
      .scale(yScale)
      .tickValues([0,20,40,60,80,100])
      .ticks(6)

      svg.append('g').call(yAxis)
      .attr('class', 'yAxis')
      .attr('transform', 'translate(20,25)')

      thumbnails.attr("x",function(d,i){ return xScale(timeParser(d.created_time.split('T')[1].substring(0,5))) }  )
      .attr("xlink:href", function(d){return d.thumbnail_url})
      .attr("y", function(d,i){return yScale(d.likes_count)})
      .attr('width', 40)
      .attr('height', 40)
      .attr('fill', (d) => { return `url(${d.thumbnail_url})`})
      .on("mouseover", function(d,i){
        console.log(this)
        var newHeight = parseInt(d3.select(this).style("height"))*1.1 + "px";
          d3.select(this)
          .style("height", '200px')
          .style("width", '200px')
          .moveToFront()
          .attr('fill', (d) => { return `url(${d.thumbnail_url})`})
        })
        .on("mouseout", function(d,i){
          console.log(this)
          var newHeight = parseInt(d3.select(this).style("height"))*1.1 + "px";
            d3.select(this)
            .style("height", '40px')
            .style("width", '40px')
            .attr('fill', (d) => { return `url(${d.thumbnail_url})`})
          })

    }
  }
  render(){
    return (
      <div style={{'height': '100%', 'padding-left': '15px'}}>
        <svg  width="100%" height="100%" className="svg">
        </svg>
      </div>
    )
  }


}

export default Chart
