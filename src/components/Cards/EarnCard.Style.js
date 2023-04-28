import styled from "styled-components";

export const EarnCardContainer = styled.div`
  display: flex;
  grid-gap: 10px;
  width: 100%;
  @media screen and (max-width: 600px) { flex-direction: column; }
`;

export const IconsSidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #b1b1b1;
  border-radius: 10px;
  width: 20%;
  @media screen and (max-width: 1500px) {
    width: 27%;
  }
  @media screen and (max-width: 600px) { width: 100%; }
`;

export const IconsTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  justify-content: space-around;
  padding: 0px 15px;
`;

export const IconsBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  border-radius: 10px;
  justify-content: space-around;
  padding: 0px 15px;
  background: #e9fdfc;
  width: 100%;
`;

export const IconsBottomTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
`;

export const EarnCard = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 10px;
  background: #e9fdfc;
  border: 2px solid #b1b1b1;
  border-radius: 10px;
  justify-content: center;
  grid-gap: 20px;
  width: 80%;
  
  @media screen and (max-width: 1500px) {
    flex-wrap: wrap-reverse;
    width: 73%;
  }
  @media screen and (max-width: 600px) { width: 100%; }
`;

export const EarnCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 5px;
  width: 60%;
  @media screen and (max-width: 1500px) {
    width: 100%;
  }
`;

export const EarnCardLeftHead = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 10px;
  border: 1px solid #79ef42;
  border-radius: 10px;
  background: #96cf7b;
  align-items: center;
  padding: 8px 20px;
  
`;

export const EarnCardLeftIconAndEther = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
`;

export const EarnCardBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #c9ecb8;
  border: 1px solid #79ef42;
  border-radius: 10px;
  padding: 10px 20px;
`;

export const BodyItems = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const EarnCardRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
