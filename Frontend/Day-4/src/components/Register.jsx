import React, { Component } from 'react'
import '../assets/css/register.css'
function Register() {
    return (<div className='register-all'>
        <div className='register-container'>
        <h1 >Register</h1>
        <div className='register-fields'>
                <input type='text' placeholder='Your name'/><br/><br/>
                <input type='number' placeholder='Phone Number'/><br/><br/>
                <input type='date' placeholder='Date Of Birth'/><br/><br/>
                <input type='email' placeholder='Email Address'/><br/><br/>
                <input type='password' placeholder='Password'/><br/><br/>
                <button>REGISTER</button>
            </div>
        </div>
    </div> );
}

export default Register;