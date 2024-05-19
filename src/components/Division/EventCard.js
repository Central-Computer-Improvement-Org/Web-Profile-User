"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import { useMediaQuery } from "react-responsive";
import { useWindowSize } from "@uidotdev/usehooks";

import request from "@/app/utils/request";
import ImageNotFound from "@/components/imageNotFound";
import TeksNotFound from "@/components/teksNotFound";
import { host } from "@/components/host";
import styles from "@/components/Division/divisionComponent.module.css";


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

const LIMITER = 6;

const EventCard = () => {
   const size = useWindowSize();

   const [eventData, setEventData] = useState(null);
   const [flipPosition, setFlipPosition] = useState(null);
   const [colorPattern, setColorPattern] = useState(desktopColorPattern);
   const [autoFlipCount, setAutoFlipCount] = useState(0);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);

   const getEvents = async () => {
      const payload = {
         limit: LIMITER,
         page: page
      };

      await request
         .get("/events", payload)
         .then((response) => {
            if (response.status === 200 || response.status === 201) {
               setTotalPages(Math.ceil(response.data.recordsTotal / LIMITER));
               setEventData(response.data.data);
            } else {
               console.error(JSON.stringify(response.errors));
            }
         })
         .catch((error) => {
            console.error(error);
         });
   }

   useEffect(() => {
      getEvents();
   }, [page]);

   const isDesktop = useMediaQuery({ minWidth: 1051 });
   useEffect(() => {
      setColorPattern(isDesktop ? desktopColorPattern : mobileColorPattern);
   }, [isDesktop]);

   const getCardBackgroundColor = (index) => {
      const patternIndex = index % colorPattern.length;
      return colorPattern[patternIndex];
   };

   function onClickFlipCard(index) {
      setFlipPosition(flipPosition === index ? null : index);
   }

   useEffect(() => {
      if (eventData && eventData.length > 0 && autoFlipCount < 2) {
         // cek dulu apakah data event sudah ada dan jumlah autoFlipCount kurang dari 4
         const autoFlipInterval = setInterval(() => {
            setFlipPosition(0); // setFlipPosition(0) meng get data flip card pertama atau index ke 0
            setTimeout(() => {
               setFlipPosition(null); // setFlipPosition(null) mereset flip card menjadi card depan
            }, 1000);
            setAutoFlipCount((prevCount) => prevCount + 1); // setiap 1 detik autoFlipCount akan bertambah 1
         }, 1500 * 2); // interval auto flip setiap 1.5 detik

         return () => clearInterval(autoFlipInterval); // ketika component di unmount, maka interval auto flip akan di clear
      }
   }, [eventData, autoFlipCount]);

   const handleNext = () => {
      page >= totalPages ? setPage(1) : setPage(page + 1);
   };

   if (!eventData || eventData.length === 0) {
      return (
         <div className="w-full h-auto flex justify-center items-center mt-[50px]">
            <ImageNotFound className="w-[90px] h-[78px] sm:w-[130px] sm:h-[108px] lg:w-[170px] lg:h-[148px] object-cover" />
         </div>
      );
   }

   return (
      <>
         <div className="w-full h-auto flex flex-wrap justify-around items-center mt-[21px]">
            {eventData?.map((event, index) => (
               <div key={event.id} className="mt-[10px] sm:mt-[54px]">
                  <ReactCardFlip
                     key={event.id}
                     isFlipped={flipPosition === index}
                     flipDirection="vertical"
                  >
                     {/* Card bagian depan */}
                     <div
                        className={`relative w-[300px] sm:w-[517px] h-[65px] sm:h-full max-w-[517px] max-h-[198px] rounded-[15px] sm:rounded-[30px] overflow-hidden cursor-pointer ${styles.dvisionEventCardContainer}`}
                        onClick={() => onClickFlipCard(index)}
                     >
                        <div
                           className="absolute inset-0 rounded-[15px] sm:rounded-[30px] flex justify-center items-center"
                           style={{
                              backgroundColor: `${getCardBackgroundColor(index)}80`,
                           }}
                        >
                           {event?.name ? (
                              <p className="font-black text-[14px] sm:text-[40px] [text-shadow:_0px_6px_7px_rgb(0_0_0_/_40%)] text-[#F5FBF9]">
                                 {event.name}
                              </p>
                           ) : (
                              <TeksNotFound className="font-black text-[14px] sm:text-[40px] [text-shadow:_0px_6px_7px_rgb(0_0_0_/_40%)] text-[#F5FBF9]"></TeksNotFound>
                           )}
                        </div>
                        {event?.mediaUri ? (
                           <Image
                              src={`${host}${event.mediaUri}`}
                              alt={[event.title + " Central Computer Improvement"]}
                              width={517}
                              height={198}
                              responsive="true"
                              loading="lazy"
                              className="h-full w-full object-cover"
                           />
                        ) : (
                           <ImageNotFound className="h-full w-full object-cover" />
                        )}
                     </div>
                     {/* Card bagian belakang */}
                     <div
                        className={`w-[300px] sm:w-[517px] h-[65px] sm:h-[198px] max-w-[517px] max-h-[198px] flex flex-col justify-start items-left space-y-0 sm:space-y-1 px-[26px] sm:px-[60px] py-[5px] sm:py-[30px] rounded-[15px] sm:rounded-[30px] cursor-pointer ${styles.dvisionEventCardContainer}`}
                        style={{
                           backgroundColor: getCardBackgroundColor(index),
                        }}
                        onClick={() => onClickFlipCard(index)}
                     >
                        {event?.name ? (
                           <h1 className="font-black text-[14px] sm:text-[24px] text-white">
                              {event.name}
                           </h1>
                        ) : (
                           <TeksNotFound className="font-black text-[14px] sm:text-[24px] text-white"></TeksNotFound>
                        )}
                        {event?.name ? (
                           <p className="text-[8px] sm:text-[16px] font-medium text-white">
                              {event.description}
                           </p>
                        ) : (
                           <TeksNotFound className="text-[8px] sm:text-[16px] font-medium text-white"></TeksNotFound>
                        )}
                     </div>
                  </ReactCardFlip>
               </div>
            ))}
         </div>
         {size.width >= 768 && (
            <button
               className="text-white w-full flex justify-center hover:opacity-75 md:mt-[54px]"
               onClick={handleNext}
            >
               <svg
                  width="100"
                  height="100"
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
            </button >
         )
         }
      </>
   );
};

export default EventCard;
