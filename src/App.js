import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserProfile from './components/UserProfile'

class App extends Component {

  state = {
    user: {}
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
    }
  }

  render() {
    return (
      <div className="App">
        <UserProfile user={this.state.user}/>
      </div>
    );
  }
}

export default App;
