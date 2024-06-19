import pytorch from '../../assets/pyTorch_about.svg';
import {SoaiLogo, HaickLogo} from '../logos';
import Lines from '../../assets/Lines.svg';
import curve1 from '../../assets/curve1_about.svg';


import './about.css';
const About = () => {
  return (
    <div id='About' className="relative flex flex-col gap-[30px] md:gap-[65px] items-center min-h-screen py-10 bg-skyBlueColor px-[20px] md:px-[75px]">
      <img
        src={pytorch}
        alt=""
        className="animate-spin absolute top-0 w-[100px] md:w-[200px] left-[35%]"
      />
      <div className=' w-56 h-56 bg-midNightBlueColor blur-[200px] absolute top-0' />
      <h1 className="relative text-white font-IPM text-xl text-center md:text-[60px] font-bold mb-2 md:mb-4">
        About
      </h1>
      <img src={curve1} className="absolute -left-16 top-[30%] hidden md:block" />
      <div className="box1">
        <div className="z-30 flex flex-col gap-8 lg:w-[75%] ">
          <h1 className="text-midNightBlueColor text-center text-lg md:text-3xl lg:text-4xl lg:text-left font-IPM font-bold">
            What is SOAI ?
          </h1>
          <p className="text-lg lg:text-2xl font-WorkSans text-justify text-white">
          School of AI Algiers is a scientific club established in 2018 at the Higher National School of Computer Science (ESI Algiers). 
          The club unites young, motivated AI enthusiasts to help them unlock their potential and enhance their skills in the field of artificial intelligence. 
          To achieve this, the club organizes a range of events, including Haick, a datathon where participants address AI and data science challenges. 
          Additionally, the club hosts international conferences such as AiSummit and Indaba, alongside internal events designed specifically for its members.
          {' '}
          </p>
        </div>
        <SoaiLogo className="mx-10 pt-4 sm:w-[30%] md:w-[75%] md:pt-8 lg:w-[50%] lg:px-[50px] w-[50%] h-auto"  />
        <img
          src={Lines}
          alt=""
          className="absolute hidden md:block h-[110px] md:h-[150px] left-[25%] top-[100%] transform translate-x-[-50%] translate-y-[-10%]"
        />
      </div>
      <img src={curve1} className="absolute hidden md:block -left-16 top-[66%]" />
      <div className="box2 ">
      <HaickLogo className="mx-10 pt-4 sm:w-[30%] md:w-[75%] md:pt-8 lg:w-[50%] lg:px-[50px] w-[50%] h-auto" />
        <div className="z-30 flex flex-col gap-8 lg:w-[75%]">
          <h1 className="px-4 text-midNightBlueColor text-center font-IPM text-lg md:text-2xl lg:text-4xl font-bold">
            What is HAICK ?
          </h1>
          <p className="px-4 md:px-8 text-lg lg:text-2xl font-WorkSans text-center text-justify mx-1 md:mx-4 text-white">
          HAICK, an event organized by the School of AI Algiers (SOAI), is a notable datathon in Algeria. 
          It brings together local companies and researchers who present real-world problems along with relevant data, 
          inviting Algerian data scientists and AI enthusiasts to develop and compete with their solutions. 
          The first HAICK event was held in 2022, followed by a second edition in 2023, which included a series of workshops.
          {' '}
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
