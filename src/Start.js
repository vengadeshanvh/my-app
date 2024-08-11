// Start.js

import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Start.css';

function Start() {
  return (
    <div className="App">
      <p>PLEASE HOVER THE LOGO</p>
      <svg className="arrows">
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
      <div className="trapdoor">
        <div className="top door"></div>
        <div className="bottom door"></div>
        
        <Link to="/Mainpage" > <div to="/Mainpage" className='button style start-button'>"HI,WELCOME</div>  </Link>
    
      </div>
    </div>
  );
}

export default Start;
