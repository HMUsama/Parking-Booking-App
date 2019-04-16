import React, { Component } from 'react';
// import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOutStd} from '../../../store/actions/authActionUR' 



class UsersSignedInLinks extends Component {
    constructor() {
      super();
      this.state = {
        Admin:'',
        User:'',
      }
    }
   async componentWillMount(){
    const value=await localStorage.getItem("ADMIN")
    const value1=await localStorage.getItem("USER")
        console.log("componentWillMount Admin",value)
        console.log('componentWillMount User',value1)
        this.setState({
            Admin:value,
            Users:value1,
        })
     
      }
    user(){
        return(
            <ul className="right">
            <li><NavLink to='/parking'>Book Parking </NavLink></li>
            <li><NavLink to='/selectArea'>Details </NavLink></li>
            {/* <li><NavLink to='/selectArea'>User... </NavLink></li> */}
            <li><NavLink to='/'><a onClick={this.Logout.bind(this)}>LogOut</a></NavLink></li>
            </ul>
        )  
    }
    admin(){
        return(
            <ul className="right">
                {/* <li><NavLink to='/parking'>User details </NavLink></li> */}
                <li><NavLink to='/selectArea'>Admin </NavLink></li>
                <li><NavLink to='/'><a onClick={this.Logout.bind(this)}>LogOut</a></NavLink></li>
            </ul>
        )
    }
    Logout(){
        localStorage.clear();
        this.props.signOutStd();
    }
    render() {
        // const value= localStorage.getItem("statusAD")
        // const value1= localStorage.getItem("statusUR")
        console.log('USERS SIGN IN LINK',this.state.User)
        // console.log('USERS SIGN IN LINK',this.state.User)
        console.log('ADMIN SIGN IN LINK',this.state.Admin)
        return (
            <div>
            {
              !this.state.User   ?   this.user():this.admin()
            }
            {
            //   this.state.Admin == true ?   this.admin() :null
            // this.state.Admin == 'Admin' ?   this.user() :  this.admin()
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
    console.log("=======================Nav  ;-)",state)
    console.log("=======================Nav  ;-)",state.firebase.auth.email);
    const status1 =state.firebase.auth.email;
    return{
        status:status1,
        authUR:    state.firebase.auth,
        authAd:    state.firebase.auth,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UsersSignedInLinks);