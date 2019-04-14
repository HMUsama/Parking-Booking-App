import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import UsersLogIn from './components/auth/UsersLogin'
import AdminLogin from './components/auth/AdminLogin'
import UserSignUp from './components/auth/UsersSignUp'
import DashboardUR from './screens/URDashboard'
import Home from './screens/Home'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
        <Route exact path="/home"   component={Home}/>
        <Route exact path="/usersLogIn"   component={UsersLogIn}/>
        <Route exact path="/userSignUp"   component={UserSignUp}/>
        <Route exact path="/adminLogIn"   component={AdminLogin}/>
        <Route exact path="/dashboardUR"   component={DashboardUR}/>

        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
