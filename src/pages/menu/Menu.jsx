import React from "react";
import FlyingButton from "react-flying-item";
import toast, { Toaster } from "react-hot-toast";
import axiosClient from "../../api/axios";
import { useState, useEffect} from "react";
const notify = () => toast.success("Here is your toast.");

const Menu = () => {
  return (
    <>
      <div>Menu</div>
    </>
  );
};

export default Menu;
