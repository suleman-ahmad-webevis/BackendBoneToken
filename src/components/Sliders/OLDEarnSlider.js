import React from "react";
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
import dog3 from "../../assets/images/Slides2/dog3.png";
import dog4 from "../../assets/images/Slides2/dog4.png";
import nextButton from "../../assets/images/Slides2/polygon2.png";
import prevButton from "../../assets/images/Slides2/polygon1.png";
import paw from "../../assets/images/Slides2/paw.png";
//EditButtonComponent

const EarnSlider = () => {
  const swiper = useSwiper();

  const data = [
    {
      image: dog3,
      text: <SlideText>PROFILE 0%COMPLETED BONES EARNED 0</SlideText>,
    },
    {
      image: dog4,
      text: <SlideText>PROFILE 85%COMPLETED BONES EARNED 1089</SlideText>,
    },
    {
      image: dog3,
      text: <SlideText>PROFILE 0%COMPLETED BONES EARNED 0</SlideText>,
    },
    {
      image: dog4,
      text: <SlideText>PROFILE 85%COMPLETED BONES EARNED 1089</SlideText>,
    },
    {
      image: dog3,
      text: <SlideText>PROFILE 0%COMPLETED BONES EARNED 0</SlideText>,
    },
    {
      image: dog4,
      text: <SlideText>PROFILE 85%COMPLETED BONES EARNED 1089</SlideText>,
    },
    {
      image: dog3,
      text: <SlideText>PROFILE 0%COMPLETED BONES EARNED 0</SlideText>,
    },
    {
      image: dog4,
      text: <SlideText>PROFILE 85%COMPLETED BONES EARNED 1089</SlideText>,
    },
  ];

  return (
    <SliderContainer>
      <BackButtonWrapper id="swipeBack" onClick={() => swiper?.slidePrev()}>
        <img src={prevButton} alt="Slide" />
        <PrevPawImage src={paw} alt="paw" />
      </BackButtonWrapper>
      <Swiper
        breakpoints={{
          760: {
            slidesPerView: 2,
          },
        }}
        navigation={{
          nextEl: "#swipeNext",
          prevEl: "#swipeBack",
        }}
        modules={[Navigation]}
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
        <NextPawImage src={paw} alt="paw" />
      </NextButtonWrapper>
    </SliderContainer>
  );
};

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  cursor: pointer;
  width: 700px;
  position: absolute;
  bottom: 100px;

  @media screen and (max-width: 760px) {
    position: unset;
    width: 400px;
  }
  @media screen and (max-width: 500px) {
    position: unset;
    width: 90vw;
  }
  @media screen and (max-width: 360px) {
    position: unset;
    width: 98vw;
  }
  /* 
@media screen and (max-width: 1600px) { width: 40VW;}
@media screen and (max-width: 1400px) { width: 46VW;}
@media screen and (max-width: 1200px) { width: 700px;}
@media screen and (max-width: 760px) { width: 70VW;}
@media screen and (max-width: 500px) { width: 90VW;} */

  .swiper-slide {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 18px;

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
  margin-bottom: 30px;
  position: relative;
`;

export const NextButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const NextPawImage = styled.img`
  position: absolute;
  margin-right: 5px;
`;

export const PrevPawImage = styled.img`
  position: absolute;
  margin-left: 5px;
`;

export const SwiperSlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SwiperSlideImg = styled.img`
  height: 165px;
  /* background: url(D7EC2D57-815F-4EBD-99A4-94B788909E4E_4_5005_c.jpg);
border: 3px solid #42C62C;
border-radius: 18px; */
`;

export const SlideText = styled.div`
  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 17px;
  text-align: center;
  color: #9e9e9e;
  margin-top: 25px;
  @media screen and (max-width: 760px) {
    margin-top: 5px;
  }
`;

export default EarnSlider;
