import React from "react";
import Dinaal from "../assets/images/Dimage.png"; // Ensure the correct image path

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#ffea6f]">
      {/* Text above the white box */}
      <div className="text-2xl font-bold text-gray-800 mb-4">"Harmonizing Knowledge and Creativity for a Brighter Future"</div>

      {/* Main White Box */}
      <div className="flex w-3/4 h-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Left Side - Text */}
        <div className="w-1/2 flex flex-col justify-center items-center p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            WELCOME TO THE OFFICIAL WEBSITE OF DINAAL DE SILVA
          </h1>
          <p className="text-lg text-gray-600">Also known as Prince Amour.</p>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={Dinaal}
            alt="Dinaal"
            className="w-[400px] h-[400px] object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;



