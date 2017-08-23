import React, {Component} from 'react';
import { Image, Header } from 'semantic-ui-react'

class UserProfile extends React.Component {

  render(){
    console.log(this.props)
    return(
    <span className="profile">
      <Image className="profile-img" style={{'display': 'inline'}} src={this.props.user.profile_picture_url} size='tiny' shape='circular' />
      <Header style={{'display': 'inline-block', 'padding-left': '10px', 'padding-top': '10px'}} as='h1'> {this.props.user.username}</Header>
    </span>
  )
  }
}

export default UserProfile;
