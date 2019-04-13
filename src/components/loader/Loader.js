import React, { Component } from 'react';
import './Loader.scss';

class Loader extends Component {
  render() {
    return (
      <div >
       <div className="container">
        <span className="dots"></span>
        <span className="dots"></span>
        <span className="dots"></span>
        <span className="dots"></span>
        <span className="dots"></span>
        <span className="dots"></span>
        <span className="dots"></span>
        <span className="dots"></span>
        <span className="dots"></span>
        <span className="dots"></span>
        </div>


      </div>
    );
  }
}

export default Loader;
