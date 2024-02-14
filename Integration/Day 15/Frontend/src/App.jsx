import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import Login from './pages/Login'
import Register from './pages/Register'
import Usernav from './components/usernav'
import Profile from './pages/Profile'
import Admindash from './pages/Admindash'
import Product from './components/Product'
import Themes from './components/Themes'
import Gift from './components/GIft'
import Adminsidebar from './components/Adminsidebar'
import Theme from './components/Themes'
import Users from './components/Users'
import Dashboard from './components/Dashboard'
import Adminprofile from './components/Adminprofile'
import Sitesettings from './components/sitesettings'
import Orders from './components/Orders'
import Editprofile from './components/Editprofile'
import Userorders from './components/Userorders'
import Userlogoutnav from './components/userlogoutnav'
import AddtoCart from './components/AddtoCart'
import Homepage from './pages/Homepage'
import MainPage from './components/MainPage'
import Allproduct from './components/Allproduct'
import Valentinemenu from './components/Valentinemenu'
import Birthdaymenu from './components/Birthdaymenu'
import Anniversarymenu from './components/Anniversarymenu'
import Customised from './components/Customised'
import Under500 from './components/Under500'


function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <>
    <BrowserRouter>
      {/* {isLoggedIn ?<Usernav/>:<Navbar/>} */}
      
        
      <Routes>
        <Route path='/'element={<><Usernav/> <Homepage/></>}/>
        <Route path='/aboutus'element={<> <Aboutus/></>}/>
        <Route path='/contactus'element={<><Contactus/></>}/>
        <Route path='/Profile'element={<Profile/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/AddtoCart'element={<><Userlogoutnav/><AddtoCart/></>}/>
        <Route path='/MainPage'element={<><Userlogoutnav/><MainPage/></>}/>
        <Route path='/Register'element={<Register/>}/>
        <Route path='/Admindash'element={<Admindash/>}/>
        <Route path='/Product'element={<><Userlogoutnav/><Product/></>}/>
        <Route path='/Gift'element={<Gift/>}/>
        <Route path='/Themes'element={<Themes/>}/>
        <Route path='/Adminsidebar/Gift'element={<Adminsidebar rightContent={<Gift/>}/>}/>
        <Route path='/Adminsidebar/Themes'element={<Adminsidebar rightContent={<Theme/>}/>}/>
        <Route path='/Adminsidebar/users'element={<Adminsidebar rightContent={<Users/>}/>}/>
        <Route path='/Adminsidebar/Dashboard'element={<Adminsidebar rightContent={<Dashboard/>}/>}/>
        <Route path='/Adminsidebar/Adminprofile'element={<Adminsidebar rightContent={<Adminprofile/>}/>}/>
        <Route path='/Adminsidebar/Sitesettings'element={<Adminsidebar rightContent={<Sitesettings/>}/>}/>
        <Route path='/Adminsidebar/Orders'element={<Adminsidebar rightContent={<Orders/>}/>}/>
        <Route path='/Profile/Editprofile'element={<><Userlogoutnav/><Profile rightData={<Editprofile/>}/></>}/>
        <Route path='/Profile/Userorders'element={<><Userlogoutnav/><Profile rightData={<Userorders/>}/></>}/>
        <Route path='/MainPage/Allproduct'element={<><Userlogoutnav/><MainPage rightSide={<Allproduct/>}/></>}/>
        <Route path='/MainPage/Valentinemenu'element={<><Userlogoutnav/><MainPage rightSide={<Valentinemenu/>}/></>}/>
        <Route path='/MainPage/Birthdaymenu'element={<><Userlogoutnav/><MainPage rightSide={<Birthdaymenu/>}/></>}/>
        <Route path='/MainPage/Anniversarymenu'element={<><Userlogoutnav/><MainPage rightSide={<Anniversarymenu/>}/></>}/>
        <Route path='/MainPage/Customised'element={<><Userlogoutnav/><MainPage rightSide={<Customised/>}/></>}/>
        <Route path='/MainPage/Under500'element={<><Userlogoutnav/><MainPage rightSide={<Under500/>}/></>}/>

      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
