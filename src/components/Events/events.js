"use client";
import EventCard from "@/components/Events/Card/card";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Events() {
  const size = useWindowSize();

  return (
    <>
      <div className="w-full h-[47px] lg:h-[92px] xl:h-[108px] bg-[#092C4C] rounded-[15px] mx-auto">
        <h3
          className={`text-[20px] lg:text-h3 font-bold text-white flex justify-center items-center h-full`}
        >
          Our Event
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <EventCard
          img={`.././images/cci-summit.png`}
          title={`CCI SUMMIT`}
          description={`CCI Summit merupakan event  tahunan UKM CCI berupa  workshop/seminar/webinar/lomba  yang merepresentasikan 6 divisi  dari CCI`}
          isGreen={true}
        />
        <EventCard
          img={`.././images/it-talks.png`}
          title={`IT TALKS`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit massa, ornare et fermentum cursus, malesuada eget tellus. Etiam eget ipsum eleifend, dictum nulla ac, ornare augue.`}
          isGreen={false}
        />
        <EventCard
          img={`.././images/workshop.png`}
          title={`WORKSHOP`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit massa, ornare et fermentum cursus, malesuada eget tellus. Etiam eget ipsum eleifend, dictum nulla ac, ornare augue.`}
          isGreen={size.width >= 1024 ? false : true}
        />
        <EventCard
          img={`.././images/bakti-sosial.png`}
          title={`BAKTI SOSIAL`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit massa, ornare et fermentum cursus, malesuada eget tellus. Etiam eget ipsum eleifend, dictum nulla ac, ornare augue.`}
          isGreen={size.width >= 1024 ? true : false}
        />
        <EventCard
          img={`.././images/open-mind.png`}
          title={`OPEN MIND`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit massa, ornare et fermentum cursus, malesuada eget tellus. Etiam eget ipsum eleifend, dictum nulla ac, ornare augue.`}
          isGreen={true}
        />
        <EventCard
          img={`.././images/it-competitions.png`}
          title={`IT COMPETITION`}
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit massa, ornare et fermentum cursus, malesuada eget tellus. Etiam eget ipsum eleifend, dictum nulla ac, ornare augue.`}
          isGreen={size.width >= 1024 ? false : false}
        />
      </div>
      <div className="hidden lg:flex justify-center lg:mt-[54px]">
        {/* <button>
          <Image
            src={`.././svgs/arrow-next.svg`}
            alt="arr-next"
            width={65}
            height={65}
          />
        </button> */}
      </div>
    </>
  );
}
