import { FaDownload } from "react-icons/fa";
import HeroAudioThumbnail from "../../assets/images/hero-audio.png";
import PodCast from "../../assets/podcasts/janiye.mp3";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import { IoMdShare } from "react-icons/io";

const HeroAudio = () => {
  return (
    <div className="container">
      <div className="hero-audio-container md:p-11">
        <div className="hero-audio flex flex-col lg:flex-row items-center justify-between py-10 lg:py-0 lg:pr-16">
          <div className="flex flex-col gap-y-3 sm:flex-row items-center gap-x-4">
            <div className="player-thumbnail">
              <img src={HeroAudioThumbnail} alt="Hero Audio" />
            </div>
            <div className="hero-audio-description">
              <h3 className="player-title">Human Research</h3>
              <p className="player-description">with Jesica Lira</p>
            </div>
          </div>
          <div className="col-span-2 grid sm:grid-cols-4 gap-y-3 gap-x-4 md:gap-x-10 px-1">
            <div className="col-span-3">
              <AudioPlayer src={PodCast} />
            </div>
            <div className="player-buttons flex flex-row sm:flex-col lg:flex-row gap-y-2 gap-x-4">
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
        </div>
      </div>
    </div>
  );
};

export default HeroAudio;
