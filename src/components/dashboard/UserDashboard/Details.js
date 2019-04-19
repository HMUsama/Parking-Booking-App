import React, { Component } from 'react';
// import './Dashboard.css';
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import './Details.css'
import * as firebase from 'firebase';
import 'firebase/firestore';
import Loader from '../../loader/Loader'
import DetailsList1 from './DetailList1'


class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
        allBooking:[],
    };
  }
  render() {
    return (
      <div>
        {
          this.props.ID ? (<DetailsList1 userID={this.props.ID}/>) 
          :
          (<Loader/>)
        }
   
    
     </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log("User Login______________________>>>>>",state.firebase.auth.uid)
  // console.log("User Login__________STATUS____________>>>>>",state.authUR.status)
  const status1 =state.authAd.status;
  const status2 =state.authUR.status;
  return{
      ID:   state.firebase.auth.uid,
      statusAD:status1,
      statusUR:status2,
  }
}
export default connect(mapStateToProps)(Details);
// export default Details;
