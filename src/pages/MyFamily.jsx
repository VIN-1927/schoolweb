import React, { useState } from "react";
import MumImg from "../assets/images/lion.jpeg";
import DadImg from "../assets/images/lion.jpeg";
import BrotherImg from "../assets/images/lion.jpeg";
import SisterImg from "../assets/images/lion.jpeg";
import GrandMotherImg from "../assets/images/lion.jpeg";
import GrandFatherImg from "../assets/images/lion.jpeg";
import GrandMumImg from "../assets/images/lion.jpeg";
import GrandDadImg from "../assets/images/lion.jpeg";
import AuntyImg from "../assets/images/lion.jpeg";
import UncleImg from "../assets/images/lion.jpeg";
import CousungImg from "../assets/images/lion.jpeg";
import Pet1Img from "../assets/images/lion.jpeg";
import Pet2Img from "../assets/images/lion.jpeg";

const MyFamily = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const familyMembers = [
    { name: "Mum", image: MumImg, bg: "#05dbf2" },
    { name: "Dad", image: DadImg, bg: "#cbfb07" },
    { name: "Brother", image: BrotherImg, bg: "#fdfe03" },
    { name: "Sister", image: SisterImg, bg: "#aaf0d1" },
    { name: "GrandMother", image: GrandMotherImg, bg: "#e326ab" },
    { name: "GrandFather", image: GrandFatherImg, bg: "#fbf8fb" },
    { name: "GrandMum", image: GrandMumImg, bg: "#00fecc" },
    { name: "GrandDad", image: GrandDadImg, bg: "#00adf9" },
    { name: "Aunty", image: AuntyImg, bg: "#f7e90e" },
    { name: "Uncle", image: UncleImg, bg: "#00adf9" },
    { name: "Cousin", image: CousungImg, bg: "#8400ff" },
    { name: "Cat", image: Pet1Img, bg: "#ec0d88" },
    { name: "Dog", image: Pet2Img, bg: "#fda7a7" },
  ];

  const displayedMembers = showAllPhotos ? familyMembers : familyMembers.slice(0, 3);

  return (
    <div className="flex flex-col items-center min-h-[70vh] max-h-[80vh] overflow-y-auto mt-20 mb-16">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {displayedMembers.map((member, index) => (
          <div key={index} className="flip-card" style={{ width: "140px", height: "140px" }}>
            <div className="flip-card-inner">
              <div
                className="flip-card-front flex flex-col items-center justify-center rounded-lg text-xl font-bold w-full h-full"
                style={{ backgroundColor: member.bg }}
              >
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full" />
              </div>
              <div className="flip-card-back flex flex-col items-center justify-center text-white">
                <p className="text-lg font-bold">{member.name}</p>
            
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowAllPhotos((prev) => !prev)}
        className="mt-4 px-4 py-2 text-yellow-500 border border-yellow-500 rounded-lg hover:text-red-500"
      >
        {showAllPhotos ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default MyFamily;
