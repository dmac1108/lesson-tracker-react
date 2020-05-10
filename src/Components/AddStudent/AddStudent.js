import React from 'react';

export default function AddStudent(){
    return(
        <form>
        <fieldset><legend>New Student</legend>
            <ul>
                <li>
                    <label for="first_name">Student First Name</label>
                    <input type="text" id="first_name" name="first name"/>
                </li>
                <li>
                    <label for="last_name">Student Last Name</label>
                    <input type="text" id="last_name" name="last name"/>
                </li>
                <li>
                    <label for="parent_first_name">Parent First Name</label>
                    <input type="text" id="parent_first_name" name="parent first name"/>
                </li>
                <li>
                    <label for="parent_last_name">Parent Last Name</label>
                    <input type="text" id="parent_last_name" name="parent last name"/>
                </li>
                <li>
                    <label for="Phone">Phone</label>
                    <input type="tel" id="phone" name="phone"/>
                </li>
                <li>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email"/>
                </li>
                
                <li>
                    <button type="submit">Submit</button>
                </li>
            </ul>
        
        
        </fieldset>
        
        
    </form>
    );

}