import React, { Component } from 'react';
import './App.css';
import * as d3 from 'd3';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserProfile from './components/UserProfile'
import StatsSummaryBar from "./components/StatsSummaryBar"
import TopPhotoContainer from "./components/TopPhotoContainer"
import ChartsContainer from "./components/ChartsContainer"
import {Grid} from 'semantic-ui-react'
class App extends Component {

  state = {
    user: {},
    pictures: {}
  }
  componentDidMount(){
    if (!window.location.href.split('?')[1]){
      window.location = "https://api.instagram.com/oauth/authorize/?client_id=2d821cbcc0c0401a99f69ca68d2c4f04&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=public_content+follower_list";
    } else {
      console.log("we made it.")
      // There has to be a better way to do this.
      let id = window.location.href.split('?')[1].split('=')[1]
      let url = `http://localhost:3000/api/v1/users/${id}`
      fetch(url)
      .then((resp) => resp.json())
      .then(data => this.setState({ user: data }))
      let mediaURL = `http://localhost:3000/api/v1/users/${id}/pictures`
      fetch(mediaURL)
      .then((resp) => resp.json())
      .then((data) => this.setState({ pictures: data },function(){console.log(this.state)}))
    }

  }

  render() {
    return (
      <Grid>
        <Grid.Row verticalAlign='middle' className='top-bar'>
          <Grid.Column width={6}>
            <UserProfile user={this.state.user}/>
          </Grid.Column>
          <Grid.Column width={10} stretched='true'>
            <StatsSummaryBar user={this.state.user}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={6} textAlign='center'>
            <TopPhotoContainer pictures={this.state.pictures}/>
          </Grid.Column>
          <Grid.Column width={10} textAlign='center'>
            <ChartsContainer pictures={this.state.pictures}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
