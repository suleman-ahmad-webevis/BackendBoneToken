import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styled from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
// import required modules
import { Navigation } from "swiper";
//Dog images
import dog1 from "../../assets/images/Slides2/dog1.png";
import dog2 from "../../assets/images/Slides2/dog2.png";
import nextButton from "../../assets/images/Slides2/polygon2.png";
import prevButton from "../../assets/images/Slides2/polygon1.png";
import paw from "../../assets/images/Slides2/paw.png";
//EditButtonComponent
import EditDogNftButton from "./EditDogNftButton";

const NewSlider = ({ simpleNav }) => {
  const swiper = useSwiper();
  const [index, setIndex] = useState("");
  // const data = [dog1, dog2, dog1, dog2, dog1, dog2, dog1, dog2];
  const dogs = [];

  const handleMouseClick = (i) => {
    setIndex(i);
  };

  const handleMouseOut = () => {
    setIndex("");
  };

  return (
    <SliderContainer simpleNav={simpleNav}>
      <BackButtonWrapper id="swipeBack" onClick={() => swiper?.slidePrev()}>
        <img src={prevButton} alt="Slide" />
        <PrevPawImage src={paw} alt="paw" />
      </BackButtonWrapper>
      <Swiper
        breakpoints={{
          1800: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 4,
          },
          1300: {
            slidesPerView: 3,
          },
          1020: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 4,
          },
          700: {
            slidesPerView: 3,
          },
          500: {
            slidesPerView: 2,
          },
        }}
        navigation={{
          nextEl: "#swipeNext",
          prevEl: "#swipeBack",
        }}
        modules={[Navigation]}
      >
        {dogs.map((item, i) => (
          <SwiperSlide
            key={i}
            onClick={() => handleMouseClick(i + 1)}
            onMouseLeave={() => handleMouseOut()}
          >
            <SwiperSlideImg src={item} />
            {index && i + 1 === index ? <EditDogNftButton /> : ""}
          </SwiperSlide>
        ))}
      </Swiper>
      <NextButtonWrapper
        id="swipeNext"
        onClick={() => {
          swiper?.slideNext();
        }}
      >
        <img src={nextButton} alt="slide" />
        <NextPawImage src={paw} alt="paw" />
      </NextButtonWrapper>
    </SliderContainer>
  );
};

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  cursor: pointer;
  margin-top: 30px;
  height: 200px;
  width: 60vw;
  @media (max-width: 1500px) {
    width: 55vw;
  }
  @media (max-width: 1300px) {
    width: 45vw;
  }
  @media (max-width: 1020px) {
    margin-top: ${({ simpleNav }) => (simpleNav ? "30px" : "100px")};
    width: 95vw;
  }
  @media (max-width: 760px) {
    margin-top: ${({ simpleNav }) => (simpleNav ? "30px" : "130px")};
  }
  @media (max-width: 600px) {
    margin-top: ${({ simpleNav }) => (simpleNav ? "30px" : "210px")};
  }
  @media (max-width: 500px) {
    width: 90vw;
  }

  .swiper {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
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
`;

export const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const NextButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const NextPawImage = styled.img`
  position: absolute;
`;

export const PrevPawImage = styled.img`
  position: absolute;
  left: 8px;
`;

export const SwiperSlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SwiperSlideImg = styled.img`
  width: 180px;
  height: 160px;
  border-radius: 8px;
`;

export const SwiperSlideData = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
`;

export default NewSlider;
