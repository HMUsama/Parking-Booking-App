import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import UsersLogIn from './components/auth/UsersLogin'
import AdminLogin from './components/auth/AdminLogin'
import UserSignUp from './components/auth/UsersSignUp'
import DashboardUR from './components/dashboard/UserDashboard/DashboardUR'
import Parking from './components/dashboard/UserDashboard/Parking'
import SelectArea1 from './components/dashboard/UserDashboard/SelectArea1'
import SelectArea2 from './components/dashboard/UserDashboard/SelectArea2'
import Home from './screens/Home'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
        <Route exact path="/home"   component={Home}/>
        <Route exact path="/adminLogIn"   component={AdminLogin}/>

        <Route exact path="/usersLogIn"   component={UsersLogIn}/>
        <Route exact path="/userSignUp"   component={UserSignUp}/>

        <Route exact path="/dashboardUR"   component={DashboardUR}/>
        <Route exact path="/parking"   component={Parking}/>
        <Route exact path="/block_Area1"   component={SelectArea1}/>
        <Route exact path="/block_Area2"   component={SelectArea2}/>

        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
