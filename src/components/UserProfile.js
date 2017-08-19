import React, {Component} from 'react';

class UserProfile extends Component {

  render(){
    console.log(this.props)
    return(
    <span>
      <img src={this.props.user.profile_picture_url} style={{'border-radius': '50%'}} />
      <h1>{this.props.user.username}</h1>
    </span>
  )
  }
}

export default UserProfile;
