"use client";
import { useState } from "react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";

const EventCard = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);

  const handleClick1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleClick2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  return (
    <div className="w-full h-auto flex flex-row flex-wrap md:flex-nowrap gap-5 justify-around items-center mt-[10px]">
      <ReactCardFlip isFlipped={isFlipped1} flipDirection="horizontal">
        <div
          onClick={handleClick1}
          className="relative basis-full md:basis-6/12 w-full h-full md:max-w-[517px] md:max-h-[198px] mt-[70px] rounded-[30px] overflow-hidden bg-blue-500"
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-white text-lg font-bold">Front Text</p>
          </div>
          <Image
            width={517}
            height={198}
            className="h-full w-full object-cover absolute inset-0"
            src="assets/division/images/division-1.jpg"
            alt="Event Web Development"
          />
        </div>
        <div
          onClick={handleClick1}
          className="relative basis-full md:basis-6/12 w-full h-full md:max-w-[517px] md:max-h-[198px] mt-[70px] rounded-[30px] overflow-hidden bg-yellow-500"
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-white text-lg font-bold">Back Text</p>
          </div>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={isFlipped2} flipDirection="horizontal">
        <div
          onClick={handleClick2}
          className="relative basis-full md:basis-6/12 w-full h-full md:max-w-[517px] md:max-h-[198px] mt-[70px] rounded-[30px] overflow-hidden bg-green-500"
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-white text-lg font-bold">Front Text</p>
          </div>
          <Image
            width={517}
            height={198}
            className="h-full w-full object-cover absolute inset-0"
            src="assets/division/images/division-2.jpg"
            alt="Event Web Development"
          />
        </div>
        <div
          onClick={handleClick2}
          className="relative basis-full md:basis-6/12 w-full h-full md:max-w-[517px] md:max-h-[198px] mt-[70px] rounded-[30px] overflow-hidden bg-red-500"
        >
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-white text-lg font-bold">Back Text</p>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default EventCard;
