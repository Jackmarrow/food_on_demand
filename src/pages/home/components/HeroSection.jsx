import React from "react";
import HeroImage from "../../../assets/img/pizza-margherita.png";

const HeroSection = () => {
  return (
    <section className="h-[90vh] flex items-center">
      <div className="container">
        <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h1 className="title text-3xl font-baskerville text-main font-bold md:text-6xl mb-3">
              Everything is better with a
              <span className="text-auxiliary"> Pizza</span>
            </h1>
            <p className="font-montserrat font-bold mb-6">
              Pizza is the missing piece that makes every day complete, a simple
              yet delicious joy in life
            </p>
            <div className="text-center md:text-left">
              <button
                type="button"
                className="bg-auxiliary px-8 py-3 rounded-full font-bold text-white mb-4 md:mb-0 md:me-6"
              >
                ORDER NOW
              </button>
              <button
                type="button"
                className="border-2 px-8 py-3 rounded-full font-bold hover:bg-auxiliary hover:text-white"
              >
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="mb-3">
            <img src={HeroImage} alt="pizza image" width="700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
