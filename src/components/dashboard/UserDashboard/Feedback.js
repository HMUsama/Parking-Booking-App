import React, { Component } from 'react';
import './Feedback.css';


class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  cencel(){
    alert('hi')
  }
  render() {
    return (
      <div>
        <center className="center">
          <div className="form">
            <h3>Feedback  User</h3>
              {/* <text className="h-text" >Email</text> */}
              <input placeholder="Enter Email" className="input" type="text"/>
              {/* <text className="h-text" >select Rating</text> */}
              <input placeholder="Enter Email" className="input" type="text"/>
              {/* <text className="h-text" >Message</text> */}
              <textarea rows="4" cols="50" className="input" placeholder="text write some thing" />
              <button  className="slot_btn" onClick={this.cencel}>Cencle</button>
        </div>
        </center>
      </div>
    );
  }
}

export default Feedback;
