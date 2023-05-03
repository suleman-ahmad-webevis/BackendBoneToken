import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/grid";



// import required modules
import { FreeMode, Navigation, Thumbs, Grid } from "swiper";
import styled from "styled-components";
import dog6 from "../../assets/images/Slides2/dog6.png";
import dog5 from "../../assets/images/Slides2/dog5.png";
import nextButton from "../../assets/images/Slides2/polygon2.png";
import prevButton from "../../assets/images/Slides2/polygon1.png";
import paw from "../../assets/images/Slides2/paw.png";

export default function ToEarnSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiper = useSwiper();
  
  const BigSlideData = [
    {
      image: dog5,
    }, {
      image: dog5,
    }, {
      image: dog5,
    }, {
      image: dog5,
    }, {
      image: dog5,
    }, {
      image: dog5,
    }, {
      image: dog5,
    }];

  const SmallSlideData = [
    {
      image: dog6,
    }, {
      image: dog6,
    }, {
      image: dog6,
    }, {
      image: dog6,
    }, {
      image: dog6,
    }, {
      image: dog6,
    }, {
      image: dog6,
    }];

  return (
    <SlidersContainer>
    <BackButtonWrapper id="swipeBack" onClick={() => swiper?.slidePrev()}>
      <img src={prevButton} alt="Slide" />
      <PrevPawImage src={paw} alt="paw" />
    </BackButtonWrapper>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={0}
        navigation={{
          nextEl: "#swipeNext",
          prevEl: "#swipeBack",
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
      {BigSlideData.map((item, i) => (
        <SwiperSlide key={index}>
          <SwiperSlideImg src={item.image} />
        </SwiperSlide>
      ))}
      </Swiper>
      <Swiper
        slidesPerView={4}
        grid={{
          rows: 2,
        }}
        spaceBetween={5}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress={true}
        modules={[ Navigation, Thumbs, Grid]}
        className="mySwiper"
      >
      {SmallSlideData.map((item, i) => (
        <SwiperSlide key={i}>
          <SwiperSlideImg src={item.image} />
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
    </SlidersContainer>
  );
}

export const SlidersContainer = styled.div`
display: flex;
align-items: center;
width: 50vw;
height: 200px;
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;


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

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
}


.swiper-slide {
  width: 100%;
  height: 100%;
}

.mySwiper2 {
  
  img{
    width: 220px;
    height: 160px;
    align-self: flex-start;
  }
}

.mySwiper {
  img{
    width: 83px;
    height: 80px;
  }
}

.mySwiper .swiper-slide {
  opacity: 1;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 0.5;
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
  background: #fff;
  height: calc((100% - 30px) / 2) !important;
}
.swiper-grid-column>.swiper-wrapper{
  height: 220px;
}
@media screen and (max-width: 1700px) {width: 60vw;}
@media screen and (max-width: 1300px) {width: 70vw;}
@media screen and (max-width: 1200px) {width: 80vw;}
@media screen and (max-width: 1000px) {width: 85vw;}

@media screen and (max-width: 920px) {
.mySwiper {
  img{
    width: 73px;
    height: 70px;
  }
}
}
@media screen and (max-width: 820px) {
.mySwiper {
  img{
    width: 63px;
    height: 60px;
  }
}
}
`;
export const SwiperSlideImg = styled.img`
  
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
  margin-left: 40px;
`;

export const NextPawImage = styled.img`
  position: absolute;
`;

export const PrevPawImage = styled.img`
  position: absolute;
  left: 8px;
`;