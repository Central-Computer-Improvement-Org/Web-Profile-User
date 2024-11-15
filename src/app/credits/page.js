"use client";
import React, { useEffect, useState } from "react";

import { host } from "@/components/host";
import request from "../utils/request";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import CrewSlider from "@/components/credit/crewSlider";
import CardCreditProfile from "@/components/credit/cardCreditProfile";
import ImageNotFound from "@/components/imageNotFound";
import Loading from "@/components/loading";


export default function Credits() {
  const [contributors, setContributors] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request
      .get("/projects?id=PJT-20241114071930266091")
      .then(function (res) {
        if (res.data.code === 200) {
          setContributors(res?.data?.data?.contributors);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          console.error(res.errors);
        }
      })
      .catch(function (err) {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const ketuaDesignDatas = contributors
    ?.map((data, index) => {
      if (data.division != null) {
        return data;
      }
    })
    .filter(
      (v) =>
        v !== undefined &&
        v.role?.name !== "Member" &&
        v.division?.name === "Design"
    );

  const ketuaWebDatas = contributors
    ?.map((data, index) => {
      if (index <= 2) {
        if (data.division != null) {
          return data;
        }
      }
    })
    .filter(
      (v) =>
        v !== undefined &&
        v.role?.name !== "Member" &&
        v.division?.name === "Web Development"
    );

  return (
    <>
      <Header />
      <Navbar />
      <main className="w-full h-auto">
        <span className="block h-full bg-gradientAccentTwo">
          <span className="block h-full bg-gradientDefaultTwo">
            <div className="pt-[90px] sm:pt-[130px] md:pt-[160px] w-full h-auto xl:max-w-[75rem] lg:max-w-[67rem] md:max-w-[51rem] sm:max-w-xl max-w-md px-5 sm:px-0 mx-auto">
              <section className="flex flex-col gap-6">
                <h1 className="xl:text-[70px] lg:text-[60px] md:text-[70px] text-[32px] font-black text-greenPallete-400 text-center">
                  CREDIT
                </h1>
                <div className="w-full max-w-[70%] py-3  md:rounded-[15px] rounded-[6px] bg-bluePallete-900 text-white font-bold xl:text-[30px] lg:text-[25px] md:text-[20px] text-[16px] m-auto flex justify-center items-center">
                  <h1>Meet Our Creators</h1>
                </div>
              </section>
              <div className="xl:mt-[70px] md:mt-[40px] mt-[20px]" />
              {/* UI UX Section */}
              <section>
                <div className="w-full max-w-[50%] py-3 md:rounded-[15px] rounded-[6px] bg-bluePallete-300 text-bluePallete-800 font-bold xl:text-[30px] md:text-[20px] text-[16px] m-auto flex justify-center items-center">
                  <h1>UI/UX</h1>
                </div>
                <div className="xl:mt-[45px] md:mt-[35px] mt-[25px]" />
                {isLoading ? (
                  <div className="w-full h-[200px] flex justify-center items-center">
                    <Loading width={80} height={80} />
                  </div>
                ) : contributors ? (
                  <div className="flex flex-col w-full md:px-5">
                    {/* Ketua dan wakil area */}
                    <div className="flex xl:gap-[40px] md:gap-[30px] gap-[16px] md:flex-row flex-col justify-center items-center">
                      {ketuaDesignDatas.length ? (
                        ketuaDesignDatas.length &&
                        ketuaDesignDatas.map((data, index) => (
                          <CardCreditProfile
                            color={"bg-greenPallete-300"}
                            image={host + data.profileUri}
                            jobdes={data.role?.name}
                            name={data.name}
                            linkedinUri={data.linkedinUri}
                            key={index}
                          />
                        ))
                      ) : (
                        <div className="flex justify-center w-full">
                          <ImageNotFound className="flex justify-center w-[200px]" />
                        </div>
                      )}
                    </div>
                    {/* Member area */}
                    <div>
                      <div className="mt-10 sm:mt-[40px]" />
                      <CrewSlider
                        crewDatas={contributors
                          ?.map((data) => {
                            if (data.division != null) {
                              return data;
                            }
                          })
                          .filter(
                            (v) =>
                              v !== undefined &&
                              v.role?.name === "Member" &&
                              v.division?.name === "Design"
                          )}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center w-full">
                    <ImageNotFound className="flex justify-center w-[200px]" />
                  </div>
                )}
              </section>
              <div className="xl:mt-[130px] md:mt-[120px] mt-[60px]" />
              {/* Web Development Section */}
              <section className="pb-[100px]">
                <div className="w-full max-w-[50%] py-3 md:rounded-[15px] rounded-[6px] bg-bluePallete-300 text-bluePallete-800 font-bold xl:text-[30px] md:text-[20px] text-[16px] m-auto flex justify-center items-center">
                  <h1>Web Development</h1>
                </div>
                <div className="xl:mt-[60px] md:mt-[35px] mt-[25px]" />
                {isLoading ? (
                  <div className="w-full h-[200px] flex justify-center items-center">
                    <Loading width={80} height={80} />
                  </div>
                ) : contributors ? (
                  <div className="flex flex-col w-full md:px-5">
                    {/* Ketua dan wakil area */}
                    <div className="flex xl:gap-[40px] md:gap-[30px] gap-[16px] md:flex-row flex-col justify-center items-center">
                      {ketuaWebDatas.length ? (
                        ketuaWebDatas.length &&
                        ketuaWebDatas.map((data, index) => (
                          <CardCreditProfile
                            color={"bg-greenPallete-300"}
                            image={host + data.profileUri}
                            jobdes={data.role?.name}
                            name={data.name}
                            linkedinUri={data.linkedinUri}
                            key={index}
                          />
                        ))
                      ) : (
                        <div className="flex justify-center w-[100%]">
                          <ImageNotFound className="flex justify-center w-[200px]" />
                        </div>
                      )}
                    </div>
                    {/* Member area */}
                    <div className="mt-[30px] sm:mt-[40px]" />
                    <div className="w-full">
                      <CrewSlider
                        crewDatas={contributors
                          ?.map((data) => {
                            if (data.division != null) {
                              return data;
                            }
                          })
                          .filter(
                            (v) =>
                              v !== undefined &&
                              v.role?.name === "Member" &&
                              v.division?.name === "Web Development"
                          )}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center w-full">
                    <ImageNotFound className="flex justify-center w-[200px]" />
                  </div>
                )}
              </section>
            </div>
          </span>
        </span>
      </main>
      <Footer />
    </>
  );
}
