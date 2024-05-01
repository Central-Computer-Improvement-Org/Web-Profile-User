"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import request from "@/app/utils/request";
import styles from "@/components/Division/divisonComponent.module.css";

const MemberCard = ({ divisionId }) => {
  const [memberData, setMemberData] = useState(null);
  const [ketuaData, setKetuaData] = useState([]);
  const [wakilData, setWakilData] = useState([]);

  useEffect(() => {
    request
      .get("/member")
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

  const formatName = (name) => {
    const nameMember = name.split(" ");
    const convertNameMember = [];
  
    for (let i = 0; i < nameMember.length; i++) {
      if (i === 3) {
        convertNameMember.push(nameMember[i][0] + ".");
      } else if (i > 3) {
        continue;
      } else {
        convertNameMember.push(nameMember[i]);
      }
    }
  
    return convertNameMember.join(" ");
  };

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
            <h1
              className={`max-w-[250px] font-black text-[25px] lg:text-[40px] leading-[40px] overflow-hidden text-bluePallete-800 ${styles.memberName}`}
            >
              {formatName(ketuaData[0].name)}
            </h1>
            <div>
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
                  alt="Logo Linkedin Member"
                ></Image>
              </a>
            </div>
          </div>
          <div className="basis-6/12 flex items-center justify-end">
            <Image
              className="w-[120px] h-[120px] lg:w-[200px] lg:h-[201px] rounded-[15px] object-cover"
              src={ketuaData[0].profileUri}
              width={200}
              height={201}
              alt="Logo Ketua Divisi"
            ></Image>
          </div>
        </div>
      ) : (
        <p>Data Ketua Not Found</p>
      )}

      {wakilData.length > 0 ? (
        <div className="basis-[534px] w-full h-[152px] sm:h-full max-h-[286px] flex gap-5 px-[16px] py-[15px] sm:px-8 sm:py-10 rounded-[15px] bg-greenPallete-300">
          <div className="basis-6/12 flex flex-col">
            <p className="font-medium text-[15px] lg:text-[20px] text-bluePallete-800">
              Wakil Divisi
            </p>
            <h1 className={`max-w-[230px] font-black text-[25px] lg:text-[40px] leading-[40px] overflow-hidden text-bluePallete-800 ${styles.memberName}`}>
              {formatName(wakilData[0].name)}
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
                  alt="Logo Linkedin Member"
                ></Image>
              </a>
          </div>
          <div className="basis-6/12 flex items-center justify-end">
            <Image
              className="w-[120px] h-[120px] lg:w-[200px] lg:h-[201px] rounded-[15px] object-cover"
              src={wakilData[0].profileUri}
              width={200}
              height={201}
              alt="Logo Ketua Divisi"
            ></Image>
          </div>
        </div>
      ) : (
        <p>Data Wakil Ketua Not Found</p>
      )}
    </>
  );
};

export default MemberCard;
