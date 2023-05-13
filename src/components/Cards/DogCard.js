import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";

const DogCard = ({ dog }) => {
  return (
    <DogCardContainer>
      <Link to={`/editRegisterOnBlock/${dog._id}`}>
        <CardData>
          <Img src={dog.dogImage} alt="Product" />
          <ItemName>
            <ProductCategory>{dog.dogName}</ProductCategory>
          </ItemName>
        </CardData>
      </Link>
    </DogCardContainer>
  );
};

const DogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  padding: 10px;
  border: 1px solid #e7eaf3;
  border-radius: 8px;
`;

export const ProductCategory = styled.div`
  color: ${(props) => props.theme.ProductCategory};
  font-size: 16px;
  line-height: 24px;
`;
const CardData = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;
const ItemName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default DogCard;
