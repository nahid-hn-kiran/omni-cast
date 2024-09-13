import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import Pagination from "../../components/Pagination/Pagination";

const PodcastList = () => {
  return (
    <div className="podcasts pt-24">
      <div className="container">
        <div className="section-top flex justify-between">
          <h2 className="podcast-section-title">All PODCAST List</h2>
          <div className="podcast-filter-btns flex gap-x-7">
            <button>Popular</button>
            <button>New</button>
            <button>Feathers</button>
          </div>
        </div>
        {/* All podcasts */}
        <div className="all-podcast">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-7">
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
            <EpisodeCard />
          </div>
          <div className="flex justify-center pt-20">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastList;
