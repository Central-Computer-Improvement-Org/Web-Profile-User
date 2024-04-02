"use client";
import Image from "next/image";
import DivisionCard from "./Card/card";
import React, { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Divisions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const size = useWindowSize();
  const divisionCards = [
    {
      imageUrl: ".././images/person.png",
      title: "Anggota",
      name: "Amar Zidan",
      socialLinks: "https://google.com",
    },
    {
      imageUrl: ".././images/person.png",
      title: "Ketua",
      name: "Abid Zakly",
      socialLinks: "https://twitter.com",
    },
    {
      imageUrl: ".././images/person.png",
      title: "Anggota",
      name: "Sarah Sirih",
      socialLinks: "https://github.com",
    },
    {
      imageUrl: ".././images/person.png",
      title: "Anggota",
      name: "David Gadget",
      socialLinks: "https://linkedin.com",
    },
    {
      imageUrl: ".././images/person.png",
      title: "Anggota",
      name: "Bapa Bipi",
      socialLinks: "https://google.com",
    },
    {
      imageUrl: ".././images/person.png",
      title: "Ketua",
      name: "Mama Mimi",
      socialLinks: "https://twitter.com",
    },
    {
      imageUrl: ".././images/person.png",
      title: "Anggota",
      name: "Ami Lekso",
      socialLinks: "https://github.com/abidzakly",
    },
    {
      imageUrl: ".././images/person.png",
      title: "Anggota",
      name: "Afi Ahmad",
      socialLinks: "https://linkedin.com",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 4;
      return nextIndex >= divisionCards.length ? 0 : nextIndex;
    });
  };

  const displayedCards = divisionCards.slice(currentIndex, currentIndex + 4);
  const totalDots = Math.ceil(divisionCards.length / displayedCards.length);

  return (
    <>
      <div className="w-full h-[47px] lg:h-[92px] xl:h-[108px] bg-[#092C4C] rounded-[15px] mx-auto md-[14px] md:mb-[30px]">
        <h3
          className={`text-[20px] lg:text-h3 font-bold text-white flex justify-center items-center h-full`}
        >
          Meet Our Team
        </h3>
      </div>
      <div className="grid grid-cols-2 mb-32">
        {displayedCards.map((card, index) => (
          <DivisionCard key={index} {...card} />
        ))}
      </div>
      {size.width >= 768 ? (
        <button
          className="text-white w-full flex justify-center hover:opacity-75"
          onClick={handleNext}
        >
          <Image
            src={`.././svgs/arrow-next.svg`}
            className={`${
              size.width >= 768 ? "w-[65px] h-[65px]" : ""
            }w-[] md:w-[65px] md:h-[65px]`}
            width={0}
            height={0}
          />
        </button>
      ) : (
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalDots }, (_, i) => (
            <button
              key={i}
              className={`w-4 h-4 mx-[2px] rounded-full bg-gray-400 hover:bg-gray-500 ${
                i === currentIndex / displayedCards.length ? "bg-blue-500" : ""
              }`}
              onClick={() => setCurrentIndex(i * displayedCards.length)}
            />
          ))}
        </div>
      )}
    </>
  );
}
