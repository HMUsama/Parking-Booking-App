import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signInUR} from '../../store/actions/authActionUR'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class UsersLogIn extends Component {
    // constructor(){
        state = {
            email:'',
            password:''
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
    this.props.signInUR(this.state);
}

  render() {
    const {authError,authStd,student} = this.props;
    // const check = [...authStd.uid,student ]
    console.log("StudentLog***")
    if(authStd.uid ) return <Redirect to='/dashboardUR'/>
 
    
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
    const student= student ? true :false
    return{
        authStd:   state.firebase.auth,
        // authError: state.authStd.authErrorStd_login,
        // student  : state.authStd.student,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signInUR: (creds) =>dispatch(signInUR(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersLogIn);
// export default UsersLogIn;