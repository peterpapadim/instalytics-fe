import React, {Component} from 'react';
import TopPhoto from './TopPhoto'
import '../App.css';
import {Button, Dropdown, Icon, Card, Grid} from 'semantic-ui-react'

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
    <Grid className='gallery-container'>
      <Grid.Row centered='true'>
        <h1 className="photo-gallery-header">Top Recent Photos</h1>
      </Grid.Row>

      <Grid.Row centered='true'>
          <Dropdown text='SORT BY' icon='filter' floating labeled button className='icon primary' >
            <Dropdown.Menu >
              <Dropdown.Item onClick={this.likesButtonClicked}><Icon name='heart'/>Likes</Dropdown.Item>
              <Dropdown.Item onClick={this.commentsButtonClicked}><Icon name='comment' />Comments</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Grid.Row>

      <Grid.Row>
        <div className="photo-gallery">
          <Card.Group itemsPerRow={2}>
            {this.makePhotos()}
          </Card.Group>
        </div>
      </Grid.Row>

    </Grid>
  )
  }
}

export default TopPhotoContainer;
