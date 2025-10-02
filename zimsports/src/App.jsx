import { useState } from 'react'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import ScrollToTopButton from './Components/ScrollToTopButton'
import Zimlive from './Pages/Zimlive'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ParentDashboard from './Pages/ParentDashboard'
import PlayerDashboard from './Pages/PlayerDashboard'
import CoachesDashboard from './Pages/CoachesDashboard'

function App() {

  return (
    <>
    <Router>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/zimlive' element={<Zimlive/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/parentdashboard' element={<ParentDashboard/>}/>
        <Route path='/playerdashboard' element={<PlayerDashboard/>}/>
        <Route path='/Coachesdashboard' element={<CoachesDashboard/>}/>
      </Routes>
   
  
    </Router>
    </>
  )
}

export default App
