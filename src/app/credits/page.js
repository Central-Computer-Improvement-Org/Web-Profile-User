"use client";
import React, { useEffect, useState } from "react";

import { host } from "@/components/host";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import CrewSlider from "@/components/credit/crewSlider";
import CardCreditProfile from "@/components/credit/cardCreditProfile";
import ImageNotFound from "@/components/imageNotFound";
import Loading from "@/components/loading";
import request from "../utils/request";

export default function Credits() {
  const [contributors, setContributors] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request
      .get("/projects?id=PJT-20240729053353002924")
      .then(function (res) {
        if (res.data.code === 200 || res.data.code === 201) {
          setContributors(res.data.data.contributors);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          console.error(JSON.stringify(res.errors));
        }
      })
      .catch(function (err) {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const ketuaDesignDatas = contributors
    ?.map((data, index) => {
      // if (index <= 3) {
      //   if (data.division != null) {
      //     return data;
      //   }
      // }
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
              <section>
                <h1 className="xl:text-[100px] md:text-[70px] text-[32px] font-black text-greenPallete-400 text-center">
                  CREDIT
                </h1>
                <div className="xl:mt-[47px] md:mt-[38px] mt-[20px]" />
                <div className="xl:w-[1147px] xl:h-[108px] md:w-[700px] md:h-[88px] w-[311px] h-[44px] rounded-[15px] bg-bluePallete-900 text-white font-bold xl:text-[40px] md:text-[30px] text-[20px] m-auto flex justify-center items-center">
                  <h1>Meet Our Creators</h1>
                </div>
              </section>
              <div className="xl:mt-[102px] md:mt-[102px] mt-[40px]" />
              {/* UI UX Section */}
              <section>
                <div className="xl:w-[594px] xl:h-[108px] md:w-[300px] md:h-[88px] w-[250px] h-[54px] rounded-[15px] bg-bluePallete-300 text-bluePallete-800 font-bold xl:text-[40px] md:text-[30px] text-[20px] m-auto flex justify-center items-center">
                  <h1>UI/UX</h1>
                </div>
                <div className="xl:mt-[45px] md:mt-[35px] mt-[25px]" />
                {isLoading ? (
                  <div className="w-full h-[200px] flex justify-center items-center">
                    <Loading width={80} height={80} />
                  </div>
                ) : contributors ? (
                  <div className="flex flex-col w-full">
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
                    <div>
                      <div className="mt-10 sm:mt-[74px]" />
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
              <div className="xl:mt-[180px] md:mt-[120px] mt-[60px]" />
              {/* Web Development Section */}
              <section className="pb-[100px]">
                <div className="xl:w-[594px] xl:h-[108px] md:w-[300px] md:h-[88px] w-[250px] h-[54px] rounded-[15px] bg-bluePallete-300 text-bluePallete-800 font-bold xl:text-[40px] md:text-[30px] text-[20px] m-auto flex justify-center items-center">
                  <h1>Web Development</h1>
                </div>
                <div className="xl:mt-[45px] md:mt-[35px] mt-[25px]" />
                {isLoading ? (
                  <div className="w-full h-[200px] flex justify-center items-center">
                    <Loading width={80} height={80} />
                  </div>
                ) : contributors ? (
                  <div>
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
                    <div className="mt-[30px] sm:mt-[74px]" />
                    <div>
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