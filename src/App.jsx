import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import "./index.css";
import Header from "../components/Header";
import Skills from "../pages/Skills";

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/skills" element={<Skills />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
