"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Faq {
  question: string;
  answer: string;
}

interface Props {
  faqs: Faq[];
}

const FAQsPage: React.FC<Props> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  // Filter FAQs based on search input
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search FAQs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Expand All / Collapse All Buttons */}
      <div className="flex justify-end mb-4 gap-2">
        <button
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          onClick={() => setOpenIndex(-1)}
        >
          Expand All
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
          onClick={() => setOpenIndex(null)}
        >
          Collapse All
        </button>
      </div>

      {/* FAQs List */}
      <div className="flex flex-col gap-3">
        {filteredFaqs.length === 0 ? (
          <p className="text-center text-muted-foreground">No FAQs match your search.</p>
        ) : (
          filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="border rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left p-4 bg-background text-foreground flex justify-between items-center hover:bg-gray-100 transition"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl">{openIndex === index || openIndex === -1 ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {(openIndex === index || openIndex === -1) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 text-muted-foreground border-t bg-gray-50"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default FAQsPage;
