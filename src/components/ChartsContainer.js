import React from 'react';
import { Dropdown, Icon, Button } from 'semantic-ui-react';
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
      <div>
        <br />
        <h2 className='charts-header'>Charts</h2>
        <Button.Group color='blue' size='tiny' className="charts-button-group centered" fluid>
          <div className="ui equal width grid centered">
            <button onClick={this.postsButtonClicked} className="ui primary button chart-button">POSTS</button>
            <Dropdown text='PHOTOS' icon='filter' onClick={this.photosButtonClicked } floating labeled button className='icon chart-button'>
                <Dropdown.Menu>
                  <Dropdown.Header icon='tags' content='Filter by' />
                  <Dropdown.Item onClick={this.likesBubbleClicked}><Icon name='heart' />Likes</Dropdown.Item>
                  <Dropdown.Item onClick={this.commentsBubbleClicked}><Icon name='comment' />Comments</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </div>
        </Button.Group>
        <div className='chart'>
          <Chart data={this.props.pictures} type={this.state.chartType}/>
        </div>
      </div>
    )
  }
}

export default ChartsContainer;
