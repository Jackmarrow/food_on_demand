import React from "react";
import axiosClient from "../api/axios";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";

const NavBar = ({ connectedUser, setConnectedUser }) => {
  const onLogout = async () => {
    await axiosClient.post("/logout");
    await axiosClient.get("/api/connected_user");
    setConnectedUser(null);
  };

  return (
    <nav className="z-10 font-montserrat flex py-5 h-16 fixed top-0 text-white w-full backdrop-blur-md" style={{backgroundColor: 'rgba(175, 175, 175, 0.2)'}}>
      <div className="container flex items-center justify-between">
        <div>
          <Link to={"/"} className="font-montserrat_b fs text-3xl">Foo<span className=" text-auxiliary">dy</span></Link>
        </div>
        <ul className="hidden md:flex">
          <li className="mx-6">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="mx-6">
            <Link to={"/menu"}>Menu</Link>
          </li>
          <li className="mx-6">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="mx-6">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className="flex items-center">
          {connectedUser != null && 
            <p className="me-3">Hello, {connectedUser}</p>
          }
          {connectedUser == null ? 
            <button
              type="button"
              className="hidden md:block font-bold border-2 px-6 py-1 rounded-full me-4 hover:bg-auxiliary hover:text-white"
            >
              <Link to={"/login"}>Login</Link>
            </button>
           : 
            <button
              onClick={onLogout}
              type="button"
              className="hidden md:block font-bold border-2 px-6 py-1 rounded-full me-4 hover:bg-auxiliary hover:text-white"
            >
              LogOut
            </button>
          }
          {connectedUser == null && 
            <button
              type="button"
              className="hidden md:block font-bold border-2 px-6 py-1 rounded-full me-6 hover:bg-auxiliary hover:text-white"
            >
              <Link to={"/register"}>Register</Link>
            </button>
          }
          <FiMenu size={25} className="md:hidden cursor-pointer" />
          <LuShoppingCart
            size={25}
            className="cursor-pointer hidden md:block"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
