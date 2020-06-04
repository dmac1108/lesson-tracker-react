import React from 'react';
import '../App/App.css'
import {Route, Switch} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Nav from '../Nav/Nav';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Lesson from '../Lesson/Lesson';
import LessonsList from '../LessonsList/LessonList';
import AddLesson from '../AddLesson/AddLesson';
import AddLocation from '../AddLocation/AddLocation';
import AddStudent from '../AddStudent/AddStudent';
import Settings from '../Settings/Settings';


function App(props) {
  return (
    <div>
      <Nav/>
      <Switch>
        
        <Route exact path='/' component={LandingPage}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
  <Route path='/lessons' render={(props) => <LessonsList Lessons={props}/>}/>
        <Route path='/add-lesson' component={AddLesson}/>
        <Route path='/add-location' component={AddLocation}/>
        <Route path='/add-student' component={AddStudent}/>
        <Route path='/settings' component={Settings}/>
      </Switch>
    
      </div>
  );
}

export default App;
