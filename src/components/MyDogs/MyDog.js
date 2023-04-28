import React, { useState, useEffect } from "react";
import SidebarStatic from "../Sidebar/SidebarStatic";
import {
  DogDetail,
  HeadButton,
  Icon,
  MyDogContainer,
  MyDogPage,
  MyDogsWrapper,
  MyDogHeadBtns,
  MyDogHeadBtn,
  MyDogChat,
  MessageBtn,
} from "./MyDog.style";
import { useNavigate } from "react-router-dom";
import MyDogCardComp from "./MyDogCardComp";
import { useDispatch, useSelector } from "react-redux";
import { getAllNfts } from "../../redux/createDogNft/createDogNftSlice";
import Loader from "../Loader/Loader";
import { Img } from "../../GlobalStyles";
import MsgIcon from "../../assets/images/MyDog/MsgIcon.png";
import MyDogSetting from "../../assets/images/MyDog/MyDogSetting.png";

const MyDog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
  const { allDogNfts, isLoading } = useSelector((state) => state.dogNft);
  const [showSettings, setShowSettings] = useState(true);
  useEffect(() => {
    dispatch(getAllNfts());
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <MyDogPage>
        <MyDogContainer>
          <MyDogHeadBtns>
            <MyDogHeadBtn>
              <HeadButton
                bgColor="#0E626D"
                color="#fff"
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
              <HeadButton bgColor="#0E626D">
                <p>For sale</p>
              </HeadButton>
              <HeadButton bgColor="#0E626D">
                <p>Sold</p>
              </HeadButton>
              <HeadButton bgColor="#0E626D">
                <p>Paid</p>
              </HeadButton>
              <HeadButton bgColor="#0E626D">
                <p>Unpaid</p>
              </HeadButton>
              <HeadButton bgColor="#0E626D">
                <p>Unpaid</p>
              </HeadButton>
              <HeadButton
                bgColor="#0E626D"
                // onClick={() => navigate("/settings", {
                //   state:
                // })}
              >
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
              <h2>No Dog Nfts</h2>
            )}
          </MyDogsWrapper>
          <MyDogChat>
            <Icon />
          </MyDogChat>
        </MyDogContainer>
      </MyDogPage>
    </>
  );
};

export default MyDog;
