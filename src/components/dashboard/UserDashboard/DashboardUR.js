import React, { Component } from 'react';
// import './Dashboard.css';
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'


class DashboardUR extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    if(!this.props.auth ) return <Redirect to='/login'/>
    return (
      <div>
        <center>
      <img src="https://www.mudelautod.ee/wp-content/uploads/loader.gif"   className="image-car"/>
        </center>
        {/* <h1>User Dashboard</h1> */}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  // console.log("User Login______________________>>>>>",state)
  // console.log("User Login__________STATUS____________>>>>>",state.authUR.status)
  const status1 =state.authAd.status;
  const status2 =state.authUR.status;
  return{
      auth:   state.firebase.auth.uid,
      statusAD:status1,
      statusUR:status2,
  }
}
export default connect(mapStateToProps)(DashboardUR);
// export default DashboardUR;
