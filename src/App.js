import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'

import AdminLogin from './components/auth/AdminLogin'
import DashboardAD from './components/dashboard/AdminDashboard/DashboardAd'



import UsersLogIn from './components/auth/UsersLogin'
import UserSignUp from './components/auth/UsersSignUp'
import DashboardUR from './components/dashboard/UserDashboard/DashboardUR'
import Parking from './components/dashboard/UserDashboard/Parking'
import SelectArea1 from './components/dashboard/UserDashboard/SelectArea1'
import SelectArea2 from './components/dashboard/UserDashboard/SelectArea2'
import SelectArea3 from './components/dashboard/UserDashboard/SelectArea3'

import Home from './screens/Home'


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: false,
      admin: false,
    }
  }
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar/> 
        <Switch>
        <Route exact path="/"   component={Home}/>
        <Route exact path="/adminLogIn"   component={AdminLogin}/>
        <Route exact path="/adminDashboard"   component={DashboardAD}/>

        <Route exact path="/usersLogIn"   component={UsersLogIn}/>
        <Route exact path="/userSignUp"   component={UserSignUp}/>

        <Route exact path="/home"   component={DashboardUR}/>
        <Route exact path="/parking"   component={Parking}/>
        <Route exact path="/block_Area1"   component={SelectArea1}/>
        <Route exact path="/block_Area2"   component={SelectArea2}/>
        <Route exact path="/block_Area3"   component={SelectArea3}/>

        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
