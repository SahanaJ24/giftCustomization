import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../assets/css/usernav.css'
import logo from '../assets/images/logo.png'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function Userlogoutnav(props) {
    return ( <div className='usernav-header'>
        <div className='usernav-left'>
        <img src={logo}alt=''height='100%'/>
        <h2 style={{paddingLeft:'4%', fontWeight:'1000'}}><b>GIFT TOWN</b></h2>
    </div>
    <div className='usernav-right'>
        <Link to='/MainPage/Allproduct' style={{textDecoration:'none'}}><p>Home</p></Link>
        <Link to='/aboutus' style={{textDecoration:'none'}}><p>About Us</p></Link>
        <Link to='/contactus' style={{textDecoration:'none'}}><p>Contact Us</p></Link>
        {/* <p className='usernav-icon'><FaRegHeart /></p> */}
        <Link style={{textDecoration:'none'}} to='/AddtoCart'><p className='usernav-icon'><AiOutlineShoppingCart /></p></Link>
        <Link to='/profile/Editprofile' ><p className='usernav-icon'><FaUserCircle /></p></Link>
        
        <Link to='/' style={{textDecoration:'none'}}><button>Logout</button></Link>
        
        {/* <Link to='/Login'><button>Login</button></Link> */}
        
    
        

    </div>
    </div> );
}

export default Userlogoutnav;