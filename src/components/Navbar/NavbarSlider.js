// import React, { useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import styled from "styled-components";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/swiper.min.css";
// import "swiper/swiper-bundle.min.css";
// // import required modules
// import { Navigation } from "swiper";
// //Dog images
// //EditButtonComponent
// import Previous from '../../assets/images/SkyHeader/Previous.png'
// import Next from '../../assets/images/SkyHeader/Next.png'
// import Paw from '../../assets/images/SkyHeader/Paw.png'
// import DogOne from '../../assets/images/SkyHeader/DogOne.png'
// import DogTwo from '../../assets/images/SkyHeader/DogTwo.png'
// import AddNft from '../../assets/images/SkyHeader/AddNft.png'
// import { Link } from "react-router-dom";
// import { Img } from "../../GlobalStyles";

// const NavbarSlider = () => {
//   const swiper = useSwiper();
//   const [index, setIndex] = useState("");
//   // const dogs = [DogOne, DogTwo, DogOne, DogTwo, DogOne, DogTwo, DogOne, DogTwo];
//   const dogs = [];

//   const handleMouseClick = (i) => {
//     setIndex(i);
//   };

//   const handleMouseOut = () => {
//     setIndex("");
//   };

//   return (
//     <SliderContainer>
//       <BackButtonWrapper id="NavbarSwipeBack" onClick={() => swiper?.slidePrev()}>
//         <Img src={Previous} alt="Slide" />
//         <PrevPawImage src={Paw} alt="paw" />
//       </BackButtonWrapper>
//       <Swiper
//         breakpoints={{
//           500: {
//             slidesPerView: 2,
//           },
//           0: {
//             slidesPerView: 1,
//           }
//         }}
//         navigation={{
//           nextEl: "#NavbarSwipeNext",
//           prevEl: "#NavbarSwipeBack"
//         }}
//         modules={[Navigation]}
//       >
//         {dogs.map((item, i) => (
//           <SwiperSlide
//             key={i}
//             onClick={() => handleMouseClick(i + 1)}
//             onMouseLeave={() => handleMouseOut()}
//           >
//             <SwiperSlideImg src={item} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <AddNFT to="/createDogNFT/dogRegister">
//         <Img src={AddNft} alt="add" />
//       </AddNFT>
//       <NextButtonWrapper
//         id="NavbarSwipeNext"
//         onClick={() => {
//           swiper?.slideNext();
//         }}
//       >
//         <Img src={Next} alt="slide" />
//         <NextPawImage src={Paw} alt="paw" />
//       </NextButtonWrapper>
//     </SliderContainer>
//   );
// };

// export const SliderContainer = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   height: 102px;
//   width: 450px;
//   background: #85C9FF;
//   border-radius: 8px;
//   padding: 10px;

//   .swiper {
//     width: 50%;
//     height: 100%;
//   }
//   .swiper-slide {
//     text-align: center;
//     font-size: 18px;

//     /* Center slide text vertically */
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-box-pack: center;
//     -ms-flex-pack: center;
//     -webkit-justify-content: center;
//     justify-content: center;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     -webkit-align-items: center;
//     align-items: center;
//   }

// @media (max-width: 1500px) { width: 350px; height: 92px; .swiper {width: 250px;}}
// @media (max-width: 1200px) { width: 250px; height: 60px; .swiper {width: 230px;}}
// @media (max-width: 500px) { width: 180px; height: 60px; .swiper {width: 150px;}}
// `;

// export const BackButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
// `;

// export const NextButtonWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 999;
// `;

// export const NextPawImage = styled.img`
//   position: absolute;

// @media (max-width: 1500px) { height: 10px;}
// @media (max-width: 1200px) { height: 8px;}
// `;

// export const PrevPawImage = styled.img`
//   position: absolute;
//   left: 6px;
// @media (max-width: 1500px) { height: 10px;}
// @media (max-width: 1200px) { height: 8px;}
// `;

// export const SwiperSlideImg = styled.img`
//   width: 95px;
//   height: 80px;
//   border-radius: 8px;
// @media (max-width: 1500px) { width: 75px; height: 70px;}
// @media (max-width: 1200px) { width: 50px; height: 40px;}
// `;

// export const AddNFT = styled(Link)`
// margin-right: 20px;
// display: flex;
// justify-content: center;
// align-items: center;
// `;

// export default NavbarSlider;
