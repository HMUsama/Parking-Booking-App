import React, { Component } from 'react';
// import './Dashboard.css';
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'


class DashboardAD extends Component {
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
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
      auth:   state.firebase.auth.uid,
  }
}
export default connect(mapStateToProps)(DashboardAD);
// export default DashboardAD;
