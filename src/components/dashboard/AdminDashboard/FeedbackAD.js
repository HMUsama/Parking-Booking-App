import React, { Component } from 'react';
import './FeedbackAdmin.css';


class FeedbackAd extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
      {/* <h1 className="h1AD">Admin Dashboard</h1> */}
        <div>
          <div className="disply-message">
           <div>
            <p className="message">hi my name</p>
            <p className="message-admin">hi my name</p>
            <p>hi my name</p>
            <p>hi my name</p>
            <p>hi my name</p>
            <p>hi my name</p>
            <p>hi my name</p>
            <p>hi my name</p>
           </div>
          </div>
          <div className="button-div">
            <input type="text" className="text-message"/>
            <button className="button-send">Send</button>
          </div>
          </div>
      </div>
    );
  }
}

export default FeedbackAd;
