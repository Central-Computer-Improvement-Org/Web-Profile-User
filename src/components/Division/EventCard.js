import React, { useState, useEffect } from "react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import { useMediaQuery } from "react-responsive";

import request from "@/app/utils/request";
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

const EventCard = () => {
   const [eventData, setEventData] = useState(null);
   const [flipPosition, setFlipPosition] = useState(null);
   const [colorPattern, setColorPattern] = useState(desktopColorPattern);
   const [autoFlipCount, setAutoFlipCount] = useState(0);

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

   function onClickFlipCard(index) {
      setFlipPosition(flipPosition === index ? null : index);
   }

   useEffect(() => {
      if (eventData && eventData.length > 0 && autoFlipCount < 2) { // cek dulu apakah data event sudah ada dan jumlah autoFlipCount kurang dari 4
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
            {eventData.map((event, index) => (
               <div key={event.id} className="mt-[10px] sm:mt-[54px]">
                  <ReactCardFlip
                     key={event.id}
                     isFlipped={flipPosition === index}
                     flipDirection="vertical"
                  >
                     {/* Card bagian depan */}
                     <div
                        className={`relative w-[300px] sm:w-full h-[65px] sm:h-full max-w-[517px] max-h-[198px] rounded-[15px] sm:rounded-[30px] overflow-hidden cursor-pointer ${styles.dvisionEventCardContainer}`}
                        onClick={() => onClickFlipCard(index)}
                     >
                        <div
                           className="absolute inset-0 rounded-[15px] sm:rounded-[30px] flex justify-center items-center"
                           style={{
                              backgroundColor: `${getCardBackgroundColor(index)}80`,
                           }}
                        >
                           <p className="font-black text-[14px] sm:text-[40px] [text-shadow:_0px_6px_7px_rgb(0_0_0_/_40%)] text-[#F5FBF9]">
                              {event.name}
                           </p>
                        </div>
                        <Image
                           className="h-full w-full object-cover"
                           src={event.mediaUri}
                           width={517}
                           height={198}
                           alt={[event.title + " Central Computer Improvement"]}
                           loading="lazy"
                        />
                     </div>
                     {/* Card bagian belakang */}
                     <div
                        className={`w-[300px] sm:w-full h-[65px] sm:h-[198px] max-w-[517px] max-h-[198px] flex flex-col justify-start items-left space-y-0 sm:space-y-1 px-[26px] sm:px-[60px] py-[5px] sm:py-[30px] rounded-[15px] sm:rounded-[30px] cursor-pointer ${styles.dvisionEventCardContainer}`}
                        style={{
                           backgroundColor: getCardBackgroundColor(index),
                        }}
                        onClick={() => onClickFlipCard(index)}
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
            ))}
         </div>
      </>
   );
};

export default EventCard;