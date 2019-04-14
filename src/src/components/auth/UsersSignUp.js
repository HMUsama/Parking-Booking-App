import React, { Component } from 'react'
import {connect} from 'react-redux'
import {userSignUp} from '../../store/actions/authActionUR'
import { Redirect } from 'react-router-dom'

class UserSignUp extends Component {

        state = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
        }

hundleChange=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
}
hundleSubmit=(e)=>{
    e.preventDefault();
    this.props.userSignUp(this.state)
}

  render() {
      const {authError,authStd,student} = this.props;
    //   console.log("Student***",student)
    //   console.log("A1***",authStd.uid)
    //   if(authStd.uid) return <Redirect to='/dashboardStd'/>
    return (
        <div className="container">
        <form onSubmit={this.hundleSubmit} className="gray">
        <h5 className="white-text text-darken-3 center">Student SignUp</h5>

        <div className="input-field">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" onChange={this.hundleChange} />
        </div>
    <br/>
        <div className="input-field">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" onChange={this.hundleChange} />
        </div>
    <br/>
        <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={this.hundleChange} />
        </div>
    {/* <br/> */}
    <br/>
        <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={this.hundleChange} />
        </div>
    <br/>
        <div className="input-field">
        <button className="btn pink lighten-1 z-depth-1">SignUp</button>
            <div className="red-text center">
                {/* {authError ? <p>{authError}</p> : null} */}
            </div>
        </div>
        </form>
        </div>
    );
  }
}
// const mapStateToProps =(state)=> {
//     return{
//         authStd: state.firebase.auth,
//         authError: state.authStd.authErrorStd_signup,
//         student  : state.authStd.student
//     }
// }
// const mapDispatchToProps =(dispatch)=> {
//     return {
//         userSignUp: (newStudent) => dispatch(userSignUp(newStudent))
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(UserSignUp);
export default UserSignUp;
