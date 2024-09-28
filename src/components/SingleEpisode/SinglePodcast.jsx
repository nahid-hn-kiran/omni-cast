import { FaDownload } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import PropTypes, { string } from "prop-types";

const SinglePodcast = ({ singlePodcast }) => {
  const { title, thumbnail, shortDescription, longDescription, podcast } =
    singlePodcast;
  return (
    <div className="single-podcast">
      <div className="single-podcast-top relative">
        <div
          className="section-bg"
          style={{ backgroundImage: `url(${thumbnail})` }}
        ></div>
        <div className="single-top">
          <div className="section-top px-7 pt-12">
            <h2 className="section-title">Episodes</h2>
            <div className="md:w-6/12">
              <p className="mt-5">{shortDescription}</p>
            </div>
          </div>
          {/* Podcast Player  */}
          <div className="podcast-player p-7 items-center mt-28 bg-omni-pink">
            <div className="flex-grow px-4">
              <div className="flex justify-between">
                <h3 className="episode-title">{title}</h3>
                <div className="player-buttons flex gap-x-4">
                  <button className="flex items-center gap-x-1.5">
                    <span>
                      <FaDownload />
                    </span>
                    Download
                  </button>
                  <button className="flex items-center gap-x-1.5">
                    <span>
                      <IoMdShare />
                    </span>
                    Share
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <AudioPlayer audio={podcast} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Article */}
      <div className="article-content border border-[#E0E0E0] rounded-md p-9">
        <article className="text-omni-dark">{longDescription}</article>
      </div>
    </div>
  );
};

SinglePodcast.propTypes = {
  singlePodcast: PropTypes.shape({
    title: string,
    thumbnail: string,
    shortDescription: string,
    longDescription: string,
    podcast: string,
    createdAt: string,
  }),
};

export default SinglePodcast;
