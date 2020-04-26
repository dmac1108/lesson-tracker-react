import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Nav from '../Nav/Nav';


function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        
        <Route exact path='/' component={LandingPage}/>
      </Switch>
    
      </div>
  );
}

export default App;
