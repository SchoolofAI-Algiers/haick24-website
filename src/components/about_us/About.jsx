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
        <div className="z-30 flex flex-col gap-8">
          <h1 className="text-midNightBlueColor text-center text-lg md:text-3xl lg:text-4xl lg:text-left font-IPM font-bold">
            What is SOAI ?
          </h1>
          <p className="text-lg lg:text-2xl font-WorkSans text-center md:text-left text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.{' '}
          </p>
        </div>
        <SoaiLogo className="mx-10 pt-4 sm:w-[30%] md:w-[75%] md:pt-8 lg:w-[60%] w-[50%] h-auto"  />
        <img
          src={Lines}
          alt=""
          className="absolute hidden md:block h-[110px] md:h-[150px] left-[25%] top-[100%] transform translate-x-[-50%] translate-y-[-10%]"
        />
      </div>
      <img src={curve1} className="absolute hidden md:block -left-16 top-[66%]" />
      <div className="box2 ">
      <HaickLogo className="z-0 relative sm:w-[30%] md:w-[75%] md:pt-8 lg:w-[60%] w-[50%] h-auto px-2 md:px-8" />
        <div className="z-30 flex flex-col gap-8">
          <h1 className="px-4 text-midNightBlueColor text-center font-IPM text-lg md:text-2xl lg:text-4xl font-bold">
            What is HAICK ?
          </h1>
          <p className="px-4 md:px-8 text-lg lg:text-2xl font-WorkSans text-center lg:text-left mx-1 md:mx-4 text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
