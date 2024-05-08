"use client";
import Image from "next/image";

const NotFound = ({ className = "w-[50px] h-[50px]" }) => {
  return (
    <Image
      src="/assets/icon/notfound.jpg"
      alt="Not Found Icon"
      width={500}
      height={500}
      responsive="true"
      className={`${className}`}
    />
  );
};

export default NotFound;
