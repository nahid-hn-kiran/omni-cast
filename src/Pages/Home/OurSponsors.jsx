import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import GoogleLogo from "../../assets/images/google-s.png";
import { Link } from "react-router-dom";

const OurSponsors = () => {
  return (
    <div className="our-sponsors">
      <div className="container">
        <div className="section-top text-center">
          <h2 className="section-title">Our Corporate Sponsor</h2>
          <div className="md:w-4/12 mx-auto mt-7">
            <p>
              IMAM NETWORK LTD is a Private Limited Company by shares, was
              incorporated in Bangladesh on 18th November, 2007 under the
            </p>
          </div>
        </div>
        <div className="sponsors pb-5 mt-10">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <img src={GoogleLogo} alt="Google Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={GoogleLogo} alt="Google Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={GoogleLogo} alt="Google Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={GoogleLogo} alt="Google Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={GoogleLogo} alt="Google Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={GoogleLogo} alt="Google Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={GoogleLogo} alt="Google Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={GoogleLogo} alt="Google Logo" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img src={GoogleLogo} alt="Google Logo" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="become-sponsor px-4">
          <div className="md:w-6/12 mx-auto">
            <div className="sponsor-bg-overlay"></div>
            <div className="sponsor-card p-4 md:p-16 flex flex-col items-center text-center">
              <h2 className="section-title">Become a sponsor!</h2>
              <p className="mt-3">
                Sed laoreet diam sagittis tempus convallis. Interdum et
                malesuada fames ac ante ipsum primis in faucibus.
              </p>
              <div className="mt-6">
                <Link to="/" className="primary-btn">
                  Lets Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSponsors;
