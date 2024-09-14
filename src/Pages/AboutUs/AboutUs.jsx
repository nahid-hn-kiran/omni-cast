import { Link } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";

const AboutUs = () => {
  return (
    <div>
      <PageTitle />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About Omni-Cast
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Welcome to <strong>Omni-Cast</strong>, the podcast platform that
              brings you inspiring conversations and stories from all corners of
              the world. Whether youre passionate about technology, design,
              entrepreneurship, or personal development, Omni-Cast offers a
              diverse range of content to engage and entertain.
            </p>
          </div>

          {/* Content Section */}
          <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
            {/* Our Mission */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At <strong>Omni-Cast</strong>, our mission is to amplify voices,
              connect communities, and share stories that matter. Through our
              carefully curated podcasts, we aim to provide a platform where
              thought leaders, experts, and innovators can share their insights
              and experiences with a global audience. Our goal is to inspire our
              listeners with fresh perspectives and empower them to learn, grow,
              and take action.
            </p>

            {/* What We Offer */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our podcasts cover a wide array of topics:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
              <li>
                <strong>In-Depth Interviews</strong> with industry leaders and
                visionaries across tech, design, and innovation.
              </li>
              <li>
                <strong>Storytelling Episodes</strong> that captivate listeners
                with personal journeys, triumphs, and challenges.
              </li>
              <li>
                <strong>Educational Content</strong> to help you grow your
                skills and stay ahead in your professional and personal life.
              </li>
              <li>
                <strong>Weekly Roundups</strong> of the latest trends and
                insights in various industries.
              </li>
            </ul>

            {/* Community Section */}
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Omni-Cast is more than just a podcast platform—its a community. We
              invite you to engage with our episodes, share your favorite
              moments, and connect with like-minded individuals. Whether youre
              listening on your morning commute or unwinding at the end of the
              day, Omni-Cast is here to fuel your curiosity and keep you
              inspired.
            </p>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-xl text-gray-600 mb-4">
                Subscribe to Omni-Cast and never miss an episode.
              </p>
              <Link to="/" className="primary-btn">
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
