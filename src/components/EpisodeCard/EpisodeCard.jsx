import "./EpisodeCard.css";
import { IoStar } from "react-icons/io5";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EpisodeCard = ({ podcast }) => {
  const { _id, title, thumbnail, shortDescription } = podcast;
  return (
    <div className="episode-card">
      <Link to={`/podcasts/${_id}`} className="episode-thumbnail">
        <img src={thumbnail} alt={title} />
      </Link>
      <div className="episode-content p-7">
        <Link to={`/podcasts/${_id}`} className="episode-title">
          {title}
        </Link>
        <p className="episode-description mt-2">{shortDescription}</p>
        <div className="episode-footer flex items-end justify-between gap-x-3 mt-2">
          <div className="episode-ratings">
            <div className="flex gap-x-3 items-center">
              <p className="flex gap-x-1.5">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <FaRegStarHalfStroke />
              </p>
              <p>(23)</p>
            </div>
            <div className="mt-2">
              <h3 className="episode-footer-text">Average rating</h3>
            </div>
          </div>
          <div className="episode-length">
            <h3 className="episode-footer-text">15 mins</h3>
          </div>
          <div className="episode-play">
            <Link to="/">
              <FaPlayCircle />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

EpisodeCard.propTypes = {
  podcast: PropTypes.any,
};

export default EpisodeCard;
