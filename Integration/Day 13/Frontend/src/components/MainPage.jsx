import React, { Component, useEffect, useState } from 'react'
import '../assets/css/MainPage.css'
import Item from './Item';
// import Usersidebar from './Usersidebar';
import { Link } from 'react-router-dom';
// import '../assets/css/usersidebar.css'

import HomePage from '../pages/Homepage';
import axios from 'axios';

function MainPage({rightSide}) {
    // const [data,setData]=useState([])
    // async function fetchData() {
    //     try {
    //       const token = localStorage.getItem('token');
    //       if (!token) {
    //         return;
    //       }
      
    //       const response = await axios.get('http://localhost:8080/gift/get', {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       });
    //       setData(response.data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   }

    //   useEffect(() => {
    //     fetchData();
    //   }, []);

    return ( 
    <div className='main-entire'>
      {/* <div className='usersidebar-all'> */}
        <div className='usersidebar-left'>
            <div className='usersidebar-data'>
                <Link style={{textDecoration:'none', color:'white'}}to='/MainPage/Allproduct'><p>All</p></Link>
                <Link style={{textDecoration:'none', color:'white'}}to='/MainPage/Valentinemenu'><p>Valentine</p></Link>
                <Link style={{textDecoration:'none', color:'white'}}to='/MainPage/Birthdaymenu'><p>Birthday</p></Link>
                <Link style={{textDecoration:'none', color:'white'}}to='/MainPage/Anniversarymenu'><p>Anniversary</p></Link>
                <Link style={{textDecoration:'none', color:'white'}}to='/MainPage/Customised'><p>Customized Gift</p></Link>
                <Link style={{textDecoration:'none', color:'white'}}to='/MainPage/Under500'><p>Gift Under 500</p></Link>
               
            </div>
        </div>
    {/* </div> */}
        
        <div className='main-body'>
         {/* <Link style={{textDecoration:'none'}} to='/Product'><Item/></Link>    */}
            {/* {data.map(
                (x)=>
                    <Item gift={x}/>
                
            )} */}
            <div className='main-hright'>{rightSide}</div>
            
        </div>
    </div> );
}

export default MainPage;