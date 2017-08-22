import React from 'react';
import * as d3 from 'd3';
import '../App.css';

class Chart extends React.Component{

  componentWillReceiveProps = (nextProps) => {
    this.updateChart()
  }

  updateChart = () => {
    if (this.props.data){
      let svg = d3.selectAll("svg")
      let thumbnails = svg.selectAll("image").data(this.props.data)
      .enter()
      .append("image")

      let timeParser = d3.timeParse("%H:%M")
      let xScale = d3.scaleTime()
      .domain([ timeParser("00:00"), timeParser("23:59")])
      .range([0,600])

      let yScale = d3.scaleLinear()
      .domain([d3.min(this.props.data, function(d){ return d.likes_count }),
               d3.max(this.props.data, function(d){ return d.likes_count })])
      .range([0,350])

      let xAxis = d3.axisBottom()
      .scale(xScale)


      svg.append("g").call(xAxis)
      .attr('class', 'xAxis')
      .attr('transform', 'translate(20,350)')

      let yAxis = d3.axisLeft()
      .scale(yScale)
      .tickValues([0,20,40,60,80,100])
      .ticks(6)

      svg.append('g').call(yAxis)
      .attr('class', 'yAxis')
      .attr('transform', 'translate(20,0)')

      thumbnails.attr("x",function(d,i){ return xScale(timeParser(d.created_time.split('T')[1].substring(0,5))) -20 }  )
      .attr("xlink:href", function(d){return d.thumbnail_url})
      .attr("y", function(d,i){return 200-yScale(d.likes_count)})
      .attr('width', 40)
      .attr('height', 40)
      .attr('fill', (d) => {
        return `url(${d.thumbnail_url})`})
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
