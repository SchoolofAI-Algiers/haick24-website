import Accordion from "./Accordion";
import { faq } from "./data";
import span from './logo/span.svg';
import pytorch2 from './logo/pytorch2.svg';
import TF from './logo/TF.svg';
import one from './logo/one.svg';
import two from './logo/two.svg'
import three from './logo/three.svg'

const Faq = () => {
  return (
    <section id="Faq" className="px-8  sm:px-20 lg:px-[12vw]  pb-48  flex  justify-center flex-col bg-skyBlueColor text-white font-libre-franklin relative ">
      <h1 className=" text-6xl  font-bold text-center py-20" >FAQ</h1>
      <img src={one} alt="" className="absolute right-0 top-20 w-1/4  " />
      <img src={two} alt="" className="absolute right-0 top-40 w-1/3 " />
      <img src={three} alt="" className="absolute left-0 w-4/5 top-[30rem] pt-56"/>
      <img src={span} alt="" className='absolute top-96 right-0 w-auto h-auto z-[10] ' />
      <img src={pytorch2} alt=""  className='absolute animate-spin   z-[10]  h-1/4 w-1/2 right-20   sm:w-1/3 sm:h-1/3 md:w-1/4 md:h-1/3  top-80 mt-72' />
      <img src={TF} alt="" className='absolute animate-spin right-16  lg:w-1/6 lg:h-1/4 sm:w-1/4 sm:h-1/4  w-1/4 h-1/5  z-[10] top-40    ' />

      <div className=" md:px-20 z-20 mx-auto space-y-8 px-8 w-full flex items-center justify-center flex-col ">
        {faq.map((x, index) => (
          <Accordion title={x.question} text={x.answer} key={index} />
        ))}
      </div>


    </section>
  );
};

export default Faq;
