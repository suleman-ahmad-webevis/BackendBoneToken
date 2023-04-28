import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import EditFormFilter from "../../components/Forms/CreateNFT/EditDogNft/EditFormsFilterbar";
import EditRegisterDog from "../../components/Forms/CreateNFT/EditDogNft/EditRegisterDog";
import EditRegisterOwner from "../../components/Forms/CreateNFT/EditDogNft/EditRegisterOwner";
import EditRegisterVeterinary from "../../components/Forms/CreateNFT/EditDogNft/EditRegisterVeterinary";
import EditRegisterInsurance from "../../components/Forms/CreateNFT/EditDogNft/EditRegisterInsurance";
import EditRegisterDogShow from "../../components/Forms/CreateNFT/EditDogNft/EditRegisterDogShow";
import Confirmation from "../../components/Forms/CreateNFT/RegisterDogNft/Confirmation";
import { getDogNft } from "../../redux/createDogNft/createDogNftSlice";
import { useDispatch, useSelector } from "react-redux";

const EditDogNFT = () => {
  const { pageName, id } = useParams();
  const dispatch = useDispatch();
  const { singleDogNft } = useSelector((state) => state.dogNft);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageName]);

  useEffect(() => {
    dispatch(getDogNft({ id }));
  }, []);

  const getPage = () => {
    switch (pageName) {
      case "dog-register":
        return <EditRegisterDog dog={singleDogNft?.dog} />;
      case "owner-register":
        return <EditRegisterOwner owner={singleDogNft?.owner} />;
      case "veterinary-register":
        return <EditRegisterVeterinary veterinary={singleDogNft?.veterinary} />;
      case "insurance-register":
        return <EditRegisterInsurance insurance={singleDogNft?.insurance} />;
      case "dogShow-register":
        return (
          <EditRegisterDogShow
            dogShow={singleDogNft?.dogShow}
            nftId={singleDogNft?._id}
          />
        );
      case "confirmation":
        return <Confirmation />;
      default:
        return <h1>Page Not Found</h1>;
    }
  };

  return (
    <NFTMainContainer>
      <NFTContainer>
        <FilterForms>
          <EditFormFilter />
        </FilterForms>
        {getPage()}
      </NFTContainer>
    </NFTMainContainer>
  );
};

export const NFTMainContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1260px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const NFTContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
  padding: 50px 20px;
  width: 70%;
  max-width: 70%;
  @media screen and (max-width: 1260px) {
    width: 80%;
    max-width: 80%;
  }
  @media screen and (max-width: 560px) {
    grid-gap: 20px;
    padding: 20px;
  }
  @media screen and (max-width: 460px) {
    grid-gap: 10px;
  }
`;

export const FilterForms = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 15px;
  @media screen and (max-width: 560px) {
    grid-gap: 20px;
  }
  @media screen and (max-width: 460px) {
    grid-gap: 10px;
  }
`;

export default EditDogNFT;
