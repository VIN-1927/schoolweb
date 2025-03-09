import React, { useState } from "react";
import Spring from "../assets/images/Dinaal in Thailand.png";
import Singapore from '../assets/images/Dinaal in Singapore.png'
import  Dubai from '../assets/images/Dinaal in UAE.png'
import Page from '../components/Page'

const ImageGallery = () => {
  const [artWorks, setArtWorks] = useState(false);

  const myDevelopments = [
    { name: "Phuket", draw: Spring, style: { backgroundColor: "#05dbf2" } },
     { name: "Singapore", draw: Singapore, style: { backgroundColor: "#cbfb07" } },
     { name: "Dubai", draw: Dubai, style: { backgroundColor: "#fdfe03" } },
  ];

  const displyedArtWork = artWorks ? myDevelopments : myDevelopments.slice(0, 2);

  return (
    <Page title="ImageGallery" className="flex flex-col items-center mt-20 mb-16">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4 overflow-hidden">
        {displyedArtWork.map((art, index) => (
          <div
            key={index}
            style={art.style}
            className="relative flex flex-col items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-150 hover:z-10 rounded-lg text-xl font-bold w-40 h-40 md:h-48 md:w-48 lg:w-56 lg:h-56"
          >
            <img
              src={art.draw}
              alt={art.name}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 w-32 h-32 rounded-full"
            />
            {art.name}
          </div>
        ))}
      </div>
      <button
        onClick={() => setArtWorks((prev) => !prev)}
        className="mt-4 px-4 py-2 text-yellow-500 border border-yellow-500 rounded-lg hover:text-red-500 bg-black"
      >
        {artWorks ? "less" : "more"}
      </button>
     
    </Page>
  );
};

export default ImageGallery;
