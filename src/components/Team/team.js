"use client";
import TeamCard from "@/components/Team/Card/card";
import React, { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Divisions() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const size = useWindowSize();
  const divisionCards = [
    {
      imageUrl: "assets/about/images/person.png",
      title: "Anggota",
      name: "Amar Zidan",
      socialLinks: "https://linkedin.com/",
    },
    {
      imageUrl: "assets/about/images/person.png",
      title: "Ketua",
      name: "Abid Zakly",
      socialLinks: "https://github.com/abidzakly",
    },
    {
      imageUrl: "assets/about/images/person.png",
      title: "Anggota",
      name: "R. Hakim",
      socialLinks: "https://linkedin.com/",
    },
    {
      imageUrl: "assets/about/images/person.png",
      title: "Anggota",
      name: "Fadia Rizqa",
      socialLinks: "https://linkedin.com",
    },
    {
      imageUrl: "assets/about/images/person.png",
      title: "Anggota",
      name: "Muh Darrel",
      socialLinks: "https://linkedin.com/",
    },
    {
      imageUrl: "assets/about/images/person.png",
      title: "Ketua",
      name: "Rizky Zaki",
      socialLinks: "https://linkedin.com/",
    },
    {
      imageUrl: "assets/about/images/person.png",
      title: "Anggota",
      name: "Arya F.",
      socialLinks: "https://linkedin.com/",
    },
    {
      imageUrl: "assets/about/images/person.png",
      title: "Anggota",
      name: "Faiz E.",
      socialLinks: "https://linkedin.com/",
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
      <div className="grid grid-cols-2 mb-[32px]">
        {displayedCards.map((card, index) => (
          <TeamCard key={index} {...card} />
        ))}
      </div>
      {size.width >= 768 ? (
        <button
          className="text-white w-full flex justify-center hover:opacity-75"
          onClick={handleNext}
        >
          <svg
            width="65"
            height="65"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#265290" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.9661 33.2082C49.9729 32.2014 51.6053 32.2014 52.6121 33.2082L68.0808 48.677C69.0876 49.6838 69.0876 51.3162 68.0808 52.323L52.6121 67.7918C51.6053 68.7986 49.9729 68.7986 48.9661 67.7918C47.9592 66.7849 47.9592 65.1526 48.9661 64.1457L60.0337 53.0781H32.7422C31.3183 53.0781 30.1641 51.9239 30.1641 50.5C30.1641 49.0761 31.3183 47.9219 32.7422 47.9219H60.0337L48.9661 36.8543C47.9592 35.8474 47.9592 34.2151 48.9661 33.2082Z"
              fill="white"
            />
          </svg>
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
