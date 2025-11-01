"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  title: string;
  category: string;
  rating: number;
  reviews: number;
  price: string;
  imageUrl: string;
}

const ServiceHeader: React.FC<Props> = ({ title, category, rating, reviews, price, imageUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row gap-6 mb-8 items-center md:items-start"
    >
      {/* Image */}
      <motion.img
        src={imageUrl}
        alt={title}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="w-full md:w-1/2 h-64 md:h-80 object-cover rounded-2xl shadow-lg"
      />

      {/* Info */}
      <div className="flex flex-col justify-between w-full md:w-1/2">
        {/* Title & Category */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            {title}
          </h1>
          <div className="text-sm text-muted-foreground mt-2 flex items-center gap-2">
            <span>{category}</span>
            <span>⭐ {rating}</span>
            <span>({reviews} reviews)</span>
          </div>
        </motion.div>

        {/* Price & Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="text-lg font-semibold text-indigo-600">
            Starting at {price}
          </div>
          <button className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:scale-95 transition-transform duration-150">
            Get Started
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceHeader;
