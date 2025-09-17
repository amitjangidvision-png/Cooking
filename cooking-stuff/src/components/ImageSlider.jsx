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
    dateColor: "text-[#10C900] bg-transparent",
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
      old: "3000",
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
        <br /> Workshop
      </>
    ),
    date: "Coming Soon",
    dateColor:
      "bg-gradient-to-r from-orange-400 to-orange-600 text-white px-4 py-2 rounded-md font-semibold inline-block",
    recipes: "10+ Recipes",
    recipesColor: "text-[#E24398]",
    badges: ["Lifetime access", "Videos", "PDF"],
  },
];

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
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
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
                min-h-[320px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[800px]
              "
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: idx === 0 ? "center 30%" : "center center"
              }}
            >
              <div className="container px-4 sm:px-10 mx-auto">
                <div
                  className="
                    flex flex-col justify-center
                    text-left
                    text-white font-heading
                    max-w-lg 
                    py-6 sm:py-10 md:py-12 
                  "
                >
                  {/* Live Icon */}
                  <img
                    src={slide.liveIcon}
                    alt="Live"
                    className="w-12 sm:w-14 md:w-20 mb-4 md:pb-8"
                  />

                  {/* Title */}
                  <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl lg:leading-normal md:leading-[1.5] mb-3">
                    {slide.title}
                  </h2>

                  {/* Date */}
                  {slide.date && (
                    <div className="mb-3 md:mt-6">
                      <span
                        className={`text-sm sm:text-lg md:text-2xl font-semibold ${slide.dateColor}`}
                      >
                        {slide.date}
                      </span>
                    </div>
                  )}

                  {/* Price (only for Juice workshop) */}
                  {slide.price && (
                    <div className="flex items-center gap-3 mb-3">
                      <span className="line-through text-red-500 text-lg">
                        ₹{slide.price.old}
                      </span>
                      <span className="text-white text-lg font-semibold">
                        ₹{slide.price.new}
                      </span>
                    </div>
                  )}

                  {/* Recipes */}
                  {slide.recipes && (
                    <p
                      className={`text-sm sm:text-lg md:text-xl font-semibold mb-3 ${slide.recipesColor}`}
                    >
                      {slide.recipes}
                    </p>
                  )}

                  {/* Badges */}
                  <div className="flex flex-wrap justify-start md:py-4 gap-2">
                    {slide.badges.map((badge, i) => (
                      <span
                        key={i}
                        className={`px-2 sm:px-3 py-1 text-xs sm:text-sm md:text-base ${
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