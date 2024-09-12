import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-28 items-center">
        <div className="newsletter-texts">
          <h2 className="newsletter-title">Sign up for our newsletter!</h2>
          <p className="mt-2">
            Sed laoreet diam sagittis tempus convallis. Interdum et malesuada
            fames ac ante ipsum primis in faucibus.
          </p>
        </div>
        <div className="newsletter-form">
          <div className="email-container">
            <input
              type="email"
              placeholder="example@info.com"
              className="email-input"
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
