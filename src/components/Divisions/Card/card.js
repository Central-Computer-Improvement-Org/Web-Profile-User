"use client";
import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "@uidotdev/usehooks";

export default function EventCard({ imageUrl, title, name, socialLinks }) {
  const size = useWindowSize();

  return (
    <div
      className={`bg-gradientCard relative mt-[30px] lg:mt-[80px] mx-[8px] md:mx-[16px] lg:mx-[24px] xl:mx-[56px] py-[4rem] md:py-[6rem] lg:py-[10rem] rounded-[15px] md:rounded-[30px]`}
    >
      {size.width >= 1024 ? (
        <div
          className={`absolute inset-0 flex items-center justify-between md:px-[2rem]`}
        >
          <div className="lg:space-y-[32px] xl:space-y-56">
            <div className="text-blue-darkActive">
              <h5
                className={`text-[8px] md:text-small lg:text-normal xl:text-large font-medium`}
              >
                {title}
              </h5>
              <p
                className={`text-normal md:text-large lg:text-h5 xl:text-h4 font-bold lg:font-extrabold xl:font-black`}
              >
                {name}
              </p>
            </div>
            <div>
              <Link href={socialLinks}>
                <Image
                  src={`.././svgs/linkedin.svg`}
                  className={`w-[1rem] h-[1rem] lg:w-[2rem] lg:h-[2rem] xl:w-[3rem] xl:h-[3rem]`}
                  width={0}
                  height={0}
                />
              </Link>
            </div>
          </div>
          <Image
            src={imageUrl}
            className={`w-[1.5rem] h-[1.5rem] md:w-[4.5rem] md:h-[4.5rem] lg:w-[8.5rem] lg:h-[8.5rem] xl:w-[12.5rem] xl:h-[12.5rem]`}
            height={0}
            width={0}
          />
        </div>
      ) : (
        <div
          className={`absolute inset-0 space-y-[1rem] justify-between py-[1rem] px-[1rem]`}
        >
          <div className="flex justify-between md:px-16 md:py-[12px]">
            <div className="text-blue-darkActive">
              <h5 className={`text-[8px] md:text-small font-medium`}>
                {title}
              </h5>
              <p className={`text-small md:text-medium font-bold`}>{name}</p>
            </div>
            <Image
              src={imageUrl}
              className={`w-[3.5rem] h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem]`}
              height={0}
              width={0}
            />
          </div>
          <div className="relative w-fit md:px-16">
            <Link href={socialLinks} target="_blank">
              <Image
                src={`.././svgs/linkedin.svg`}
                className={`w-[20px] h-[20px] md:w-[1.5rem] md:h-[1.5rem]`}
                width={0}
                height={0}
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
