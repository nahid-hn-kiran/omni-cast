import { useParams } from "react-router-dom";
import BlogCard from "./BlogCard";
import SingleBlogPageLeft from "./SingleBlogPageLeft";
import {
  useGetAllblogQuery,
  useGetSingleBlogQuery,
} from "../../redux/features/blog/blogSlice";
import Loading from "../../Shared/Loading/Loading";
import Error from "../../Shared/Error/Error";

const SingleBlogPage = () => {
  const { id } = useParams();
  const { data: singleBlog, error, isLoading } = useGetSingleBlogQuery(id);
  const {
    data: blogs,
    error: error2,
    isLoading: loading2,
  } = useGetAllblogQuery();
  if (isLoading) return <Loading />;
  if (error) return <Error />;
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="single-blog-page pt-10">
      <div className="container">
        <div className="grid grid-cols-3 gap-x-7">
          <div className="col-span-2">
            <SingleBlogPageLeft singleBlog={singleBlog.data} />
          </div>
          <div className="flex flex-col gap-y-5">
            {loading2 && <Loading />}
            {error2 && <Error />}
            {blogs?.data?.slice(0, 3).map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
