import React from "react";
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Solution from "./pages/solution/Solution";
import SolutionDetail from "./pages/solution/SolutionDetail";

const roots = document.getElementById("root");
const root = createRoot(roots);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/solution" element={<Solution />}></Route>
      <Route path="/solution/detail" element={<SolutionDetail />}>
        <Route path=":id" element={<SolutionDetail />}></Route>
      </Route>
    </Routes>
  </Router>
);