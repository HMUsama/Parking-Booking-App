// import React from 'react'
import React, { Component } from 'react';
import {Link,NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import UserSignedOutLinks from './Users/UsersSignOutLinks'
import UsersSignedInLinks from './Users/UsersSignInLink'


class Navbar extends Component {
    constructor(props) {
      super(props); 
      this.state = {
          status1:'',
          status:true,
      };
    }
  componentWillMount(){
    const store= localStorage.getItem("status")
    this.setState({
        status1:store
    })
  }
 
    render() {
    // console.log("navbar------------------ID--> :)",this.props.authUR.uid);
    // console.log("===============Navigation",this.state.status1)
    const uid =this. props.auth.uid
    const link1= uid ? <UsersSignedInLinks/>:<UserSignedOutLinks/>
      return (
        <div>
        { 
          <nav className="nav-wrapper teal darken-2">
                 {link1}
          </nav>
        }
        </div>
      );
    }
  }



// const Navbar = (props) =>{
//     console.log("navbar------------------ID--> :)",props.authUR.uid);
//     const uid = props.authUR.uid
//     const status = props._status
//     const link1= uid ? <UsersSignedInLinks/>:<UserSignedOutLinks/>

//     return(
//         <div>
//         {
//             status ==='User' ?
//            <Navbar1/>:
//            <nav className="nav-wrapper teal darken-2">
//                 {link1}
//             </nav>
//         }
//         </div>
        
//     )
// }

const mapStateToProps=(state)=>{
    // console.log("=======================Nav  ;-)",state)
    // console.log("=======================Nav...",state.authUR.status);
    // const status1 = state.authUR.status; 
    return{
        // _status:   status1,
        auth:    state.firebase.auth,
        // authAd:    state.firebase.auth,
        // profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);
// export default Navbar;