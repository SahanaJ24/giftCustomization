import React, { useState } from 'react'
import '../assets/css/Navbar.css'
import logo from '../assets/images/logo.png'
import cart from '../assets/images/cart1.png'
import wishlist from '../assets/images/wishlist.png'
import { Link } from 'react-router-dom'
import profile from '../assets/images/profile1.png'
export const Navbar = () => {
    const[menu,setMenu]=useState("anniversary");
    return (<>
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo}alt=''width='80%'/>
            <p>HAPPY ENDING</p>
        </div>
        <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none'}} to='/Main'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("aboutus")}}><Link style={{textDecoration:'none'}} to='/Anniversary'>About</Link>{menu==="aboutus"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("birthday")}}><Link style={{textDecoration:'none'}} to='/Birthday'>Birthday</Link>{menu==="birthday"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("corperate")}}><Link style={{textDecoration:'none'}} to='/Corperate'>Corperate</Link>{menu==="corperate"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("flowers")}}><Link style={{textDecoration:'none'}} to='/Flowers'>Flowers</Link>{menu==="flowers"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("personalised")}}><Link style={{textDecoration:'none'}} to='/Personalised'>Personalised</Link>{menu==="personalised"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to="/Signin">
            <button>Login</button>
            </Link>
            <img src={wishlist}alt=''width='10%'/>
            <img src={profile}alt=''width='14%'/>
            <img src={cart}alt=''width='7%'/>
            <div className='nav-cart-count'>
                0
            </div>
        </div>
    </div>
    </>
  )
}
