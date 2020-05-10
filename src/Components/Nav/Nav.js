import React from 'react';
import {Link} from 'react-router-dom';
import '../Nav/Nav.css';

function Nav(){
    return(
        <nav>
            <Link to="/"><h1>Lesson Tracker</h1></Link>
            
            <div id="hamburger" ><img alt="Hamburger Menu Icon" src={require('../../assets/icons8-menu-64.png')} className="hamburger"/></div>
            <ul>
                <li><Link to="/lessons">Lessons</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Log In</Link></li>
                <li><Link to="/add-lesson">Add Lesson</Link></li>
                <li><Link to="/add-location">Add Location</Link></li>
                <li><Link to="/add-student">Add Student</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;