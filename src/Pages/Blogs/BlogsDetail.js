import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogSidebar from "../../components/Sidebar/BlogSidebar";
import BlogDetail from "../../components/Blogs/BlogDetail";
import MayLikeBlogs from "../../components/Blogs/MayLikeBlogs";
import { useLocation } from "react-router-dom";
import CommonMobNav from "../../components/CommonMTNav/CommonMobNav";
import CommonTabNav from "../../components/CommonMTNav/CommonTabNav";
import useBreakpoint from "../../hooks/useBreakPoint";
import BlogTabMenu from "../../components/Blogs/TabMob/BlogTabMenu";

const BlogsDetail = () => {
  const { isTablet, isMobile, isSmallMobile } = useBreakpoint();

  const [open, setOpen] = useState(false);
  const location = useLocation();
  const Toggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BlogsPageContainer>
      <BlogSidebar open={open} Toggle={Toggle} />
      <BlogsContent>
        {(isSmallMobile || isMobile) && <CommonMobNav />}
        {(isTablet || isSmallMobile || isMobile) && <CommonTabNav />}
        {(isTablet || isSmallMobile || isMobile) && <BlogTabMenu />}
        <BlogDetail />
        <MayLikeBlogs category={location.state?.category} />
      </BlogsContent>
    </BlogsPageContainer>
  );
};

export const BlogsPageContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 30px;
  padding: 30px;
  width: 100%;
`;

export const BlogsContent = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  width: 78%;
  @media screen and (max-width: 1110px) {
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  position: absolute;
  left: ${({ open }) => (open ? "250px" : "10px")};
  z-index: 1000;
  font-size: ${({ open }) => (open ? "20px" : "30px")};
  color: #000f5c;
  margin-top: ${({ open }) => (open ? "5px" : "5px")};
  cursor: pointer;

  @media screen and (max-width: 1520px) {
    display: block;
  }
  @media screen and (max-width: 600px) {
    margin-top: ${({ open }) => (open ? "5px" : "0")};
    left: ${({ open }) => (open ? "250px" : "20px")};
  }
`;
export default BlogsDetail;
