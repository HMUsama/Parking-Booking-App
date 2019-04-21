import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import * as firebase from 'firebase';
import 'firebase/firestore';
import swal from 'sweetalert';


class AllFeddback extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    if(!this.props.auth ) return <Redirect to='/login'/>
    return (
      <div> 
          
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
export default connect(mapStateToProps)(AllFeddback);
// export default AllFeddback;
