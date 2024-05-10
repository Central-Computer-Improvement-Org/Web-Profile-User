import EventCard from "@/components/Division/EventCard";
import Divisions from "@/components/Team/team";
import Header from "@/components/header";
import Nav from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
   return (
      <>
         <Header />
         <Nav />
         <span className="block h-full bg-white">
            <span className="block h-full bg-gradientAccent">
               <main
                  className={`block bg-gradientDefault h-full bg-fixed bg-no-repeat pb-[25px] pt-[117px] md:py-[220px] relative md:px-[96px] lg:px-[47px] xl:px-[147px]`}
               >
                  <section
                     id="sejarah"
                     className={`text-pretty w-full h-auto mb-[39px] md:mb-[100px] px-[45px] md:px-0`}
                  >
                     <div className="container mx-auto text-pretty">
                        <h3
                           className={`text-[16px] md:text-h3 font-bold text-bluePallete-800`}
                        >
                           Sejarah CCI
                        </h3>
                        <p
                           className={`mt-[40px] text-justify text-[13px] md:text-[30px] font-medium text-bluePallete-800 break-words`}
                        >
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                           eu neque in ligula gravida pharetra sed et sem. Sed quis eros
                           non nisl sodales tincidunt. Etiam ultricies ultricies ipsum,
                           non cursus diam congue sed. Ut placerat erat in elit molestie,
                           id fermentum velit pellentesque. Quisque pharetra sed velit
                           egestas laoreet. Phasellus nec euismod quam. Interdum et
                           malesuada fames ac ante ipsum primis in faucibus. Nulla
                           facilisi. Vivamus viverra augue tortor, sit amet cursus nunc
                           porta vel. Maecenas enim magna, fringilla nec volutpat vitae,
                           tincidunt eget metus.
                        </p>
                     </div>
                  </section>
                  <section
                     id="event"
                     className={`h-full mb-[50px] md:mb-[80px] px-[45px] md:px-0`}
                  >
                     <div className="w-full h-auto flex flex-col mt-[50px] sm:mt-[80px] md:mt-[130px] pb-[70px] md:pb-[200px]">
                        <EventCard />
                     </div>
                  </section>
                  <section id="team" className={`h-full md:px-0`}>
                     <div className="container mx-auto flex flex-col items-center w-full">
                        <Divisions />
                     </div>
                  </section>
               </main>
            </span>
         </span>
         <Footer />
      </>
   );
}
