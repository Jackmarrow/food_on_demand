import React, { useContext, useEffect, useState } from "react";
import axiosClient from "../../api/axios";
import OrderedItem from "./components/OrderedItem";
import { Context } from "../../App";





const Basket = () => {
  
  const data = useContext(Context);

  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const response = await axiosClient.get(`/api/cart/${data.connectedUser.id}/products`);
      setProducts(response.data.menus);
    }

    fetchData();
  },[]);

  return (
    <section className="min-h-screen py-16">
      <div className="container">
        <h2 className="font-baskerville_b text-5xl text-center my-10 text-dark-orange">
          Cart
        </h2>
        <div className="flex flex-col md:flex-row max-w-[60rem] mx-auto gap-10">
          <div className="p-10 max-h-[28rem] overflow-y-auto basis-1/2 relative md:p-0">
            { products.length != 0 ? products.map((item, index) => <OrderedItem key={index} user={data.connectedUser} item={item} setProducts={setProducts}/>) : <p className="text-white font-montserrat text-2xl absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] w-max">Your cart is empty</p>}
          </div>
          <div className="bg-light-gray p-5 rounded-xl basis-1/2">
            <h3 className="text-xl font-bold mb-5">Checkout</h3>
            <form className="font-montserrat">
              <div className="mb-4">
                <label htmlFor="phone">Phone</label>
                <input className="mt-2 block w-full py-1 px-2 rounded-lg bg-transparent  border border-gray-700" type="text" name="phone" id="phone" />
              </div>
              <div className="mb-4">
                <label htmlFor="street_address">Street Address</label>
                <input className="mt-2 block w-full py-1 px-2 rounded-lg bg-transparent  border border-gray-700" type="text" name="street_address" id="street_address" />
              </div>
              <div className="flex mb-4 gap-x-5">
                <div className="basis-1/2">
                  <label htmlFor="postal_code">Postal code</label>
                  <input className="mt-2 block w-full py-1 px-2 rounded-lg bg-transparent border border-gray-700 " type="number" name="postal_code" id="postal_code" />
                </div>
                <div className="basis-1/2">
                  <label htmlFor="city">City</label>
                  <input className="mt-2 block w-full py-1 px-2 rounded-lg bg-transparent border border-gray-700" type="text" name="city" id="city" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="country">Country</label>
                <input className="mt-2 block w-full py-1 px-2 rounded-lg bg-transparent  border border-gray-700" type="text" name="country" id="country" />
              </div>
              <button type="submit" className="text-center font-bold text-white bg-dark-orange w-full py-2 rounded-xl">
                Pay
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
