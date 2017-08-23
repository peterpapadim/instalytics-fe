import React, {Component} from 'react';
import { Image, Header, Grid   } from 'semantic-ui-react'

class UserProfile extends React.Component {

  render(){
    console.log(this.props)
    return(
    <span className="profile">
      <Grid>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={3}>
          <Image className="profile-img" style={{'display': 'inline', 'border-style':'solid'}} src={this.props.user.profile_picture_url} size='tiny' shape='circular' />
      </Grid.Column>
      <Grid.Column width={3}>
        <Header style={{'display': 'inline-block', 'padding-top': '10px', 'color': 'white'}} as='h1'> {this.props.user.username}
        </Header>
          <a onClick={this.props.logout} className="logout-link" href="#">Logout</a>
      </Grid.Column>
     </Grid>

    </span>
  )
  }
}

export default UserProfile;
