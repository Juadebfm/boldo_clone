import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <Link to={`/blog/${post.id}`} className="block">
      <div className="bg-white hover:shadow-md rounded-lg overflow-hidden h-max">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
        <div className="py-8 px-3 flex flex-col gap-5 justify-between">
          <div className="flex justify-start gap-5 items-center mb-2">
            <span className="font-semibold">{post.category}</span>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
          <p className="text-black mb-4">{post.description}</p>
          <div className="flex items-center">
            <img
              src={post.authorImage}
              alt={post.authorName}
              className="w-10 h-10 rounded-full mr-3"
            />
            <span className="font-semibold">{post.authorName}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
