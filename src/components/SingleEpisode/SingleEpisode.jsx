import { useParams } from "react-router-dom";
import PopularPodcasts from "../../Pages/Podcasts/PopularPodcasts";
import Review from "../Review/Review";
import "./SingleEpisode.css";
import SinglePodcast from "./SinglePodcast";
import Loading from "../../Shared/Loading/Loading";
import Error from "../../Shared/Error/Error";
import { useGetSinglePodcastQuery } from "../../redux/features/podcast/podcastSlice";

const SingleEpisode = () => {
  const { id } = useParams();
  const { data: thePodcast, isLoading, error } = useGetSinglePodcastQuery(id);
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div className="single-episode my-10">
      <div className="container">
        <div className="grid grid-cols-3 gap-x-7">
          <div className="the-episode col-span-2">
            <SinglePodcast singlePodcast={thePodcast?.data} />
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
