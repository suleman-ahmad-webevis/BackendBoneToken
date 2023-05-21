import React from "react";
import styled from "styled-components";
import BlogCards from "../../components/Blogs/BlogCards";
import BlogSidebar from "../../components/Sidebar/BlogSidebar";
import BlogSlider from "../../components/Blogs/BlogSlider";
import CommonMobNav from "../../components/CommonMTNav/CommonMobNav";
import CommonTabNav from "../../components/CommonMTNav/CommonTabNav";
import useBreakpoint from "../../hooks/useBreakPoint";
import BlogTabMenu from "../../components/Blogs/TabMob/BlogTabMenu";

const Blogs = () => {
  const { isTablet, isSmallMobile, isMobile } = useBreakpoint();

  return (
    <BlogsContainer>
      <BlogSidebar />
      <BlogsContent>
        {(isSmallMobile || isMobile) && <CommonMobNav />}
        {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />}
        {(isTablet || isSmallMobile || isMobile) && <BlogTabMenu />}
        <BlogSlider />
        <BlogCards />
      </BlogsContent>
    </BlogsContainer>
  );
};

export const BlogsContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  padding-top: 20px;
  background: #fff;
`;

export const BlogsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 30px;
  padding: 5px;
  background: #fff;
  width: 78%;
  @media screen and (max-width: 1110px) {
    width: 96%;
  }
`;

export default Blogs;
