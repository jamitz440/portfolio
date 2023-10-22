"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { FaStarOfLife } from "react-icons/fa";

export default function App() {
  const [page, setPage] = useState("Home");
  return (
    <main className="w-screen ">
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
    <div className=" bg-card h-auto w-screen rounded-[50px] mx-16 -translate-y-32 grid grid-cols-3 gap-4">
      <div className="items-center  col-span-2 m-8">
        <div className="text-nav font-bold text-3xl text-primary">
          A little bit about me
        </div>
        <div className="mt-4 text-white font-nav text-xl">
          I began my career in the RAF as an avionics engineer. However, it was
          during my off-hours, tinkering with game creation in Unity3D, that I
          discovered a burgeoning passion for coding. This newfound enthusiasm
          led me to a coveted coding role within the Air Force, where I
          sharpened my skills with Python. Outside of my official duties, my
          insatiable curiosity drove me to explore Django and later, React. For
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
      </div>
      <div className="items-center col-start-3 text-center  bg-white rounded-[40px] m-8 aspect-square">
        Avatar Placeholder
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
    <div className="h-32 text-2xl flex items-center sticky top-0 w-full justify-around font-bold text-white bg-gradient-to-b from-background  to-transparent z-10">
      <h1
        onClick={handleOnClick}
        className={`${
          page === "Home" ? "underline" : ""
        } hover:underline underline-offset-4 decoration-primary decoration-2 hover:cursor-pointer`}
      >
        Home
      </h1>
      <h1
        onClick={handleOnClick}
        className={`${
          page === "About" ? "underline" : ""
        } hover:underline underline-offset-4 decoration-primary decoration-2 hover:cursor-pointer`}
      >
        About
      </h1>
      <span className="text-primary text-6xl">
        <FaStarOfLife />
      </span>
      <h1
        onClick={handleOnClick}
        className={`${
          page === "Work" ? "underline" : ""
        } hover:underline underline-offset-4 decoration-primary decoration-2 hover:cursor-pointer`}
      >
        Work
      </h1>
      <h1
        onClick={handleOnClick}
        className={`${
          page === "Contact" ? "underline" : ""
        } hover:underline underline-offset-4 decoration-primary decoration-2 hover:cursor-pointer`}
      >
        Contact
      </h1>
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-screen flex items-center">
      <div className="font-nav font-black text-white -translate-y-32 ml-32">
        <div className="text-8xl">
          <h1>Hello,</h1>
          <h1>my name is James</h1>
        </div>
        <div className="mt-4 font-semibold text-xl">
          <h1>
            Im a software engineer based in the UK. I have worked with PBAPro,
            Django and React frameworks
          </h1>
          <h1>Using languages such as Python and TypeScript.</h1>
        </div>
      </div>
    </div>
  );
};
