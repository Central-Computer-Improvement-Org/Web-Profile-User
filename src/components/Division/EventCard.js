"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import { useMediaQuery } from "react-responsive";

import request from "@/app/utils/request";
import styles from "@/app/division/divison.module.css";

// definisi background color untuk event responsive desktop
const desktopColorPattern = [
  "#152E51",
  "#11A950",
  "#11A950",
  "#152E51",
  "#152E51",
  "#11A950",
  "#11A950",
];

// definisi background color untuk event responsive mobile
const mobileColorPattern = ["#152E51", "#11A950"];

const EventCard = () => {
  const [eventData, setEventData] = useState(null);
  const [flipPositon, setFlipPosition] = useState(null);
  const [colorPattern, setColorPattern] = useState(desktopColorPattern);

  useEffect(() => {
    request
      .get("/event")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setEventData(response.data.data);
        } else {
          console.error(JSON.stringify(response.errors));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // handle responsive color background untuk event
  const isDesktop = useMediaQuery({ minWidth: 1051 });
  useEffect(() => {
    setColorPattern(isDesktop ? desktopColorPattern : mobileColorPattern);
  }, [isDesktop]);

  // handle mendapatkan background color untuk event sesuai index
  const getCardBackgroundColor = (index) => {
    const patternIndex = index % colorPattern.length;
    return colorPattern[patternIndex];
  };

  // handle pemutaran / flip card
  function onclickFlipCard(index) {
    setFlipPosition(flipPositon === index ? null : index);
  }

  // handle pemotongan nama project maksimal 12 char
  const cutNameProject = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
    return `${str.substring(0, maxLength)}..`;
  };

  // handle data event ketika data belum ter get
  if (!eventData) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <p className="font-bold text-20px">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-[44px] sm:h-[108px] flex justify-center items-center rounded-[15px] bg-[#092C4C]">
        <p className="font-bold text-[20px] sm:text-[40px] text-center text-white">
          Our Event
        </p>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-around items-center mt-[21px]">
        {eventData && Array.isArray(eventData) && eventData.length > 0 ? (
          eventData.map((event, index) => (
            <div key={event.id} className="mt-[10px] sm:mt-[54px]">
              <ReactCardFlip
                key={event.id}
                isFlipped={flipPositon === index}
                flipDirection="vertical"
              >
                {/* Card Depan*/}
                <div
                  className={`relative w-[300px] sm:w-full h-[65px] sm:h-full max-w-[517px] max-h-[198px] rounded-[15px] sm:rounded-[30px] overflow-hidden cursor-pointer ${styles.dvisionCardContainer}`}
                  onClick={() => onclickFlipCard(index)}
                >
                  <div
                    className="absolute inset-0 rounded-[15px] sm:rounded-[30px] flex justify-center items-center"
                    style={{
                      backgroundColor: `${getCardBackgroundColor(index)}80`,
                    }}
                  >
                    <p className="font-black text-[14px] sm:text-[40px] text-[#F5FBF9]">
                      {cutNameProject(event.name, 15)}
                    </p>
                  </div>
                  <Image
                    className="h-full w-full object-cover"
                    src={event.mediaUri}
                    width={517}
                    height={198}
                    alt={[event.title, " Central Computer Improvement"]}
                    loading="lazy"
                  />
                </div>
                {/* Card Belakang */}
                <div
                  className="w-[300px] sm:w-full h-[65px] sm:h-[198px] max-w-[517px] max-h-[198px] flex flex-col justify-start items-left space-y-0 sm:space-y-1 px-[26px] sm:px-[60px] py-[5px] sm:py-[30px] rounded-[15px] sm:rounded-[30px] cursor-pointer"
                  style={{
                    backgroundColor: getCardBackgroundColor(index),
                  }}
                  onClick={() => onclickFlipCard(index)}
                >
                  <h1 className="font-black text-[14px] sm:text-[24px] text-white">
                    {event.name}
                  </h1>
                  <p className="text-[8px] sm:text-[16px] font-medium text-white">
                    {event.description}
                  </p>
                </div>
              </ReactCardFlip>
            </div>
          ))
        ) : (
          <p className="text-center">No event data available.</p>
        )}
      </div>
    </>
  );
};

export default EventCard;
