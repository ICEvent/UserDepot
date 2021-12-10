

import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/main.css';
import logo from '../images/logo.png';
import { greet } from '../services/wrapper'

async function doGreet(name) {
    const greeting = await greet(name);
    document.getElementById("greeting").innerText = greeting;
  };

function Greeting() {
    const [input,setInput] = useState('');
  
    return (
        <Fragment>
            <div id="greetingSection">
                
                <label>ICEvent Userdepot</label>
                
            </div>
            <div id="greeting" />
            <Link to="/">Back</Link>
        </Fragment>
      );
  }
  
  export default Greeting
  