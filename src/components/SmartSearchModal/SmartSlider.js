import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import styled from "styled-components";

export default function SmartSlider() {
  return (
    <SwiperContainer>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}

export const SwiperContainer = styled.div`
  .swiper {
    width: 336px;
    height: 200px;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 163px;
    border: 2px solid rgba(121, 153, 157, 0.15);
    border-radius: 8px;
  }
  .swiper-slide img {
    display: block;
    object-fit: cover;
  }
  span.swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #f2f4f4;
    opacity: 1;
    border-radius: 12px;
  }
  span.swiper-pagination-bullet-active {
    background: #79999d;
  }
`;
