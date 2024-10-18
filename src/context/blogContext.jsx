import React, { createContext, useState, useContext } from "react";
import { blogData } from "../data/blogData";

const BlogContext = createContext();

export const useBlogContext = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState(blogData);
  const [visiblePosts, setVisiblePosts] = useState(3);

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 3, posts.length));
  };

  const value = {
    posts,
    visiblePosts,
    loadMore,
    hasMore: visiblePosts < posts.length,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
