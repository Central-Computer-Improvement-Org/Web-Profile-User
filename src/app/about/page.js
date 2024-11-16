import EventCard from "@/components/Division/EventCard";
import IntiDivisions from "@/components/Team/team";

export default function About() {
   return (
      <>
         <main className="w-full h-auto">
            <span className="block h-full bg-gradientAccentTwo">
               <spacn className="block h-full bg-gradientDefaultTwo">
                  <div
                     className="w-full h-auto pb-[25px] pt-[100px] sm:pt-[117px] md:pb-[100px] lg:pb-[220px] md:pt-[220px] xl:max-w-[75rem] lg:max-w-[67rem] md:max-w-[51rem] sm:max-w-xl max-w-md px-5 sm:px-0 mx-auto"
                  >
                     <section
                        id="sejarah"
                        className="text-pretty w-full h-auto mb-[39px] md:mb-[100px]"
                     >
                        <div className="container mx-auto text-pretty">
                           <h3
                              className="text-[16px] md:text-h3 font-bold text-bluePallete-800"
                           >
                              Sejarah CCI
                           </h3>
                           <p
                              className={`mt-[20px] sm:mt-[40px] text-justify text-[13px] md:text-[30px] font-medium text-bluePallete-800 break-words`}
                           >
                              Sejarah terbentuknya UKM CCI berawal dari gagasan sekelompok mahasiswa yang memiliki ketertarikan yang sama akan teknologi, pada tahun 2006 bertempat di kampus STMB Telkom gegerkalong mulai terbentuk sebuah komunitas yang berfokus pada perkembangan teknologi, seiring berjalannya waktu komunitas ini berhasil disahkan menjadi sebuah UKM pada tahun 2006. Seiring berjalannya waktu UKM CCI IM Telkom mulai menunjukan apresiasinya terhadap institusi yakni dengan terciptanya media kampus yang di beri nama students yang di gagas oleh anggota – anggota CCI dalam bidang web & application development dan di sahkan pada bulan maret tahun 2009. Selain media kampus students 	CCI 	pun 	membantu 	kampus 	dalam pengembangan teknologinya yaitu terciptanya system e- vote untuk pemilihan BEM dan DPM IM Telkom yang menjadikan IM Telkom kampus pertama yang menggunakan
                              system e-vote dalam pemilihan ketua BEM dan DPM.
                              Central computer improvement adalah unit kegiatan mahasiswa fakultas ekonomi dan bisnis, universitas Telkom yang berfokus kepada perkembangan teknologi saat ini, kegiatan rutin kami yaitu membahas dan bertukar pengetahuan mengenai teknologi di mulai dari gadget, applikasi, hingga pengembangan software dan bertujuan untuk mengembangkan wawasan serta pengetahuan mahasiswa/mahasiswi universitas Telkom dalam bidang teknologi. CCI universitas Telkom memiliki berbagai divisi yaitu divisi media, divisi design, divisi web development, divisi data & research, divisi games & gadget dan divisi networking yang dimana tiap divisi bertanggung jawab untuk menjalankan program kerja tiap divisi yang berguna menambah wawasan dan pengetahuan mengenai teknologi bagi mahasiswa/mahasiswi universitas Telkom serta bagi lingkungan sekitar.
                           </p>
                        </div>
                     </section>
                     <section
                        id="event"
                        className="h-full mb-[50px] md:mb-[80px]"
                     >
                        <div className="w-full">
                           <div className="h-[44px] md:h-[108px] bg-[#092C4C] rounded-[15px] mx-auto md-[14px] md:mb-[30px]">
                              <h3 className={`text-[20px] md:text-h3 font-bold text-white flex justify-center items-center h-full`}>
                                 Our Event
                              </h3>
                           </div>
                        </div>
                        <div className="w-full h-auto flex flex-col mt-[50px] sm:mt-[80px] md:mt-[100px] pb-[70px] md:pb-[200px]">
                           <EventCard filterByDivisionName="All" />
                        </div>
                     </section>
                     <section id="team" className="w-full md:px-0">
                        <div className="container flex flex-col items-center w-full mx-auto">
                           <IntiDivisions />
                        </div>
                     </section>
                  </div>
               </spacn>
            </span>
         </main>
      </>
   );
};