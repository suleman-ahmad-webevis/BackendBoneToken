import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/404");
  }, []);

  return (
    <NotFoundPageContainer>
      <NotFoundPageContent>
        <Headings Big Color="white">
          404
        </Headings>
        <Heading level={8}>OPPS! </Heading>
        <Heading level={3}>PAGE DOESN'T EXIST OR IS UNAVAILABLE</Heading>
        <HomeLink onClick={() => navigate("/")}>
          <Button2 primary>Go Back to Home</Button2>
        </HomeLink>
      </NotFoundPageContent>
    </NotFoundPageContainer>
  );
};

export const NotFoundPageContainer = styled.div`
  background: #79999d;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 700px) {
    padding: 20px;
  }
`;
export const NotFoundPageContent = styled.div`
  /* background: #fff; */
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
  border-radius: 8px;
  text-align: center;

  @media screen and (max-width: 700px) {
    padding: 20px;
  }
`;

export const Button2 = styled.button`
  border-radius: 8px;
  box-shadow: ${({ primary }) =>
    primary ? "white" : "0px 4px 4px rgba(0, 0, 0, 0.25)"};
  padding: ${({ primary }) => (primary ? "10px 16px" : "16px")};
  cursor: pointer;
  border: 1px solid rgba(130, 151, 255, 0.5);
  background: ${({ primary }) => (primary ? "none" : "#0e626d")};
  color: ${({ primary }) => (primary ? "white" : "#fff")};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ active }) =>
    active &&
    `
    background: ${({ primary }) => (primary ? "#2196F3" : "#fff")};
  `}
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#8c948c" : "#000000")};
    color: ${({ primary }) => (primary ? "#fff" : "#fff")};
  }
  &:disabled {
    background: none;
    color: #90caf9;
    cursor: not-allowed;
  }
`;
export const Headings = styled.p`
  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: ${({ Big }) => (Big ? "300px" : "20px")};
  font-size: ${({ Big }) => (Big ? "200px" : "20px")};
  line-height: ${({ Big }) => (Big ? "100px" : "24px")};
  color: ${({ Color }) => (Color ? Color : "#F8A529")};
  margin: 1rem 0;
`;

export const HomeLink = styled.div`
  text-decoration: none;
`;

export default NotFound;
