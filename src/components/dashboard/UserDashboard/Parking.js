import React, { Component } from 'react';
import './Parking.css'
import { NavLink } from 'react-router-dom'


class Parking extends Component {

  render() {
    return (
      <div className="Parking">
        <div className="select_Area">
            <center>
                <h1 className="h1">Select Area</h1>
                <div className="block_Area">
                    <p ><NavLink to='/block_Area1'className="block_1">Block 1</NavLink></p>
                    <p ><NavLink to='/block_Area2'className="block_1">Block 2</NavLink></p>
                    <p ><NavLink to='/usersLogIn'className="block_1">Block 3</NavLink></p>
                </div>
            </center>
        </div>
      </div>
    );
  }
}

export default Parking;
