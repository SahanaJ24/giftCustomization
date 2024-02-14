import React, { Component } from 'react'
import '../assets/css/adminsidebar.css'
import MainPage from './MainPage';
import Item from './Item';
import { Link } from 'react-router-dom';
function Adminsidebar({rightContent}) {
    return ( 
        <div className='adminsidebar-all'>
        <div className='adminsidebar-left'>
            <div className='adminsidebar-data'>
                <Link style={{textDecoration:'none' ,color:'white'}} to='/Adminsidebar/Dashboard'><p>Dashboard</p></Link>
                <Link style={{textDecoration:'none',color:'white'}} to='/Adminsidebar/Gift'><p>Products</p></Link>
                {/* <Link style={{textDecoration:'none',color:'white'}} to='/Adminsidebar/themes'><p>Themes</p></Link> */}
                <Link style={{textDecoration:'none',color:'white'}} to='/Adminsidebar/users'><p>All Users</p></Link>
                <Link style={{textDecoration:'none',color:'white'}} to='/Adminsidebar/Sitesettings'><p>Site Settings</p></Link>
                <Link style={{textDecoration:'none',color:'white'}} to='/Adminsidebar/Orders'><p>Orders</p></Link>
                <Link style={{textDecoration:'none' ,color:'white'}} to='/Adminsidebar/Adminprofile'><p>Profile</p></Link>
                <Link style={{textDecoration:'none' ,color:'white'}} to='/'><p>Logout</p></Link>
            </div>
        </div>
        <div className='adminsidebar-right'>
            {rightContent}
            
        </div>
    </div>
     );
}

export default Adminsidebar;