import React from "react";
import axiosClient from "../../../api/axios";
import { RiDeleteBin6Line } from "react-icons/ri";



const OrderedItem = ({item, user, setProducts}) => {

  const handleDelete = async()=>{
    await axiosClient.delete(`/api/cart/${item.id}/delete_item`);
    const response = await axiosClient.get(`/api/cart/${user.id}/products`);
    console.log(response.data);
    // setProducts(response.data.menus);
  }

  return (
    <>
      <div className="flex justify-between items-center font-montserrat text-white mb-4">
        <div className="w-1/5">
          <img src={`http://127.0.0.1:8000/${item.image}`} alt="pizza image" />
        </div>
        <div className="w-2/5">
          <p>{item.name}</p>
        </div>
        <div className="w-1/5">
          <p className="text-lg font-bold">${item.price}</p>
        </div>
        <button onClick={handleDelete} type="button" className="bg-light-gray p-1 border-2 rounded-lg">
          <RiDeleteBin6Line
            className="text-black hover:text-red-700"
            size={25}
          />
        </button>
      </div>
      <hr />
    </>
  );
};

export default OrderedItem;
