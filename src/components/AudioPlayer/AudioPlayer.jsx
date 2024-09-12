import { useEffect, useRef, useState } from "react";
import "./AudioPlayer.css"; // Add styles as needed
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;

    // Update duration once metadata is loaded
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });

    // Update currentTime as the audio plays
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
    });
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={src} />
      <button className="play-pause" onClick={togglePlayPause}>
        {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
      </button>
      <p className="audio-duration">{formatTime(currentTime)}</p>
      <input
        type="range"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleProgressChange}
        className="range-bar audio-range"
        style={{
          background: `linear-gradient(to right, #000000 ${
            (currentTime / duration) * 100 || 0
          }%, #ffffff ${(currentTime / duration) * 100 || 0}%)`,
          position: "relative",
        }}
      />
      <p className="audio-duration">{formatTime(duration)}</p>
      <input
        type="range"
        value={volume * 100}
        onChange={handleVolumeChange}
        max="100"
        className="range-bar volume-bar w-9 sm:w-14"
        title={`Volume: ${Math.round(volume * 100)}`}
        style={{
          background: `linear-gradient(to right, #000000 ${
            volume * 100
          }%, #ffffff ${volume * 100}%)`,
          position: "relative",
        }}
      />
    </div>
  );
};

export default AudioPlayer;
