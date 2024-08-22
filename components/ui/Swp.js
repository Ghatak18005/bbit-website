import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Swp = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center bg-black text-white">
      <Swiper
        className="mySwiper w-full h-80"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[Navigation, Thumbs]}
        loop={true}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: ".mySwiper2" }}
      >
        <SwiperSlide className="flex items-center justify-center">
          <img className="object-cover w-full h-full" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="nature-1" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <img className="object-cover w-full h-full" src="https://swiperjs.com/demos/images/nature-2.jpg" alt="nature-2" />
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>

      <Swiper
        className="mySwiper2 w-full h-20 box-border py-2"
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
      >
              </Swiper>
    </div>
  );
};

export default Swp;
