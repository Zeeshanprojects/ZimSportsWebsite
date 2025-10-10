import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Zimlive from "./Pages/Zimlive";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import Teams from "./Pages/Teams";
import Matches from "./Pages/Matches";
import Players from "./Pages/Players";
import Coaches from "./Pages/Coaches";
import Preloader from "./Components/Preloader"; // ✅ Import your preloader
import Playersdashboard from "./Pages/Playersdashboard";
import Coachesdashboard from "./Pages/Coachesdashboard";
import Familydashboard from "./Pages/Familydashboard";
import Sports from "./Pages/Sports";
import Families from "./Pages/Families";
import Tournaments from "./Pages/Tournaments";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for 3 seconds (you can adjust time)
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader /> // ✅ Show preloader while loading
      ) : (
        <Router>
  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/zimlive" element={<Zimlive />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/team" element={<Teams />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/players" element={<Players />} />
            <Route path="/sports" element={<Sports/>}/>
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/families" element={<Families/>}/>
            <Route path="/tournaments" element={<Tournaments/>}/>
            <Route path="/playerdashboard" element={<Playersdashboard/>}/>
            <Route path="/coachesdashboard" element={<Coachesdashboard/>}/>
            <Route path="/familydashboard" element={<Familydashboard/>}/>

          
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
