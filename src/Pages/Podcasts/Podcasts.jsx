import NewsLetter from "../../components/NewsLetter/NewsLetter";
import PageTitle from "../../components/PageTitle/PageTitle";
import PodcastBlogs from "./PodcastBlogs";
import PodcastList from "./PodcastList";
import "./podcasts.css";

const Podcasts = () => {
  return (
    <div className="podcasts-page">
      <PageTitle />
      <PodcastList />
      <PodcastBlogs />
      <div className="home-newsletter">
        <div className="container">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
