import React, {Component} from 'react';
import {Card} from 'semantic-ui-react'
class TopPhoto extends Component {

  render(){
    return(
      <Card image={this.props.picture.thumbnail_url}></Card>
    )
  }
}

export default TopPhoto;
