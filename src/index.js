import React from "react";
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"

const roots = document.getElementById("root");
const root = createRoot(roots);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  </Router>
);