import EpisodesHome from "./EpisodesHome";
import Hero from "./Hero";
import HeroAudio from "./HeroAudio";
import MeetTheHost from "./MeetTheHost";
import SubscribeFollow from "./SubscribeFollow";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <HeroAudio />
      {/* Episodes  */}
      <EpisodesHome />
      {/* Meet the hosts */}
      <MeetTheHost />
      {/* Follow Us  */}
      <SubscribeFollow />
      {/* Testimonial  */}
      <Testimonial />
    </>
  );
};

export default Home;
