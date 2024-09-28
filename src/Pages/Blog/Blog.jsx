import BlogCard from "../../components/BlogCard/BlogCard";
import PageTitle from "../../components/PageTitle/PageTitle";
import Pagination from "../../components/Pagination/Pagination";
import { useGetAllblogQuery } from "../../redux/features/blog/blogSlice";
import Error from "../../Shared/Error/Error";
import Loading from "../../Shared/Loading/Loading";
import "./Blog.css";

const Blog = () => {
  const { data: blogs, error, isLoading } = useGetAllblogQuery();
  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className="blog-page">
      <PageTitle />
      <div className="pt-24">
        <div className="container">
          <div className="section-top flex justify-between">
            <h2 className="podcast-section-title">All Blog List</h2>
            <div className="podcast-filter-btns flex gap-x-7">
              <button>Popular</button>
              <button>New</button>
              <button>Feathers</button>
            </div>
          </div>
          {/* All podcasts */}
          <div className="all-podcast">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-7">
              {blogs?.data?.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>
            <div className="flex justify-center pt-20">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
