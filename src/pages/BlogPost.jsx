import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBlogContext } from "../context/blogContext";
import MainLayout from "../layouts/MainLayout";
import BlogCard from "../components/resusable/BlogCard";
import CTA from "../components/CTA";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts } = useBlogContext();

  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  const latestPosts = posts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const handleGoBack = () => {
    navigate("/", { state: { fromBlog: true } });
  };

  return (
    <MainLayout>
      <main className="pt-28">
        <div className="min-h-screen bg-white ">
          <div className="px-[35px] sm:px-20 py-20 flex flex-col items-center justify-center">
            <small className="capitalize text-[20px] text-boldo_blue">
              Blog
            </small>
            <h2 className="w-full sm:w-[45%] mx-auto text-[33px] sm:text-[40px] text-center text-boldo_blue capitalize">
              Thoughts and words
            </h2>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-[6rem] place-items-center border-b border-boldo_blue pb-[4.5rem]">
              <div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>

              <div className="w-full">
                <div className="space-x-4">
                  <span className="text-boldo_blue font-bold capitalize">
                    {post.category}
                  </span>
                  <span className="text-[#777777]">{post.date}</span>
                </div>
                <h3 className="text-black text-[40px] leading-tight mt-6">
                  {post.title}
                </h3>
                <div className="flex items-center mt-6 space-x-4 font-light">
                  <img
                    src={post.authorImage}
                    alt={post.authorName}
                    className="w-[38px] h-[38px] rounded-full"
                  />
                  <span>{post.authorName}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 px-[35px] sm:px-20 py-20">
            <h2 className="w-full self-start mx-auto text-[33px] sm:text-[40px] text-boldo_blue capitalize mb-8">
              Latest News
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
              {latestPosts.map((latestPost) => (
                <BlogCard key={latestPost.id} post={latestPost} />
              ))}
            </div>
          </div>

          <CTA />
        </div>
      </main>
    </MainLayout>
  );
};

export default BlogPost;
