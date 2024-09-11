import CountUp from "react-countup";

const WhyUs = () => {
  return (
    <div className="why-us">
      <div className="container">
        <div className="section-top text-center">
          <h2 className="section-title">Trusted by more than 10K users</h2>
          <div className="md:w-4/12 mx-auto">
            <p className="mt-7">
              OmniCast LTD is a Private Limited Company by shares, was
              incorporated in Bangladesh on 18th November, 2007 under the
            </p>
          </div>
        </div>
        {/* About Us */}
        <div className="about-us">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 text-center gap-x-10">
            <div className="counter-box">
              <h2 className="counter-title">
                <CountUp start={0} end={1548} />+
              </h2>
              <p>Total Podcast</p>
            </div>
            <div className="counter-box">
              <h2 className="counter-title">
                <CountUp start={0} end={25} />+
              </h2>
              <p>Award Gaiend</p>
            </div>
            <div className="counter-box">
              <h2 className="counter-title">
                <CountUp start={0} end={9} />+
              </h2>
              <p>Working Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
