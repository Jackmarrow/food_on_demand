import React from "react";
import FlyingButton from "react-flying-item";

const DishCart = ({ dish }) => {
  return (
    <div className="w-2/2 md:w-2/3 lg:w-96 mb-[6rem] flex flex-col items-center bg-light-orange py-3 px-8 rounded-2xl md:flex-row md:mb-0 md:px-3">
      <div className="basis-1/2">
        <img
          className="top-[-1rem] lg:relative lg:top-[-4rem] lg:left-[-20%]"
          src={`http://127.0.0.1:8000/${dish.image}`}
          alt="pizza"
          width="500"
        />
      </div>
      <div className="font-montserrat text-center md:text-left basis-1/2">
        <h4 className="font-bold text-xl mb-2">{dish.name}</h4>
        <p className="text-xs mb-3">{dish.desc.substring(0, 90)}...</p>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-xl font-bold mb-3 md:mb-0">${dish.price}</p>
          <FlyingButton targetTop={'0%'} targetLeft={'90%'} src={`http://127.0.0.1:8000/${dish.image}`}>
              <div className="bg-auxiliary text-white p-2 rounded-lg min-w-max">Add to cart</div>
          </FlyingButton>
        </div>
      </div>
    </div>
  );
};

export default DishCart;
