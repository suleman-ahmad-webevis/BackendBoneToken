import styled from "styled-components";
import { IoIosPeople } from "react-icons/io";
import { BsMessenger } from "react-icons/bs";

export const MyDogPage = styled.div`
  display: flex;
  gap: 1.6rem;
  padding: 20px;
`;

export const MyDogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 20px 10px;
  width: 100%;
`;

export const MyDogHeadBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MyDogHeadBtn = styled.div`
  display: flex;
  gap: 10px;
`;

export const HeadButton = styled.button`
  background: ${({ bgColor }) => bgColor ?? "#79999D"};
  border: 1px solid;
  border: 1.25467px solid #d1ebff;
  border-radius: 8px;
  color: ${({ color }) => color ?? "#fff"};
  font-weight: 300;
  font-size: 16px;
  line-height: 36px;
  transition: 0.3ms all ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
`;

export const MessageBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0e626d;
  padding: 0px 20px;
  grid-gap: 10px;
  border-radius: 10.0374px;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  color: #fff;
  button {
    background: transparent;
  }
  div {
    border: 2px solid #45a8fb;
    background: #fff;
    border-radius: 100px;
    padding: 7px 10px;
    color: #45a8fb;
  }
`;

export const MyDogsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  margin: 1rem 0;
`;

export const DogDetail = styled.div`
  display: flex;
  flex: 1;
  grid-gap: 30px;
  flex-wrap: wrap;
`;

export const DogDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: ${({ width }) => (width ? width : "100%")};
  transition: 3s all ease-in-out;
  h1 {
    font-weight: 900;
    font-size: 14px;
    line-height: 21px;
    color: #3980ea;
    text-align: center;
  }
  hr {
    background: #3980ea;
    box-shadow: 0px 3px 4px rgba(51, 57, 196, 0.17);
    border-radius: 22px;
    border: 2px solid #3980ea;
    margin: 8px 0;
  }
`;

export const MyDogCard = styled.div`
  width: 30%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px -19px 10px rgba(35, 89, 169, 0.15);
  border-radius: 12px;
  padding: 10px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 1450px) {
    width: 45%;
  }
  p {
    font-weight: 900;
    font-size: 10px;
    line-height: 15px;
    text-decoration-line: underline;
    color: #3980ea;
    cursor: pointer;
  }
`;

export const PersonalDetail = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  h2 {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #8f98a8;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #282c34;
    display: flex;
    align-items: center;
    gap: ${({ gap }) => (gap ? gap : "0")};
  }
  span {
    text-decoration-line: underline;
    color: #3980ea;
  }
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }
  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 35px;
    height: 15px;
    background: #3980ea;
    display: block;
    border-radius: 100px;
    position: relative;
  }
  label:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }
  input:checked + label {
    background: #3980ea;
  }
  input:checked + label:after {
    left: 100%;
    transform: translateX(-100%);
  }
  label:active:after {
    width: 5px;
  }
`;

export const MyDogChat = styled.div`
  align-self: flex-end;
`;

export const DetailText = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  gap: 8px 16px;
`;

export const DetailsSec = styled.div`
  display: flex;
  width: 46.5%;
  grid-gap: 15px;
`;

export const ExpandedBtnContainer = styled.div`
  width: 100%;
`;

export const ExpandedButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 5px;
`;

export const ButtonExpand = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  background: ${({ bg }) => (bg ? bg : "none")};
  color: ${({ color }) => (color ? color : " #FFFFFF")};
  border: ${({ border }) => (border ? border : "1px solid #0E626D")};
  border-radius: 8px;
  padding: ${({ padding }) => (padding ? padding : "4px 12px 4px 9px")};
  cursor: pointer;
  width: 18.5%;
  font-size: 10px;
`;

export const PeopleIcon = styled(IoIosPeople)`
  font-size: 20px;
`;

export const DogVideo = styled.div`
  display: flex;
  max-width: 100%;
  margin: auto;
  gap: 20px;
  img {
    width: 120px;
    height: 76px;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
  }
  video {
    border-radius: 10px;
  }
`;

export const Icon = styled(BsMessenger)`
  width: 40px;
  height: 40px;
  color: #a6ccea;
`;
