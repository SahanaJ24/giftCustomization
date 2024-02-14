import React, { Component } from 'react'
import Adminsidebar from '../components/Adminsidebar';
import AdminDisplay from '../components/AdminDisplay';

function Admindash() {
    return ( <div className='admin-entire'>
        <div className='admin-left'><Adminsidebar/></div>
        {/* <div className='admin-right'><AdminDisplay/>Hello</div> */}
        
    </div> );
}

export default Admindash;