import { Link } from "react-router-dom";
import BlogCard from "../../components/BlogCard/BlogCard";

const PodcastBlogs = () => {
  return (
    <div className="podcast-blogs pt-20">
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
        <div className="podcast-blogs">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-7 mt-10 mb-14">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className="see-more text-center">
            <Link to="/" className="primary-btn">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastBlogs;
