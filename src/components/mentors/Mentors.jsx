import React from "react";
import curve from "../../assets/Curve.svg";
import curve1 from "../../assets/Curve-1.svg";
import curve2 from "../../assets/Curve-2.svg";
import lights from "../../assets/lights.svg";
import pytorch from "../../assets/pytorch.svg";
import glow from "../../assets/glow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import "./style.css";
import { mentorsData } from "../../data/mentorsData";

const Mentor = ({ name, desc, img }) => {
  return (
    <div className="relative" id="Mentors">
      <div className="polygon w-full mt-20 flex flex-col gap-6 items-center justify-center py-32 px-10 mentor">
        
        <h1 className="font-bold font-IPM text-4xl text-center text-white ">
          {name}
        </h1>
        <p className="font-medium font-IPM text-lg text-center text-white px-16 text-wrap">
          {desc}
        </p>
      </div>
      <div className="absolute w-40 h-40 top-0 left-[50%] -translate-x-[50%] -translate-y-[40%] size-1/2">
          <img src={img} alt="" className="rounded-full" />
        </div>
    </div>
  );
};

const Mentors = () => {
  return (
    <div
      className="bg-skyBlueColor w-full px-5 md:px-10 py-10 gap-y-10 flex flex-col overflow-hidden relative"
      id="mentors"
    >
      <h1 className="font-bold font-IPM text-white text-center text-6xl max-md:text-4xl mt-8 lg:mt-0">
        Our Mentors
      </h1>
      <p className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[50%] font-bold text-white text-[2rem] md:text-[2.5rem] lg:text-[3rem]">COMING SOON</p>
      <div className="blur-md opacity-50 z-10">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          800: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, ]}
        className="flex pt-44 w-full swiper"
      >
        {mentorsData.map((mentor, index) => {
          return (
            <SwiperSlide>
              <Mentor key={index} {...mentor} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <Swiper
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="flex w-full pt-24 swiper"
      >
        {mentorsData.map((mentor, index) => {
          return (
            <SwiperSlide>
              <Mentor key={index} {...mentor} />
            </SwiperSlide>
          );
        })}
      </Swiper> */}
      </div>
      <div className="hidden absolute right-20 bottom-0 md:blur-[2px] max-md:hidden">
        <img src={curve} alt="" />
      </div>
      <div className="hidden absolute left-0 top-32 md:blur-[2px]">
        <img src={curve1} alt="" />
      </div>
      <div className="hidden absolute left-6 bottom-0 md:blur-[2px] ">
        <img src={curve2} alt="" />
      </div>
      <div className="hidden absolute size-full left-0 top-16 ">
        <img src={lights} alt="" />
      </div>
      <div className="hidden absolute left-[calc(25%-35px)] top-[35%] z-50 md:top-[calc(50%-50px)]  rounded-full animate-spin size-40 bg-trasnparent border-2 border-solid border-[#293757]">
        <img src={pytorch} alt="" className="absolute size-1/6 mt-5" />
      </div>
      <div className="hidden absolute right-1/4 top-2/3 opacity-50 ">
        <img src={glow} alt="" />
      </div>
    </div>
  );
};

export default Mentors;
