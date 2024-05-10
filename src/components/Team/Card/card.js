'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useWindowSize } from '@uidotdev/usehooks';
import { host } from '@/components/host';

export default function TeamCard({
   profileUri,
   title,
   name,
   linkedinUri,
   isRight,
   isLeft,
}) {
   const size = useWindowSize();

   return (
      <div
         className="h-auto flex justify-around items-center mt-[21px] min-w-[45%] bg-[#B5E4C9] px-[10px] py-[46px] rounded-xl w-[40%]"
      >
         {size.width >= 768 ? (
            <div
               className={`inset-0 w-full px-10 space-x-[1rem] flex items-center justify-between`}
            >
               <div className="md:space-y-[16px] lg:space-y-[32px] xl:space-y-[56px]">
                  <div className="text-bluePallete-800">
                     <h5
                        className={`antialiased md:text-[12px] lg:text-large font-medium`}
                     >
                        {title}
                     </h5>
                     <p className={`antialiased md:text-h5 lg:text-[40px] font-black`}>
                        Faiz Elfahad Kurniawan
                     </p>
                  </div>
                  <div>
                     <Link href={linkedinUri}>
                        <Image
                           src={`assets/logo/images/logo-linkedin.png`}
                           className={`md:w-[35px] md:h-[35px] lg:w-[60px] lg:h-[60px]`}
                           width={0}
                           height={0}
                           alt="logo linkedin"
                        />
                     </Link>
                  </div>
               </div>
               <Image
                  src={host + profileUri}
                  className={`md:w-[132px] md:h-[132px] lg:w-[200px] lg:h-[201.54px] m`}
                  height={0}
                  width={0}
                  alt="profile picture"
               />
            </div>
         ) : (
            <div
               className={`absolute inset-0 justify-between p-[14px] overflow-hidden`}
            >
               <div className="flex justify-between space-x-[16px]">
                  <div className="text-bluePallete-800">
                     <h5 className={`antialiased text-[8px] font-medium`}>{title}</h5>
                     <p className={`antialiased break-words text-[15px] font-black`}>
                        {name}
                     </p>
                  </div>
                  <Image
                     src={host + profileUri}
                     className={`w-[55px] h-[55px]`}
                     height={0}
                     width={0}
                     alt="profile picture"
                  />
               </div>
               <div className="relative w-fit">
                  <Link href={linkedinUri} target="_blank">
                     <Image
                        src={`assets/logo/images/logo-linkedin.png`}
                        className={`w-[20px] h-[20px]`}
                        width={0}
                        height={0}
                        alt=""
                     />
                  </Link>
               </div>
            </div>
         )}
      </div>
   );
}
