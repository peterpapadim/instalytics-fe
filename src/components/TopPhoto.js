import React, {Component} from 'react';
import {Card, Image, Icon} from 'semantic-ui-react'
class TopPhoto extends Component {

  render(){
    return(
      <Card>
        <Image src={this.props.picture.thumbnail_url}/>
        <Card.Content extra>
          <span style={{'float': 'left'}}>
            <Icon name='heart'/>
            {this.props.picture.likes_count}
          </span>
          <span style={{'float': 'right'}}>
            <Icon name='comment'/>
            {this.props.picture.comments_count}
          </span>
        </Card.Content>
      </Card>
    )
  }
}

export default TopPhoto;
