import React, { useState } from "react";
import { useBlogContext } from "../context/blogContext";
import BlogCard from "./resusable/BlogCard";

const Blog = () => {
  const { posts } = useBlogContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const postsPerPage = 3;

  const loadMore = () => {
    const nextIndex = (currentIndex + postsPerPage) % posts.length;
    setCurrentIndex(nextIndex);
    setIsLastPage(nextIndex + postsPerPage >= posts.length);
  };

  const visiblePosts = posts.slice(currentIndex, currentIndex + postsPerPage);

  return (
    <section className="min-h-screen bg-white text-boldo_blue flex flex-col items-center justify-center px-[35px] sm:px-20 py-16">
      <small className="capitalize text-[20px]">Our Blog</small>
      <h2 className="w-full md:w-[80%] lg:w-[55%] mx-auto text-[33px] sm:text-[40px] text-center mb-12">
        Value proposition accelerator product management venture
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 w-full max-w-6xl mt-14">
        {visiblePosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <button
        onClick={loadMore}
        className={`mt-8 px-10 py-3 w-auto h-auto border border-boldo_blue rounded-full transition-all duration-300 ${
          isLastPage
            ? "bg-boldo_blue text-white"
            : "bg-transparent text-boldo_blue border-2 border-boldo_blue font-medium hover:bg-boldo_blue hover:text-white"
        }`}
      >
        {isLastPage ? "Back to Start" : "Load More"}
      </button>
    </section>
  );
};

export default Blog;
