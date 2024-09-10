import { FaDownload } from "react-icons/fa";
import HeroAudioThumbnail from "../../assets/images/hero-audio.png";
import PodCast from "../../assets/podcasts/janiye.mp3";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import { IoMdShare } from "react-icons/io";

const HeroAudio = () => {
  return (
    <div className="container">
      <div className="hero-audio-container">
        <div className="hero-audio grid grid-cols-3 items-center">
          <div className="flex items-center gap-x-4">
            <div className="player-thumbnail">
              <img src={HeroAudioThumbnail} alt="Hero Audio" />
            </div>
            <div className="hero-audio-description">
              <h3 className="plaer-title">Human Research</h3>
              <p className="player-description">with Jesica Lira</p>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-4 gap-x-10">
            <div className="col-span-3">
              <AudioPlayer src={PodCast} />
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default HeroAudio;
