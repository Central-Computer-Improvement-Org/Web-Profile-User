"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import request from "../app/utils/request";
import Loading from "@/components/loading";
import ImageNotFound from "@/components/imageNotFound";
import TextNotFound from "@/components/teksNotFound";
import { host } from "@/components/host";

const Footer = () => {
  const [settingsData, setSettingsData] = useState(null);
  const [contactData, setContactData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

      Promise.all([
         request.get("/setting"),
         request.get("/contact"),
      ])
         .then(([settingsResponse, contactResponse]) => {
            if (
               settingsResponse.status === 200 ||
               settingsResponse.status === 201
            ) {
               setSettingsData(settingsResponse.data.data);
            } else {
               console.error(JSON.stringify(settingsResponse.errors));
            }

        if (contactResponse.status === 200 || contactResponse.status === 201) {
          setContactData(contactResponse.data);
        } else {
          console.error(JSON.stringify(contactResponse.errors));
        }

        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

   return (
      <footer id="contact" className="w-full h-auto bg-bluePallete-800">
         <div className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md mx-auto px-5 sm:px-0">
            <div className="w-full h-full flex flex-col flex-wrap space-y-[25px] sm:space-y-5 lg:space-y-20 justify-between pt-[23px] md:pt-32 pb-10">
               <div className="w-full flex flex-col lg:items-start items-center space-y-0 sm:space-y-5">
                  {isLoading ? (
                     <Loading
                        size="w-[59px] h-[59px] md:w-[92px] md:h-[92px] cursor-pointer"
                        textAlignment="text-left"
                     />
                  ) : settingsData?.logoUri ? (
                     <Image
                        src={`${host}${settingsData.logoUri}`}
                        alt="Logo Central Computer Improvement"
                        width={150}
                        height={92}
                        responsive="true"
                        className="w-[95px] h-[59px] md:w-[150px] md:h-[92px] cursor-pointer"
                     />
                  ) : (
                     <ImageNotFound className="hidden md:block w-auto h-auto md:w-[400px] md:h-[300px] object-contain" />
                  )}
                  <div className="w-auto flex flex-col">
                     <p className="font-bold text-center text-[8px] sm:text-[16px] uppercase text-white">
                        Central Computer
                     </p>
                     <p className="font-bold  text-center text-[8px] sm:text-[16px] uppercase text-white">
                        Improvement
                     </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <TextNotFound className="font-bold text-[11px] sm:text-[20px] md:text-[25px] lg:text-[30px] text-transparent">
                      Telkom University, Bandung
                    </TextNotFound>
                  </div>
                )}
              </div>
              {isLoading ? (
                <Loading />
              ) : settingsData?.description ? (
                <p className="flex justify-center items-center text-center lg:text-left text-[8px] sm:text-[16px] lg:text-[24px] pr-0 lg:pr-24 text-white">
                  {settingsData.description}
                </p>
              ) : (
                <TextNotFound className="fflex justify-center items-center text-center lg:text-left text-[8px] sm:text-[16px] lg:text-[24px] pr-0 lg:pr-24 text-transparent">
                  Unit Kegiatan Mahasiswa Universitas Telkom yang berfokus pada
                  bidang ICT (Information, Communication and Technology).
                </TextNotFound>
              )}
            </div>
            <div className="w-full h-full basis-full lg:basis-2/5 flex flex-col justify-between items-center space-y-5 pl-0 lg:pl-20">
              <div className="w-[170px] md:w-[385px] flex flex-row justify-between">
                <a
                  href="mailto:cci.unitel@gmail.com?subject=Subject%20of%20the%20email&body="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[35px] h-[35px] sm:w-[70px] sm:h-[70px] rounded border-2 border-white"
                >
                  {isLoading ? (
                    <Loading
                      size="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
                      textAlignment="text-left"
                    />
                  ) : contactData?.data[0]?.iconUri ? (
                    <Image
                      src={`${host}${contactData.data[0].iconUri}`}
                      alt="Logo Email CCI"
                      width={50}
                      height={50}
                      responsive="true"
                      className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] cursor-pointer object-contain"
                    />
                  ) : (
                    <ImageNotFound className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] object-contain" />
                  )}
                </a>
                <a
                  href="https://www.instagram.com/cciunitel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[35px] h-[35px] sm:w-[70px] sm:h-[70px] rounded border-2 border-white "
                >
                  {isLoading ? (
                    <Loading
                      size="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
                      textAlignment="text-left"
                    />
                  ) : contactData?.data[1]?.iconUri ? (
                    <Image
                      src={`${host}${contactData.data[1].iconUri}`}
                      alt="Logo Instagram CCI"
                      width={50}
                      height={50}
                      responsive="true"
                      className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] cursor-pointer object-contain"
                    />
                  ) : (
                    <ImageNotFound className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] object-contain" />
                  )}
                </a>
                <a
                  href="https://line.me/R/ti/p/~buz0214o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[35px] h-[35px] sm:w-[70px] sm:h-[70px] rounded border-2 border-white"
                >
                  {isLoading ? (
                    <Loading
                      size="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
                      textAlignment="text-left"
                    />
                  ) : contactData?.data[2]?.iconUri ? (
                    <Image
                      src={`${host}${contactData.data[2].iconUri}`}
                      alt="Logo Line CCI"
                      width={50}
                      height={50}
                      responsive="true"
                      className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] cursor-pointer object-contain"
                    />
                  ) : (
                    <ImageNotFound className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] object-contain" />
                  )}
                </a>
                <a
                  href="https://www.linkedin.com/company/cci-telkomuniversity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[35px] h-[35px] sm:w-[70px] sm:h-[70px] rounded border-2 border-white"
                >
                  {isLoading ? (
                    <Loading
                      size="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
                      textAlignment="text-left"
                    />
                  ) : contactData?.data[3]?.iconUri ? (
                    <Image
                      src={`${host}${contactData.data[3].iconUri}`}
                      alt="Logo Linkedin CCI"
                      width={50}
                      height={50}
                      responsive="true"
                      className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] cursor-pointer object-contain"
                    />
                  ) : (
                    <ImageNotFound className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px] object-contain" />
                  )}
                </a>
              </div>
              <Link href="/credits">
                <button  className="w-[170px] md:w-[385px] h-[15px] md:h-[49px] flex justify-center items-center rounded-[5px] bg-white">
                  <p className="text-[8px] sm:text-[20px] font-bold text-bluePallete-700">
                    Credit
                  </p>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="w-auto text-center text-[5px] sm:text-[14px] font-bold text-white">
              Copyright © 2024 • Telkom University
            </p>
            <p className="w-auto text-center text-[5px] sm:text-[14px] font-bold text-white">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
