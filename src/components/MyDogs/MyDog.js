import React, { useState, useEffect } from "react";
import {
  DogDetail,
  HeadButton,
  MyDogContainer,
  MyDogsWrapper,
  MyDogHeadBtns,
  MyDogHeadBtn,
  MessageBtn,
} from "./MyDog.style";
import { useNavigate } from "react-router-dom";
import MyDogCardComp from "./MyDogCardComp";
import { useDispatch, useSelector } from "react-redux";
import { getAllNfts } from "../../redux/createDogNft/createDogNftSlice";
// import Loader from "../Loader/Loader";
import { Img } from "../../GlobalStyles";
import MsgIcon from "../../assets/images/MyDog/MsgIcon.png";
import MyDogSetting from "../../assets/images/MyDog/MyDogSetting.png";
import useBreakpoint from "../../hooks/useBreakPoint";
import CommonTabNav from "../CommonMTNav/CommonTabNav";
import CommonMobNav from "../CommonMTNav/CommonMobNav";

const MyDog = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  const { allDogNfts } = useSelector((state) => state.dogNft);
  useEffect(() => {
    dispatch(getAllNfts());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {/* {isLoading && <Loader />} */}
      <MyDogContainer>
        {(isSmallMobile || isMobile) && <CommonMobNav />}
        {(isTablet || isSmallMobile || isMobile) && (
          <CommonTabNav Width="60%" />
        )}
        <MyDogHeadBtns>
          <MyDogHeadBtn>
            <HeadButton
              bgColor="#0E626D"
              mobBgColor="#0E626D"
              onClick={() => navigate("/create-dog-nft/dog-register")}
            >
              + Add Dog
            </HeadButton>
            <MessageBtn>
              <Img src={MsgIcon} alt="MsgIcon" />
              <p>Messages</p>
            </MessageBtn>
          </MyDogHeadBtn>
          <MyDogHeadBtn>
            <HeadButton bgColor="#0E626D">Dogs</HeadButton>
            <HeadButton bgColor="#0E626D">Puppies</HeadButton>
            <HeadButton bgColor="#0E626D">For sale</HeadButton>
            <HeadButton bgColor="#0E626D">Sold</HeadButton>
            <HeadButton bgColor="#0E626D">Paid</HeadButton>
            <HeadButton bgColor="#0E626D">Unpaid</HeadButton>
            <HeadButton bgColor="#0E626D">
              <Img src={MyDogSetting} alt="MyDogSetting" />
            </HeadButton>
          </MyDogHeadBtn>
          {/* <Icon /> */}
        </MyDogHeadBtns>
        <MyDogsWrapper>
          {allDogNfts.length ? (
            <DogDetail>
              {allDogNfts.map((value) => (
                <MyDogCardComp
                  expand={expand}
                  setExpand={setExpand}
                  value={value}
                />
              ))}
            </DogDetail>
          ) : (
            <h2 style={{ color: "#fff" }}>No, Dog Registered Yet.</h2>
          )}
        </MyDogsWrapper>
      </MyDogContainer>
    </>
  );
};

export default MyDog;
