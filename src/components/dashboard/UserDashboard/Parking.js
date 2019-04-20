import React, { Component } from 'react';
import './Parking.css'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'


class Parking extends Component {

  render() {
    if(!this.props.auth ) return <Redirect to='/login'/>
    return (
      <div className="Parking">
        <div className="select_Area">
            <center>
                <h1 className="h1">Select Area</h1>
                <div className="block_Area">
                    <p ><NavLink to='/block_Area1'className="block_1">Block 1</NavLink></p>
                    <p ><NavLink to='/block_Area2'className="block_2">Block 2</NavLink></p>
                    <p ><NavLink to='/block_Area3'className="block_3">Block 3</NavLink></p>
                </div>
            </center>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return{
      auth:   state.firebase.auth.uid,
  }
}
export default connect(mapStateToProps)(Parking);
// export default Parking;
