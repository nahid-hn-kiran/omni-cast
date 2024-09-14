import BlogCard from "./BlogCard";
import SingleBlogPageLeft from "./SingleBlogPageLeft";

const SingleBlogPage = () => {
  return (
    <div className="single-blog-page pt-10">
      <div className="container">
        <div className="grid grid-cols-3 gap-x-7">
          <div className="col-span-2">
            <SingleBlogPageLeft />
          </div>
          <div className="flex flex-col gap-y-5">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
