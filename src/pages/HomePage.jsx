import React from 'react';
import Lion from '../assets/images/lion.jpeg';

const HomePage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#ffea6f]">
      <div className="flex w-3/4 h-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Text */}
        <div className="w-1/2 flex flex-col justify-center items-center p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to the PORTFOLIO</h1>
          <p className="text-lg text-gray-600">Discover my skills.</p>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 flex justify-center items-center">
          <img src={Lion} alt="Lion" className="w-[400px] h-[400px] object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

