import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import UserSignedOutLinks from './Users/UsersSignOutLinks'
import UsersSignedInLinks from './Users/UsersSignInLink'




const Navbar = (props) =>{
    console.log("navbar------------------ID--> :)",props.authUR.uid);
    const uid = props.authUR.uid
    const link1= uid ? <UsersSignedInLinks/>:<UserSignedOutLinks/>
  
    // const link1=  <UserSignedOutLinks/>
    // :<UsersSignedInLinks/>

    return(
        <nav className="nav-wrapper teal darken-2">
       
        {/* <Link to='/' className=" left">Parking Booking App </Link> */}
       {link1}
        </nav>
    )
}

const mapStateToProps=(state)=>{
    console.log("=======================Nav",state)
    return{
        authUR:    state.firebase.auth,
        authAd:    state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);
// export default Navbar;