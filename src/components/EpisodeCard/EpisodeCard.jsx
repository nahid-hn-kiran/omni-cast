import "./EpisodeCard.css";
import Episode1 from "../../assets/images/episode-1.png";
import { IoStar } from "react-icons/io5";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";

const EpisodeCard = () => {
  return (
    <div className="episode-card">
      <div className="episode-thumbnail">
        <img src={Episode1} alt="Episode 1" />
      </div>
      <div className="episode-content p-5">
        <h2 className="episode-title">Human Research anatomy with mr. Tom</h2>
        <p className="episode description mt-2">
          Sed laoreet diam sagittis tempus convallis. Interdum et malesuada
        </p>
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

export default EpisodeCard;
