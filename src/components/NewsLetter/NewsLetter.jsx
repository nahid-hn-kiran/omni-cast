import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter px-2 sm:px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-4">
        <div className="newsletter-texts">
          <h2 className="newsletter-title">Sign up for our newsletter!</h2>
          <p className="mt-2">
            Sed laoreet diam sagittis tempus convallis. Interdum et malesuada
            fames ac ante ipsum primis in faucibus.
          </p>
        </div>
        <div className="newsletter-form mt-4 md:mt-4 sm:">
          <div className="email-container">
            <input
              type="email"
              placeholder="example@info.com"
              className="email-input py-2 py-3 lg:py-5 ps-3"
            />
            <button
              type="submit"
              className="subscribe-btn py-2 px-4 lg:py-4 lg:px-9"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
