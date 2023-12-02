import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axios";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    country: "",
    city: "",
    street_address: "",
    phone: "",
    postal_code: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [errors, setErros] = useState(null);

  const navigate = useNavigate();

  const onRegister = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      await axiosClient.get("/sanctum/csrf-cookie");
      await axiosClient.post("/register", user);
      setUser({
        ...user,
        name: "",
        country: "",
        city: "",
        street_address: "",
        phone: "",
        postal_code: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
      navigate("/login");
    } catch (error) {
      setErros(error.response.data.errors);
    }
  };

  return (
    <section className="h-screen flex items-center">
      <div className="container text-center w-6/6 max-w-[35rem] mt-10">
        <h2 className="font-baskerville_b text-4xl text-main mb-5">
          Register
        </h2>
        <form onSubmit={(e) => onRegister(e)}>
          <div className="mb-8">
            <input
              required
              className="w-full border-2 p-2 rounded-xl bg-lightGreen"
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="mb-8">
            <input
              required
              className="w-full border-2 p-2 rounded-xl bg-lightGreen"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            {errors != null && errors.email != null && <div className="text-left text-red-500">{errors.email[0]}</div>}
          </div>
          <div className="mb-8 flex gap-2">
            <input
              required
              className="w-full border-2 p-2 rounded-xl bg-lightGreen"
              type="text"
              name="country"
              id="country"
              placeholder="Country"
              value={user.country}
              onChange={(e) => setUser({ ...user, country: e.target.value })}
            />
            <input
              required
              className="w-full border-2 p-2 rounded-xl bg-lightGreen"
              type="text"
              name="city"
              id="city"
              placeholder="City"
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
            />
          </div>
          <div className="mb-8">
            <input
              required
              className="w-full border-2 p-2 rounded-xl bg-lightGreen"
              type="text"
              name="street_address"
              id="street_address"
              placeholder="Street Address"
              value={user.street_address}
              onChange={(e) =>
                setUser({ ...user, street_address: e.target.value })
              }
            />
          </div>
          <div className="mb-8 flex gap-2">
          <div className="basis-1/2">
            <input
              required
              className="w-full border-2 p-2 rounded-xl bg-lightGreen"
              type="string"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
            {errors != null && errors.phone != null && <div className="text-left text-red-500">{errors.phone[0]}</div>}
          </div>
          <div className="basis-1/2">
            <input
              required
              className="w-full border-2 p-2 rounded-xl bg-lightGreen"
              type="number"
              name="postal_code"
              id="postal_code"
              placeholder="Postal code"
              value={user.postal_code}
              onChange={(e) =>
                setUser({ ...user, postal_code: e.target.value })
              }
            />
          </div>
          </div>
          <div className="mb-8 flex gap-2">
            <div className="basis-1/2">
              <input
                required
                className="w-full border-2 p-2 rounded-xl bg-lightGreen"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              {errors != null && errors.password != null && <div className="text-left text-red-500">{errors.password[0]}</div>}
            </div>
            <div className="basis-1/2">
              <input
                required
                className="w-full border-2 p-2 rounded-xl bg-lightGreen"
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                placeholder="Password confirmation"
                value={user.password_confirmation}
                onChange={(e) =>
                  setUser({ ...user, password_confirmation: e.target.value })
                }
              />
            </div>
          </div>
          <button
            type="submit"
            className="font-montserrat_b text-xl bg-auxiliary w-full py-2 rounded-2xl"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
