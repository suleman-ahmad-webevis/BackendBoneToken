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
import dog1 from "../../../assets/images/Earn/dog1.png";
import dog2 from "../../../assets/images/Earn/dog2.png";
import nextButton from "../../../assets/images/Earn/next.png";
import prevButton from "../../../assets/images/Earn/previous.png";
//EditButtonComponent

const DogFeedingSlider = () => {
  const swiper = useSwiper();

  const [index, setIndex] = useState("");
  console.log("The index", index);
  const data = [dog1, dog2, dog1, dog2, dog1, dog2, dog1, dog2];

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
        breakpoints={{
          1450: {
            slidesPerView: 5,
          },
          760: {
            slidesPerView: 4,
          },
        }}
        navigation={{
          nextEl: "#swipeNext",
          prevEl: "#swipeBack",
        }}
        modules={[Navigation]}
      >
        {data.map((item, i) => (
          <SwiperSlide
            key={i}
            onMouseOver={() => handleMouseOver(i + 1)}
            onMouseOut={handleMouseOut}
          >
            <SwiperSlideImg src={item} />
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
  align-items: center;
  padding: 20px 5px;
  cursor: pointer;
  width: 60vw;

  .swiper-slide {
    display: flex;
    flex-direction: column;
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
  @media screen and (max-width: 1380px) {
    width: 58vw;
  }
  @media screen and (max-width: 1270px) {
    width: 56vw;
  }
  @media screen and (max-width: 1230px) {
    width: 54vw;
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

export const SwiperSlideImg = styled.img``;

export const SlideText = styled.h3`
  /* display: ${({ Text }) => (Text ? "block" : "none")}; */
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
`;

export default DogFeedingSlider;
