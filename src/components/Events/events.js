"use client";
import EventCard from "@/components/Events/Card/card";
import { useWindowSize } from "@uidotdev/usehooks";

export default function Events() {
  const size = useWindowSize();

  return (
    <>
      <div className="w-full h-[44px] md:h-[108px] bg-[#092C4C] rounded-[15px] mx-auto md:mb-[50px] lg:mb-0">
        <h3
          className={`text-[20px] md:text-h3 font-bold text-white flex justify-center items-center h-full`}
        >
          Our Event
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <EventCard
          img={`assets/about/images/workshop.png`}
          title={`STUDY GROUP`}
          description={`CCI Summit merupakan event  tahunan UKM CCI berupa  workshop/seminar/webinar/lomba  yang merepresentasikan 6 divisi  dari CCI`}
          isGreen={false}
        />
        <EventCard
          img={`assets/about/images/open-mind.png`}
          title={`MENTORING`}
          description={`CCI Summit merupakan event  tahunan UKM CCI berupa  workshop/seminar/webinar/lomba  yang merepresentasikan 6 divisi  dari CCI`}
          isGreen={true}
        />
        <EventCard
          img={`assets/about/images/cci-summit.png`}
          title={`CCI SUMMIT`}
          description={`CCI Summit merupakan event  tahunan UKM CCI berupa  workshop/seminar/webinar/lomba  yang merepresentasikan 6 divisi  dari CCI`}
          isGreen={size.width >= 1024 ? true : false}
        />
        <EventCard
          img={`assets/about/images/it-talks.png`}
          title={`IT TALKS`}
          description={`CCI Summit merupakan event  tahunan UKM CCI berupa  workshop/seminar/webinar/lomba  yang merepresentasikan 6 divisi  dari CCI`}
          isGreen={size.width >= 1024 ? false : true}
        />
        <EventCard
          img={`assets/about/images/workshop.png`}
          title={`WORKSHOP`}
          description={`CCI Summit merupakan event  tahunan UKM CCI berupa  workshop/seminar/webinar/lomba  yang merepresentasikan 6 divisi  dari CCI`}
          isGreen={false}
        />
        <EventCard
          img={`assets/about/images/bakti-sosial.png`}
          title={`BAKTI SOSIAL`}
          description={`CCI Summit merupakan event  tahunan UKM CCI berupa  workshop/seminar/webinar/lomba  yang merepresentasikan 6 divisi  dari CCI`}
          isGreen={true}
        />
        <EventCard
          img={`assets/about/images/open-mind.png`}
          title={`OPEN MIND`}
          description={`CCI Summit merupakan event  tahunan UKM CCI berupa  workshop/seminar/webinar/lomba  yang merepresentasikan 6 divisi  dari CCI`}
          isGreen={size.width >= 1024 ? true : false}
        />
        <EventCard
          img={`assets/about/images/it-competitions.png`}
          title={`IT COMPETITION`}
          description={`CCI Summit merupakan event  tahunan UKM CCI berupa  workshop/seminar/webinar/lomba  yang merepresentasikan 6 divisi  dari CCI`}
          isGreen={size.width >= 1024 ? false : true}
        />
      </div>
      <div className="hidden lg:flex justify-center lg:mt-[54px]">
        <button>
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#265290" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.9661 33.2082C49.9729 32.2014 51.6053 32.2014 52.6121 33.2082L68.0808 48.677C69.0876 49.6838 69.0876 51.3162 68.0808 52.323L52.6121 67.7918C51.6053 68.7986 49.9729 68.7986 48.9661 67.7918C47.9592 66.7849 47.9592 65.1526 48.9661 64.1457L60.0337 53.0781H32.7422C31.3183 53.0781 30.1641 51.9239 30.1641 50.5C30.1641 49.0761 31.3183 47.9219 32.7422 47.9219H60.0337L48.9661 36.8543C47.9592 35.8474 47.9592 34.2151 48.9661 33.2082Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
