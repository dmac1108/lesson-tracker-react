import React from 'react';

export default function Login(){
    return(
        <form>
            <fieldset><legend>Login

            </legend>
            <label for="username">username</label>
            <input type="text" name="username" id="username"/>
            <label for="password">password</label>
            <input type="password" name="password" id="password"/>
            <button type="submit">Login</button>
            <button type="reset">Cancel</button>
        </fieldset>
        </form>
    );

};