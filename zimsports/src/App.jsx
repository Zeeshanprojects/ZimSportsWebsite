import { useState } from 'react'
import  {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import ScrollToTopButton from './Components/ScrollToTopButton'

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      <ScrollToTopButton/>
    </Router>
    </>
  )
}

export default App
