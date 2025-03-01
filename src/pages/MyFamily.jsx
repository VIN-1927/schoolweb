import React from 'react';
import Lion from '../assets/images/lion.jpeg';

const MyFamily = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-2 p-4 md:gap-4 md:p-6 lg:gap-6 lg:p-8 mt-6 mb-6">
      <div className="flex flex-col items-center justify-center bg-blue-300 p-4 rounded-lg text-xl font-bold w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <img src={Lion} alt="Mum" className="w-32 h-32 rounded-full" />
        Mum
      </div>
      <div className="flex flex-col items-center justify-center bg-green-300 p-4 rounded-lg text-xl font-bold w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <img src={Lion} alt="Dad" className="w-32 h-32 rounded-full" />
        Dad
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <img src={Lion} alt="lion1" className="w-32 h-32 rounded-full" />
        Child 1
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <img src={Lion} alt="lion2" className="w-32 h-32 rounded-full" />
        Child 2
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <img src={Lion} alt="lion 3" className="w-32 h-32 rounded-full" />
        Child 3
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <img src={Lion} alt="lion" className="w-32 h-32 rounded-full" />
        Child 4
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <img src={Lion} alt="Grandparent" className="w-32 h-32 rounded-full" />
        Grandparent
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <img src={Lion} alt="lion5" className="w-32 h-32 rounded-full" />
        Aunt
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <img src={Lion} alt="Uncle" className="w-32 h-32 rounded-full" />
        Uncle
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <img src={Lion} alt="Cousin" className="w-32 h-32 rounded-full" />
        Cousin
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <img src={Lion} alt="Sibling" className="w-32 h-32 rounded-full" />
        Sibling
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-lg w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
        <img src={Lion} alt="Friend" className="w-32 h-32 rounded-full" />
        Friend
      </div>
    </div>
  );
};

export default MyFamily;
