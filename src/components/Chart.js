import React from 'react';
import * as d3 from 'd3';
import '../App.css';

class Chart extends React.Component{

  componentWillReceiveProps = (nextProps) => {
    this.updateChart()
  }

  updateChart = () => {
    let xcoords= [0,10,20,50,80,90,100,140,160,180,200,220,240,260,280,300,310,330,400,430]
    if (this.props.data){
      let svg = d3.selectAll("svg")
      let thumbnails = svg.selectAll("image").data(this.props.data)
      .enter()
      .append("image")
      thumbnails.attr("x",function(d,i){ return 50 * i }  )
      .attr("xlink:href", function(d){return d.thumbnail_url})
      .attr("y", 180)
      .attr('width', 40)
      .attr('height', 40)
      .attr('fill', (d) => {
        console.log(d)
        console.log(`url(${d.thumbnail_url})`)
        return `url(${d.thumbnail_url})`})
    }

  }

  render(){
    return (
      <div style={{'height': '100%'}}>
        <svg  width="100%" height="100%" className="svg">
        </svg>
      </div>
    )
  }


}

export default Chart
