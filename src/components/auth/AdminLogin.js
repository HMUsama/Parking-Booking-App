import React, { Component } from 'react'
import {connect} from 'react-redux'
import {adminLognin} from '../../store/actions/authActionAd'
import { Redirect } from 'react-router-dom'

class AdminLognin extends Component {
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
    this.props.adminLognin(this.state)
}

  render() {
    const{authError,authAd} = this.props;
    console.log("___",authAd.uid)
    if(authAd.uid) return <Redirect to='/adminDashboard'/>
    return (
        <div className="container">
            <form onSubmit={this.hundleSubmit} className="gray">
            <h5 className="white-text text-darken-6 center"> Admin Login</h5>
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
                <div className="red-text center">
                    {authError ? <p>{authError}</p> : null}
                </div>
            </div>
            </form>
        </div>
    );
  }
}

const mapStateToProps =(state)=> {
    // console.log("============",state)
    return{
        authAd: state.firebase.auth,
        authError: state.authAd.authError
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        adminLognin: (Admin) => dispatch(adminLognin(Admin))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AdminLognin);