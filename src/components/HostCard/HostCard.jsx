import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import "./HostCard.css";
import Host from "../../assets/images/host.png";
import { Link } from "react-router-dom";

const HostCard = () => {
  return (
    <div className="host-card text-center">
      <div className="host-card-thumbnail flex justify-center">
        <img src={Host} alt="host" />
      </div>
      <div className="host-card-content p-5">
        <h3 className="card-title">Mr. Steven Smith</h3>
        <h4 className="card-small-text mt-1">Ceo of OmniCast</h4>
        <p className="card-text mt-1">
          Sed laoreet diam sagittis tempus convallis. Interdum et malesuada
        </p>
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

export default HostCard;
