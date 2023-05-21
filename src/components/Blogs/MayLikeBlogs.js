import React, { useEffect } from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import Share from "../../assets/images/Blogs/Share.png";
import BookMark from "../../assets/images/Blogs/BookMark.png";
import PopularIcon from "../../assets/images/Blogs/PopularIcon.png";
import {
  BlogCardContent,
  BlogCardFooter,
  BlogCardTitle,
  CardDate,
  CardShareIcons,
  ShareIcon,
  CardImageContainer,
} from "./BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { blogMayLike } from "../../redux/blog/blogSlice";
import { useParams } from "react-router-dom";

const MayLikeBlogs = ({ category }) => {
  const dispatch = useDispatch();
  const { mayLikeBlogs } = useSelector((state) => state.blog);
  const { id } = useParams();

  useEffect(() => {
    dispatch(blogMayLike({ category, id }));
    // eslint-disable-next-line
  }, []);

  return (
    <MayLikeContainer>
      {mayLikeBlogs.length > 0 && <Title>You may also like:</Title>}
      <MLCardsWrapper>
        {mayLikeBlogs.length > 0 ? (
          mayLikeBlogs.map((blog, index) => (
            <MayLikeCard key={index}>
              <CardImageContainer>
                <Img src={blog.featuredImg} alt="blog-image" />
              </CardImageContainer>
              <BlogCardTitle>
                <h2>{blog.titleOfBlog}</h2>
                <h4>{blog.category} </h4>
              </BlogCardTitle>
              <BlogCardContent>
                {blog.blogShortDesc.length > 120
                  ? `${blog.blogShortDesc.slice(0, 120)}...`
                  : blog.blogShortDesc}
              </BlogCardContent>
              <BlogCardFooter>
                <CardDate>
                  <h3>{blog.authorName}</h3>
                  <h3>
                    {new Date(blog?.createdAt).toLocaleString().substring(0, 9)}
                  </h3>
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
            </MayLikeCard>
          ))
        ) : (
          <h2>No related blogs</h2>
        )}
      </MLCardsWrapper>
    </MayLikeContainer>
  );
};

export const MayLikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  grid-gap: 50px;
  background: #f5f5f5;
  width: 100%;
`;

export const MLCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  grid-gap: 30px;
  background: #f5f5f5;
  width: 100%;
  overflow-x: scroll;
`;

export const MayLikeCard = styled.div`
  position: relative;
  width: 32%;
  @media screen and (max-width: 1100px) {
    width: 49%;
  }
`;

export const Title = styled.h5`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 67px;
  color: #000000;
`;

export const Popular = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 105px;
  height: 34px;
  background: #fee96c;
  border-radius: 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 160%;
  color: #000000;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export default MayLikeBlogs;
