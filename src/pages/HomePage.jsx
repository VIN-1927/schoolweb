import React from "react";
import Dinaal from "../assets/images/Dimage.png";  
import "../App.css"; 

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#ffea6f]">
      {/* Text above the white box */}
      <div className="text-2xl font-bold text-gray-800 mb-4">
        "Harmonizing Knowledge and Creativity for a Brighter Future"
      </div>

      {/* Main White Box */}
      <div className="flex w-3/4 h-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
        
        {/* Left Side - Text */}
        <div className="w-1/2 flex flex-col justify-center items-center p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            WELCOME TO THE OFFICIAL WEBSITE OF DINAAL DE SILVA
          </h1>
          <p className="text-lg text-gray-600">Also known as Prince Amour.</p>
        </div>

        {/* Right Side - Image Flip Card */}
        <div className="flip-card w-1/2 flex justify-center items-center">
          <div className="flip-card-inner">
            {/* Front Side */}
            <div className="flip-card-front">
              <img
                src={Dinaal}
                alt="Dinaal"
                className="w-[400px] h-[400px] object-cover rounded-lg"
              />
            </div>

            {/* Back Side */}
            <div className="flip-card-back">
              <h3 className="text-2xl font-bold text-gray-800 bg-[#abf7b1]">Author of the picture book <span>"Springtime Andrew"</span></h3>
           
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;




