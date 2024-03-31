import React, { useState } from "react";
import {
  CubeLogo,
  HaickLogo,
  Numpy,
  Python,
  Pytorch,
  SoaiLogo,
  TF,
} from "../logos";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { TbCalendarTime } from "react-icons/tb";
import { IRemainingTime } from "../../types";
import { useEffect } from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-skyBlueColor font-IPM relative flex flex-col items-center w-full min-h-screen gap-4 text-white">
      <Navbar />
      <Landing />
      <TimeRemaining />

      {/* absolute componenets */}
      <CubeLogo className="left-[15%] absolute w-20 bottom-1/2 animate-up sm:block hidden " />
      <div className="w-fit left-[10%] bottom-[5%] absolute flex flex-col items-start gap-2 z-10">
        <div className="flex items-center justify-center gap-4">
          <CiLocationOn className="text-oceanBlue w-6 h-6" />
          <span className="font-bold">ESI Algeria</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <TbCalendarTime className="text-oceanBlue w-6 h-6" />
          <span className="font-bold">April 25-27, 2024</span>
        </div>
      </div>
      <div className=" sm:h-[35%] h-1/2 bg-gradient-to-b w-0.5 from-[#56D364] via-[#2EA043] to-[#0D1117] absolute left-1/2 top-1/2 sm:top-[65%]  " />
      <Python className="sm:block animate-spin h-1/4 bottom-1/4 left-2/3 absolute hidden w-1/4" />
      <Numpy className="sm:block animate-spin h-1/4 left-1/2 top-1/4 absolute hidden w-1/4" />
      <TF className="sm:block animate-spin h-1/4 bottom-[10%] right-1/4 absolute hidden w-1/4" />
      <Pytorch className="sm:block animate-spin h-1/4 top-1/4 left-2/3 absolute hidden w-1/4" />
    </div>
  );
};
const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("");
  return (
    <div className=" sm:justify-center sm:px-20 relative z-10 flex items-center justify-between w-full h-16 gap-4 px-4 py-2">
      <SoaiLogo className=" sm:w-1/6 w-1/2" />
      <ul className="sm:flex items-center justify-center hidden w-full gap-4">
        {navbarElement.map((element, index) => (
          <a
            href={`#${element}`}
            key={index}
            onClick={() => setActiveTab(element)}
            className={`font-semibold text-xl  ${
              activeTab === element
                ? "text-oceanBlue underline-offset-8 underline"
                : "text-white"
            }`}
          >
            {element}
          </a>
        ))}
      </ul>
      <button className="bg-oceanBlue sm:flex hidden px-4 py-2 font-bold rounded-full">
        Register
      </button>
      <IoMdMenu
        onClick={() => setOpen((prv) => !prv)}
        className=" sm:hidden flex items-center justify-center w-8 h-8 cursor-pointer"
      />
      {open && (
        <ul className="sm:hidden top-16 bg-skyBlueColor absolute right-0 z-10 flex flex-col items-center justify-center w-1/2 gap-4">
          {navbarElement.map((element, index) => (
            <a
              href={`#${element}`}
              key={index}
              onClick={() => setActiveTab(element)}
              className={`font-semibold text-xl  ${
                activeTab === element
                  ? "text-oceanBlue underline-offset-8 underline"
                  : "text-white"
              }`}
            >
              {element}
            </a>
          ))}
        </ul>
      )}
    </div>
  );
};

const Landing: React.FC = () => {
  const [hoverd, setHoverd] = useState<boolean>(false);
  return (
    <div className=" h-fit sm:h-full sm:z-10 flex flex-col items-center justify-center w-full gap-4 py-20">
      <HaickLogo className="w-1/3" />
      <h1 className="font-WorkSans text-4xl font-semibold">
        is officially here !
      </h1>
      <button
        className="bg-oceanBlue flex items-center gap-4 px-4 py-2 text-[#000] rounded-full font-semibold hover:justify-center transition-all"
        onMouseEnter={() => setHoverd(true)}
        onMouseLeave={() => setHoverd(false)}
      >
        <span
          className={`${
            hoverd && "translate-x-5  transition-all delay-300 ease-in-out"
          }`}
        >
          Secure your place
        </span>
        <AiOutlineArrowRight
          className={`${
            hoverd &&
            "translate-x-full invisible  transition-all delay-300 ease-in-out"
          }`}
        />
      </button>
    </div>
  );
};

const TimeRemaining: React.FC = () => {
  const [time, setTime] = useState<IRemainingTime>(calcTimeRemaining());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calcTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-fit sm:right-[5%] sm:bottom-[5%] sm:absolute flex items-center justify-evenly gap-2 bg-[#080F1A] bg-opacity-40 p-2 rounded-xl shadow-lg backdrop-blur z-10">
      {Object.keys(time).map((key: string) => (
        <div
          key={key}
          className=" flex flex-col items-center justify-center  rounded-full bg-[#080F1A] p-2 w-20 h-20"
        >
          <span className="text-xl font-bold">{time[key]}</span>
          <span className="font-extralight text-xs">{key}</span>
        </div>
      ))}
    </div>
  );
};
function calcTimeRemaining(): IRemainingTime {
  const currentDate = new Date();
  const eventDate = new Date("2024-04-25");
  const diff = eventDate.getTime() - currentDate.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}
const navbarElement: string[] = [
  "Home",
  "About",
  "Agenda",
  "Mentors",
  "FAQ",
  "Contacts",
];
export default Hero;
