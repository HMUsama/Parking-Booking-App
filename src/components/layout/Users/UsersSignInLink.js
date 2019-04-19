import React, { Component } from 'react';
// import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOutStd} from '../../../store/actions/authActionUR' 



class UsersSignedInLinks extends Component {
    constructor() {
      super();
      this.state = {
      }
    }
    Logout(){
        localStorage.clear();
        this.props.signOutStd();
    }
    user(){
        return(
            <ul className="right">
            <li><NavLink to='/parking'>Book Parking </NavLink></li>
            <li userID={this.props.User_id}><NavLink to='/details'>Details </NavLink></li>
            <li><NavLink to='/feedback'>Feedback </NavLink></li>
            {/* <li><NavLink to='/selectArea'>User... </NavLink></li> */}
            <li><NavLink to='/'><a onClick={this.Logout.bind(this)}>LogOut</a></NavLink></li>
            </ul>
        )  
    }
    admin(){
        return(
            <ul className="right">
                {/* <li><NavLink to='/parking'>User details </NavLink></li> */}
                <li><NavLink to='/'> Users </NavLink></li>
                <li><NavLink to='/'>Booking </NavLink></li>
                <li><NavLink to='/'>Feedback </NavLink></li>
                <li><NavLink to='/'><a onClick={this.Logout.bind(this)}>LogOut</a></NavLink></li>
            </ul>
        )
    }
    render() {
        // console.log("createdAt>>>>>>>>>>>>>>>>>",this.props.create)
        return (
            <div>
            {
              this.props.create !== '1555347462770'   ?   this.user():this.admin()
            }
          </div>
      );
    }
  }

// const UsersSignedInLinks = (props) => {
//     // console.log("StdSignedInLinks",props)
//     return(
//      <ul className="right">
//         <li><NavLink to='/parking'>Book Parking </NavLink></li>
//         <li><NavLink to='/selectArea'>Details </NavLink></li>
//         <li><NavLink to='/'><a onClick={props.signOutStd}>LogOut</a></NavLink></li>
//      </ul>
//     )
// }


const mapDispatchToProps =(dispatch)=>{
    return {
        signOutStd: () =>dispatch(signOutStd())
    }
}
const mapStateToProps=(state)=>{
    console.log("User Login______________________>>>>>",state.firebase.auth.uid)
    // console.log("=======================Nav  ;-)",state)
    // console.log("=======================Nav  ;-)",state.firebase.auth.email);
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