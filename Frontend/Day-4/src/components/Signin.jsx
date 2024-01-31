import React, { Component } from 'react'
import '../assets/css/signin.css'
import { Link } from 'react-router-dom';

function Signin(){
    return (<div className='signin-all'>
        <div className='signin-container'>
        <h1 >Sign In</h1>
        <div className='signin-fields'>
                <input type='email' placeholder='Email Address'/><br/><br/>
                <input type='password' placeholder='Password'/><br/><br/>
                <button>LOGIN</button>
                <Link to="/Register">
                <p>New User? Register</p>
            </Link>
            </div>
        </div>
    </div> );
}
export default Signin
