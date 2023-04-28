import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheBlogs, setAllBlogs, reset } from "../../redux/blog/blogSlice";
import BlogCard from "./BlogCard";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../Loader/Loader";
import Heading from "../Heading/Heading";
import { useSearchParams } from "react-router-dom";

const BlogCards = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { blogs, total, isLoading, allBlogs } = useSelector(
    (state) => state.blog
  );
  const category = searchParams.get("category");
  //InfinteScroll
  const [pageInc, setPageInc] = useState(1);
  const [limit] = useState(6);
  useEffect(() => {
    dispatch(reset());
    dispatch(getTheBlogs({ category, page: pageInc, limit }));
  }, [category]);

  useEffect(() => {
    dispatch(setAllBlogs());
  }, [blogs]);

  const fetchMore = () => {
    setPageInc((pageInc) => pageInc + 1);
    if (allBlogs.length < total) {
      dispatch(
        getTheBlogs({
          page: pageInc + 1,
          limit,
        })
      );
    }
  };

  return (
    <BlogContainer>
      {isLoading && <Loader />}
      {allBlogs?.length ? (
        <BlogCardContainer id="BlogCardContainer">
          {allBlogs?.map((blog) => (
            <BlogCard blog={blog} key={blog._id} />
          ))}
          <InfiniteScroll
            dataLength={allBlogs?.length}
            next={fetchMore}
            hasMore={allBlogs?.length < total ? true : false}
            scrollableTarget="BlogCardContainer"
          ></InfiniteScroll>
        </BlogCardContainer>
      ) : (
        <NoBlogs>
          <Heading level={10} Black>
            No Blogs Found
          </Heading>
        </NoBlogs>
      )}
    </BlogContainer>
  );
};

export const BlogContainer = styled.div`
  width: 930px;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

export const BlogCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-gap: 10px;
  max-height: 1200px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: none;
  }
`;

const NoBlogs = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export default BlogCards;
