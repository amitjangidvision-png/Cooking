import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeClass = "text-primary";
  const normalClass =
    "text-textPrimary hover:text-primary hover:border-b-2 hover:border-primary hover:pb-1";

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-white">
      <div className="container px-4 sm:px-10 mx-auto flex items-center justify-between py-3 sm:py-5">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              src="/logo.png"
              alt="Cooking Stuff logo"
              className="w-32 h-12 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 font-heading text-lg">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              All Course
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive ? activeClass : normalClass
              }
            >
              Posts
            </NavLink>
          </li>
        </ul>

        {/* Actions + Hamburger */}
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200">
          <div className="container px-4 sm:px-10 mx-auto pb-6 space-y-4">
            <ul className="space-y-4 font-heading text-lg pt-4">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                  onClick={() => setIsOpen(false)}
                >
                  All Course
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Contact us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/posts"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Posts
                </NavLink>
              </li>
            </ul>

            {/* Actions (mobile) */}
            <div className="flex items-center justify-between font-heading pt-4 border-t border-gray-100">
              <Search className="w-5 h-5 text-textPrimary cursor-pointer hover:text-primary" />
              <div className="flex items-center gap-4">
                <NavLink
                  to="/signin"
                  className={({ isActive }) =>
                    isActive ? activeClass : normalClass
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/signup"
                  className="bg-primary text-white px-4 py-2 rounded-3xl hover:bg-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
