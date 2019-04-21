import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOutStd} from '../../../store/actions/authActionUR' 
import './UserSignInLink.css'
import swal from 'sweetalert';


class UsersSignedInLinks extends Component {
    constructor() {
      super();
      this.state = {
      }
    }
    Logout(){
        localStorage.clear();
        swal("Log Out...")
        this.props.signOutStd();
    }

    user(){
        return(
            <ul className="right">
            <li><NavLink to='/home'>Home </NavLink></li>
            <li><NavLink to='/parking'>Booking </NavLink></li>
            <li userID={this.props.User_id}><NavLink to='/details'>Details </NavLink></li>
            <li><NavLink to='/feedback'>Feedbacks </NavLink></li>
            {/* <li userID={this.props.User_id}><NavLink to='/viewFB'>View FB </NavLink></li> */}
            {/* <li><NavLink to='/selectArea'>User... </NavLink></li> */}
            <li><NavLink to='/'><a onClick={this.Logout.bind(this)}>LogOut</a></NavLink></li>
            </ul>
        )  
    }
    admin(){
        return(
            <ul className="right">
                <li><NavLink to='/allUsers'> Users </NavLink></li>
                <li><NavLink to='/allBooking'>Booking </NavLink></li>
                <li><NavLink to='/allFeedback'>Feedback View</NavLink></li>
                <li><NavLink to='/'><a onClick={this.Logout.bind(this)}>LogOut</a></NavLink></li>
            </ul>
        )
    }

    render() {
        return (
            <div>
            {
              this.props.create !== '1555347462770'   ?   this.user():this.admin()
            }
          </div>
      );
    }
  }


const mapDispatchToProps =(dispatch)=>{
    return {
        signOutStd: () =>dispatch(signOutStd())
    }
}
const mapStateToProps=(state)=>{
    console.log("User Login______________________>>>>>",state.firebase.auth.uid)
    const status1 =state.firebase.auth.email;
    const createdAt =state.firebase.auth.createdAt;
    return{
        User_id:state.firebase.auth.uid,
        status:status1,
        create: createdAt,
        authUR:    state.firebase.auth,
        authAd:    state.firebase.auth,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersSignedInLinks);