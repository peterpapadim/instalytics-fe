import React, {Component} from 'react';

class LoginForm extends Component {

  state = {
      value: ''
  }

  inputChanged = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render(){
    return(
      <div>
        <input type='text' value={this.state.value} placeholder='Instagram Username' onChange={this.inputChanged}/>
      </div>
    )
  }
}

export default LoginForm;
