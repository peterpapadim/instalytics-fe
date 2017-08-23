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
    pictures: {},
    logout: false
  }

  componentDidMount(){
    if (!window.location.href.split('?')[1]){
      window.location = "https://api.instagram.com/oauth/authorize/?client_id=2d821cbcc0c0401a99f69ca68d2c4f04&redirect_uri=https%3A%2F%2Finstalytics-api.herokuapp.com%2F&response_type=code&scope=public_content+follower_list";
      //For Heroku "https://api.instagram.com/oauth/authorize/?client_id=2d821cbcc0c0401a99f69ca68d2c4f04&redirect_uri=https%3A%2F%2Finstalytics-api.herokuapp.com%2F&response_type=code&scope=public_content+follower_list"

      //For local host
      // "https://api.instagram.com/oauth/authorize/?client_id=2d821cbcc0c0401a99f69ca68d2c4f04&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=public_content+follower_list"
    } else {
      console.log("we made it.")
      // There has to be a better way to do this.
      let id = window.location.href.split('?')[1].split('=')[1]
      let url = `https://instalytics-api.herokuapp.com/api/v1/users/${id}`
      // For Heroku: https://instalytics-api.herokuapp.com/api/v1/users/
      fetch(url)
      .then((resp) => resp.json())
      .then(data => this.setState({ user: data }))
      let mediaURL = `https://instalytics-api.herokuapp.com/api/v1/users/${id}/pictures`
      // For Heroku https://instalytics-api.herokuapp.com/api/v1/users/
      fetch(mediaURL)
      .then((resp) => resp.json())
      .then((data) => this.setState({ pictures: data },function(){console.log(this.state)}))
    }

  }

  logout=()=>{
    this.setState({
      logout: true
    }, ()=>{
      setTimeout(function(){
        window.location = "https://instalytics-fe.herokuapp.com/"
      },1000)
    })


  }

  render() {
    return (
      <div>
      <Grid>
        <Grid.Row verticalAlign='middle' className='top-bar' color='blue'>
          <Grid.Column width={6}>
            <UserProfile user={this.state.user} logout={this.logout}/>
          </Grid.Column>
          <Grid.Column width={10} stretched='true'>
            <StatsSummaryBar user={this.state.user}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className='body-background'>
          <Grid.Column width={6} textAlign='center' >
            <TopPhotoContainer pictures={this.state.pictures}/>
          </Grid.Column>
          <Grid.Column width={10} textAlign='center'>
            <ChartsContainer pictures={this.state.pictures}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        {(this.state.logout)? <iframe src="https://instagram.com/accounts/logout/" width="0" height="0" />:null}
      </div>
    );
  }
}

export default App;
