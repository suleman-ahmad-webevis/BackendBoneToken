import styled from "styled-components";

export const CreateDogNftBtn = styled.button`
  background: #79999d;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  border: none;
  width: 70%;
  height: 65px;
  font-weight: 700;
  font-size: 24px;
  line-height: 41px;
  color: #ffffff;
  /* margin-top: 40px; */
  @media screen and (max-width: 880px) {
    font-size: 20px;
    height: 60px;
  }
  @media screen and (max-width: 820px) {
    font-size: 18px;
    height: 58px;
  }
`;

export const SaveEditNftBtn = styled.button`
  background: #79999d;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  width: 107px;
  height: 58px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  border: none;
`;

export const SaveNftBtn = styled.button`
  background: linear-gradient(
    123.41deg,
    #2fad20 28.58%,
    #53de44 55.2%,
    #31b621 76.63%,
    #106606 117.51%
  );
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const SaveText = styled.div`
  h1 {
    color: #524a48;
    background: linear-gradient(
      123.41deg,
      #2fad20 28.58%,
      #53de44 55.2%,
      #31b621 76.63%,
      #106606 117.51%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 14px;
  }
  width: 96px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dcffd7;
  border-radius: 8px;
  cursor: pointer;
`;
