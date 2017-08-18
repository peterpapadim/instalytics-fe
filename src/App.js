import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  componentDidMount(){
    window.location = "https://api.instagram.com/oauth/authorize/?client_id=2d821cbcc0c0401a99f69ca68d2c4f04&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=code&scope=public_content+follower_list";
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
