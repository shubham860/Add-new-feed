import React from 'react'
import PropTypes from 'prop-types'

class Newpost extends React.Component {
  constructor(){
    super()
    this.state = {
      title : '',
      body : ''
    }
  }

  handler = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })

  }

  reset = (event) => {
    this.setState({
      title : '',
      body  : ''
    })
  }

  submit = (event) => {
    if (this.state.title.trim() && this.state.body.trim()) {
      console.log(this.state);
      this.reset();
    }
  }

  render () {
    return(
      <div class='main'>

        <div>
          <input type='text' name='title' onChange={this.handler} value={this.state.title} placeholder='Title'/>
          <input type='text' name='body' onChange={this.handler} value={this.state.body} placeholder='Body'/>
        </div>

        <div>
          <button type='submit' onClick={this.submit}>Add post</button>
          <button type='button' onClick={this.reset}>Reset</button>
        </div>
        
      </div>
    )
  }
}

export default Newpost;
