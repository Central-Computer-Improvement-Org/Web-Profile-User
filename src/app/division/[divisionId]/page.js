"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import { useMediaQuery } from "react-responsive";

import request from "@/app/utils/request";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "@/app/division/[divisionId]/division.module.css";

const desktopColorPattern = [
  "#152E51",
  "#11A950",
  "#11A950",
  "#152E51",
  "#152E51",
  "#11A950",
  "#11A950",
];

const mobileColorPattern = ["#152E51", "#11A950"];

export default function DetailDvision({ params }) {
  const { divisionId } = params;
  const [eventData, setEventData] = useState(null);
  const [flipPositon, setFlipPosition] = useState(null);
  const [colorPattern, setColorPattern] = useState(desktopColorPattern);
  const [divisionData, setDivisionData] = useState(null);

  useEffect(() => {
    request
      .get(`/division`)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setDivisionData(response.data.data);
        } else {
          console.error(JSON.stringify(response.errors));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [divisionId]);

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

  const isDesktop = useMediaQuery({ minWidth: 1051 });
  useEffect(() => {
    setColorPattern(isDesktop ? desktopColorPattern : mobileColorPattern);
  }, [isDesktop]);

  const getCardBackgroundColor = (index) => {
    const patternIndex = index % colorPattern.length;
    return colorPattern[patternIndex];
  };

  function handleClick(index) {
    setFlipPosition(flipPositon === index ? null : index);
  }

  if (!divisionData) {
    return <div className="w-full h-screen flex items-center justify-center">Loading...</div>;
  }

  const filterById = divisionData.filter((data) => data.id === divisionId);

  return (
    <>
      <Header />
      <Navbar />
      <span className="block h-full bg-gradientAccent">
        <div className="bg-gradientDefault h-full bg-fixed bg-no-repeat relative">
          <main className="w-full h-auto xl:max-w-[75rem] lg:max-w-[67rem] md:max-w-[51rem] sm:max-w-xl max-w-md px-5 sm:px-0 mx-auto">
            {filterById.map((data) => (
              <section
                key={data.id}
                id="hero"
                className="w-full h-auto flex flex-col space-y-[40px] pt-[100px] md:pt-[200px] mb-[100px]"
              >
                <div className="w-full h-auto flex justify-between items-center">
                  <div className="basis-3/5">
                    <h1 className={`font-black text-[32px] sm:text-[40px] md:text-[70px] lg:text-[90px] text-secondPrimary ${styles.dvisionCardName}`}>
                      {data.name}
                    </h1>
                  </div>
                  <div className="basis-2/5 flex items-center justify-end">
                    <Image
                      className="w-[90px] h-[78px] sm:w-[130px] sm:h-[108px] lg:w-[170px] lg:h-[148px] object-cover"
                      src= {data.logoUri}
                      width={170}
                      height={148}
                      alt="Logo Web Development Central Computer Improvment"
                    />
                  </div>
                </div>
                <p className="font-medium text-[14px] sm:text-[28px] lg:text-[40px] leading-0 md:leading-10 text-bluePallete-800">
                  {data.description}
                </p>
              </section>
            ))}
            <section
              id="team"
              className="w-full h-auto flex flex-col mt-[130px]"
            >
              <div className="w-full h-[44px] sm:h-[108px] flex justify-center items-center rounded-[15px] bg-[#092C4C]">
                <p className="font-bold text-[20px] sm:text-[40px] text-center text-white">
                  Meet Our Team
                </p>
              </div>
              <div className="w-full h-auto flex flex-wrap gap-5 sm:gap-10 justify-start sm:justify-evenly items-center px-5 mt-[45px] sm:mt-[80px]">
                <div className="basis-[534px] w-full h-[152px] sm:h-full max-h-[286px] flex gap-5 px-[16px] py-[15px] sm:px-8 sm:py-10 rounded-[15px] bg-greenPallete-300">
                  <div className="basis-6/12 flex flex-col">
                    <p className="font-medium text-[15px] lg:text-[20px] text-bluePallete-800">
                      Ketua Divisi
                    </p>
                    <h1 className="font-black text-[25px] lg:text-[40px] text-bluePallete-800">
                      Kenzo Tiyu
                    </h1>
                    <Image
                      className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] mt-0 sm:mt-5 object-cover"
                      src="/assets/logo/images/logo-linkedin.png"
                      width={60}
                      height={60}
                      alt="Logo Linkedin Member"
                    ></Image>
                  </div>
                  <div className="basis-6/12 flex items-center justify-end">
                    <Image
                      className="w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] rounded-[15px] object-cover"
                      src="/assets/division/images/profile-division.png"
                      width={200}
                      height={200}
                      alt="Logo Ketua Divisi"
                    ></Image>
                  </div>
                </div>
                <div className="basis-[534px] w-full h-[152px] sm:h-full max-h-[286px] flex gap-5 px-[16px] py-[15px] sm:px-8 sm:py-10 rounded-[15px] bg-greenPallete-300">
                  <div className="basis-6/12 flex flex-col">
                    <p className="font-medium text-[15px] lg:text-[20px] text-bluePallete-800">
                      Ketua Divisi
                    </p>
                    <h1 className="font-black text-[25px] lg:text-[40px] text-bluePallete-800">
                      Kenzo Tiyu
                    </h1>
                    <Image
                      className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] mt-0 sm:mt-5 object-cover"
                      src="/assets/logo/images/logo-linkedin.png"
                      width={60}
                      height={60}
                      alt="Logo Linkedin Member"
                    ></Image>
                  </div>
                  <div className="basis-6/12 flex items-center justify-end">
                    <Image
                      className="w-[120px] h-[120px] lg:w-[200px] lg:h-[200px] rounded-[15px] object-cover"
                      src="/assets/division/images/profile-division.png"
                      width={200}
                      height={200}
                      alt="Logo Ketua Divisi"
                    ></Image>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="event"
              className="w-full h-auto flex flex-col mt-[50px] sm:mt-[80px] md:mt-[130px] pb-[200px]"
            >
              <div className="w-full h-[44px] sm:h-[108px] flex justify-center items-center rounded-[15px] bg-[#092C4C]">
                <p className="font-bold text-[20px] sm:text-[40px] text-center text-white">
                  Our Event
                </p>
              </div>
              <div className="w-full h-auto flex flex-wrap justify-around items-center mt-[21px]">
                {eventData &&
                Array.isArray(eventData) &&
                eventData.length > 0 ? (
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
                          onClick={() => handleClick(index)}
                        >
                          <div
                            className="absolute inset-0 rounded-[15px] sm:rounded-[30px] flex justify-center items-center"
                            style={{
                              backgroundColor: `${getCardBackgroundColor(
                                index
                              )}80`,
                            }}
                          >
                            <p className="font-black text-[14px] sm:text-[40px] text-[#F5FBF9]">
                              {event.name}
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
                          onClick={() => handleClick(index)}
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
            </section>
          </main>
        </div>
      </span>
      <Footer />
    </>
  );
}
