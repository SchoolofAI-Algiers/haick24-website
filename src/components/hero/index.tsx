import React, { useState } from 'react';
import {
  CubeLogo,
  HaickLogo,
  Numpy,
  Python,
  Pytorch,
  SoaiLogo,
  TF,
} from '../logos';
import { IoMdMenu } from 'react-icons/io';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { TbCalendarTime } from 'react-icons/tb';
import { IRemainingTime } from '../../types';
import { useEffect } from 'react';
import { MdClose } from "react-icons/md";
import './style.css';

const Hero: React.FC = () => {
  return (
    <div className="bg-skyBlueColor font-IPM relative flex flex-col items-center w-full min-h-screen gap-4 text-white py-6">
      <Navbar />
      <Landing />
      
      <div className="w-fit md:left-[10%] md:bottom-[5%] md:absolute flex flex-col items-start gap-2">
        <div className="flex items-center justify-center gap-4">
          <CiLocationOn className="text-oceanBlue w-6 h-6" />
          <span className="font-bold">ESI Algeria</span>
        </div>
        <div className="flex items-center justify-center gap-4">
          <TbCalendarTime className="text-oceanBlue w-6 h-6" />
          <span className="font-bold">April 25-27, 2024</span>
        </div>
      </div>
      <TimeRemaining />
      {/* absolute componenets */}
      <CubeLogo className="left-[15%] absolute w-20 bottom-1/2 animate-up sm:block hidden " />
      
      <Python className="sm:block animate-spin h-1/4 bottom-1/4 left-2/3 absolute hidden w-1/4" />
      <Numpy className="sm:block animate-spin h-1/4 left-1/2 top-1/4 absolute hidden w-1/4" />
      <TF className="sm:block animate-spin h-1/4 bottom-[10%] right-1/4 absolute hidden w-1/4" />
      <Pytorch className="sm:block animate-spin h-1/4 top-1/4 left-2/3 absolute hidden w-1/4" />
    </div>
  );
};
const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  //const [activeTab, setActiveTab] = useState<string>("");
  return (
    <div className="sm:justify-center sm:px-20 relative z-10 flex items-center justify-between w-full h-16 gap-4 px-4 py-6">
      <div className="w-[170px]">
        <SoaiLogo className="w-[100%] object-cover" />
      </div>

      <ul className="sm:flex items-center justify-center hidden w-full gap-6">
        {navbarElement.map((element, index) => (
          <li className="font-semibold text-xl font-IPM" key={index}>
            <a href={`#${element}`}>{element}</a>
          </li>
        ))}
      </ul>
      <button className="bg-oceanBlue sm:flex hidden px-4 py-2 font-bold rounded-full">
        Register
      </button>
     {!open &&  <IoMdMenu
        onClick={() => setOpen((prv) => !prv)}
        className="sm:hidden flex items-center justify-center w-8 h-8 cursor-pointer"
      />}
      {open && (
        <ul className="sm:hidden bg-midNightBlueColor py-4 rounded-l-lg fixed top-0 h-full z-20 right-0 flex flex-col items-center justify-center w-1/2 gap-4 ease-in-out">
          <MdClose size={20} className='absolute top-4 right-4' onClick={()=>setOpen(false)} />
          {navbarElement.map((element, index) => (
            <li className="font-semibold text-xl font-IPM hover:text-skyBlueColor">
              <a href={`#${element}`} key={index}>
                {element}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Landing: React.FC = () => {
  return (
    <div className="h-fit sm:h-full sm:z-10 flex flex-col items-center w-full gap-4 pt-44 pb-20">
      <HaickLogo className="w-1/3" />
      <h1 className="title font-WorkSans text-4xl font-semibold">
        is officially here !
      </h1>
      <button
        className="regBtn bg-oceanBlue px-7 py-2 text-[#000] rounded-full font-semibold hover:justify-center transition-all overflow-hidden"
      >
        {/*
       <span
          className={`${
            hoverd && "translate-x-5 transition-all delay-300 ease-in-out"
          }`}
        >
          Secure your place
        </span>
       */}

        <span
          className={'translate-x-0 flex items-center gap-4 hover:translate-x-5 hover:scale-125 transition-all delay-300 ease-in-out'}
        >
          Secure your place
       
        <AiOutlineArrowRight
          className={'animateRow transition-all delay-300 ease-in-out'}
        />
         </span>
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
    <div className="w-fit sm:right-[5%] sm:bottom-[5%] sm:absolute flex items-center justify-evenly gap-2 bg-[#080F1A] bg-opacity-40 p-2 rounded-xl shadow-lg backdrop-blur">
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
  const eventDate = new Date('2024-04-25');
  const diff = eventDate.getTime() - currentDate.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}
const navbarElement: string[] = [
  'Home',
  'About',
  'Agenda',
  'Mentors',
  'FAQ',
  'Contacts',
];
export default Hero;
