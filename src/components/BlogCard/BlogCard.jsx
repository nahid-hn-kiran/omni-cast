import "./BlogCard.css";
import { Link } from "react-router-dom";
import PropTypes, { string } from "prop-types";
import FormatDate from "../FormatDate/FormatDate";

const BlogCard = ({ blog }) => {
  const { _id, createdAt, title, description, thumbnail } = blog;
  return (
    <div className="blog-card">
      <Link to={`/blog/${_id}`} className="blog-thumbnail">
        <img src={thumbnail} alt={title} />
      </Link>
      <div className="blog-content p-5">
        <Link to={`/blog/${_id}`} className="blog-title">
          {title}
        </Link>
        <p className="common-text mt-2">
          {description.length > 100
            ? description.substring(0, 100) + "..."
            : description}
        </p>
        <div className="flex justify-between blog-meta mt-5">
          <p>Date : {FormatDate(createdAt)}</p>
          <p>3 min read</p>
        </div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.shape({
    _id: string,
    title: string,
    description: string,
    thumbnail: string,
    createdAt: string,
  }),
};

export default BlogCard;
