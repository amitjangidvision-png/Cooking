import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard";

const ReviewSlider = ({ reviews }) => {
  const paginationRef = useRef(null);

  return (
    <>
      <div className="container px-4 sm:px-10 mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: paginationRef.current,
            renderBullet: (index, className) => `<span class="${className}"></span>`,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.pagination.el = paginationRef.current;
              swiper.pagination.init();
              swiper.pagination.render();
              swiper.pagination.update();
            });
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="review-swiper w-full"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx} className="w-full">
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        ref={paginationRef}
        className="custom-pagination mt-6 flex justify-center gap-4"
      />
    </>
  );
};

export default ReviewSlider;
