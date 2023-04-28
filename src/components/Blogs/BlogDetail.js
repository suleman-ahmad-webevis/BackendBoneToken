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
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <BlogDetailContainer>
      <MainImage>
        <img src={blog?.featuredImg} alt="blog" />
      </MainImage>
      <BlogWriter>
        <Img src={Dogdatalogo} alt="writer" />
        <p>
          {blog?.authorName} &nbsp;
          {new Date(blog?.createdAt).toLocaleString().substring(0, 9)}
        </p>
      </BlogWriter>
      <h2>{blog.titleOfBlog}</h2>
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
  width: 970px;
  @media screen and (max-width: 1400px) {
    width: 925px;
    align-self: center;
  }
  @media screen and (max-width: 1300px) {
    width: 90%;
  }
`;

export const MainImage = styled.div`
  img {
    width: 925px;
    height: 505px;
    border-radius: 12px;
  }
  @media screen and (max-width: 1400px) {
    img {
      width: 870px;
      height: 505px;
    }
  }
  @media screen and (max-width: 1300px) {
    img {
      width: 100%;
      height: 100%;
    }
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
