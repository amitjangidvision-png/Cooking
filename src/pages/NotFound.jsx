import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 sm:px-6 lg:px-8">
      {/* Error Code */}
      <h1 className="text-[80px] sm:text-[100px] lg:text-[150px] font-heading font-bold text-primary leading-none">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-textPrimary mt-4">
        Oops! Page not found
      </h2>
      <p className="text-base sm:text-lg text-gray-500 mt-2 max-w-md sm:max-w-lg">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Action */}
      <Link
        to="/"
        className="mt-8 bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-3xl text-base sm:text-lg font-heading hover:bg-primary/90 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFound;
