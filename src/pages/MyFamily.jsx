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
    { name: "Mum", image: MumImg, style: { backgroundColor: "#05dbf2" } },
    { name: "Dad", image: DadImg, style: { backgroundColor: "#cbfb07" } },
    {
      name: "Brother",
      image: BrotherImg,
      style: { backgroundColor: "#fdfe03" },
    },
    { name: "Sister", image: SisterImg, style: { backgroundColor: "#aaf0d1" } },
    {
      name: "GrandMother",
      image: GrandMotherImg,
      style: { backgroundColor: "#e326ab" },
    },
    {
      name: "GrandFather",
      image: GrandFatherImg,
      style: { backgroundColor: "#fbf8fb" },
    },
    {
      name: "GrandMum",
      image: GrandMumImg,
      style: { backgroundColor: "#00fecc" },
    },
    {
      name: "GrandDad",
      image: GrandDadImg,
      style: { backgroundColor: "#00adf9" },
    },

    { name: "Aunty", image: AuntyImg, style: { backgroundColor: "#f7e90e" } },
    { name: "Uncle", image: UncleImg, style: { backgroundColor: "#00adf9" } },
    {
      name: "Cousin",
      image: CousungImg,
      style: { backgroundColor: "#8400ff" },
    },
    { name: "Cat", image: Pet1Img, style: { backgroundColor: "#ec0d88" } },
    { name: "Dog", image: Pet2Img, style: { backgroundColor: "#fda7a7" } },
  ];
  const displayedMembers = showAllPhotos
    ? familyMembers
    : familyMembers.slice(0, 3);
  return (
    <div className="flex flex-col items-center mt-20 mb-16">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-4">
        {displayedMembers.map((member, index) => (
          <div
            key={index}
            style={member.style}
            className={`flex flex-col items-center justify-center ${member.backgroundColor}rounded-lg text-xl font-bold w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full"
            />

            {member.name}
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
