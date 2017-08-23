import React from 'react'
import Stat from "./Stat"
import '../App.css';
import {Grid} from 'semantic-ui-react';

class StatsSummaryBar extends React.Component {
  render(){
    return(
      <Grid>
        <Grid.Row centered='true'>
          <Grid.Column width={4} textAlign='center'>
            <Stat count={this.props.user.posts_count} category="posts" />
          </Grid.Column>
          <Grid.Column width={4} textAlign='center'>
            <Stat count={this.props.user.followers_count} category="followers"/>
          </Grid.Column>
          <Grid.Column width={4} textAlign='center'>
            <Stat count={this.props.user.following_count} category="following"/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default StatsSummaryBar
