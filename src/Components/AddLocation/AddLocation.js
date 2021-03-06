import React from 'react';

export default function AddLocation(){
    return(
        <form>
        <fieldset><legend>New Location</legend>
            <ul>
                <li>
                    <label for="location_name">Location Name</label>
                    <input type="text" id="location_name" name="location_name"/>
                </li>
                
                    
                        <li>
                            <label for="street_line1">Street Line 1</label>
                            <input type="text" id="street_line1" name="street_line1"/>
                        </li>
                        <li>
                            <label for="street_line2">Street Line 2</label>
                            <input type="text" id="street_line2" name="street_line2"/>
                        </li>
                        <li>
                            <label for="city">City</label>
                            <input type="text" id="city" name="city"/>
                        </li>
                        <li>
                            <label for="state">Select a State</label>
                            <select id="state-select" name="state-select">
                                <option value="">Please select a state</option>
                                <option value="Al">Alabama</option>
                                <option value="Al">Alaska</option>
                            </select>    
                        </li>
                        <li>
                            <label for="zipcode">Zipcode</label>
                            <input type="number" id="zipcode" name="zipcode"/>
                        </li>
                    
                
                <li>
                    <button type="submit">Submit</button>
                    <button type="reset">Cancel</button>
                </li>
            </ul>
        
        
        </fieldset>
        
        
    </form>

    );
}

