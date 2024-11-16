"use client";
import React, { useState, useEffect } from "react";

import request from "@/app/utils/request";
import Slider from "../about/slider";


const LIMITER = 6;
const Divisions = () => {
   const [teams, setTeams] = useState([]);
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      const getTeams = async () => {
         const payload = {
            page: page
         };
   
         try {
            const response = await request.get('/users?roleNameExact=Ketua', { params: payload });
            if (response?.data?.code === 200) {
               const filteredTeams = response.data.data.filter(user => user.role.name.toLowerCase() === "ketua");
               setTotalPages(Math.ceil(response.data.recordsTotal / LIMITER));
               setTeams(filteredTeams);
            }
         } catch (error) {
            setTeams([]);
         }
      };
   
      getTeams();
   }, [page]);   

   return (
      <>
         <div className="w-full">
            <div className="h-[44px] md:h-[108px] bg-[#092C4C] rounded-[15px] mx-auto md-[14px] md:mb-[30px]">
               <h3 className={`text-[20px] md:text-h3 font-bold text-white flex justify-center items-center h-full`}>
                  Meet Our Team
               </h3>
            </div>
         </div>
         <Slider data={teams} />
      </>
   );
}

export default Divisions;