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

const MeetTheHost = () => {
  return (
    <div className="meet-host">
      <div className="container">
        <div className="grid grid-cols-3">
          <div></div>
          <div>
            <h2 className="section-title text-center">Meet the Host</h2>
            <div className="">
              <p className="mt-2">
                Sed laoreet diam sagittis tempus convallis. Interdum et
                malesuada fames ac ante ipsum primis in faucibus.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-end gap-y-6 slider-arrows">
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
            <SwiperSlide>
              <HostCard />
            </SwiperSlide>
            <SwiperSlide>
              <HostCard />
            </SwiperSlide>
            <SwiperSlide>
              <HostCard />
            </SwiperSlide>
            <SwiperSlide>
              <HostCard />
            </SwiperSlide>
            <SwiperSlide>
              <HostCard />
            </SwiperSlide>
            <SwiperSlide>
              <HostCard />
            </SwiperSlide>
            <SwiperSlide>
              <HostCard />
            </SwiperSlide>
            <SwiperSlide>
              <HostCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MeetTheHost;
