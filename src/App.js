import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import CourseRegister from './components/CourseRegister';
import Login from './components/Login';
import Join from './components/Join';
import OnlineProfile from './components/OnlineProfile';
import SchoolStaus from './components/SchoolStaus';
import Home from './components/Home';
// import Navigation from './components/Navigation';
import Header from './Header';
import Navigations from './Navigations';

const App = () => (
  <>

   <Header/>
   <Navigations/>
   <Switch>
   <Route exact path='/'component = {Home}/>
   <Redirect from='/home'to = {'/'}/>
   <Route exact path='/course-register'component = {CourseRegister}/>
   <Route exact path ='/Login' component = {Login}/>
   <Route exact path='/online-profile'component = {OnlineProfile}/>
   <Route exact path='/scool-staus'component = {SchoolStaus}/>
   <Route exact path='/join'component = {Join}/>
   <Route exact path='/header'component = {Header}/>
   </Switch>
   </>
  );
export default App; 
