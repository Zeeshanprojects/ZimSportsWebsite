import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Zimlive from "./Pages/Zimlive";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Teams from "./Pages/Teams";
import Matches from "./Pages/Matches";
import Players from "./Pages/Players";
import Coaches from "./Pages/Coaches";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zimlive" element={<Zimlive />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/players" element={<Players />} />
          <Route path="/coaches" element={<Coaches/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
