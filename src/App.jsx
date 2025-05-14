import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./codebase/home.jsx";
import Login from "./codebase/loginpage";
import PortfolioCV from "./codebase/CV";
import Dashboard from "./codebase/dashboard.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<About isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={<Dashboard setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cv" element={<PortfolioCV />} />
      </Routes>
    </Router>
  );
}

export default App;
