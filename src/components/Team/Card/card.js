"use client";
import Image from "next/image";
import Link from "next/link";
import { useWindowSize } from "@uidotdev/usehooks";

export default function TeamCard({ imageUrl, title, name, socialLinks }) {
  const size = useWindowSize();

  return (
    <div
      className={`bg-gradientCard relative mt-[30px] lg:mt-[80px] mx-[4px] md:mx-[16px] lg:mx-[39.3px] py-[54px] md:py-[6rem] lg:py-[155px] rounded-[15px] md:rounded-[30px]`}
    >
      {size.width >= 768 ? (
        <div
          className={`absolute inset-0 space-x-[1rem] flex items-center justify-between md:px-[1.5rem] lg:px-[2rem]`}
        >
          <div className="md:space-y-[16px] lg:space-y-[32px] xl:space-y-[56px]">
            <div className="text-bluePallete-800">
              <h5
                className={`antialiased md:text-[12px] lg:text-large font-medium`}
              >
                {title}
              </h5>
              <p
                className={`antialiased md:text-h5 lg:text-[40px] font-black`}
              >
                {name}
              </p>
            </div>
            <div>
              <Link href={socialLinks}>
                <Image
                  src={`assets/logo/images/logo-linkedin.png`}
                  className={`md:w-[35px] md:h-[35px] lg:w-[60px] lg:h-[60px]`}
                  width={0}
                  height={0}
                />
              </Link>
            </div>
          </div>
          <Image
            src={imageUrl}
            className={`md:w-[132px] md:h-[132px] lg:w-[200px] lg:h-[201.54px]`}
            height={0}
            width={0}
          />
        </div>
      ) : (
        <div
          className={`absolute inset-0 justify-between p-[14px] overflow-hidden`}
        >
          <div className="flex justify-between space-x-[16px]">
            <div className="text-bluePallete-800">
              <h5 className={`antialiased text-[8px] font-medium`}>
                {title}
              </h5>
              <p className={`antialiased break-words text-[15px] font-black`}>{name}</p>
            </div>
            <Image
              src={imageUrl}
              className={`w-[55px] h-[55px]`}
              height={0}
              width={0}
            />
          </div>
          <div className="relative w-fit">
            <Link href={socialLinks} target="_blank">
              <Image
                src={`assets/logo/images/logo-linkedin.png`}
                className={`w-[20px] h-[20px]`}
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