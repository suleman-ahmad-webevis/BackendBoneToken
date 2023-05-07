import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import FormFilter from "../../components/Forms/CreateNFT/RegisterDogNft/FormsFilterbar";
import RegisterDog from "../../components/Forms/CreateNFT/RegisterDogNft/RegisterDog";
import RegisterOwner from "../../components/Forms/CreateNFT/RegisterDogNft/RegisterOwner";
import RegisterVeterinary from "../../components/Forms/CreateNFT/RegisterDogNft/RegisterVeterinary";
import RegisterInsurance from "../../components/Forms/CreateNFT/RegisterDogNft/RegisterInsurance";
import RegisterDogShow from "../../components/Forms/CreateNFT/RegisterDogNft/RegisterDogShow";
import Confirmation from "../../components/Forms/CreateNFT/RegisterDogNft/Confirmation";
import CommonTabNav from "../../components/CommonMTNav/CommonTabNav";
import useBreakpoint from "../../hooks/useBreakPoint";
import CommonMobNav from "../../components/CommonMTNav/CommonMobNav";

const CreateDogNFT = () => {
  const { pageName } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageName]);

  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();

  const getPage = () => {
    switch (pageName) {
      case "dog-register":
        return <RegisterDog />;
      case "owner-register":
        return <RegisterOwner />;
      case "veterinary-register":
        return <RegisterVeterinary />;
      case "insurance-register":
        return <RegisterInsurance />;
      case "dogShow-register":
        return <RegisterDogShow />;
      case "congratulations":
        return <Confirmation />;
      default:
        return <h1>Page Not Found</h1>;
    }
  };

  return (
    <>
      <NFTMainContainer>
        <NFTContainer>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gridGap: "20px",
            }}
          >
            {(isSmallMobile || isMobile) && <CommonMobNav />}
            {(isTablet || isSmallMobile || isMobile) && (
              <CommonTabNav />
            )}
          </div>
          <FilterForms>
            <FormFilter />
          </FilterForms>
          {getPage()}
        </NFTContainer>
      </NFTMainContainer>
    </>
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
  padding: 50px 70px;
  width: 80%;
  max-width: 80%;
  @media screen and (max-width: 1460px) {
    width: 90%;
    max-width: 90%;
  }
  @media screen and (max-width: 1360px) {
    width: 100%;
    max-width: 100%;
  }
  @media screen and (max-width: 900px) {
    padding: 50px 15px;
  }
`;

export const FilterForms = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 15px;
  @media screen and (max-width: 1110px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

export default CreateDogNFT;
