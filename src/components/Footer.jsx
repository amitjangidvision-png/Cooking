import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary flex flex-col">
      <div className="container mx-auto px-4 sm:px-10 py-12">
        
        {/* Contact Heading */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading mb-8 ">
          Contact Us
        </h1>

        {/* Logo + About */}
        <div className="flex flex-col md:flex-row items-center md:items-center md:justify-evenly gap-6 mb-20">
          <img
            src="/Group 8.png"
            alt="Cooking Stuff Logo"
            className="w-32  md:w-40 lg:w-52 mx-auto md:mx-0 lg:mr-20"
          />
          <p className="font-body text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed  text-textPrimary text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            nisi tortor tellus sagittis donec id est, dolor, morbi. Id
            facilisis sem sit maecenas metus, lacinia non. Lorem congue est at
            ultrices suscipit at nulla neque volutpat. Porta proin hdhhhjff.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm">
          {/* Navigation */}
          <div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl mb-4 border-b-2 border-primary inline-block">
              Navigation
            </h2>
            <ul className="space-y-4 font-body text-sm sm:text-base md:text-lg">
              <li className="flex items-center gap-2 cursor-pointer hover:text-primary">
                <img src="/arrow.png" alt="arrow" className="w-3 h-3" />
                All Course
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-primary">
                <img src="/arrow.png" alt="arrow" className="w-3 h-3" />
                Contact Us
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-primary">
                <img src="/arrow.png" alt="arrow" className="w-3 h-3" />
                Posts
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl mb-4 border-b-2 border-primary inline-block">
              Categories
            </h2>
            <ul className="space-y-4 font-body text-sm sm:text-base md:text-lg">
              <li className="flex items-center gap-2 cursor-pointer hover:text-primary">
                <img src="/arrow.png" alt="arrow" className="w-3 h-3" />
                Featured
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-primary">
                <img src="/arrow.png" alt="arrow" className="w-3 h-3" />
                Free Recipes
              </li>
              <li className="flex items-center gap-2 cursor-pointer hover:text-primary">
                <img src="/arrow.png" alt="arrow" className="w-3 h-3" />
                Paid Courses
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl mb-4 border-b-2 border-primary inline-block">
              Get in touch
            </h2>
            <ul className="space-y-4 font-body text-sm sm:text-base md:text-lg">
              <li>
                <span>Phone:</span>{" "}
                <span className="text-textPrimary">+123 456 7890</span>
              </li>
              <li>
                <span>Address:</span>{" "}
                <span className="text-textPrimary">
                  Lumbung Hidup St. Madiun City East Java 63125
                </span>
              </li>
              <li>
                <span>Email:</span>{" "}
                <span className="text-textPrimary">cookingstuff@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary text-white py-4 font-body">
        <div className="container mx-auto px-4 sm:px-10 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm md:text-base text-center md:text-left">
          <p>@ Copyright 2022. All Rights Reserved by Cooking Stuff</p>
          <ul className="flex flex-wrap justify-center md:justify-end space-x-6 mt-2 md:mt-0">
            <li className="cursor-pointer hover:underline">Terms & Condition</li>
            <li className="cursor-pointer hover:underline">License</li>
            <li className="cursor-pointer hover:underline">Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
