import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogCards from "../../components/Blogs/BlogCards";
import BlogSidebar from "../../components/Sidebar/BlogSidebar";
import BlogSlider from "../../components/Blogs/BlogSlider";
import { FaBars, FaTimes } from "react-icons/fa";

const Blogs = () => {
  const [open, setOpen] = useState(false);
  const Toggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BlogsContainer>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <BlogSidebar open={open} Toggle={Toggle} />
      <BlogsContent>
        <BlogSlider />
        <BlogCards />
      </BlogsContent>
    </BlogsContainer>
  );
};

export const BlogsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  background: #fff;
  grid-gap: 20px;
`;

export const BlogsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 30px;
  padding: 30px 0px;
  background: #fff;
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

  @media screen and (max-width: 1511px) {
    display: block;
  }
  @media screen and (max-width: 600px) {
    margin-top: ${({ open }) => (open ? "5px" : "0")};
    left: ${({ open }) => (open ? "250px" : "20px")};
  }
`;

export default Blogs;
