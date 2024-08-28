import Image from "next/image";
import React from "react";


export default function CardCreditProfile({
   color,
   jobdes,
   name,
   linkedinUri,
   image,
}) {
   const jobDescription = (jobdes) => {
      let aliasJob;
      if (jobdes === "Ketua") {
         aliasJob = "Precident";
      } else if (jobdes === "Wakil Ketua") {
         aliasJob = "Vice Precident";
      }

      return (
         <p className="xl:text-[20px] md:text-[16px] text-[15px] font-medium text-bluePallete-800">
            {aliasJob ? aliasJob : jobdes}
         </p>
      )
   }

   return (
      <div
         className={`w-full h-[152px] sm:h-full max-h-[286px] flex gap-5 px-[16px] py-[15px] sm:px-8 sm:py-10 rounded-[15px] ${color}`}
      >
         <div className="basis-[40%] sm:basis-6/12 flex flex-col">
            {jobDescription(jobdes)}
            <h1 className="lg:max-h-[130px] max-h-[80px] overflow-hidden xl:text-[40px] md:text-[24px] text-[25px] font-black leading-[40px] text-bluePallete-800">
               {name}
            </h1>
            <a href={linkedinUri} target="_blank" rel="noopener noreferrer">
               <Image
                  className="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] mt-0 sm:mt-5 object-cover"
                  src="assets/uploads/member/logo/logo-linkedin.png"
                  width={60}
                  height={60}
                  alt="Logo Linkedin Ketua Divisi"
               ></Image>
            </a>
         </div>
         <div className="basis-[60%] sm:basis-6/12 flex items-center justify-end">
            <Image
               src={image}
               alt="Profile Image Member Central Computer Improvement"
               width={200}
               height={201}
               responsive="true"
               className="w-[120px] h-[120px] lg:w-[200px] lg:h-[201px] rounded-[20px] object-cover"
            />
         </div>
      </div>
   );
}
