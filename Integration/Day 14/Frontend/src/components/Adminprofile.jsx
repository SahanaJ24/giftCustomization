import React, { Component, useEffect, useState } from 'react'
import '../assets/css/adminprofile.css'
import axios from 'axios';

function Adminprofile() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      try {
          const token = localStorage.getItem('token');
        if (!token) {
          return;
        }
        const response = await axios.get('http://localhost:8080/user/get/',{
          headers: {
              Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
        setUsers(response.data);
      } 
      catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    return ( <div className='adminprofile-all'>
        <div className='adminprofile-image'>
            <h3>Profile</h3>
            <div className='admin-image'></div><br/>
            <button className='admin-button'>Admin
            </button>
        </div>
        <div className='adminprofile-details'>
            <div className='admin-details'>
            <div style={{paddingLeft:'5%', paddingTop:'5%'}}>
          <h2>Edit Details</h2>
                    <label>First Name</label><br/>
                    <input type='text' value='Sahana'/><br/>
                    <label>Last Name</label><br/>
                    <input type='text' value='J'/><br/>
                    <label>Email Address</label><br/>
                    <input type='text'value='727721euit134@skcet.ac.in'/><br/>
                    <h3>Change Password</h3>
                    <label>Password</label><br/>
                    <input type='password' value='sahana123'/><br/>
                    <label> Confirm Password</label><br/>
                    <input type='password'value='sahana123'/><br/><br/>
                    <button>Save</button>
    </div>
                    
            </div>

        </div>
    </div> );
}

export default Adminprofile;