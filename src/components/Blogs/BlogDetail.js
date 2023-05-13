import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Dogdatalogo from "../../assets/images/Dogdatalogo.png";
import { Img } from "../../GlobalStyles";
import { blogsById } from "../../redux/blog/blogSlice";
import Loader from "../Loader/Loader";

const BlogDetail = () => {
  const { blog, isLoading } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(blogsById(id));
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BlogDetailContainer>
      <MainImage>
        <Img src={blog?.featuredImg} alt="blog" style={{ width: "100%" }} />
      </MainImage>
      <BlogWriter>
        <Img src={Dogdatalogo} alt="writer" />
        <p>
          {blog?.authorName} &nbsp;
          {new Date(blog?.createdAt).toLocaleString().substring(0, 9)}
        </p>
      </BlogWriter>
      <BlogTitle>{blog.titleOfBlog}</BlogTitle>
      <Detail
        dangerouslySetInnerHTML={{
          __html: blog?.blogDesc,
        }}
      />
    </BlogDetailContainer>
  );
};

export const BlogDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 12px;
  padding: 30px;
  grid-gap: 20px;
`;

export const MainImage = styled.div`
  width: 100%;
  /* img {
    width: 925px;
    height: 505px;
    border-radius: 12px;
  }
  @media screen and (max-width: 1400px) {
    img {
      width: 870px;
      height: 505px;
      border-radius: 12px;
    }
  }
  @media screen and (max-width: 1300px) {
    img {
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  } */
`;

export const BlogTitle = styled.h5`
  font-weight: 700;
  font-size: 30px;
  line-height: 40px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 35px;
  }
`;

export const BlogWriter = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
  img {
    width: 30px;
  }
`;

export const Detail = styled.div`
  img {
    width: 100% !important;
    height: 100% !important;
  }
`;

export default BlogDetail;
