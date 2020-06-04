import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './Components/App/App';

const DATA = require('./Components/App/STORE.json');


ReactDOM.render(<BrowserRouter><App DATA={DATA} /></BrowserRouter>,document.getElementById('root')
);


