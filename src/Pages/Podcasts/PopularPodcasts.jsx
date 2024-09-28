import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import { useGetAllPodcastQuery } from "../../redux/features/podcast/podcastSlice";
import Error from "../../Shared/Error/Error";
import Loading from "../../Shared/Loading/Loading";

const PopularPodcasts = () => {
  const { data: podcasts, isLoading, error } = useGetAllPodcastQuery();
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <div>
      <h2>Popular Podcaast</h2>
      <div className="popular-podcasts mt-3 flex flex-col gap-y-4">
        {podcasts?.data?.slice(0, 3).map((podcast) => (
          <EpisodeCard key={podcast._id} podcast={podcast} />
        ))}
      </div>
    </div>
  );
};

export default PopularPodcasts;
