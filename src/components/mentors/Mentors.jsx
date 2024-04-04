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
    <div className="polygon  flex flex-col items-center justify-center">
      
        <div className="size-1/2">
          <img src={img} alt="" className="" />
        </div>
        <h1 className="font-bold font-IPM text-4xl text-center text-white ">
          {name}
        </h1>
        <p className="font-medium font-IPM text-lg text-center text-white px-16 text-wrap">
          {desc}
        </p>
      
    </div>
  );
};

const Mentors = () => {
  return (
    <div
      className="bg-skyBlueColor w-full px-5 md:px-10 py-10 gap-y-10 flex flex-col overflow-hidden relative"
      id="mentors"
    >
      <h1 className="font-bold font-IPM text-white text-center text-6xl max-md:text-4xl">
        Our Mentors
      </h1>
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
        className="flex w-screen pr-10 md:pr-20 swiper"
      >
        {mentorsData.map((mentor, index) => {
          return (
            <SwiperSlide>
              <Mentor key={index} {...mentor} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
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
        className="flex w-screen pr-10 md:pr-20 swiper"
      >
        {mentorsData.map((mentor, index) => {
          return (
            <SwiperSlide>
              <Mentor key={index} {...mentor} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute right-20 bottom-0 md:blur-[2px] max-md:hidden">
        <img src={curve} alt="" />
      </div>
      <div className="absolute left-0 top-32 md:blur-[2px]">
        <img src={curve1} alt="" />
      </div>
      <div className="absolute left-6 bottom-0 md:blur-[2px] ">
        <img src={curve2} alt="" />
      </div>
      <div className="absolute size-full left-0 top-16 ">
        <img src={lights} alt="" />
      </div>
      <div className="absolute left-[calc(25%-35px)] top-[35%] z-50 md:top-[calc(50%-50px)]  rounded-full animate-spin-slow size-40 bg-trasnparent border-2 border-solid border-[#293757]">
        <img src={pytorch} alt="" className="absolute size-1/6 mt-5" />
      </div>
      <div className="absolute right-1/4 top-2/3 opacity-50 ">
        <img src={glow} alt="" />
      </div>
    </div>
  );
};

export default Mentors;
