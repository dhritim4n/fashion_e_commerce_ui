import React from "react";
import { NavLink } from "react-router-dom";
import hero from "../../assets/hero-image.jpg";


const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[500px] rounded-lg p-5 md:h-[500px] w-[1500px] overflow-hidden m-2">
      {/* Background Image */}
      <img
        src={hero}  
        alt="Winter Collection"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 lg:px-32 transition duration-300 ease-in-out">
        <h1 className="text-white text-4xl md:text-6xl font-semibold mb-4">
          Your Cozy Era
        </h1>

        <p className="text-gray-200 text-lg md:text-2xl max-w-xl leading-relaxed">
          Get peak comfy <br /> with new winter essentials.
        </p>

        <NavLink
          to="/shop"
          className="w-[200px] text-center mt-8 inline-block bg-white text-black font-semibold px-8 py-3 rounded-sm  hover:bg-black hover:text-white transition"
        >
          SHOP NOW
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
