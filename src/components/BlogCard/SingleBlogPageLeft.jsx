import PropTypes, { string } from "prop-types";
import Loading from "../../Shared/Loading/Loading";
import FormatDate from "../FormatDate/FormatDate";

const SingleBlogPageLeft = ({ singleBlog }) => {
  {
    !singleBlog && <Loading />;
  }
  const { title, thumbnail, description, createdAt } = singleBlog;
  return (
    <div className="single-blog-top">
      <div className="single-blog-thumbnail">
        <img className="w-full" src={thumbnail} alt={title} />
      </div>
      <div className="blog-meta-top p-4">
        <div className="single-blog-meta w-8/12">
          <h2 className="single-blog-title">{title}</h2>
          <div className="flex gap-x-8 mt-3">
            <p className="common-text">5 min read</p>
            <p className="common-text">Date : {FormatDate(createdAt)}</p>
          </div>
        </div>
      </div>
      <div className="blog-texts px-7 py-3">
        <article dangerouslySetInnerHTML={{ __html: description }}></article>
      </div>
    </div>
  );
};

SingleBlogPageLeft.propTypes = {
  singleBlog: PropTypes.shape({
    title: string,
    thumbnail: string,
    description: string,
    createdAt: string,
  }),
};

export default SingleBlogPageLeft;
