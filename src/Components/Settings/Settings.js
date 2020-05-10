import React from 'react';

export default function Settings(){
    return(
<form>
        <fieldset><legend>Settings</legend>
            <ul>
                <li>
                    <label for="hourly_rate">Default Hourly Rate ($)</label>
                    <input type="number" id="hourly_rate" name="hourly_rate"/>
                </li>
                <li>
                    <label for="default_location">Select Default Location</label>
                    <select id="default_location" name="default_location">
                        <option value="">Please select a default location</option>
                        <option value="Ice World">Ice World</option>
                    </select>    
                </li>
                <li>
                    <label for="lesson_duration">Default Lesson Duration (minutes)</label>
                    <input type="number" id="lesson_duration" name="lesson_duration"/>
                </li>
        
            </ul>
        
        
        </fieldset>
        
        
    </form>

    );
}