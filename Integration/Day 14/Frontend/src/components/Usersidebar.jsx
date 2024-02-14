import React, { Component } from 'react'
import '../assets/css/usersidebar.css'
import { Link } from 'react-router-dom';

function Usersidebar() {
    return ( <div className='usersidebar-all'>
        <div className='usersidebar-left'>
            <div className='usersidebar-data'>
                <p>Anniversary</p>
                <p>Birthday</p>
                <p>Corperate</p>
                <p>Customized Gift</p>
                <p>Chocolates</p>
                <p>Flowers</p>
                <p>Ocassion</p>
            </div>
        </div>
        {/* <div className='usersidebar-right'>
            <MainPage/>
        </div> */}
    </div> );
}

export default Usersidebar;