"use client";
import TeamCard from "@/components/Team/Card/card";
import React, { useState, useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import request from "@/app/utils/request";
import CardCreditProfile from "../credit/cardCreditProfile";
import { host } from "../host";
import CrewSlider from "../credit/crewSlider";
import Slider from "../about/slider";

const LIMITER = 6;

const Divisions = () => {
   const [currentIndex, setCurrentIndex] = useState(0);
   const size = useWindowSize();
   const [isLeft, setIsLeft] = useState(false);
   const [teams, setTeams] = useState([]);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);

   const getTeams = async () => {
      const payload = {
         limit: LIMITER,
         page: page
      }
      await request
         .get('/projects?id=PJT-20240508164541859997&contributorsOnly=true', payload).then((v) => {
            if (v.data.code === 200 || v.data.code === 201) {
               setTotalPages(Math.ceil(v.data.recordsTotal / LIMITER));
               setTeams(v.data.data);
            }
         })
   }

   useEffect(() => {
      getTeams();
   }, [page])

   const updateIsLeft = () => {
      setIsLeft(!isLeft)
   }

   const handleNext = () => {
      page >= totalPages ? setPage(1) : setPage(page + 1);
      // setCurrentIndex((prevIndex) => {
      //    const nextIndex = prevIndex + 2;
      //    return nextIndex >= teams.length - 2 ? 0 : nextIndex;
      // });
   };

   const teamsFilltered = teams.slice(
      isLeft ? currentIndex : currentIndex + 2, isLeft ?
      currentIndex + 2 : currentIndex + 4
   );

   // const totalDots = Math.ceil(teams.length / teams.length - 3);

   return (
      <>
         <div className="px-[45px] md:px-0 w-full">
            <div className="h-[44px] md:h-[108px] bg-[#092C4C] rounded-[15px] mx-auto md-[14px] md:mb-[30px]">
               <h3
                  className={`text-[20px] md:text-h3 font-bold text-white flex justify-center items-center h-full`}
               >
                  Meet Our Team
               </h3>
            </div>
         </div>
         {/* <div className="flex xl:gap-[40px] md:gap-[30px] gap-[16px] md:flex-row flex-col justify-center items-center mt-[31px] w-full"> */}
         <div className="">
            <Slider />
            {/* <CrewSlider crewDatas={teams} color={'bg-greenPallete-300'} /> */}
            {/* {teams?.map((card, index) => (
               // <TeamCard isLeft={updateIsLeft} isRight={false} key={index} {...card} />
            ))} */}
            {/* <div className="grid md:px-0 grid-rows-2">
               {teamsFilltered?.map((card, index) => (
                  <TeamCard isLeft={updateIsLeft} isRight={true} key={index} {...card} />
               ))}
            </div> */}
         </div>
         {size.width >= 768 ? (
            ''
            // <button
            //    className="text-white w-full flex justify-center hover:opacity-75 md:mt-[54px]"
            // // onClick={handleNext}
            // >
            //    <svg
            //       width="100"
            //       height="100"
            //       viewBox="0 0 100 100"
            //       fill="none"
            //       xmlns="http://www.w3.org/2000/svg"
            //    >
            //       <circle cx="50" cy="50" r="50" fill="#265290" />
            //       <path
            //          fillRule="evenodd"
            //          clipRule="evenodd"
            //          d="M48.9661 33.2082C49.9729 32.2014 51.6053 32.2014 52.6121 33.2082L68.0808 48.677C69.0876 49.6838 69.0876 51.3162 68.0808 52.323L52.6121 67.7918C51.6053 68.7986 49.9729 68.7986 48.9661 67.7918C47.9592 66.7849 47.9592 65.1526 48.9661 64.1457L60.0337 53.0781H32.7422C31.3183 53.0781 30.1641 51.9239 30.1641 50.5C30.1641 49.0761 31.3183 47.9219 32.7422 47.9219H60.0337L48.9661 36.8543C47.9592 35.8474 47.9592 34.2151 48.9661 33.2082Z"
            //          fill="white"
            //       />
            //    </svg>
            // </button >
         ) : (
            // <div className="flex justify-center mt-4">
            //    {Array.from({ length: totalPages }, (_, i) => {
            //       return <button
            //          key={i}
            //          className={`w-[10px] h-[10px] mx-[2px] rounded-full bg-gray-400 hover:bg-gray-500 ${i + 1 == page ? "!bg-bluePallete-700" : ""
            //             }`}
            //       // onClick={() => setPage(i + 1)}
            //       />
            //    })}
            // </div>
            ''
         )
         }
      </>
   );
}

export default Divisions;