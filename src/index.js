// index.js or App.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'aos/dist/aos.css';
import AOS from 'aos';
AOS.init(); // initialize AOS

ReactDOM.render(
    <React.StrictMode>
        
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);