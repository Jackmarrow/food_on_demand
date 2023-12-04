import React, { useContext } from "react";
import axiosClient from "../api/axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../App";
import { FiMenu } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";
import toast from "react-hot-toast";
const notice = () =>
  toast("You should be logged in to view the cart.");

const NavBar = () => {
  //HOOKS
  const navigate = useNavigate();
  const data = useContext(Context);
  
  //LOGOUT FUNCTION
  const onLogout = async () => {
    await axiosClient.post("/logout");
    data.setConnectedUser(null);
    // IS USER LOCATED INSIDE CART
    if(window.location.pathname === '/cart'){
      navigate('/');
    }
  };

  //CHECK IF USER AUTHENTICATED
  const isAuth = () => {
    if (data.connectedUser != null) {
      navigate("/cart");
    } else {
      notice();
    }
  };

  return (
    <nav
      className="z-10 font-montserrat flex py-5 h-16 fixed top-0 text-white w-full backdrop-blur-md"
      style={{ backgroundColor: "rgba(175, 175, 175, 0.2)" }}
    >
      <div className="container flex items-center justify-between">
        <div>
          <Link to={"/"} className="font-montserrat_b fs text-3xl">
            Foo<span className=" text-auxiliary">dy</span>
          </Link>
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
          {data.connectedUser != null && (
            <p className="me-3">Hello, {data.connectedUser.name}</p>
          )}
          {data.connectedUser == null ? (
            <Link to={"/login"}>
              <button
                type="button"
                className="hidden md:block font-bold border-2 px-6 py-1 rounded-full me-4 hover:bg-dark-orange hover:border-transparent hover:text-white"
              >
                Login
              </button>
            </Link>
          ) : (
            <button
              onClick={onLogout}
              type="button"
              className="hidden md:block font-bold border-2 px-6 py-1 rounded-full me-4 hover:bg-dark-orange hover:border-transparent hover:text-white"
            >
              LogOut
            </button>
          )}
          {data.connectedUser == null && (
            <Link to={"/register"}>
              <button
                type="button"
                className="hidden md:block font-bold border-2 px-6 py-1 rounded-full me-6 hover:bg-dark-orange hover:border-transparent hover:text-white"
              >
                Register
              </button>
            </Link>
          )}
          <FiMenu size={25} className="md:hidden cursor-pointer" />
          <LuShoppingCart
            onClick={isAuth}
            size={25}
            className="cursor-pointer hidden md:block"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
