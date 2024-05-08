"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import Loading from "@/components/loading";
import ImageNotFound from "@/components/imageNotFound";
import TextNotFound from "@/components/teksNotFound";
import { host } from "@/components/host";
import request from "@/app/utils/request";

const MemberCard = ({ divisionId }) => {
   const [memberData, setMemberData] = useState(null);
   const [ketuaData, setKetuaData] = useState([]);
   const [wakilData, setWakilData] = useState([]);

  useEffect(() => {
    request
      .get("/users?roleNameExact=Ketua")
      .then((response) => {
        if (response.status === 200 || response.status === 201) { 
          const ketuaData = response.data.data.filter(
            (item) =>
              (item.role.name === "Ketua") &&
              item.divisionId === divisionId
          );
          setMemberData(response.data.data);
          setKetuaData(ketuaData);
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
      .get("/users?roleNameExact=Wakil Ketua")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          const wakilData = response.data.data.filter(
            (item) =>
              (item.role.name === "Wakil Ketua") &&
              item.divisionId === divisionId
          );
          setMemberData(response.data.data);
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
      <Loading
        size="w-auto h-auto lg:w-[300px] lg:h-[300px]"
        textAlignment="text-center"
      />
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
            {ketuaData[0]?.name ? (
              <h1 className="max-w-[250px] h-[100px] max-h-[100px] font-black text-[25px] lg:text-[40px] mt-1 md:mt-5 leading-[30px] md:leading-[40px] text-bluePallete-800">
                {ketuaData[0].name}
              </h1>
            ) : (
              <TextNotFound className="max-w-[250px] h-[100px] max-h-[100px] font-black text-[25px] lg:text-[40px] mt-1 md:mt-5 leading-[30px] md:leading-[40px] text-transparent">
                MUHAMMAD ARYA
              </TextNotFound>
            )}
            {/* belum ter validasi */}
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
            {ketuaData[0]?.profileUri ? (
              <Image
                src={`${host}${ketuaData[0].profileUri}`}
                alt="Logo Central Computer Improvement"
                width={200}
                height={201}
                responsive="true"
                className="w-[120px] h-[120px] lg:w-[200px] lg:h-[201px] rounded-[20px] object-cover"
              />
            ) : (
              <ImageNotFound className="w-[120px] h-[120px] lg:w-[200px] lg:h-[201px] rounded-[20px] object-cover" />
            )}
          </div>
        </div>
      ) : (
        <div className="w-[45%] md:w-[30%] flex justify-center items-center">
          <p className="text-center text-[12px] sm:text-[20px]">
            <TextNotFound></TextNotFound>
          </p>
        </div>
      )}

      {wakilData.length > 0 ? (
        <div className="basis-[534px] w-full h-[152px] sm:h-full max-h-[286px] flex gap-5 px-[16px] py-[15px] sm:px-8 sm:py-10 rounded-[15px] bg-greenPallete-300">
          <div className="basis-6/12 flex flex-col">
            <p className="font-medium text-[15px] lg:text-[20px] text-bluePallete-800">
              Wakil Divisi
            </p>
            <h1 className="max-w-[250px] h-[100px] max-h-[100px] font-black text-[25px] lg:text-[40px] mt-1 md:mt-5 leading-[30px] md:leading-[40px] text-bluePallete-800">
              {wakilData[0]?.name ? (
                <h1 className="max-w-[250px] h-[100px] max-h-[100px] font-black text-[25px] lg:text-[40px] mt-1 md:mt-5 leading-[30px] md:leading-[40px] text-bluePallete-800">
                  {wakilData[0].name}
                </h1>
              ) : (
                <TextNotFound className="max-w-[250px] h-[100px] max-h-[100px] font-black text-[25px] lg:text-[40px] mt-1 md:mt-5 leading-[30px] md:leading-[40px] text-transparent">
                  MUHAMMAD ARYA
                </TextNotFound>
              )}
            </h1>
            {/* belum ter validasi */}
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
            {wakilData[0]?.profileUri ? (
              <Image
                src={`${host}${wakilData[0].profileUri}`}
                alt="Logo Central Computer Improvement"
                width={200}
                height={201}
                responsive="true"
                className="w-[120px] h-[120px] lg:w-[200px] lg:h-[201px] rounded-[20px] object-cover"
              />
            ) : (
              <ImageNotFound className="w-[120px] h-[120px] lg:w-[200px] lg:h-[201px] rounded-[20px] object-cover" />
            )}
          </div>
        </div>
      ) : (
        <div className="w-[45%] md:w-[30%] flex justify-center items-center">
          <p className="text-center text-[12px] sm:text-[20px]">
            <TextNotFound></TextNotFound>
          </p>
        </div>
      )}
    </>
  );
};

export default MemberCard;
