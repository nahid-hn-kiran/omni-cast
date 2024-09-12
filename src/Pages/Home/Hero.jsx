import { Link } from "react-router-dom";
import "./Home.css";

const Hero = () => {
  return (
    <section id="hero-section">
      <div className="bg-overlay"></div>
      <div className="container">
        <div className="md:w-5/12 hero-content">
          <h1 className="hero-title">Connect to Your Audience</h1>
          <p className="hero-text mt-4">
            Interacting with your audience creating new relationships, nurturing
            existing ones, and responding to feedback.
          </p>
          <div className="hero-cta mt-4">
            <Link to="/" className="primary-btn">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
