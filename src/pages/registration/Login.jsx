import React, { useEffect } from "react";
import { useState } from "react";
import axiosClient from "../../api/axios";
import { useNavigate } from "react-router-dom";

const Login = ({ connectedUser, setConnectedUser }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErros] = useState(null);

  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.get("/sanctum/csrf-cookie");
      await axiosClient.post("/login", user);
      const response = await axiosClient.get("/api/connected_user");
      setConnectedUser(response.data.name);
      setUser({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      setErros(error.response.data.errors);
    }
  };


  return (
    <section
      onSubmit={(e) => onLogin(e)}
      className="h-[90vh] flex items-center"
    >
      <div className="container text-center min-w-[23rem] w-2/6">
        <h2 className="font-baskerville_b text-4xl text-main mb-10">Login</h2>
        <form>
          <div className="mb-8">
            <input
              className="w-full border-2 p-2 rounded-xl bg-lightGreen"
              type="email"
              name="email"
              id="email"
              placeholder="email"
              value={user.email}
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            {errors != null && <div className="text-left text-red-500">{errors.email[0]}</div>}
          </div>
          <div className="mb-8">
            <input
              className="w-full border-2 p-2 rounded-xl bg-lightGreen"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={user.password}
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="font-montserrat_b text-xl bg-auxiliary w-full py-2 rounded-2xl"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
