import React from 'react';
import { Dropdown, Icon, Button, Segment, Grid } from 'semantic-ui-react';
import Chart from './Chart'
import '../App.css';

class ChartsContainer extends React.Component{

  state = {
    chartType: ''
  }

  postsButtonClicked = (event) => {
    this.setState({
      chartType: 'line'
    })
  }

  likesBubbleClicked = (event) => {
      event.preventDefault()
      this.setState({
        chartType: 'bubble-likes'
      })
  }
  commentsBubbleClicked = (event) => {
      event.preventDefault()
      this.setState({
        chartType: 'bubble-comments'
      })
  }

  render(){
    return(
      <Grid>
        <Grid.Row width={16} centered='true'>
          <h2 className='charts-header'>Charts</h2>
        </Grid.Row>

        <Grid.Row width={16}>
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={4}>
            <button onClick={this.postsButtonClicked} className="ui primary button chart-button">POSTS</button>
          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={4}>
            <Dropdown text='PHOTOS' icon='filter' onClick={this.photosButtonClicked } labeled button className='icon chart-button primary'>
                <Dropdown.Menu>
                  <Dropdown.Header icon='tags' content='Filter by' />
                  <Dropdown.Item onClick={this.likesBubbleClicked}><Icon name='heart' />Likes</Dropdown.Item>
                  <Dropdown.Item onClick={this.commentsBubbleClicked}><Icon name='comment' />Comments</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </Grid.Column>
          <Grid.Column width={2}>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered='true'>
          <Chart data={this.props.pictures} type={this.state.chartType}/>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ChartsContainer;
