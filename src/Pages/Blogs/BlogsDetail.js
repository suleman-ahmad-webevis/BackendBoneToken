import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogSidebar from "../../components/Sidebar/BlogSidebar";
import BlogDetail from "../../components/Blogs/BlogDetail";
import MayLikeBlogs from "../../components/Blogs/MayLikeBlogs";
import { useLocation } from "react-router-dom";

const BlogsDetail = () => {
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
      <BlogsContainer>
        <BlogSidebar open={open} Toggle={Toggle} />
        <BlogsContent>
          <BlogDetail />
          <MayLikeBlogs category={location.state?.category} />
        </BlogsContent>
      </BlogsContainer>
    </BlogsPageContainer>
  );
};

export const BlogsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background: #fff;
`;

export const BlogsContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1350px) {
    grid-gap: 30px;
  }
`;

export const BlogsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 30px;
  /* padding: 0 20px; */
  background: #fff;
  @media screen and (max-width: 600px) {
    margin-top: 50px;
    grid-gap: 5px;
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
