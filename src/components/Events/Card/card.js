"use client";
import * as React from "react";
import Image from "next/image";
import { useHover } from "@uidotdev/usehooks";
import { useWindowSize } from "@uidotdev/usehooks";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export default function EventCard({ title, description, img, isGreen }) {
  const [ref, hovering] = useHover();
  const [isFlipped, setIsFlipped] = useState(false);
  const size = useWindowSize();

  const overlayStyle = isGreen
    ? `bg-secondPrimary opacity-50`
    : `bg-bluePallete-800 opacity-50`;
  const overlayOnHover = isGreen
    ? "bg-greenPallete-300 opacity-100"
    : "bg-bluePallete-800 opacity-100";
  return (
    <>
      {size.width >= 1024 ? (
        <div
          className={`relative px-[150px] py-[2rem] mt-[30px] lg:mt-[80px] lg:mx-[47.8px] lg:py-[99px] shadow-sm rounded-[15px] lg:rounded-[30px] overflow-hidden`}
        >
          <Image
            src={img}
            alt={title}
            fill={true}
            quality={100}
            className={`object-cover`}
          />
          <div
            className={`${hovering ? overlayOnHover : overlayStyle
            } absolute inset-0`}
          ></div>
          <div
            ref={ref}
            className={`absolute inset-0 flex ${hovering
                ? "lg:px-[24px] xl:px-[40px] items-start flex-col justify-center "
                : "items-center justify-center"
            }`}
          >
            {hovering ? (
              <span
                className={`${
                  isGreen ? "text-greenPallete-900" : "text-white"
                }`}
              >
                <h5 className="antialiased text-h5 font-black">{title}</h5>
                <p className="antialiased text-normal font-medium">
                  {description}
                </p>
              </span>
            ) : (
              <>
                <h4
                  className={`antialiased text-white font-black text-[14px] lg:text-h3 text-shadow-xl shadow-gray-500 tracking-wide`}
                >
                  {title}
                </h4>
              </>
            )}
          </div>
        </div>
      ) : (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div
            className={`relative px-[150px] py-[20.5px] md:py-[36px] mt-[30px] lg:mt-[80px] lg:mx-[55px] lg:py-[96px] shadow-sm rounded-[15px] lg:rounded-[30px] overflow-hidden`}
          >
            <button
              onClick={() => {
                setIsFlipped(!isFlipped);
              }}
            >
              <Image
                src={img}
                alt={title}
                fill={true}
                quality={100}
                className={`object-cover`}
              />
              <div
                className={`${overlayStyle
                } absolute inset-0`}
              ></div>
              <div
                className={`absolute inset-0 flex ${"items-center justify-center"}`}
              >
                <h4
                  className={`antialiased text-white font-black text-[14px] md:text-h3 text-shadow-xl tracking-wide`}
                >
                  {title}
                </h4>
              </div>
            </button>
          </div>
          <div
            className={`relative px-[150px] py-[20.5px] mt-[30px] lg:mt-[80px] lg:mx-[55px] lg:py-[96px] shadow-sm rounded-[15px] lg:rounded-[30px] overflow-hidden`}
          >
            <button
              onClick={() => {
                setIsFlipped(!isFlipped);
              }}
            >
              <div className={`${overlayOnHover} absolute inset-0`}></div>
              <div
                className={`absolute inset-0 flex lg:px-[24px] xl:px-[40px] items-start flex-col justify-center`}
              >
                <span
                  className={`${
                    isGreen ? "text-greenPallete-900" : "text-white"
                  } w-full px-[26px]`}
                >
                  <h5 className="antialiased text-small md:text-medium text-left font-black">{title}</h5>
                  <p className="antialiased text-[8px] md:text-[12px] text-left font-medium">
                    {description}
                  </p>
                </span>
              </div>
            </button>
          </div>
        </ReactCardFlip>
      )}
    </>
  );
}
