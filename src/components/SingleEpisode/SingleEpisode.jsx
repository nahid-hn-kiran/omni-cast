import Review from "../Review/Review";
import "./SingleEpisode.css";
import SinglePodcast from "./SinglePodcast";

const SingleEpisode = () => {
  return (
    <div className="single-episode my-10">
      <div className="container">
        <div className="the-episode">
          <SinglePodcast />
          <div className="give-rating mt-14">
            <Review />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEpisode;
