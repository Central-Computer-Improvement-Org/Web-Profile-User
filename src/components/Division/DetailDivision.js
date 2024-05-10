"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import request from "@/app/utils/request";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "@/components/Division/divisionComponent.module.css";
import EventCard from "@/components/Division/EventCard";
import MemberCard from "@/components/Division/MemberCard";
import Loading from "@/components/loading";
import ImageNotFound from "@/components/imageNotFound";
import TextNotFound from "@/components/teksNotFound";
import { host } from "@/components/host";

export default function DetailDvision() {
  const [divisionData, setDivisionData] = useState(null);
  const searchParams = useSearchParams();
  const divisionId = searchParams.get("id");

   useEffect(() => {
      if (divisionId) {
         request
            .get(`/users/divisions`)
            .then((response) => {
               if (response.status === 200 || response.status === 201) {
                  const filterById = response.data.data.filter(
                     (data) => data.id === divisionId
                  );
                  setDivisionData(filterById);
               } else {
                  console.error(JSON.stringify(response.errors));
               }
            })
            .catch((error) => {
               console.error(error);
            });
      } else {
         console.error("Division ID not found");
      }
   }, [divisionId]);

   // handle data divison ketika data belum ter get
   if (!divisionData) {
      return (
         <Loading
            size="w-auto h-auto lg:w-[300px] lg:h-[300px]"
            textAlignment="text-center"
         />
      );
   }

   return (
      <>
         <Header />
         <Navbar />
         <span className="block h-full bg-gradientAccent">
            <div className="bg-gradientDefault h-full bg-fixed bg-no-repeat relative">
               <main className="w-full h-auto xl:max-w-[75rem] lg:max-w-[67rem] md:max-w-[51rem] sm:max-w-xl max-w-md px-5 sm:px-0 mx-auto">
                  {divisionData && divisionData.length > 0 ? (
                     divisionData.map((data) => (
                        <div key={data.id}>
                           <section
                              id="hero"
                              className="w-full h-auto flex flex-col space-y-[40px] pt-[100px] md:pt-[200px] mb-[50px] md:mb-[100px]"
                           >
                              <div className="w-full h-auto flex justify-between items-center">
                                 <div className="basis-3/5">
                                    {data?.name ? (
                                       <h1
                                          className={`font-black text-[32px] sm:text-[40px] md:text-[70px] lg:text-[90px] text-secondPrimary ${styles.dvisionCardName}`}
                                       >
                                          {data.name}
                                       </h1>
                                    ) : (
                                       <TextNotFound className="font-black text-[32px] sm:text-[40px] md:text-[70px] lg:text-[90px] text-transparent">
                                          DIVISI DATA
                                       </TextNotFound>
                                    )}
                                 </div>
                                 <div className="basis-2/5 flex items-center justify-end">
                                    {data?.logoUri ? (
                                       <Image
                                          className="w-[90px] h-[78px] sm:w-[130px] sm:h-[108px] lg:w-[170px] lg:h-[148px] object-cover"
                                          src={`${host}${data.logoUri}`}
                                          width={170}
                                          height={148}
                                          alt={[
                                             "Logo " +
                                             data.name +
                                             " Central Computer Improvement",
                                          ]}
                                       />
                                    ) : (
                                       <ImageNotFound className="w-[90px] h-[78px] sm:w-[130px] sm:h-[108px] lg:w-[170px] lg:h-[148px] object-cover" />
                                    )}
                                 </div>
                              </div>
                              {data?.description ? (
                                 <p className="font-medium text-[14px] sm:text-[28px] lg:text-[40px] leading-0 md:leading-10 text-bluePallete-800">
                                    {data.description}
                                 </p>
                              ) : (
                                 <TextNotFound className="font-black text-[32px] sm:text-[40px] md:text-[70px] lg:text-[90px] text-transparent">
                                    Divisi yang berfokus pada pembelajaran pengembangan
                                    website terbaru dengan memperhatikan beberapa struktur
                                    didalamnya.
                                 </TextNotFound>
                              )}
                           </section>
                           <section
                              id="team"
                              className="w-full h-auto flex flex-col mt-[50px] md:mt-[130px]"
                           >
                              <div className="w-full h-[44px] sm:h-[108px] flex justify-center items-center rounded-[15px] bg-[#092C4C]">
                                 <p className="font-bold text-[20px] sm:text-[40px] text-center text-white">
                                    Meet Our Team
                                 </p>
                              </div>
                              <div className="w-full h-auto flex flex-wrap gap-5 sm:gap-10 justify-start sm:justify-evenly items-center px-5 mt-[45px] sm:mt-[80px]">
                                 {divisionId && <MemberCard divisionId={data.id} />}
                              </div>
                           </section>
                        </div>
                     ))
                  ) : (
                     <div className="w-full h-screen flex items-center justify-center">
                        <p className="font-bold text-center text-[30px] text-bluePallete-800">
                           Data not found
                        </p>
                     </div>
                  )}
                  <section
                     id="event"
                     className="w-full h-auto flex flex-col mt-[50px] sm:mt-[80px] md:mt-[130px] pb-[70px] md:pb-[200px]"
                  >
                     <EventCard />
                  </section>
               </main>
            </div>
         </span>
         <Footer />
      </>
   );
}
