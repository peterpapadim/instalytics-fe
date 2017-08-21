import React from 'react'
import Stat from "./Stat"
import '../App.css';

class StatsSummaryBar extends React.Component {
  render(){
    return(
      <div className="ui equal width grid stats-bar">
        <Stat count={this.props.user.posts_count} category="posts" />
        <Stat count={this.props.user.followers_count} category="followers"/>
        <Stat count={this.props.user.following_count} category="following"/>
      </div>
    )
  }
}

export default StatsSummaryBar
