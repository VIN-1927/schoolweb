import React, { useState } from "react";
import Spring from "../assets/images/Andrew.png";

const ImageGallery = () => {
  const [artWorks, setArtWorks] = useState(false);

  const myDevelopments = [
    { name: "threeY", draw: Spring, style: { backgroundColor: "#05dbf2" } },
    { name: "fourY", draw: Spring, style: { backgroundColor: "#cbfb07" } },
    { name: "fiveY", draw: Spring, style: { backgroundColor: "#fdfe03" } },
  ];

  const displyedArtWork = artWorks
    ? myDevelopments
    : myDevelopments.slice(0, 2);

  return (
    <div className="flex flex-col items-center mt-20 mb-16">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {displyedArtWork.map((art, index) => (
          <div
            key={index}
            style={art.style}
            className={`flex flex-col items-center justify-center ${art.backgroundColor} rounded-lg text-xl font-bold w-40 h-40 md:h-48 md:w-48 lg:w-56 lg:h-56`}
          >
            <img
              src={art.draw}
              alt={art.name}
              className='="w-32 h-32 rounded-full'
            />

            {art.name}
          </div>
        ))}


      </div>
      <button onClick={() => setArtWorks((prev) => !prev)}
      className="='mt-4 px-4 py-2 text-yellow-500 border border-yellow-500 rounded-lg hover:text-red-500 bg-black">

{artWorks ? "less" : "more"}
      </button>
    </div>
  );
};

export default ImageGallery;
