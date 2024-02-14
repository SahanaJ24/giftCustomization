import React, { Component } from 'react'
import '../assets/css/profile.css'
import { Link } from 'react-router-dom';
import Editprofile from '../components/Editprofile';
function Profile({rightData}) {
    return ( <div className='profile-entire'>
                <div className='profile-left'>
                    <Link style={{textDecoration:'none'}} to='/Profile/Editprofile'><p>Edit Profile</p></Link>
                    <Link style={{textDecoration:'none'}} to='/Profile/Userorders'><p>Your Orders</p></Link>
                </div>
                <div className='profile-right'>
                    {rightData}
                </div>
            </div> );
}

export default Profile;