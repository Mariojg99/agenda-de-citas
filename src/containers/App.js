import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from "../pages/Home";
import Citas from "../pages/Citas";
import Login from "../components/Login";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/citas" element={<Citas />} />
          <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
