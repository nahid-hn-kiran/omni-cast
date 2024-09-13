import PopularPodcasts from "../../Pages/Podcasts/PopularPodcasts";
import Review from "../Review/Review";
import "./SingleEpisode.css";
import SinglePodcast from "./SinglePodcast";

const SingleEpisode = () => {
  return (
    <div className="single-episode my-10">
      <div className="container">
        <div className="grid grid-cols-3 gap-x-7">
          <div className="the-episode col-span-2">
            <SinglePodcast />
            <div className="give-rating mt-14">
              <Review />
            </div>
          </div>
          <div>
            <PopularPodcasts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEpisode;
