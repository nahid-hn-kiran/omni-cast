import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";

const PopularPodcasts = () => {
  return (
    <div>
      <h2>Popular Podcaast</h2>
      <div className="popular-podcasts mt-3 flex flex-col gap-y-4">
        <EpisodeCard />
        <EpisodeCard />
        <EpisodeCard />
      </div>
    </div>
  );
};

export default PopularPodcasts;
