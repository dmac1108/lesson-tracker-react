import React from 'react';

function Register(){
    return(
       <form>
           <fieldset>
               <legend>Register</legend>
          <ul>
              <li>
                  <label for="first_name">First Name</label>
                  <input type="text" id="first_name" name="first name"/>
             </li>
             <li>
            <label for="last_name">Last Name</label>
            <input type="text" id="last_name" name="last name"/>
            </li>
            <li>
                <label for="email">Email</label>
                <input type="email" id="email" name="email"/>
            </li>
            <li>
                <label for="password">Password</label>
                <input type="password" id="password" name="password"/>
            </li>
            <li>
                <button type="submit">Register</button>
                <button type="reset">Cancel</button>
            </li>
         </ul>
        </fieldset>
       </form>

    );
}

export default Register;