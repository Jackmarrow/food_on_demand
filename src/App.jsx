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
import Basket from "./pages/basket/Basket";
import axiosClient from "./api/axios";
import { Toaster } from "react-hot-toast";
import { createContext } from "react";
// import "./App.css";

//CONTEXT PROVIDER
export const Context = createContext();

const App = () => {
  const [connectedUser, setConnectedUser] = useState(null);

  //ADD TO BASKET
  const addToBasket = async (dish) => {
    const item = {
      user_id: connectedUser.id,
      menu_id: dish.id,
    };

    await axiosClient.post(`/api/cart/add_item`, item);
  };

  return (
    <Context.Provider value={{ connectedUser, setConnectedUser, addToBasket }}>
      <NavBar />
      {/* TOASTER MESSAGE */}
      <Toaster />
      {/* END OFTOASTER MESSAGE */}
      {/* /==================== ROUTES===================== */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Basket />} />
      </Routes>
      {/* /================================================== */}
    </Context.Provider>
  );
};

export default App;
