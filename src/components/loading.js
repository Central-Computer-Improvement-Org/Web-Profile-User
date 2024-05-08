"use client";
import { Spinner } from "flowbite-react";

const Loading = ({ size = "w-6 h-6", textAlignment = "text-left" }) => {
  return (
    <div className={`${textAlignment}`}>
      <Spinner className={`${size} text-bluePallete-700`} />
    </div>
  );
};

export default Loading;
