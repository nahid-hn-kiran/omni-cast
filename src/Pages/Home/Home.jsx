import { Link } from "react-router-dom";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import Hero from "./Hero";
import HeroAudio from "./HeroAudio";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroAudio />
      {/* Episodes  */}
      <div className="home-episodes pb-24">
        <div className="container">
          <h2 className="section-title">Episodes</h2>
          <div className="grid grid-cols-2">
            <p>
              Sed laoreet diam sagittis tempus convallis. Interdum et malesuada
              fames ac ante ipsum primis in faucibus.
            </p>
            <div className="text-end">
              <Link to="/" className="primary-btn">
                View All
              </Link>
            </div>
          </div>
          <div className="omni-row-cols-1 omni-row-cols-md-2 omni-row-cols-lg-3 mt-6">
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
