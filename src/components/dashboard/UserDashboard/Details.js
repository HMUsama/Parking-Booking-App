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
    if(!this.props.auth ) return <Redirect to='/login'/>
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
  return{
    ID:   state.firebase.auth.uid,
    auth:   state.firebase.auth.uid,
  }
}
export default connect(mapStateToProps)(Details);
// export default Details;
