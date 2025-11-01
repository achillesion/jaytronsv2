"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  details: string;
}

const keywords = ["performance", "UI/UX", "SEO", "responsive", "optimization"];

const ServiceDescription: React.FC<Props> = ({ details }) => {
  const [expanded, setExpanded] = useState(false);
  const lines = details.split("\n");

  const highlightKeywords = (text: string) => {
    return text.split(" ").map((word, i) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, "");
      if (keywords.includes(cleanWord)) {
        return (
          <span
            key={i}
            className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-1 rounded"
            title={`Keyword: ${cleanWord}`}
          >
            {word}{" "}
          </span>
        );
      }
      return word + " ";
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-6"
    >
      <h2 className="text-xl md:text-2xl font-semibold mb-4 relative inline-block">
        About this service
        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded"></span>
      </h2>

      {/* AnimatePresence for smooth collapse */}
      <AnimatePresence initial={false}>
        <motion.div
          key={expanded ? "expanded" : "collapsed"}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-muted-foreground mb-2 whitespace-pre-line"
            >
              {highlightKeywords(line)}
            </motion.p>
          ))}
        </motion.div>
      </AnimatePresence>

      {lines.length > 4 && (
        <motion.button
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.05, color: "#7F00FF" }}
          whileTap={{ scale: 0.95 }}
          className="mt-2 font-medium text-indigo-600 hover:underline"
        >
          {expanded ? "Show Less" : "Read More"}
        </motion.button>
      )}
    </motion.div>
  );
};

export default ServiceDescription;
