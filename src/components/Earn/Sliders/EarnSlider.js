import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";

// import required modules
import { Grid, Navigation } from "swiper";
import dog from "../../../assets/images/Earn/dog.png";
import nextButton from "../../../assets/images/Earn/down.png";
import prevButton from "../../../assets/images/Earn/up.png";

const EarnSlider = () => {
  const swiper = useSwiper();

  const [index, setIndex] = useState("");

  const data = [
    {
      image: dog,
      text: "Johnathon",
    },
    {
      image: dog,
      text: "Blaze",
    },
    {
      image: dog,
      text: "George",
    },
    {
      image: dog,
      text: "Wendy",
    },

    {
      image: dog,
      text: "Blaze",
    },
    {
      image: dog,
      text: "George",
    },
    {
      image: dog,
      text: "Wendy",
    },
    {
      image: dog,
      text: "Blaze",
    },
    {
      image: dog,
      text: "George",
    },
    {
      image: dog,
      text: "Wendy",
    },
  ];

  const handleMouseOver = (i) => {
    setIndex(i);
  };

  const handleMouseOut = () => {
    setIndex("");
  };

  return (
    <SliderContainer>
      <BackButtonWrapper id="swipeBack" onClick={() => swiper?.slidePrev()}>
        <img src={prevButton} alt="Slide" />
      </BackButtonWrapper>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        watchSlidesProgress={true}
        modules={[Grid, Navigation]}
        navigation={{
          nextEl: "#swipeNext",
          prevEl: "#swipeBack",
        }}
        className="mySwiper"
      >
        {data.map((item, i) => (
          <SwiperSlide>
            <SwiperSlideImg src={item.image} />
            <SlideText>{item.text}</SlideText>
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
      </NextButtonWrapper>
    </SliderContainer>
  );
};

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  gap: 10px;
  cursor: pointer;
  .swiper {
    width: 300px;
    height: 385px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    height: calc((100% - 30px) / 2) !important;

    /* Center slide text vertically */
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  width: 120px;
  height: 120px;
`;

export const SlideText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 109.5%;
  text-align: center;
  color: #096e7a;
  margin-top: 15px;
`;

export default EarnSlider;
