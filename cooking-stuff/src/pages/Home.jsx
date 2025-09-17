import React from "react";
import Card from "../components/Card";
import BlogCard from "../components/BlogCard";
import ReviewCard from "../components/ReviewCard";
import ImageSlider from "../components/ImageSlider";
import { ArrowRight } from "lucide-react";
import ReviewSlider from "../components/ReviewSlider";

const Home = () => {

  const featuredCourses = [
    {
      image: "/card-1-1.png",
      title: "All in one Pack",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
      tag: "Free Course",
    },
    {
      image: "/card-1-2.png",
      title: "Variety of Juice",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
    },
    {
      image: "/card-1-3.png",
      title: "Variety of pork bar",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
      tag: "Certified Course",
    },
    {
      image: "/card-1-4.png",
      title: "Noodles with veggies",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
      tag: "Free Course",
    },
    {
      image: "/card-1-5.png",
      title: "Pan Cake with banana",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
    },
    {
      image: "/card-1-6.png",
      title: "Variety of mix nuts",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
      tag: "Certified Course",
    },
  ];
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
  ];
  const HealthyAndTastyRecipesCourses = [
    {
      image: "/card-3-1.png",
      title: "Variety of rice jeera",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
      tag: "Free Course",
    },
      {
      image: "/card-3-2.png",
      title: "Healthy salad",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
      tag: "Free Course",
    },
      {
      image: "/card-3-3.png",
      title: "Soup and curry",
      subtitle: "(Lifetime Access)",
      rating: 4.2,
      reviews: 2002,
      price: 500,
      oldPrice: 5000,
      tag: "Certified Course",
    },
  ];
  const blogs = [
    {
      image: "/card-4-1.png",
      title: "Chef Cooking Life",
      date: "March 11, 2022",
      comments:"No",
      excerpt:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      link: "/blog/chef-cooking-life",
    },
    {
      image: "/card-4-2.png",
      title: "Cool way to cook food",
      date: "March 11, 2022",
      comments: "No",
      excerpt:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      link: "/blog/cool-way-to-cook-food",
    },
    {
      image: "/card-4-3.png",
      title: "Make Spicy Food",
      date: "March 11, 2022",
      comments: "No",
      excerpt:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
      link: "/blog/make-spicy-food",
    },
  ];
  const reviews = [
    {
      image: "/profile-1.png",
      name: "Clay Jhonson",
      role: "Digital Marketer",
      title: "Perfection! went above!",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.",
      rating: 4,
    },
    {
      image: "/profile-2.png",
      name: "Nina Sin",
      role: "Film Maker",
      title: "Perfection! went above!",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.",
      rating: 4,
    },
    {
      image: "/profile-3.png",
      name: "Rose Merry",
      role: "Developer",
      title: "Perfection! went above!",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.",
      rating: 4,
    },
    {
      image: "/profile-3.png",
      name: "Rose Merry",
      role: "Developer",
      title: "Perfection! went above!",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.",
      rating: 4,
    },
    {
      image: "/profile-3.png",
      name: "Rose Merry",
      role: "Developer",
      title: "Perfection! went above!",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames amet dictumst justo, viverra enim egestas. Habitant turpis at adipiscing.",
      rating: 4,
    },        
  ];

return (
    <div className="w-full">
      {/* Image Slider */}
      <div className="w-full">
        <ImageSlider />
      </div>

      {/* Featured Section */}
      <section className="py-16 bg-[url('/bg-1.png')] bg-cover bg-center">
        <div className="container mx-auto px-4 sm:px-10 text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-2.5 p-2.5">Featured</h2>
          <p className="font-body text-lg sm:text-xl md:text-2xl lg:text-3xl text-textPrimary p-2.5">
            We Specialise in organising Professional <br />Training Courses
          </p>
        </div>
        <div className="container px-4 sm:px-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredCourses.map((course, idx) => (
            <Card key={idx} {...course} />
          ))}
        </div>
      </section>

      {/* Free Recipes */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-10 text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-2.5 p-2.5">Free Recipes</h2>
        </div>
        <div className="container px-4 sm:px-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {freeRecipesCourses.map((course, idx) => (
            <Card key={idx} {...course} />
          ))}
        </div>
        <div className="container px-4 sm:px-10 mx-auto flex justify-center mt-10">
          <button
            className="
              bg-primary text-white
              w-32 h-12 text-base   
              sm:w-36 sm:h-14 sm:text-lg  
              md:w-40 md:h-16 md:text-2xl 
              lg:w-44 lg:h-18 lg:text-3xl
              font-normal font-[Poppins] leading-none
              rounded-md flex items-center justify-center gap-2
              shadow hover:opacity-90 transition
            "
          >
            View All
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </section>

      {/* Healthy & Tasty Recipes */}
      <section className="py-16 bg-[url('/bg-2.png')] bg-cover bg-center">
        <div className="container mx-auto px-4 sm:px-10 text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading">Healthy & Tasty Recipes</h2>
        </div>
        <div className="container px-4 sm:px-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {HealthyAndTastyRecipesCourses.map((course, idx) => (
            <Card key={idx} {...course} />
          ))}
        </div>
        <div className="container px-4 sm:px-10 mx-auto flex justify-center mt-10">
          <button
            className="
              bg-primary text-white
              w-32 h-12 text-base   
              sm:w-36 sm:h-14 sm:text-lg  
              md:w-40 md:h-16 md:text-2xl 
              lg:w-44 lg:h-18 lg:text-3xl
              font-normal font-[Poppins] leading-none
              rounded-md flex items-center justify-center gap-2
              shadow hover:opacity-90 transition
            "
          >
            View All
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </section>

      {/* Read Our Post */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-10 text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-2.5 p-2.5">Read Our Post</h2>
          <p className="font-body text-lg sm:text-xl md:text-2xl lg:text-3xl text-textPrimary p-2.5">
            We Specialise in organising Professional Training Courses
          </p>
        </div>
        <div className="container px-4 sm:px-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="py-16 bg-[url('/bg-3.png')] bg-cover bg-center">
        <div className="container mx-auto px-4 sm:px-10 text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-4">Check out Recent Reviews</h2>
          <p className="font-body text-lg sm:text-xl md:text-2xl lg:text-3xl text-textPrimary p-2.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan <br />
            neque pellentesque lorem eu sollicitudin congue ut amet.
          </p>
        </div>
        <div className="container px-4 sm:px-10 mx-auto">
          <ReviewSlider reviews={reviews} />
        </div>
      </section>
    </div>
  );
};

export default Home;