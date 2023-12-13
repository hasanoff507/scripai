import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Assets/css/style.css";
import Components from "./Components";
import Home from "./Home";

const Modules: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paragraph" element={<Components />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Modules;
