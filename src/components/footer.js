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

    Promise.all([request.get("/setting"), request.get("/contact")])
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
        <div className="w-full flex flex-col lg:flex-row justify-between items-end space-y-[20px] sm:space-y-[40px] lg:space-y-0">
          <div className="w-full h-full flex flex-col flex-wrap space-y-[25px] sm:space-y-5 lg:space-y-[80px] justify-between pt-[23px] md:pt-[90px]">
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
            </div>
            <div className="w-full flex flex-col lg:items-start items-center space-x-0 sm:space-y-5">
              <div className="w-fit flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="white"
                    d="M10 3a5 5 0 0 0-5 5c0 1.128.67 2.444 1.61 3.71c.926 1.246 2.047 2.36 2.818 3.067a.835.835 0 0 0 1.144 0c.77-.708 1.892-1.82 2.818-3.067C14.33 10.444 15 9.128 15 8a5 5 0 0 0-5-5M4 8a6 6 0 1 1 12 0c0 1.468-.843 3.007-1.807 4.306c-.98 1.319-2.152 2.48-2.945 3.207a1.835 1.835 0 0 1-2.496 0c-.793-.727-1.966-1.888-2.945-3.207C4.843 11.007 4 9.468 4 8m6-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M7.5 8a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m6.92 5.638a22.48 22.48 0 0 1-.715.826c.254.072.492.15.712.235c.554.213.969.455 1.236.698c.267.243.347.447.347.603c0 .156-.08.36-.347.603c-.267.243-.682.485-1.236.698c-1.106.426-2.667.7-4.417.7s-3.311-.274-4.417-.7c-.554-.213-.969-.455-1.236-.698C4.08 16.36 4 16.156 4 16c0-.156.08-.36.347-.603c.267-.243.682-.485 1.236-.698a8.18 8.18 0 0 1 .712-.235a22.432 22.432 0 0 1-.715-.826a8.57 8.57 0 0 0-.356.128c-.621.239-1.159.536-1.55.891C3.284 15.012 3 15.466 3 16c0 .535.284.988.674 1.343c.391.355.929.652 1.55.892C6.471 18.715 8.16 19 10 19c1.84 0 3.529-.286 4.776-.765c.621-.24 1.159-.537 1.55-.892c.39-.355.674-.808.674-1.343c0-.534-.284-.988-.674-1.343c-.391-.355-.929-.652-1.55-.891a8.564 8.564 0 0 0-.356-.128"
                  ></path>
                </svg>
                {isLoading ? (
                  <Loading />
                ) : settingsData?.address ? (
                  <div className="flex items-center text-center">
                    <p className="font-bold text-[11px] sm:text-[20px] md:text-[25px] lg:text-[30px] text-white">
                      {settingsData.address}
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
                <p className="flex justify-center items-center text-center lg:text-left text-[8px] sm:text-[16px] lg:text-[24px] leading-[14px] sm:leading-[28px] lg:leading-[45px] pr-0 lg:pr-[170px] text-white">
                  {settingsData.description}
                </p>
              ) : (
                <TextNotFound className="flex justify-center items-center text-center lg:text-left text-[8px] sm:text-[16px] lg:text-[24px] pr-0 lg:pr-24 text-transparent">
                  Unit Kegiatan Mahasiswa Universitas Telkom yang berfokus pada
                  bidang ICT (Information, Communication and Technology).
                </TextNotFound>
              )}
            </div>
          </div>
          <div className="w-full h-full basis-full lg:basis-2/5 flex flex-col justify-between items-center space-y-5 pl-0 lg:pl-20">
            <div className="w-[170px] sm:w-[345px] md:w-[385px] flex flex-row justify-between">
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
              <button className="w-[170px] md:w-[385px] h-[15px] sm:h-[24px] md:h-[49px] flex justify-center items-center rounded-[5px] bg-white">
                <p className="text-[8px] sm:text-[14px] md:text-[20px] font-bold text-bluePallete-700">
                  Credit
                </p>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col pt-[80px] pb-[50px]">
          <p className="w-auto text-center text-[5px] sm:text-[14px] font-bold text-white">
            Copyright © 2024 • Telkom University
          </p>
          <p className="w-auto text-center text-[5px] sm:text-[14px] font-bold text-white">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
