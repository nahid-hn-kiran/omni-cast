import "./PageTitle.css";

const PageTitle = () => {
  return (
    <div className="page-title py-20 md:py-28 relative">
      <div className="section-bg"></div>
      <div className="container">
        <h2 className="section-title">Episodes</h2>
        <div className="md:w-7/12">
          <p className="mt-5">
            Sed laoreet diam sagittis tempus convallis. Interdum et malesuada
            fames ac ante ipsum primis in faucibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
