import { Link } from "react-router-dom";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";

const EpisodesHome = () => {
  return (
    <div className="home-episodes pb-24">
      <div className="container">
        <h2 className="section-title">Episodes</h2>
        <div className="sm:grid sm:grid-cols-3 mt-3 items-center">
          <p className="col-span-2">
            Sed laoreet diam sagittis tempus convallis. Interdum et malesuada
            fames ac ante ipsum primis in faucibus.
          </p>
          <div className="flex justify-end">
            <Link to="/" className="primary-btn">
              View All
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-7">
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
          <EpisodeCard />
        </div>
      </div>
    </div>
  );
};

export default EpisodesHome;
