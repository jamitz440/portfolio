"use client";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { FaStarOfLife } from "react-icons/fa";
import thatsme from "../public/thats_me.png";
import thatsmesm from "../public/sm_thats_me.png";
import avatar from "../public/IMG_1506.jpg";
import wave from "../public/wave.png";

export default function App() {
  const [page, setPage] = useState("Home");

  return (
    <main className="w-screen snap-y">
      <NavBar page={page} setPage={setPage} />
      <div className=" items-center flex h-screen">
        <Home />
      </div>
      <div className=" items-center flex h-screen">
        <Card />
      </div>
    </main>
  );
}

const Card = () => {
  return (
    <div
      id="About"
      className="justify-center items-center text-center lg:text-left h-auto w-screen rounded-[50px] mx-4 md:mx-8 -translate-y-32 grid-row-3 grid lg:grid-cols-3 gap-12 snap-center "
    >
      <div className="items-center col-span-2 md:m-8 m-2">
        <div className="text-nav font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-primary ">
          A little bit about me
        </div>
        <div className="mt-4 text-white font-nav font-semibold text-sm  lg:text-md xl:text-lg 2xl:text-xl">
          I began my career in the RAF as an avionics engineer. However, it was
          during my off-hours, tinkering with game creation in Unity3D, that I
          discovered a burgeoning passion for coding. This newfound enthusiasm
          led me to a coveted coding role within the Air Force, where I
          sharpened my skills with Python. Outside of my official duties, my
          curiosity drove me to explore Django and later, React. For
          me, every coding challenge presents a puzzle, and I revel in piecing
          together its solution.
          <br />
          <br /> When I'm not immersed in lines of code, you can find me
          engrossed in the world of 3D printing. <br />
          <br />
          As for the future? My aspirations are clear-cut: I'm on a quest to
          cement my position in the software development realm, whether that
          means building robust applications or designing web wonders. The
          journey so far has been a whirlwind of excitement, and I eagerly await
          the countless lines of code that lie ahead.
        </div>
        {/* <div className=" col-start-3 rounded-[40px] w-full mt-4 lg:hidden aspect-square h-0 mb-0">
          <img
            className=" relative w-1/2 rounded-[40px] m-4 border-8 border-card mx-auto"
            src={avatar.src}
          />
          <img
            src={thatsmesm.src}
            className=" absolute -bottom-96 -left-6 w-1/4"
          />
        </div> */}
      </div>
      <div className="relative items-center col-start-3 text-center rounded-[40px] m-8 aspect-square hidden lg:block">
        <img src={thatsme.src} className=" absolute -top-14 -left-6" />
        <img
          className="m-4 w-auto rounded-[40px] m-4 border-8 border-card"
          src={avatar.src}
        ></img>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div
      id="home"
      className="w-screen h-screen grid grid-cols-3 items-center justify-center"
    >
      <div className="font-nav font-black text-white -translate-y-32 m-8 lg:ml-32 snap-center col-span-3 lg:col-span-2 items-center text-center lg:text-left">
        <div className=" text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          <h1>Hello,</h1>
          <h1>
            my name is <span className="text-primary">James</span>
          </h1>
        </div>
        <div className="mt-4 font-semibold lg:text-md xl:text-lg 2xl:text-xl">
          <h1>
            Im a software engineer based in the UK. I have worked with PBAPro,
            Django and React frameworks
          </h1>
          <h1>Using languages such as Python and TypeScript.</h1>
        </div>
      </div>
      <div className="m-32 items-center flex justify-center col-start-3 lg:block hidden">
        <img src={wave.src} className="-translate-y-32 mr-12" />
      </div>
    </div>
  );
};

interface NavBar {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
}
const NavBar = ({ page, setPage }: NavBar) => {
  function handleOnClick(e: any) {
    setPage(e.target.innerHTML);
  }
  return (
    <div className=" h-32 text-lg lg:text-2xl flex items-center sticky top-0 justify-around font-bold text-white bg-gradient-to-b from-background to-transparent z-10">
      <a
        onClick={handleOnClick}
        href="#top"
        className={`${
          page === "Home" ? "" : ""
        } hover:underline underline-offset-4 decoration-primary decoration-2 hover:cursor-pointer`}
      >
        Home
      </a>
      <a
        onClick={handleOnClick}
        href="#About"
        className={`${
          page === "About" ? "" : ""
        } hover:underline underline-offset-4 decoration-primary decoration-2 hover:cursor-pointer`}
      >
        About
      </a>
      <span className="text-primary text-4xl lg:text-6xl">
        <FaStarOfLife />
      </span>
      <a
        onClick={handleOnClick}
        className={`${
          page === "Work" ? "" : ""
        } hover:underline underline-offset-4 decoration-primary decoration-2 hover:cursor-pointer`}
      >
        Work
      </a>
      <a
        onClick={handleOnClick}
        className={`${
          page === "Contact" ? "" : ""
        } hover:underline underline-offset-4 decoration-primary decoration-2 hover:cursor-pointer`}
      >
        Contact
      </a>
    </div>
  );
};
