"use client";
import * as React from "react";
import Image from "next/image";
import { useHover } from "@uidotdev/usehooks";
import { useWindowSize } from "@uidotdev/usehooks";

export default function EventCard({ title, description, img, isGreen }) {
  const [ref, hovering] = useHover();
  const size = useWindowSize();

  const overlayStyle = isGreen
    ? `bg-green-overlay opacity-50`
    : `bg-blue-overlay opacity-50`;
  const overlayOnHover = isGreen
    ? "bg-green-lightActive opacity-100"
    : "bg-blue-darkActive opacity-100";
  return (
    <div
      className={`relative px-[150px] py-[2rem] mt-[30px] lg:mt-[80px] lg:mx-[55px] lg:py-[96px] shadow-sm rounded-[15px] lg:rounded-[30px] overflow-hidden`}
    >
      <Image
        src={img}
        alt={title}
        fill={true}
        quality={100}
        className={`object-cover`}
      />
      <div
        className={`${
          size.width >= 1024 && hovering ? overlayOnHover : overlayStyle
        } absolute inset-0`}
      ></div>
      <div
        ref={ref}
        className={`absolute inset-0 flex ${
          size.width >= 1024 && hovering
            ? "lg:px-24 xl:px-40 items-start flex-col justify-center "
            : "items-center justify-center"
        }`}
      >
        {size.width >= 1024 && hovering ? (
          <span className={`${isGreen ? "text-green-darker" : "text-white"}`}>
            <h5 className="text-h5 font-bold">{title}</h5>
            <p className="lg:text-small xl:text-normal font-medium">
              {description}
            </p>
          </span>
        ) : (
          <>
            <h4
              className={`text-white font-extrabold text-normal lg:text-h4 drop-shadow-xl tracking-wide`}
            >
              {title}
            </h4>
          </>
        )}
      </div>
    </div>
  );
}
