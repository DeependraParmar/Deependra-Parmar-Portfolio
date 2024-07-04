import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Suspense } from "react";

import Home from "../pages/Home";
import Skills from "../pages/Skills";
import "../styles/index.scss";

function App() {

  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
