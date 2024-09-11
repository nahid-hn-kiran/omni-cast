import EpisodesHome from "./EpisodesHome";
import Hero from "./Hero";
import HeroAudio from "./HeroAudio";
import MeetTheHost from "./MeetTheHost";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroAudio />
      {/* Episodes  */}
      <EpisodesHome />

      {/* Meet the hosts */}
      <MeetTheHost />
    </>
  );
};

export default Home;
