import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import CourseRegister from './components/CourseRegister';
import Login from './components/Login';
import Join from './components/Join';
import OnlineProfile from './components/OnlineProfile';
import SchoolStaus from './components/SchoolStaus';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Header from './Header';
import BlogNavigation from './BlogNavigation';
import Basic from './modern-javascript/chap-01-basic/Basic';
import HomePage from './pages/HomePage';

const App = () => (
  <>
   <Header/>
   <BlogNavigation/>
   
   {/* <Navigation/> */}
   <Switch>
   <Route exact path='/'component = {Home}/>
   <Redirect from='/home'to = {'/'}/>
   <Route exact path='/course-register'component = {CourseRegister}/>
   <Route exact path ='/Login' component = {Login}/>
   <Route exact path='/online-profile'component = {OnlineProfile}/>
   <Route exact path='/school-staus'component = {SchoolStaus}/>
   <Route exact path='/join'component = {Join}/>
   <Route exact path='/header'component = {Header}/>
   <Route exact path='/basic'component = {Basic}/>
   </Switch>
   <HomePage/>
   </>
  );
export default App; 
