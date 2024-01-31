
import './App.css'
import Signin from './components/Signin'
import { Navbar } from './components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/home'
import Register from './components/Register'
import Main from './components/Main'
import Anniversary from './components/Annviversary'
function App() {

  return (
    <Router>
      <Home/>
      <Routes>
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/Main" element={<Main/>}/>
        <Route path="/Anniversary" element={<Anniversary/>}/>
      </Routes>
    </Router>
  )
}

export default App
