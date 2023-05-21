import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import styled from "styled-components";
import SlideOne from "../../assets/images/Blogs/SlideOne.png";
import SlideTwo from "../../assets/images/Blogs/SlideTwo.png";
import SlideThree from "../../assets/images/Blogs/SlideThree.png";
import Overlay from "../../assets/images/Blogs/Overlay.png";
import { Img } from "../../GlobalStyles";

const BlogSlider = () => {
  const sliderData = [
    {
      slideImg: SlideOne,
      heading: "Dog/Rottweiler",
      para: "Doberman News",
      btnTitle: "Read More",
    },
    {
      slideImg: SlideTwo,
      heading: "Dog/Doberman",
      para: "Doberman News",
      btnTitle: "Read More",
    },
    {
      slideImg: SlideThree,
      heading: "Dog/Amstaff",
      para: "Doberman News",
      btnTitle: "Read More",
    },
    {
      slideImg: SlideOne,
      heading: "Dog/Rottweiler",
      para: "Doberman News",
      btnTitle: "Read More",
    },
  ];
  const pagination = {
    clickable: true,
  };

  return (
    <BlogSliderContainer>
      <Swiper
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {sliderData.map((value, index) => (
          <SwiperSlide key={index}>
            <SwiperSlide>
              <Img src={value.slideImg} alt="slideImg" loading="lazy" />
            </SwiperSlide>
            <SlideOverlay>
              <h2>{value.heading}</h2>
              <h1>{value.para}</h1>
              <button>{value.btnTitle}</button>
            </SlideOverlay>
          </SwiperSlide>
        ))}
      </Swiper>
    </BlogSliderContainer>
  );
};

export const BlogSliderContainer = styled.div`
  .swiper {
    width: 98%;
    height: 550px;
  }
  /* .swiper-slide {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  /* .swiper-slide {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  } */

  .swiper-slide img {
    width: 100%;
    height: 505px;
    object-fit: cover;
  }

  span.swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #11223a;
    opacity: 1;
    border-radius: 12px;
    @media screen and (max-width: 1110px) {
      width: 18px;
      height: 18px;
    }
  }
  span.swiper-pagination-bullet-active {
    background: #53e4e4;
  }
`;

export const SlideOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  width: 45%;
  position: absolute;
  top: 0px;
  right: 1px;
  bottom: 0;
  background-image: url(${Overlay});
  background-repeat: no-repeat;

  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    color: #ffffff;
    @media screen and (max-width: 1300px) {
      font-size: 38px;
    }
    @media screen and (max-width: 900px) {
      font-size: 34px;
    }
    @media screen and (max-width: 700px) {
      font-size: 32px;
    }
    @media screen and (max-width: 400px) {
      font-size: 28px;
    }
  }
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
    color: #a0aec0;
    @media screen and (max-width: 400px) {
      font-size: 16px;
    }
  }
  button {
    background: #eff8ff;
    border-radius: 21px;
    width: 60%;
    height: 70px;
    margin-top: 30px;
    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: #01101c;
    @media screen and (max-width: 1110px) {
      width: 70%;
    }
    @media screen and (max-width: 400px) {
      font-size: 16px;
    }
  }
`;

export default BlogSlider;
