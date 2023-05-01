import styled from "styled-components";
import { dogSaleNavData } from "./DFSNavData";

const DogForSaleNav = () => {
  return (
    <DogSaleNavWrapper>
      {dogSaleNavData.map((value, index) => (
        <NavItem key={index}>
          <h1>{value.title}</h1>
          <img src={value.icon} alt="dog-for-sale" />
        </NavItem>
      ))}
    </DogSaleNavWrapper>
  );
};

export const DogSaleNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  border: 1px solid rgba(14, 98, 109, 0.5);
  border-radius: 8px;
  background: #fff;
  height: 45px;
  padding: 10px 15px;
  @media screen and (max-width: 1300px) {
    width: 90%;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 15px;
  h1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #0e626d;
    @media screen and (max-width: 1400px) {
      font-size: 14px;
    }
  }
  img {
    /* width: 50px; */
  }
`;
export default DogForSaleNav;
