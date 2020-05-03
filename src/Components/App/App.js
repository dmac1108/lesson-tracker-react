import React from 'react';
import '../App/App.css'
import {Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Nav from '../Nav/Nav';
import Login from '../Login/Login';
import Register from '../Register/Register';


function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        
        <Route exact path='/' component={LandingPage}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Switch>
    
      </div>
  );
}

export default App;
