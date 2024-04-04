import React from "react";
import curve from "../assets/Curve.svg";
import curve1 from "../assets/Curve-1.svg";
import curve2 from "../assets/Curve-2.svg";
import lights from "../assets/lights.svg";
import pytorch from "../assets/pytorch.svg";
import glow from "../assets/glow.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Mentors.css";
import { mentorsData } from "../data/mentorsData";

const Mentor = ({ name, desc, img }) => {
  return (
    <div className="relative bg-[url(./assets/polygon.svg)] bg-no-repeat h-screen w-full z-40 mt-20 mentor">
      <div className="flex flex-col gap-y-2 absolute -top-8 ">
        <div className="self-center size-1/2">
          <img src={img} alt="" className="" />
        </div>
        <h1 className="font-bold font-IPM text-4xl text-center text-white ">
          {name}
        </h1>
        <p className="font-medium font-IPM text-lg text-center text-white px-16">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Mentors = () => {
  return (
    <div
      className="bg-skyBlueColor w-full px-10 py-10 gap-y-10 flex flex-col overflow-hidden relative"
      id="mentors"
    >
      <h1 className="font-bold font-IPM text-white text-center text-6xl max-md:text-4xl">
        Our Mentors
      </h1>
      <Swiper
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
        modules={[Autoplay, Pagination]}
        className="flex w-screen pr-20 swiper"
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
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="flex w-screen pr-20 swiper"
      >
        {mentorsData.map((mentor, index) => {
          return (
            <SwiperSlide>
              <Mentor key={index} {...mentor} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="absolute right-20 bottom-0 blur-[2px] max-md:hidden">
        <img src={curve} alt="" />
      </div>
      <div className="absolute left-0 top-32 blur-[2px]">
        <img src={curve1} alt="" />
      </div>
      <div className="absolute left-6 bottom-0 blur-[2px] ">
        <img src={curve2} alt="" />
      </div>
      <div className="absolute size-full left-0 top-16 ">
        <img src={lights} alt="" />
      </div>
      <div className="absolute left-[calc(25%-35px)] top-[calc(50%-50px)] rounded-full animate-spin-slow size-40 bg-trasnparent border-2 border-solid border-[#293757]">
        <img src={pytorch} alt="" className="absolute size-1/6 mt-5" />
      </div>
      <div className="absolute right-1/4 top-2/3 opacity-50 ">
        <img src={glow} alt="" />
      </div>
    </div>
  );
};

export default Mentors;
