import { Link } from "react-router-dom";
import SoundCloud from "../../assets/images/sound-cloud.png";
import GooglePodcast from "../../assets/images/google-podcast.png";
import ApplePodcast from "../../assets/images/apple-podcast.png";
import Spotify from "../../assets/images/spotify.png";

const SubscribeFollow = () => {
  return (
    <div className="subscribe-follow">
      <div className="container text-center">
        <div className="section-top">
          <h2 className="section-title">Subscribe and follow</h2>
          <div className="md:w-4/12 mx-auto mt-1">
            <p>
              Sed laoreet diam sagittis tempus convallis. Interdum et malesuada
              fames ac ante ipsum primis in faucibus.
            </p>
          </div>
        </div>
        <div className="follow-us grid grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 mt-7 gap-x-8">
          <Link to="/" className="follow-card">
            <img src={SoundCloud} alt="Sound Cloud" />
          </Link>
          <Link to="/" className="follow-card">
            <img src={GooglePodcast} alt="Google Podcast" />
          </Link>
          <Link to="/" className="follow-card">
            <img src={ApplePodcast} alt="Apple Podcast" />
          </Link>
          <Link to="/" className="follow-card">
            <img src={Spotify} alt="Spotify" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubscribeFollow;
