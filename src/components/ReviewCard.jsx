import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const ReviewCard = ({ image, name, role, title, review, rating }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} 
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-lg shadow-[0_0_15px_5px_rgba(0,0,0,0.1)] p-6 m-3 min-h-[270px] flex flex-col"
    >
      {/* Avatar + Name/Role */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="text-left">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-lg font-medium truncate">
            {name}
          </h3>
          <p className="font-body text-xs sm:text-sm md:text-base lg:text-base text-textPrimary truncate">
            {role}
          </p>
        </div>
      </div>

      {/* Review Title */}
      <p className="font-medium text-sm md:text-base mb-2 truncate">
        {title}
      </p>

      <p className="font-body text-sm md:text-base text-textPrimary mb-4 line-clamp-3">
        {review}
      </p>

      {/* Rating fixed at bottom */}
      <div className="flex mt-auto">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating ? "text-primary fill-primary" : "text-primary"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ReviewCard;
