import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import UserSignedOutLinks from './Users/UsersSignOutLinks'
import UsersSignedInLinks from './Users/UsersSignInLink'



const Navbar = (props) =>{

    // const link1= authStd.uid ? <StdSignedInLinks profile={profile}/>:<StdSignedOutLinks/>
    const link1=  <UsersSignedInLinks/>

    return(
        <nav className="nav-wrapper teal darken-2">
       
        {/* <Link to='/' className=" left">Parking Booking App </Link> */}
        {/* <Link to='/' className="brand-logo left">Campus </Link> */}
       {link1}
        </nav>
    )
}

// const mapStateToProps=(state)=>{
//     const student=student ? true :false
//     const company=company ? true :false
//     return{
//         company  : state.authCp.company,
//         student  : state.authStd.student,

//         authCp:    state.firebase.auth,
//         authStd:    state.firebase.auth,
//         authAd:    state.firebase.auth,
//         profile: state.firebase.profile
//     }
// }

// export default connect(mapStateToProps)(Navbar);
export default Navbar;