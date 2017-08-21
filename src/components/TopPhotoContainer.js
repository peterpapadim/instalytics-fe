import React, {Component} from 'react';
import TopPhoto from './TopPhoto'
import '../App.css';
import {Card} from 'semantic-ui-react'

class TopPhotoContainer extends Component {

  makePhotos(){
    if(this.props.pictures[0]){
      return(
        this.props.pictures.map(function(picture, index){
          return <TopPhoto picture={picture} key={index}/>
        })
      )
    }
  }

  render(){
    return(
    <div>
      <br></br>
      <h2 className="photo-gallery-header">Top Recent Photos</h2>
      <div className="ui equal width grid">
        <button className="ui primary button photo-gallery-button column">LIKES</button>
        <button className="ui primary button photo-gallery-button column">COMMENTS</button>
      </div>
      <div className="photo-gallery">
        <Card.Group itemsPerRow={3}>
          {this.makePhotos()}
        </Card.Group>
      </div>
    </div>
  )
  }
}

export default TopPhotoContainer;
