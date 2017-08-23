import React, {Component} from 'react';
import {Card, Image, Icon} from 'semantic-ui-react'

class TopPhoto extends Component {

  render(){
    return(
      <Card className="card">
        <div className="top-photo-container">
          <Image className='fluid top-photo-image' src={this.props.picture.standard_resolution_url}/>
        </div>
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
