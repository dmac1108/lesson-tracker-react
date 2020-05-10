import React from 'react';

export default function AddLesson(){
    return(
        <form>
        <fieldset><legend>New Lesson</legend>
            <ul>
                <li>
                    <label for="student">Select a Student</label>
                    <select id="student-select" name="student-select">
                        <option value="">Please select a student</option>
                        <option value="Alla">Alla</option>
                    </select>    
                </li>
                <li>
                    <label for="location">Select a Location</label>
                    <select id="location-select" name="location-select">
                        <option value="">Please select a location</option>
                        <option value="Ice World">Ice World</option>
                    </select>    
                </li>
                <li>
                    <label for="start-datetime">Start</label>
                    <input type="datetime" id="start-datetime" name="start-datetime"/>
                </li>
                <li>
                    <label for="end-datetime">End</label>
                    <input type="datetime" id="end-datetime" name="end-datetime"/>
                </li>
                <li>
                    <label for="rate">Rate</label>
                    <input type="number" id="rate" name="rate"/>
                </li>
                <li>
                    <label for="Amount">Amount</label>
                    <input type="number" id="amount" name="amount"/>
                </li>
                <li>
                    <label for="recurring">Recurring</label>
                    <input type="checkbox" id="recurring" name="recurring"/>
                </li>
                <li>
                    <label for="recurrence-type">Select a Recurrence Type</label>
                    <select id="recurrence-type" name="recurrence-type">
                        <option value="">Please select a recurrence type.</option>
                        <option value="Daily">Daily</option>
                        <option value="Weekly">Weekly</option>
                        <option value="Two-weeks">Two Weeks</option>
                        <option value="Monthly">Monthly</option>
                    </select>    
                </li>
                <li>
                    <label for="recurrence-end-datetime">Recurrence End</label>
                    <input type="datetime" id="recurrence-end-datetime" name="recurrence-end-datetime"/>
                </li>
                <li>
                    <label for="Paid">Is Paid</label>
                    <input type="checkbox" id="paid" name="ispaid"/>
                    
                </li>
                <li class="form-buttons">
                    <button type="submit">Submit</button>
                    <button type="reset">Cancel</button>
                </li>
            </ul>
            
        
        </fieldset>
        
        
    </form>




    );

}
