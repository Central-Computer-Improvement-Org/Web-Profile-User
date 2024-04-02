import Header from "@/components/Header/header";
import Nav from "@/components/Nav/nav";
import Navbar from "@/components/Nav/navbar";
import Events from "@/components/Events/events";
import Divisions from "@/components/Divisions/divisions";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />
      <main
        className={`bg-gradient-to-tl from-white to-background h-full bg-fixed bg-no-repeat px-[80px] md:px-120 py-120 md:py-[10rem]`}
      >
        <section
          id="sejarah"
          className={`container h-full mb-[3rem] lg:mb-[11rem]`}
        >
          <h3 className={`text-h4 md:text-h3 font-bold text-blue-darkActive`}>
            Sejarah CCI
          </h3>
          <p
            className={`mt-40 text-normal md:text-large lg:text-h5 xl:text-h4 font-medium text-blue-darkActive`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            neque in ligula gravida pharetra sed et sem. Sed quis eros non nisl
            sodales tincidunt. Etiam ultricies ultricies ipsum, non cursus diam
            congue sed. Ut placerat erat in elit molestie, id fermentum velit
            pellentesque. Quisque pharetra sed velit egestas laoreet. Phasellus
            nec euismod quam. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Nulla facilisi. Vivamus viverra augue tortor, sit amet
            cursus nunc porta vel. Maecenas enim magna, fringilla nec volutpat
            vitae, tincidunt eget metus.
          </p>
        </section>
        <section
          id="event"
          className={`container h-full mb-[50px] md:mb-[80px]`}
        >
          <Events />
        </section>
        <section
          id="team"
          className={`container h-full mb-[50px] md:mb-[80px]`}
        >
          <Divisions />
        </section>
      </main>
    </>
  );
}
