import { useState } from "react";
import { Button } from "./components/ui/button";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NavBar from "./layouts/NavBar";
import "./App.css";

const App = ()=>{
  return (
    <>
      <NavBar />
      {/* /==================== ROUTES===================== */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* /================================================== */}
    </>
  );

}

export default App;
