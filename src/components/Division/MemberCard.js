"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import request from "@/app/utils/request";

const MemberCard = ({ divisionId }) => {
   const [memberData, setMemberData] = useState(null);
   const [ketuaData, setKetuaData] = useState([]);
   const [wakilData, setWakilData] = useState([]);

   useEffect(() => {
      request
         .get("/users")
         .then((response) => {
            if (response.status === 200 || response.status === 201) {
               const ketuaData = response.data.data.filter(
                  (item) =>
                     (item.roleId.name === "ketua" || item.roleId.name === "Ketua") &&
                     item.divisionId.id === divisionId
               );
               const wakilData = response.data.data.filter(
                  (item) =>
                     (item.roleId.name === "wakil" || item.roleId.name === "Wakil") &&
                     item.divisionId.id === divisionId
               );
               setMemberData(response.data.data);
               setKetuaData(ketuaData);
               setWakilData(wakilData);
            } else {
               console.error(JSON.stringify(response.errors));
            }
         })
         .catch((error) => {
            console.error(error);
         });
   }, [divisionId]);

   if (!memberData) {
      return (
         <div className="w-full h-screen flex items-center justify-center">
            <p className="font-bold text-center text-[30px] text-bluePallete-800">
               Loading...
            </p>
         </div>
      );
   }

   return (
      <>
         {ketuaData.length > 0 ? (
            <div className="basis-[534px] w-full h-[152px] sm:h-full max-h-[286px] flex gap-5 px-[16px] py-[15px] sm:px-8 sm:py-10 rounded-[15px] bg-greenPallete-300">
               <div className="basis-6/12 flex flex-col">
                  <p className="font-medium text-[15px] lg:text-[20px] text-bluePallete-800">
                     Ketua Divisi
                  </p>
                  <h1 className="max-w-[250px] h-[100px] max-h-[100px] font-black text-[25px] lg:text-[40px] mt-1 md:mt-5 leading-[30px] md:leading-[40px] text-bluePallete-800">
                     {ketuaData[0].name}
                  </h1>
                  <a
                     href={ketuaData[0].linkedinUri}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Image
                        className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] mt-0 sm:mt-5 object-cover"
                        src="assets/uploads/member/logo/logo-linkedin.png"
                        width={60}
                        height={60}
                        alt="Logo Linkedin Ketua Divisi"
                     ></Image>
                  </a>
               </div>
               <div className="basis-6/12 flex items-center justify-end">
                  <Image
                     className="w-[120px] h-[120px] lg:w-[200px] lg:h-[201px] rounded-[20px] object-cover"
                     src={ketuaData[0].profileUri}
                     width={200}
                     height={201}
                     alt="Profile Ketua Divisi"
                  ></Image>
               </div>
            </div>
         ) : (
            <div className="w-[45%] md:w-[30%] flex justify-center items-center">
               <p className="text-center text-[12px] sm:text-[20px]">Data Ketua Not Found</p>
            </div>
         )}

         {wakilData.length > 0 ? (
            <div className="basis-[534px] w-full h-[152px] sm:h-full max-h-[286px] flex gap-5 px-[16px] py-[15px] sm:px-8 sm:py-10 rounded-[15px] bg-greenPallete-300">
               <div className="basis-6/12 flex flex-col">
                  <p className="font-medium text-[15px] lg:text-[20px] text-bluePallete-800">
                     Wakil Divisi
                  </p>
                  <h1 className="max-w-[250px] h-[100px] max-h-[100px] font-black text-[25px] lg:text-[40px] mt-1 md:mt-5 leading-[30px] md:leading-[40px] text-bluePallete-800">
                     {wakilData[0].name}
                  </h1>
                  <a
                     href={wakilData[0].linkedinUri}
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <Image
                        className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] mt-0 sm:mt-5 object-cover"
                        src="assets/uploads/member/logo/logo-linkedin.png"
                        width={60}
                        height={60}
                        alt="Logo Linkedin Wakil Ketua Divisi"
                     ></Image>
                  </a>
               </div>
               <div className="basis-6/12 flex items-center justify-end">
                  <Image
                     className="w-[120px] h-[120px] lg:w-[200px] lg:h-[201px] rounded-[15px] object-cover"
                     src={wakilData[0].profileUri}
                     width={200}
                     height={201}
                     alt="Profile Wakil Ketua Divisi"
                  ></Image>
               </div>
            </div>
         ) : (
            <div className="w-[45%] md:w-[30%] flex justify-center items-center">
               <p className="text-center text-[12px] sm:text-[20px]">Data Wakil Ketua Not Found</p>
            </div>
         )}
      </>
   );
};

export default MemberCard;
