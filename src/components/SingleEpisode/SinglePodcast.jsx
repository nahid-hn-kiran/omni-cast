import { FaDownload } from "react-icons/fa6";
import episode from "../../assets/images/hero-audio.png";
import { IoMdShare } from "react-icons/io";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

const SinglePodcast = () => {
  return (
    <div className="single-podcast">
      <div className="single-podcast-top relative">
        <div className="section-bg"></div>
        <div className="single-top">
          <div className="section-top px-7 pt-12">
            <h2 className="section-title">Episodes</h2>
            <div className="md:w-6/12">
              <p className="mt-5">
                Sed laoreet diam sagittis tempus convallis. Interdum et
                malesuada fames ac ante ipsum primis in faucibus.
              </p>
            </div>
          </div>
          {/* Podcast Player  */}
          <div className="podcast-player flex gap-x-4 items-center mt-28 bg-omni-pink">
            <div>
              <img src={episode} alt="Episode" />
            </div>
            <div className="flex-grow px-4">
              <div className="flex justify-between">
                <h3 className="episode-title">Human Research</h3>
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
                <AudioPlayer />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Article */}
      <article>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          delectus nam, officia et nihil minima recusandae perferendis rerum in
          sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Molestiae eius nam nobis corporis natus blanditiis nesciunt expedita
          corrupti quasi non.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          delectus nam, officia et nihil minima recusandae perferendis rerum in
          sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Molestiae eius nam nobis corporis natus blanditiis nesciunt expedita
          corrupti quasi non.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          delectus nam, officia et nihil minima recusandae perferendis rerum in
          sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Molestiae eius nam nobis corporis natus blanditiis nesciunt expedita
          corrupti quasi non.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          delectus nam, officia et nihil minima recusandae perferendis rerum in
          sequi?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Molestiae eius nam nobis corporis natus blanditiis nesciunt expedita
          corrupti quasi non.
        </p>
      </article>
    </div>
  );
};

export default SinglePodcast;
