import React from "react";
import "./slider.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
const Slider = () => {
  return (
    <div className="sldr">
      <Swiper
        modules={[Pagination]}
        //   spaceBetween={0}
        direction={"vertical"}
        //   slidesPerView={2}
        //   loop={true}
        //   autoplay={{delay:500}}
        //   navigation
        pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        //   onSlideChange={() => console.log("slide change")}
        //   onSwiper={(swiper) => console.log(swiper)}
        className="main-slider mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
