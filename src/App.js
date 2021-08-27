import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import {BlogNavigation, 
        Header, 
        CourseRegister,
        Login, 
        Join, 
        Home, 
        OnlineProfile, 
        SchoolStaus, 
        Navigation } from 'components/index'
import Basic from './modern-javascript/chap-01-basic/Basic';
import {HomePage} from 'pages/index';

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
