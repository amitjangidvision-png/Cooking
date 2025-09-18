import React from "react";
import Card from "../components/Card";
import { Star } from "lucide-react";

const CourseDetails = () => {
  const freeRecipesCourses = [
    {
      image: "/card-2-1.png",
      title: "Matar Paneer Veg",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
      tag: "Free Course",
    },
    {
      image: "/card-2-2.png",
      title: "Variety of Juice",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
    },
    {
      image: "/card-2-3.png",
      title: "Variety of pork bar",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
      tag: "Certified Course",
    },
    {
      image: "/card-2-1.png",
      title: "Matar Paneer Veg",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
      tag: "Free Course",
    },
    {
      image: "/card-2-2.png",
      title: "Variety of Juice",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
    },
    {
      image: "/card-2-3.png",
      title: "Variety of pork bar",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
      tag: "Certified Course",
    },
  ];

  const courseDetails = [
    "FREE Mix Veg with Fried Potato Course",
    "100% veg recipes",
    "Step-by-step cooking video instructions + Detailed PDF notes",
    "Doubt solving over call",
    "Learn from Experts",
    "Explore new recipes every day",
    "2,00,00+ Trained students",
    "Free Lifetime Access",
  ];

  const courseInfo = [
    { icon: "/cd-svg-1.png", label: "Instructor", value: "Zibiah Surya" },
    { icon: "/cd-svg-2.png", label: "Duration", value: "05 hr 15 mins" },
    { icon: "/cd-svg-3.png", label: "Lectures", value: "10" },
    { icon: "/cd-svg-4.png", label: "Level", value: "Beginner" },
    { icon: "/cd-svg-5.png", label: "Language", value: "English" },
    { icon: "/cd-svg-6.png", label: "Certificate", value: "Yes" },
  ];

  const socialIcons = [
    { src: "/share-1.png", alt: "LinkedIn" },
    { src: "/share-2.png", alt: "Facebook" },
    { src: "/share-3.png", alt: "Instagram" },
    { src: "/share-4.png", alt: "Skype" },
  ];

  const rating = 4.2;

  return (
    <div>
      {/* Hero */}
      <div className="relative w-full">

        <img
          src="/course-details.png"
          alt="Course Hero"
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[288px] object-cover"
        />

        {/* Overlay Text inside container */}
        <div className="absolute inset-0 flex flex-col justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-[42px] font-heading text-black">
              Course Details
            </h1>
            <div className="mt-2 text-sm sm:text-base md:text-xl font-medium font-body">
              <span className="text-black">Home</span>{""}
              <span className="mx-1 text-black">//</span>{""}
              <span className="text-primary">Courses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* section-1 (Enroll + Share) */}
          <div className="flex flex-col space-y-8 lg:space-y-10 lg:w-1/3 w-full">
            {/* Enroll box */}
            <div className="bg-secondary p-4 sm:p-6 rounded-md shadow text-center">
              <h2 className="text-2xl font-medium mb-6">${420.38}</h2>
              <div className="border-b-[0.5px] border-[#F99106] last:border-b-0"></div>
              {courseInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-5 border-b border-[#F99106] last:border-b-0 text-sm sm:text-base"
                >
                  <div className="flex items-center">
                    <img
                      src={info.icon}
                      alt={info.label}
                      className="w-5 h-5 mr-2"
                    />
                    <span className="font-body font-medium text-lg">
                      {info.label}
                    </span>
                  </div>
                  <span className="font-body text-lg text-[#00000080]">
                    {info.value}
                  </span>
                </div>
              ))}
              <div className="mt-6 sm:mt-8">
                <button className="bg-primary font-heading py-3 px-6 sm:px-10 rounded-full text-white text-lg sm:text-2xl hover:bg-[#e38315] transition w-full">
                  Enroll now
                </button>
              </div>
            </div>

            {/* Share Course */}
            <div>
              <h1 className="font-heading text-2xl sm:text-4xl mb-4">
                Share Course:
              </h1>
              <div className="flex flex-wrap gap-4 sm:space-x-6">
                {socialIcons.map((social, index) => (
                  <img
                    key={index}
                    src={social.src}
                    alt={social.alt}
                    className="w-7 h-8 cursor-pointer hover:opacity-80"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* section-2 (Course Content) */}
          <div className="lg:w-2/3 w-full">
            <img
              src="/card-1-1.png"
              alt="course meal"
              className="rounded-md w-full max-h-[480px] object-cover"
            />

            <h1 className="font-heading text-xl sm:text-2xl md:text-3xl mt-4">
              All in one Pack
            </h1>

            {/* user + students + rating */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-3 gap-3 font-body text-lg">
              <div className="flex items-center">
                <img
                  src="/cd-1.png"
                  alt=""
                  className="rounded-full w-8 h-8 sm:w-9 sm:h-9 mr-3"
                />
                <span className="font-body">
                  By: <b>Zibiah Surya</b>
                </span>
              </div>

              <div className="font-normal text-[#00000080]">
                <span className="text-primary font-medium">300</span> Enrolled
                Students
              </div>

              {/* Rating */}
              <div className="flex items-center text-primary">
                <span className="font-medium text-lg mr-1">4.2</span>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(rating) ? "fill-primary" : "fill-white"
                    }`}
                  />
                ))}
                <span className="font-body text-textPrimary ml-2">(2,002)</span>
              </div>
            </div>

            {/* Details Section */}
            <div className="mt-6">
              <div className="text-center bg-secondary font-heading text-lg sm:text-xl md:text-2xl px-4 py-2 w-full shadow-[0px_1px_3px_0px_#00000040]">
                Details
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-5">
                {courseDetails.map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <img
                      src="/cd-arrow-1.png"
                      alt="arrow"
                      className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                    />
                    <span className="font-body text-lg sm:text-xl md:text-2xl">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Include in this collection */}
      <div className="mt-12">
        {/* heading */}
          <h1 className="text-center bg-secondary font-heading text-xl sm:text-2xl md:text-3xl lg:text-[40px] px-4 py-2 md:py-5 w-full shadow-[0px_1px_3px_0px_#00000040] my-1">
                Course Include in this collection
        </h1>

        {/* Free Recipes */}
        <section className="py-10 sm:py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading mb-4">
              Free Recipes
            </h2>
          </div>
          <div className="container px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {freeRecipesCourses.map((course, idx) => (
              <Card key={idx} {...course} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetails;
