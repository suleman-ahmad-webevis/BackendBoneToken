import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const blogCat = [
  "Breeding",
  "Puppies",
  "Training",
  "Show Handling",
  "Exercise",
  "Feeding",
  "Grooming",
  "Health",
  "Welfare",
  "Travel",
  "DogShows",
  "Judging",
  "NFT news",
];

const BlogSidebar = () => {
  const navigate = useNavigate();

  return (
    <BlogSidebarContainer>
      <SidebarTitle FontWeight>Categories</SidebarTitle>
      <SidebarDivider />
      <DogsList>
        {blogCat.map((item, index) => (
          <DogTypes
            key={index}
            onClick={() => navigate(`/blogs?category=${item}`)}
          >
            {item}
          </DogTypes>
        ))}
      </DogsList>
      <SidebarTitle>Crypto</SidebarTitle>
      <SidebarTitle>News</SidebarTitle>
      <SidebarTitle>Sales</SidebarTitle>
    </BlogSidebarContainer>
  );
};

export const BlogSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  width: 16%;
  height: 700px;
  background: #ffffff;
  border-radius: 12px;
  position: relative;
  @media screen and (max-width: 1110px) {
    display: none;
  }
`;

export const SidebarTitle = styled.div`
  font-style: normal;
  font-weight: ${({ FontWeight }) => (FontWeight ? "600" : "800")};
  font-size: 18px;
  line-height: 160%;
  color: #000f5c;
  cursor: pointer;
`;

export const SidebarDivider = styled.div`
  width: 100%;
  border: 1px solid #000f5c;
`;

export const DogsList = styled.div`
  margin-bottom: 30px;
`;

export const DogTypes = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 160%;
  color: #000000;
  cursor: pointer;
`;

export default BlogSidebar;
