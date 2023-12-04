import React, { useContext } from "react";
import HeroImage from "../../../assets/img/herosection-image.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const HeroSection = () => {


  return (
    <section
      className="h-full bg-cover bg-fixed"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="w-full bg-gradient-to-r from-black via-black">
        <div className="container text-white py-16 text-center md:text-left">
          <h1 className="text-3xl leading-loose font-baskerville mb-7 mt-10 md:text-5xl md:leading-[5rem]">
            Everything is <br /> Better With a
            <span className="text-dark-orange"> Pizza</span>
          </h1>
          <p className="text-sm font-montserrat leading-loose mb-5 md:w-1/2 md:text-l">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima vel
            culpa magni numquam ullam? Distinctio laboriosam quibusdam
            dignissimos praesentium numquam iure nihil eius tempora dolorem
            blanditiis minus vero sed debitis, rem illo id? Doloribus, sequi
            consectetur? Fugit, aperiam aliquam provident cupiditate fuga, id
            explicabo tenetur sint recusandae tempora nesciunt ducimus! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Porro animi quo
            quibusdam aliquid harum placeat laudantium unde tempore veritatis
            fuga quia asperiores deserunt libero, in odio quod non? Illum
            obcaecati voluptates officiis culpa labore non corrupti iste?
          </p>
          <div className="font-montserrat_b flex flex-col items-center md:flex-row md:items-center md:gap-10 md:max-w-max">
            <Link to={"/menu"}>
              <button
                type="button"
                className="group transition-all ease-in-out duration-300 flex items-center border-2 text-l rounded-full px-4 py-2 mb-4 hover:bg-dark-orange hover:border-transparent md:mb-0"
              >
                ORDER NOW
                <FaArrowRight className="hidden ms-3 group-hover:block" />
              </button>
            </Link>
            <button
              type="button"
              className="text-xl hover:underline underline-offset-8"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
    // <section className="h-[90vh] flex items-center">
    //   <div className="container">
    //     <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
    //       <div className="text-center md:text-left">
    //         <h1 className="text-3xl font-baskerville text-main font-bold md:text-6xl mb-3">
    //           Everything is better with a
    //           <span className="text-auxiliary"> Pizza</span>
    //         </h1>
    //         <p className="font-montserrat font-bold mb-6">
    //           Pizza is the missing piece that makes every day complete, a simple
    //           yet delicious joy in life
    //         </p>
    //         <div className="text-center md:text-left">
    //           <button
    //             type="button"
    //             className="bg-auxiliary px-8 py-3 rounded-full font-bold text-white mb-4 md:mb-0 md:me-6"
    //           >
    //             ORDER NOW
    //           </button>
    //           <button
    //             type="button"
    //             className="border-2 px-8 py-3 rounded-full font-bold hover:bg-auxiliary hover:text-white"
    //           >
    //             LEARN MORE
    //           </button>
    //         </div>
    //       </div>
    //       <div className="mb-3">
    //         <img src={HeroImage} alt="pizza image" width="700" />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default HeroSection;
