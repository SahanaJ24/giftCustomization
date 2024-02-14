import React, { Component } from 'react'
import '../assets/css/homepage.css'
import cat1 from '../assets/images/cat1.jpg'
import cat2 from '../assets/images/cat2.jpg'
import cat3 from '../assets/images/cat3.jpg'
import cat6 from '../assets/images/cat6.jpg'
import cat7 from '../assets/images/cat7.jpg'
import Item from '../components/Item'
import { Link } from 'react-router-dom'

function Homepage() {
    return ( <div className='homepage-entire'>
        <div className='homepage-banner'>
        </div>
            <br/><br/>
        <div className='homepage-categories'>
            <div className='homepage-cat-card'>
                <div className='homepage-cat'>
            <Link to='/MainPage/Valentinemenu'>
                    <img src={cat1} alt='' height='100%' width='100%'/></Link>
                </div><br/> Valentine's Gifts
            </div>
            
            
            <div className='homepage-cat-card'>
                <div className='homepage-cat'>
                <Link to='/MainPage/Birthdaymenu'>
                    <img src={cat7} alt='' height='100%' width='100%'/></Link>
                </div><br/> Birthday Gifts
            </div>
            <div className='homepage-cat-card'>
                <div className='homepage-cat'>
                <Link to='/MainPage/Customised'>
                    <img src={cat3} alt='' height='100%' width='100%'/></Link>
                </div><br/> Customised Gifts
            </div>
            <div className='homepage-cat-card'>
                <div className='homepage-cat'>
                <Link to='/MainPage/Anniversarymenu'>
                    <img src={cat2} alt='' height='100%' width='100%'/></Link>
                </div><br/> Anniversary
            </div>
            <div className='homepage-cat-card'>
                <div className='homepage-cat'>
                <Link to='/MainPage/Under500'>
                    <img src={cat6} alt='' height='100%' width='100%'/></Link>
                </div><br/>Gifts under 500
            </div>
        </div><br/><br/>
        <div className='homepage-deals'>
            <div className='homepage-deal1'></div>
            <div className='homepage-deal2'></div>
        </div>
        <br/><br/>
        {/* <p className='homepage-p'>Bestsellers</p>
        <p className='homepage-p-viewall'>View All</p>
        <div className='homepage-bestsellers'>
            
        </div>
        <p><hr/></p><br/>
        <p className='homepage-p'>Valentines's Gift</p>
        <p className='homepage-p-viewall'>View All</p>
        <div className='homepage-bestsellers'>
            
        </div> */}
        <div className='homepage-footer'></div>
    </div> );
}

export default Homepage;