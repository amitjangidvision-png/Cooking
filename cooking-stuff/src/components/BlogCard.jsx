import React from "react";
import { motion } from "framer-motion";

const BlogCard = ({ image, title, date, comments, excerpt, link }) => {
  return (
    <motion.div
      className="bg-secondary overflow-hidden rounded-none"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Image with diagonal corners */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-tl-2xl rounded-br-2xl"
      />

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-1">
          {title}
        </h3>
        <p className="font-body text-sm sm:text-lg md:text-xl text-textPrimary mb-3">
          {date} {comments} Comments
        </p>
        <p className="font-body text-sm md:text-lg mb-4">{excerpt}</p>

        {/* Read More */}
        <a
          href={link}
          className="text-primary font-heading text-sm md:text-xl hover:underline"
        >
          READ MORE »
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;
