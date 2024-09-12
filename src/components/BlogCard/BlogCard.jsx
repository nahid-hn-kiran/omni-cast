import "./BlogCard.css";
import Blog1 from "../../assets/images/blog-1.png";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="blog-thumbnail">
        <img src={Blog1} alt="Blog 1" />
      </div>
      <div className="blog-content p-5">
        <Link to="/" className="blog-title">
          OmniCast is the great platform of PODCAST world!
        </Link>
        <p className="common-text mt-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been
        </p>
        <div className="flex justify-between blog-meta mt-5">
          <p>Date : 12 March 2023</p>
          <p>3 min read</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
