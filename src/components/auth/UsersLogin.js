import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signInUR} from '../../store/actions/authActionUR'
import {adminLognin} from '../../store/actions/authActionAd'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
// import Loader from '../loader/Loader'


class UsersLogIn extends Component {
    // constructor(){
        state = {
            email:'',
            password:'',
            status:this.props._status,
        }    
    // }

hundleChange=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
}
hundleSubmit=(e)=>{
    e.preventDefault();
    console.log("User Login",e)
    if(this.state.email==='admin@g.com' && this.state.password === '123123'){
        this.props.adminLognin(this.state);
    }else{
        this.props.signInUR(this.state);
    }
}

  render() {
    const {authError,auth,student,statusAD,statusUR} = this.props;
    console.log("ADMIN LOGIN STATUS",statusAD)
    console.log("USER LOGIN STATUS",statusUR)
    console.log("ID",auth)
    // let id =auth.uid;
    localStorage.setItem("ADMIN",statusAD)
    localStorage.setItem("USER",statusUR)
    if(auth ) return <Redirect to='/home'/>
    // if(!authStd.uid ) return <Loader/>
 
    
    return (
        <div className="container">
            <form onSubmit={this.hundleSubmit} className="gray">
            <h5 className="white-text text-darken-6 center"> User SignIn</h5>
            <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.hundleChange} />
            </div>
        <br/>
            <div className="input-field">
            <label htmlFor="password">password</label>
            <input type="password" id="password" onChange={this.hundleChange} />
            </div>
        <br/>
            <div className="input-field">
            <button className="btn pink lighten-1 z-depth-2">Login</button>
            <Link to='/userSignUp' className=" lighten-1 ">
            Create a new Account</Link>
                <div className="red-text center">
                    {authError ? <h5>
                    {authError}
                    </h5> : null}
                </div>
            </div>
            </form>
        </div>
    );
  }
}


const mapStateToProps = (state) => {
    console.log("User Login______________________>>>>>",state)
    // console.log("User Login__________STATUS____________>>>>>",state.authUR.status)
    const status1 =state.authAd.status;
    const status2 =state.authUR.status;
    return{
        auth:   state.firebase.auth.uid,
        statusAD:status1,
        statusUR:status2,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signInUR: (creds) =>dispatch(signInUR(creds)),
        adminLognin: (creds) =>dispatch(adminLognin(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersLogIn);
// export default UsersLogIn;