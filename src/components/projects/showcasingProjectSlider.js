import React from 'react';
import Image from 'next/image';

import { host } from '../host';
import NotFound from '../imageNotFound';

export default function ShowcasingProjectSlider({ image, speed }) {
   return (
      <>
         <div
            x-data="{}"
            x-init="$nextTick(() => {
               let ul = $refs.logos;
               ul.insertAdjacentHTML('afterend', ul.outerHTML);
               ul.nextSibling.setAttribute('aria-hidden', 'true');
            })"
            className="inline-flex w-full overflow-hidden flex-nowrap"
         >
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-3 sm:[&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll">
               {image || image !== undefined || image !== null || image?.length > 0 ? (
                  image.map((data, index) => (
                     <li
                        className="lg:!w-[375px] md:!w-[275px] !w-[165px] lg:!h-[208px] max-w-[250px] max-h-[150px]"
                        key={index}
                     >
                        {data.imageUri ? <Image
                           width={0}
                           height={0}
                           alt="Project Logo CCI"
                           src={`${host}${data?.imageUri}`}
                           className="w-full h-full aspect-video object-cover rounded-[10px]" // Jika gambar yg dinput horizontal
                           // className="w-full h-full aspect-video object-contain rounded-[10px]" // Jika gambar yg dinput kotak
                           priority={true}
                        /> : <NotFound />}
                     </li>
                  ))
               ) : (
                  <div className="w-full h-[50px]">
                     <NotFound />
                  </div>
               )}
            </ul>
            <ul
               className="flex items-center justify-center md:justify-start [&_li]:mx-3 sm:[&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll"
               aria-hidden="true"
            >
               {image || image !== undefined || image !== null || image?.length > 0 ? (
                  image.map((data, index) => (
                     <li
                        className="lg:!w-[375px] md:!w-[275px] !w-[165px] lg:!h-[208px] max-w-[250px] max-h-[150px]"
                        key={index}
                     >
                        {data.imageUri ? <Image
                           width={0}
                           height={0}
                           src={`${host}${data?.imageUri}`}
                           alt="Project Logo CCI"
                           className="w-full h-full aspect-video object-cover rounded-[10px]" // Jika gambar yg dinput horizontal 
                        // className="w-full h-full aspect-video object contain rounded-[10px]" // Jika gambar yg dinput kotak
                        /> : <NotFound />}
                     </li>
                  ))
               ) : (
                  <div className="w-full h-[50px]">
                     <NotFound />
                  </div>
               )}
            </ul>
         </div>
      </>
   );
};