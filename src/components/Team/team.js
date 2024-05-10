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
         // limit: LIMITER,
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
         <Slider data={teams} />
      </>
   );
}

export default Divisions;