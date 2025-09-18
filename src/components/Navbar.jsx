import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-white">
      <div className="container px-4 sm:px-10 mx-auto flex items-center justify-between py-3 sm:py-5">
        
        <div>
          <img
            src="/Group 8.png"
            alt="Cooking Stuff logo"
            className="w-32 h-12 object-contain"
          />
        </div>

        {/* Desktop Menu*/}
        <ul className="hidden lg:flex items-center space-x-8 font-heading text-lg">
          <li>
            <Link to="/" className="text-primary hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="text-textPrimary hover:text-primary">
              All Course
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-textPrimary hover:text-primary">
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/posts" className="text-textPrimary hover:text-primary">
              Posts
            </Link>
          </li>
        </ul>

        {/* actions + hamburger */}
        <div className="flex items-center space-x-4">

          <div className="hidden md:flex lg:flex items-center space-x-4 font-heading">
            <Search className="w-5 h-5 text-textPrimary cursor-pointer hover:text-primary" />
            <Link
              to="/signin"
              className="text-lg text-textPrimary hover:text-primary"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-primary text-lg text-white px-6 py-2 rounded-3xl hover:bg-primary"
            >
              Sign Up
            </Link>
          </div>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu*/}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="container px-4 sm:px-10 mx-auto pb-6 space-y-4">

            <ul className="space-y-4 font-heading text-lg pt-4">
              <li>
                <Link to="/" className="block text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="block text-textPrimary">
                  All Course
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block text-textPrimary">
                  Contact us
                </Link>
              </li>
              <li>
                <Link to="/posts" className="block text-textPrimary">
                  Posts
                </Link>
              </li>
            </ul>

            {/* Actions (moved below links) */}
            <div className="flex items-center justify-between font-heading pt-4 border-t border-gray-100">
              <Search className="w-5 h-5 text-textPrimary cursor-pointer hover:text-primary" />
              <div className="flex items-center gap-4">
                <Link
                  to="/signin"
                  className="text-textPrimary hover:text-primary"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-primary text-white px-4 py-2 rounded-3xl hover:bg-primary"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
