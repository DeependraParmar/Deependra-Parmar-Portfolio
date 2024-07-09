import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import "./index.css";

function App() {
  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
