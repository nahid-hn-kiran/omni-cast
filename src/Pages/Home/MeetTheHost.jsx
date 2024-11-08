import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules
import HostCard from "../../components/HostCard/HostCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Navigation } from "swiper/modules";
import { ourHosts } from "../../constants/constants.jsx";

const MeetTheHost = () => {
  return (
    <div className="meet-host py-12">
      <div className="container">
        <div className="host-top relative">
          <div>
            <h2 className="section-title text-center">Meet the Host</h2>
            <div className="">
              <p className="mt- w-9/12 md:w-4/12 mx-auto">
                Sed laoreet diam sagittis tempus convallis. Interdum et
                malesuada fames ac ante ipsum primis in faucibus.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-end gap-y-3 slider-arrows absolute bottom-0 right-0">
            <button className="custom-prev">
              <FaArrowLeft />
            </button>
            <button className="custom-next">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="mt-7">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {ourHosts.map((host) => (
              <SwiperSlide key={host._id}>
                <HostCard host={host} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MeetTheHost;
