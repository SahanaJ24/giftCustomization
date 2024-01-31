import React from 'react'
import { Navbar } from './Navbar'
import '../assets/css/home.css'
import Main from './Main'


const Home = () => {
  return (
    <div className='home-entire'>
      <div className='home-header'>
           <Navbar/> 
      </div>
      <div className='home-body'>
          {/* <Main/> */}
      </div>
    </div>
  )
}

export default Home