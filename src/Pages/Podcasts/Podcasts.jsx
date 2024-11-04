import PageTitle from "../../components/PageTitle/PageTitle";
import PodcastList from "./PodcastList";
import "./podcasts.css";

const Podcasts = () => {
  return (
    <div className="podcasts-page">
      <PageTitle
        title="Podcasts"
        description="Listen to our podcast on various topics. We will upload our Podcasts regularly. Stay tuned."
      />
      <PodcastList />
    </div>
  );
};

export default Podcasts;
