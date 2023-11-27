import React from "react";
import FlyingButton from "react-flying-item";

const DishCart = ({ dish }) => {
  return (
    <div className="w-96 mb-[6rem] md:mb-0 flex flex-col items-center md:flex-row bg-light-orange py-3 px-8 md:px-3 rounded-2xl">
      <div className="basis-1/2">
        <img
          className="relative top-[-1rem] md:top-[-4rem] md:left-[-20%]"
          src={`http://127.0.0.1:8000/${dish.image}`}
          alt="pizza"
          width="500"
        />
      </div>
      <div className="font-montserrat text-center md:text-left basis-1/2">
        <h4 className="font-bold text-xl mb-2">{dish.name}</h4>
        <p className="text-xs mb-3">{dish.desc}</p>
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
