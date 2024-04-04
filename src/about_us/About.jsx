import sphere from "../agenda/resources/topsphere.svg"
import pytorch from "../../public/icons/pytorch.svg"
import SOAILogo from "../../public/icons/SOAI_LOGO_2.svg"
import BlueLine from "../agenda/resources/blueline.svg"
import Lines from "../../public/icons/Lines.svg"
import HaickLogo from "../../public/icons/HaickLogo.svg"
import Soai from "../../public/icons/SOAI.svg"
import "./about.css"
const About = () => {
    
  return (
      <div className="relative flex flex-col gap-[30px] md:gap-[65px] items-center min-h-screen overflow-hidden py-10 bg-skyBlueColor px-[20px] md:px-[75px]">
          <img src={pytorch} alt="" className='animate-spin absolute top-0 w-[100px] md:w-[200px] left-[35%]' />
        <img src={sphere} alt="" className='absolute top-0 w-[100px] md:w-[200px ] left-[35%]' />
        <img src={BlueLine} alt="blueLine" className="absolute z-30  top-[10%] right-[-92%] md:top-[15%] md:right-[-65%] lg:top-[32%] lg:right-[-39%] " />
      <h1 className="relative text-white font-IPM text-center text-[32px] md:text-[60px] font-bold mb-2 md:mb-4">About</h1>
      <div className="relative flex flex-col-reverse justify-center items-center  lg:flex-row bg-white py-[10px] md:py-[20px] rounded-2xl shadow-xl bottom-8 shadow-white px-2">
        <div className="z-30 flex flex-col gap-8">
                  <h1 className="px-1 md:px-4 text-midNightBlueColor text-center text-[24px] lg:text-left font-IPM md:text-[55px] font-bold">What  is SOAI ?</h1>
                  <p className="px-2 md:px-8 text-[8px]  md:text-[24px] font-WorkSans text-center md:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
              </div>
              <img src={SOAILogo} alt="" className='z-0 relative pt-4 w-[600px] h-[350px] hidden lg:block' />
              <div className="px-1 w-full h-[0.5px] bg-midNightBlueColor lg:hidden"></div>
              <img src={Soai} alt="" className='z-0 relative pt-2 w-[150px] h-[70px] md:w-[200px] md:h-[100px] lg:hidden' />
              
      </div>
      <img src={Lines} alt="" className="absolute left-[46.5%] top-[13%] md:top-[24%] lg:top-[50%] z-30 w-[80px] h-[150px] md:w-[120px] md:h-[200px] lg:w-[190px] lg:h-[200px]" />
          <div className="relative justify-center items-center flex flex-col-reverse lg:flex-row bg-white gap-4 top-4 lg:top-8 py-[20px] rounded-2xl shadow-xl shadow-white mb-10">
             
              <img src={HaickLogo} alt="" className='z-0 relative w-[130px] h-[40px] md:w-[400px] md:h-[130px] px-2 md:px-8' />
              <div className="z-30 flex flex-col gap-8">
                  <h1 className="px-4 text-midNightBlueColor text-center font-IPM text-[24px] md:text-[55px] font-bold">What  is HAICK ?</h1>
                  <p className="px-4 md:px-8 text-[8px] md:text-[24px] font-WorkSans text-center lg:text-left mx-1 md:mx-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
              </div>

          </div>
    </div>
  );
}
export default About;