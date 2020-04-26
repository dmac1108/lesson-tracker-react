import React from 'react';

function Nav(){
    return(
        <nav>
            <a href="./landing-page.html"><h1>Lesson Tracker</h1></a>
            <div id="hamburger" ><img src="./assets/icons8-menu-64.png" class="hamburger"/></div>
            <ul>
                <li><a href="./lessons-listview.html">Lessons</a></li>
                <li><a href="./register.html">Register</a></li>
                <li><a href="./login.html">Log In</a></li>
            </ul>
        </nav>
    );
}

export default Nav;