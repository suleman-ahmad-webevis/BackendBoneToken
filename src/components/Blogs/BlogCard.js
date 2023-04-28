import React from "react";
import { Img } from "../../GlobalStyles";
import styled from "styled-components";
import Share from "../../assets/images/Blogs/Share.png";
import BookMark from "../../assets/images/Blogs/BookMark.png";
import PopularIcon from "../../assets/images/Blogs/PopularIcon.png";
import { useNavigate } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const handleScroll = () => {
    scroll.scrollToTop();
  };

  return (
    <CardContainer>
      <CardImageContainer>
        <Img
          src={blog?.featuredImg}
          alt="Blog-image"
          onClick={() => {
            handleScroll();
            navigate(`/blogs/blog-detail/${blog._id}`, {
              state: {
                category: blog.category,
              },
            });
          }}
        />
      </CardImageContainer>
      <BlogCardTitle
        onClick={() => {
          handleScroll();
          navigate(`/blogs/blog-detail/${blog._id}`, {
            state: {
              category: blog.category,
            },
          });
        }}
      >
        <h2>{blog?.titleOfBlog}</h2>
        <h4>{blog?.category}</h4>
      </BlogCardTitle>
      <BlogCardContent>
        {blog.blogShortDesc.length > 170
          ? `${blog.blogShortDesc.slice(0, 170)}...`
          : blog.blogShortDesc}
      </BlogCardContent>
      <BlogCardFooter>
        <CardDate>
          <h3>{blog?.authorName}</h3>
          {new Date(blog?.createdAt).toLocaleString().substring(0, 9)}
        </CardDate>
        <CardShareIcons>
          <ShareIcon>
            <Img src={Share} alt="Share" />
          </ShareIcon>
          <ShareIcon>
            <Img src={BookMark} alt="BookMark" />
          </ShareIcon>
        </CardShareIcons>
      </BlogCardFooter>
      <Popular>
        <Img src={PopularIcon} alt="PopularIcon" /> Popular
      </Popular>
    </CardContainer>
  );
};

export const BlogCardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;

  h2 {
    font-family: "Urbanist-Regular";
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 160%;
    color: #000f5c;
  }
  h4 {
    font-family: "Urbanist-Regular";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 160%;
    color: #000000;
  }
`;

export const BlogCardContent = styled.div`
  font-family: "Urbanist-Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 160%;
  color: #000000;
`;

export const BlogCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardDate = styled.div`
  display: flex;
  grid-gap: 20px;
  align-items: center;

  h3 {
    font-family: "Poppins-Regular";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #000f5c;
  }

  @media screen and (max-width: 400px) {
    grid-gap: 10px;
  }
`;

export const CardShareIcons = styled.div`
  display: flex;
  grid-gap: 20px;
  align-items: center;

  @media screen and (max-width: 400px) {
    grid-gap: 10px;
  }
`;

export const ShareIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 29px;
  border: 1px solid #000000;
  border-radius: 360px;
  cursor: pointer;
`;

export const Popular = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 34px;
  background: #fee96c;
  border-radius: 15px;
  font-family: "Urbanist-Regular";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 160%;
  color: #000000;
  position: absolute;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  grid-gap: 20px;
  background: #ffffff;
  border-radius: 12px;
  width: 49%;
  position: relative;

  @media screen and (max-width: 1490px) {
    width: 47%;
    margin: auto;
  }
  @media screen and (max-width: 1455px) {
    width: 70%;
    margin: auto;
  }
`;

export const CardImageContainer = styled.div`
  img {
    width: 100%;
    height: 300px;
    max-height: 385px;
    object-fit: cover;
  }
`;

export default BlogCard;
