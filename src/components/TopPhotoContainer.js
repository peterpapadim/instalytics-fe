import React, {Component} from 'react';
import TopPhoto from './TopPhoto'
import '../App.css';
import {Card} from 'semantic-ui-react'

class TopPhotoContainer extends Component {

    state = {
      pictures: this.props.pictures
    }

  likesButtonClicked = (event) => {
    if(this.state.pictures[0]){
      this.setState({
        pictures: this.props.pictures.sort(function(a, b){
          return b.likes_count - a.likes_count
        })
      })
    }
  }

  commentsButtonClicked = (event) => {
    this.setState({
      pictures: this.props.pictures.sort(function(a, b){
        return b.comments_count - a.comments_count
      })
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      pictures: nextProps.pictures
    }, this.likesButtonClicked)
  }

  makePhotos(){
    if(this.state.pictures[0]){
      return(
        this.state.pictures.map(function(picture, index){
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
        <button onClick={this.likesButtonClicked} className="ui primary button photo-gallery-button column">LIKES</button>
        <button onClick={this.commentsButtonClicked} className="ui primary button photo-gallery-button column">COMMENTS</button>
      </div>
      <div className="photo-gallery">
        <Card.Group itemsPerRow={2}>
          {this.makePhotos()}
        </Card.Group>
      </div>
    </div>
  )
  }
}

export default TopPhotoContainer;
