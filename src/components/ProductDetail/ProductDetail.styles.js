import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  padding: 10px 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
`;

export const ProductField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  position: relative;
  width: 100%;

  input {
    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 12px;
    font-size: 16px;
  }
`;
export const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 13px;
  align-self: flex-end;
`;

export const ColumnOneTwo = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ColumnThree = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  grid-gap: 12px;
  @media screen and (max-width: 1500px) {
    width: 28%;
  }
`;

export const FieldLabel = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #000000;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 13px;
`;

export const CombinedProductFields = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;
export const CombinedProduct = styled.div`
  display: flex;
  grid-gap: 20px;
  FieldLabel {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
  }

  input {
    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 12px;
  }

  ::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
  }
`;
export const ProductForm = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;
export const ProductPhotos = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;
export const ShareProduct = styled.div`
  display: flex;
  grid-gap: 10px;
  cursor: pointer;
`;
export const DescriptionField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;

  textarea {
    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    width: 100%;
    height: 136px;
    outline: none;
    padding: 10px;
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #000;
    }
    ::-webkit-scrollbar-thumb {
      background: #79999d;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #79999d;
    }
  }
`;

export const ProductPhotoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const Counter = styled.div`
  background: #f5f8fd;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  /* padding: 12px; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* grid-gap: 10px; */

  input {
    outline: none;
    background: none;
    border: none;
    box-shadow: none;
    border-radius: none;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    ::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
    }
  }
`;
export const AddToCartButton = styled.div`
  background: #2979ff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-style: normal;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.035em;
  color: #ffffff;
  align-self: flex-end;
  cursor: pointer;
  width: 360px;
  margin-top: 20px;

  &:hover {
    background: #000000;
  }
`;
export const ProductRating = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1500px) {
    flex-direction: column;
  }
`;

export const RatingField = styled.div`
  display: flex;
  grid-gap: 10px;
  margin-top: 20px;
  .css-jue3ft-MuiRating-root {
    font-size: 34px;
  }
  @media screen and (max-width: 1500px) {
    .css-jue3ft-MuiRating-root {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 1300px) {
    .css-jue3ft-MuiRating-root {
      font-size: 28px;
    }
  }
  @media screen and (max-width: 1300px) {
    .css-jue3ft-MuiRating-root {
      font-size: 26px;
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 25px;
`;

export const SocialIcon = styled.div`
  display: flex;
  grid-gap: 10px;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
`;

export const DetailMainImage = styled.div`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  width: 273px;
  height: 273px;
  position: relative;
  z-index: 100;
  img {
    width: 273px;
    height: 273px;
  }
`;

export const DetailImages = styled.div`
  border-radius: 8px;
  img {
    width: 82px;
    height: 82px;
  }
`;
export const AddCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(
    123.41deg,
    #65f753 28.58%,
    #92fa86 55.2%,
    #51dd40 76.63%,
    #1de407 117.51%
  );
  box-shadow: 0px 0px 30px #aeecd4, inset 0px 0px 20px #6be7b7;
  border-radius: 5px;
  margin-top: 30px;
  /* width: 296px; */
  height: 44px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  color: #000000;
`;

export const PriceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: 46px;
  padding: 0 10px;
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const Price = styled.div`
  font-size: 14px;
  line-height: 18px;
  text-align: right;
  color: #000000;
  font-weight: 700;
`;

export const IconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: #e1e9f0;
  border-radius: 8px;
  font-size: 24px;
  line-height: 29px;
  border: none;
  color: #a6b5bf;
  cursor: pointer;
  &:hover {
    background: #3dbb8b;
    color: #ffffff;
  }
`;

export const SizeInput = styled.input`
  background: #fff !important;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  /* padding: 12px; */
  width: 100%;
  height: 55px;
`;
export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f8fd;
  border-radius: 8px;
  gap: 30px;
  border-radius: 8px;
  width: 100%;
  padding: 10px 20px;
`;

export const ProductMeasurementList = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  height: ${({ isScroll }) => (isScroll > 4 ? "372px" : "0x")};
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.35);
    -webkit-border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #314552;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #314552;
  }
`;

export const ProductMeasurement = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 10px;
`;

export const ProductSizeField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ProductSize = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;

export const ProductCode = styled.div`
  font-size: 10px;
  line-height: 13px;
  color: #868686;
`;

export const ProductWeight = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`;

export const CheckBox = styled.input`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  outline: none;
  width: 31px;
  height: 31px;
  cursor: pointer;
`;
