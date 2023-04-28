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
        <SwiperSlide>
          <SwiperSlide>
            <Img src={SlideOne} alt="SlideOne" loading="lazy" />
          </SwiperSlide>
          <SlideOverlay style={{ backgroundImage: `url(${Overlay})` }}>
            <h3>Dog/Rottweiler</h3>
            <h2>Doberman News</h2>
            <button>Read More</button>
          </SlideOverlay>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            <Img src={SlideTwo} alt="SlideTwo" loading="lazy" />
          </SwiperSlide>
          <SlideOverlay style={{ backgroundImage: `url(${Overlay})` }}>
            <h3>Dog/Doberman</h3>
            <h2>Doberman News</h2>
            <button>Read More</button>
          </SlideOverlay>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            <Img src={SlideThree} alt="SlideThree" loading="lazy" />
          </SwiperSlide>
          <SlideOverlay style={{ backgroundImage: `url(${Overlay})` }}>
            <h3>Dog/Amstaff</h3>
            <h2>Doberman News</h2>
            <button>Read More</button>
          </SlideOverlay>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            <Img src={SlideOne} alt="SlideOne" loading="lazy" />
          </SwiperSlide>
          <SlideOverlay style={{ backgroundImage: `url(${Overlay})` }}>
            <h3>Dog/Poodle</h3>
            <h2>Doberman News</h2>
            <button>Read More</button>
          </SlideOverlay>
        </SwiperSlide>
      </Swiper>
    </BlogSliderContainer>
  );
};

export const BlogSliderContainer = styled.div`
  margin-top: -30px;
  .swiper {
    width: 925px;
    height: 550px;
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
    justify-content: flex-start;
    align-items: self-start;
  }

  .swiper-slide img {
    display: block;
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
  }
  span.swiper-pagination-bullet-active {
    background: #53e4e4;
  }

  /* @media screen and (max-width: 1020px) {
    .swiper {
      width: 85vw;
      height: 450px;
    }
    .swiper-slide img {
      height: 90%;
    }
  }
  @media screen and (max-width: 760px) {
    .swiper {
      height: 350px;
      width: 80vw;
    }
  }
  @media screen and (max-width: 600px) {
    .swiper {
      height: 300px;
      width: 90vw;
    }
    .swiper-slide img {
      height: 85%;
    }
  } */

  //Slider Responsive
  @media screen and (max-width: 1300px) {
    .swiper {
      width: 870px;
      height: 550px;
    }
  }
  @media screen and (max-width: 1250px) {
    .swiper {
      width: 830px;
      height: 550px;
    }
  }
  @media screen and (max-width: 1250px) {
    .swiper {
      width: 800px;
      height: 550px;
    }
  }
  @media screen and (max-width: 1250px) {
    .swiper {
      width: 770px;
      height: 550px;
    }
  }
`;

export const SlideOverlay = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  width: 397.05px;

  h3 {
    font-family: "Urbanist-Regular";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
    color: #a0aec0;
  }

  h2 {
    font-family: "Poppins-Regular";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 120%;
    text-align: center;
    color: #ffffff;
  }

  button {
    background: #eff8ff;
    border-radius: 21px;
    width: 254.62px;
    height: 70px;
    margin-top: 30px;
    cursor: pointer;
    font-family: "Urbanist-Regular";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: #01101c;
  }

  @media screen and (max-width: 1020px) {
    width: 45%;
    height: 90%;
    h2 {
      font-size: 25px;
    }
    button {
      width: 164.62px;
      height: 50px;
    }
  }
  @media screen and (max-width: 760px) {
    h2 {
      font-size: 22px;
    }
    button {
      width: 144.62px;
      height: 45px;
      font-size: 16px;
    }
  }
  @media screen and (max-width: 600px) {
    height: 85%;
    h2 {
      font-size: 16px;
    }
    h3 {
      font-size: 14px;
    }
    button {
      width: 124.62px;
      height: 40px;
      font-size: 14px;
    }
  }
`;

export default BlogSlider;
