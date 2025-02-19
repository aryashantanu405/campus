import Image from "next/image";
import "./Home.css";
import mypic from "./assets/2.png";
import natvansh from "./assets/natvansh.png";
import vista from "./assets/vista.png";
import hackslash from "./assets/hackslash.png";
import saptak from "./assets/saptak.png";
import ieee from "./assets/ieee.png";
import desco from "./assets/desco.png";
import thinkindia from "./assets/thinkindia.png";
import gyb from "./assets/gyb.png";
import expresso from "./assets/expresso.png";
import ecell from "./assets/ecell.png";
import ClubCard from "./Clubs/ClubCard";
export default function HomePage() {
  const clubs= [
    {
      name: "Natvansh",
      description: "A cultural club promoting traditions and heritage.",
      imageUrl: natvansh,
      width: 300,
      height: 200,
    },
    {
      name: "Vista",
      description: "A club for creative thinkers and designers.",
      imageUrl: vista,
      width: 400,
      height: 250,
    },
    {
      name: "Hackslash",
      description: "A community for coding and open-source enthusiasts, developing projects and grinding DSA",
      imageUrl: hackslash,
      width: 350,
      height: 220,
    },
    {
      name: "Saptak",
      description: "A club dedicated to music and performing arts.",
      imageUrl: saptak,
      width: 320,
      height: 180,
    },
    {
      name: "IEEE",
      description: "Advancing technology for the benefit of humanity.",
      imageUrl: ieee,
      width: 300,
      height: 200,
    },
    {
      name: "Desco",
      description: "A club for design and multimedia enthusiasts.",
      imageUrl: desco,
      width: 360,
      height: 240,
    },
    {
      name: "Think India",
      description: "A club focusing on national and social awareness.",
      imageUrl: thinkindia,
      width: 300,
      height: 80,
    },
    {
      name: "GYB",
      description: "Grow Your Business - Entrepreneurship and leadership.",
      imageUrl: gyb,
      width: 400,
      height: 250,
    },
    {
      name: "Expresso",
      description: "A club for writers, poets, and public speakers.",
      imageUrl: expresso,
      width: 350,
      height: 200,
    },
    {
      name: "E-Cell",
      description: "Entrepreneurship and startup incubation club.",
      imageUrl: ecell,
      width: 380,
      height: 220,
    },
  ];
  return (
    <>
      <section className="bg-home_hero_bg dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div
            className=" text-center
        md:text-left mr-auto place-self-center lg:col-span-7"
          >
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-6xl xl:text-9xl dark:text-white">
              UNIFY
            </h1>
            <h4 className="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-2xl font-semibold dark:text-gray-400">
              Unify: Your Ultimate Hub for Campus Life – Stay Informed, Stay
              Connected!
            </h4>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 ml-10 text-base font-medium text-center text-black border border-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              How it works
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
            <Image
              src={mypic}
              width={500}
              height={500}
              alt="unify logo"
              className="rounded-lg custom-shadow"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-8 p-8">
        <div className="grid grid-col-2 gap-6 md:grid-cols-2 lg:grid-cols-5 max-w-screen-2xl mx-auto px-4">
          {clubs.map((club, index) => (
            <ClubCard key={index} {...club} />
          ))}
        </div>
      </section>
    </>
  );
}
