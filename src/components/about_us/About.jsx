import sphere from '../agenda/resources/topsphere.svg';
import pytorch from '../../assets/pyTorch_about.svg';
import SOAILogo from '../../assets/SOAI_LOGO_2.svg';
import Lines from '../../assets/Lines.svg';
import HaickLogo from '../../assets/HaickLogo.svg';
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
      <img src={curve1} className="absolute -left-16 top-[25%]" />
      <div className="box1">
        <div className="z-30 flex flex-col gap-8">
          <h1 className="text-midNightBlueColor text-center text-lg md:text-3xl lg:text-4xl lg:text-left font-IPM font-bold">
            What is SOAI ?
          </h1>
          <p className="text-lg lg:text-2xl font-WorkSans text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.{' '}
          </p>
        </div>
        <img
          src={SOAILogo}
          alt=""
          className="z-0 relative -right-10 top-4 lg:right-0 lg:top-0 pt-4 lg:w-[600px] lg:h-[350px] lg:block"
        />
        <img
          src={Lines}
          alt=""
          className="absolute bottom-5 translate-y-[100%] left-[20%] w-28 -translate-x-4 lg:left-[50%] lg:bottom-10 lg:translate-y-[100%] lg:-translate-x-6 lg:w-48"
        />
      </div>
      <img src={curve1} className="absolute -left-16 top-[66%]" />
      <div className="box2 ">
        <img
          src={HaickLogo}
          alt=""
          className="z-0 relative w-[130px] h-[40px] md:w-[400px] md:h-[130px] px-2 md:px-8"
        />
        <div className="z-30 flex flex-col gap-8">
          <h1 className="px-4 text-midNightBlueColor text-center font-IPM text-lg md:text-2xl lg:text-4xl font-bold">
            What is HAICK ?
          </h1>
          <p className="px-4 md:px-8 text-lg lg:text-2xl font-WorkSans text-center lg:text-left mx-1 md:mx-4">
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
