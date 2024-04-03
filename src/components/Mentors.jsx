import React from "react";
import Polygon from "./Polygon";
import curve from "../assets/Curve.svg";
import curve1 from "../assets/Curve-1.svg";
import curve2 from "../assets/Curve-2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import 'swiper/css/pagination';
import { mentorsData } from "../data/mentorsData";

const Mentor = ({ name, desc, img }) => {
  return (
    <div className="relative bg-[url(./assets/polygon.svg)] bg-no-repeat h-screen w-full z-40 mt-10">
      <div className="flex flex-col gap-y-2 absolute -top-8 ">
        <div className="self-center size-1/2">
          <img src={img} alt="" className="" />
        </div>
        <h1 className="font-bold font-IPM text-4xl text-center text-white ">
          {name}
        </h1>
        <p className="font-medium font-IPM text-lg text-center text-wrap text-white px-16">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Mentors = () => {
  return (
    <div
      className="bg-skyBlueColor w-full px-10 py-10 gap-y-10 flex flex-col overflow-hidden "
      id="mentors"
    >
      <h1 className="font-bold font-IPM text-white text-center text-6xl">
        Our Mentors
      </h1>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true
        }}
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="flex h-screen w-screen pr-20"
      >
        {/* <div className="flex gap-x-10"> */}
          {mentorsData.map((mentor, index) => {
            return (
              <SwiperSlide>
                <Mentor key={index} {...mentor} />
              </SwiperSlide>
            );
          })}
        {/* </div> */}
      </Swiper>
    </div>
  );
};
// fill: rgba(165, 165, 165, 0.20);

// filter: drop-shadow(1px 4px 10px rgba(0, 0, 0, 0.25));
// backdrop-filter: blur(20px);
export default Mentors;
