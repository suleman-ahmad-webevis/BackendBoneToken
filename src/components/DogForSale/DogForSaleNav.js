import priceDropDown from "../../assets/images/Filterbar/priceDropDown.png";
import styled from "styled-components";

const dogSaleNavData = [
  {
    title: "Price",
    icon: priceDropDown,
  },
  {
    title: "Country",
    icon: priceDropDown,
  },
  {
    title: "Breed",
    icon: priceDropDown,
  },
  {
    title: "Age",
    icon: priceDropDown,
  },
  {
    title: "Microchipped",
    icon: priceDropDown,
  },
  {
    title: "Posted at",
    icon: priceDropDown,
  },
  {
    title: "Gender",
    icon: priceDropDown,
  },
];

const DogForSaleNav = () => {
  return (
    <DogSaleNavWrapper>
      {dogSaleNavData.map((value) => (
        <NavItem key={value._id}>
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
  border: 1px solid #dde4ff;
  border-radius: 8px;
  background: #79999d;
  height: 45px;
  padding: 10px 15px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 15px;
  h1 {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #fff;
    @media screen and (max-width: 1400px) {
      font-size: 14px;
    }
  }
  img {
    /* width: 50px; */
  }
`;
export default DogForSaleNav;
