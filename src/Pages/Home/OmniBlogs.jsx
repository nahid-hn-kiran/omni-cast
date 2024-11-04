import { Link } from "react-router-dom";
import { useGetAllblogQuery } from "../../redux/features/blog/blogSlice";
import Loading from "../../Shared/Loading/Loading";
import Error from "../../Shared/Error/Error";
import BlogCard from "../../components/BlogCard/BlogCard";

const OmniBlogs = () => {
  const { data: blogs, error, isLoading } = useGetAllblogQuery();
  console.log(blogs);
  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className="omni-blogs">
      <div className="container">
        <div className="section-top text-center">
          <h2 className="section-title">OmniCast Blog</h2>
          <div className="md:w-4/12 mx-auto">
            <p className="mt-7">
              OmniCast LTD is a Private Limited Company by shares, was
              incorporated in Bangladesh on 18th November, 2007 under the
            </p>
          </div>
        </div>
        {/* Blogs  */}
        <div className="home-blogs">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 mt-10 mb-14">
            {blogs?.data?.slice(0, 3).map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
          <div className="see-more text-center">
            <Link to="/blog" className="primary-btn">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OmniBlogs;
