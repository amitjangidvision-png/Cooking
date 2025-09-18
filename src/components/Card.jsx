import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Card = ({ image, title, rating, reviews, price, oldPrice, tag, subtitle }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-lg shadow-md overflow-hidden w-full"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-64 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-body font-medium lg:text-2xl leading-snug truncate">
            {title}
          </h3>
          <span className="font-body font-medium lg:text-2xl sm:text-base line-clamp-1">
            {subtitle}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center text-primary text-sm mb-2 mt-2 flex-wrap">
          <span className="flex items-center gap-1">
            {rating}
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? "fill-primary" : "fill-white"
                }`}
              />
            ))}
          </span>
          <span className="font-body text-textPrimary ml-2">
            {rating} ({reviews.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-3 mb-3 font-body flex-wrap">
          <span className="text-lg">
            <span className="rupee">&#8377;</span> {price}
          </span>
          <span className="text-textPrimary line-through">
            <span className="rupee">&#8377;</span> {oldPrice}
          </span>
        </div>

        {/* Tag */}
        {tag && (
          <span className="inline-block bg-primary text-white font-medium text-sm px-3 py-1 rounded-md">
            {tag}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
