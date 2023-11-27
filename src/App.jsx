import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NavBar from "./layouts/NavBar";
import Login from "./pages/registration/Login";
import Register from "./pages/registration/Register";
// import "./App.css";

const App = ()=>{

  const [connectedUser, setConnectedUser] = useState(null);

  return (
    <>
      <NavBar connectedUser={connectedUser} setConnectedUser={setConnectedUser}/>
      {/* /==================== ROUTES===================== */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login connectedUser={connectedUser} setConnectedUser={setConnectedUser}/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* /================================================== */}
    </>
  );

}

export default App
