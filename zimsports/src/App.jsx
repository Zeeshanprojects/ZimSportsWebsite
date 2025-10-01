import { useState } from 'react'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import ScrollToTopButton from './Components/ScrollToTopButton'
import Zimlive from './Pages/Zimlive'
import Login from './Pages/Login'

function App() {

  return (
    <>
    <Router>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/zimlive' element={<Zimlive/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
   
      <ScrollToTopButton/>
    </Router>
    </>
  )
}

export default App
