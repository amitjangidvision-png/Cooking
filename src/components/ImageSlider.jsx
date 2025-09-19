import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "/frame-1.png",
    liveIcon: "/live-icon.png",
    title: (
      <>
        Find Your <span className="text-[#FFBF01]">Favorite</span> <br />
        <span className="text-[#FFBF01]">Food &amp; Make Better</span> <br />
        Your Cooking
      </>
    ),
    date: "10th - 20th May",
    dateColor: "text-[#D7F315] bg-transparent",
    recipes: null,
    badges: ["Lifetime access", "Videos", "PDF"],
  },
  {
    image: "/frame-2.png",
    liveIcon: "/live-icon.png",
    title: (
      <>
        <span className="text-[#FFBF01]">Variety of Juice</span>
        <br /> Workshop
      </>
    ),
    date: "6th - 10th June 12:00PM",
    dateColor: "bg-white text-black px-3 py-1 rounded-md inline-block",
    price: {
      old: "5000",
      new: "500 (Lifetime access)",
    },
    recipes: "10+ Recipes",
    recipesColor: "text-white",
    badges: ["Lifetime access", "Videos", "PDF"],
  },
  {
    image: "/frame-3.png",
    liveIcon: "/live-icon.png",
    title: (
      <>
        <span className="text-[#C83AC8]">Gaint Strawberry</span>
        <br /> <span className="text-black">Workshop</span>
      </>
    ),
    date: "Coming Soon",
    dateColor: "bg-primary text-white px-4 py-2 rounded-md inline-block my-10",
    recipes: "10+ Recipes",
    recipesColor: "text-[#FA2147]",
    badges: ["Lifetime access", "Videos", "PDF"],
  },
];
//h-[92vh] md:h-[92vh] lg:h-[92vh] xl:h-[92vh] 2xl:h-[92vh]
const ImageSlider = () => {
  return (
    <div className="image-slider-root">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        className="w-full relative"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="
                relative w-full 
                flex items-center 
                bg-cover bg-center bg-no-repeat
                h-[92vh] sm:h-[90vh] 2xl:h-[95vh]
              "
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: idx === 0 ? "center 30%" : "center center",
              }}
            >
              <div className="container px-4 sm:px-10 mx-auto">
                <div
                  className="
                    flex flex-col justify-center
                    text-left
                    text-white font-heading
                    max-w-2xl 
                    py-6 sm:py-10 md:py-12 
                  "
                >
                  {/* Live Icon */}
                  {idx !== 2 && (
                    <img
                      src={slide.liveIcon}
                      alt="Live"
                      className="w-20 md:w-32 mb-4 md:pb-8"
                    />
                  )}

                  {/* Title */}
                  <h2
                    className={` text-3xl sm:text-5xl leading-[2] sm:leading-[2] md:leading-[2] md:text-5xl xl:text-6xl xl:leading-[2] ${
                      idx === 0 ? "mb-11" : ""
                    }${idx === 2 ? "lg:leading-[1.5] sm:leading-[1.5]" : ""}`}
                  >
                    {slide.title}
                  </h2>

                  {/* Date */}
                  {slide.date && (
                    <div
                      className={`${idx === 1 ? " mb-12 md:mb-20" : "mb-3"}`}
                    >
                      <span
                        className={`text-xl sm:text-2xl md:text-4xl ${slide.dateColor}`}
                      >
                        {slide.date}
                      </span>
                    </div>
                  )}

                  {/* Price (only for Juice workshop) */}
                  {slide.price && (
                    <div className="flex items-center gap-3 mb-5 font-heading">
                      <span className="relative inline-block text-white text-3xl md:text-4xl">
                        ₹{slide.price.old}
                        <span className="absolute left-0 top-1/2 w-full h-[4px] bg-[#FF0000] transform rotate-12"></span>
                      </span>

                      <span className="text-white text-2xl md:text-3xl">
                        ₹{slide.price.new}
                      </span>
                    </div>
                  )}

                  {/* Recipes */}
                  {slide.recipes && (
                    <p
                      className={`font-heading text-xl sm:text-lg md:text-4xl m-5 ${slide.recipesColor}`}
                    >
                      {slide.recipes}
                    </p>
                  )}

                  {/* Badges */}
                  <div className="flex flex-wrap justify-start md:py-5">
                    {slide.badges.map((badge, i) => (
                      <span
                        key={i}
                        className={`px-2 sm:px-3 py-1 text-lg sm:text-sm md:text-2xl ${
                          badge === "Lifetime access"
                            ? "bg-black text-white"
                            : badge === "Videos"
                            ? "bg-[#F99106] text-white"
                            : "bg-[#FAEE21] text-black"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2"></div>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
