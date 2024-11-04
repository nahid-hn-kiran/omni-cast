import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./HostCard.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HostCard = ({ host }) => {
  return (
    <div className="host-card text-center">
      <div className="host-card-thumbnail flex justify-center">
        <img src={host.img} alt={host.name} />
      </div>
      <div className="host-card-content p-5">
        <h3 className="card-title">{host.name}</h3>
        <h4 className="card-small-text mt-1">{host.title}</h4>
        <p className="card-text mt-1">{host.description}</p>
        <div className="card-social-media flex justify-center gap-x-4 mt-6">
          <Link to="/">
            <FaFacebookF />
          </Link>
          <Link to="/">
            <FaYoutube />
          </Link>
          <Link to="/">
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>
  );
};

HostCard.propTypes = {
  host: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default HostCard;
