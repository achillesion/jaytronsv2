"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Do you develop mobile apps as well as web applications?",
    answer:
      "Yes! I develop responsive web applications and also create mobile apps using frameworks like React Native and Flutter.",
  },
  {
    question: "Can you build AI-powered chatbots and automation systems?",
    answer:
      "Absolutely. I can design and implement AI chatbots, automation scripts, and intelligent systems tailored to your business needs.",
  },
  {
    question: "Do you offer training or educational content creation services?",
    answer:
      "Yes, I provide technical training, tutorials, and can create educational content for teams or individuals.",
  },
  {
    question: "What payment systems and e-commerce solutions do you implement?",
    answer:
      "I can integrate payment gateways like Stripe, PayPal, and build complete e-commerce solutions with carts, checkout, and order management.",
  },
  {
    question: "Which cloud platforms and databases do you work with?",
    answer:
      "I work with AWS, Google Cloud, and Azure, and databases like MongoDB, MySQL, PostgreSQL, and Firebase.",
  },
  {
    question: "What is your experience level and track record on freelancing platforms?",
    answer:
      "I have several years of experience and a proven track record delivering high-quality projects with positive client feedback.",
  },
  {
    question: "Do you provide full-stack development or just frontend/backend?",
    answer:
      "I offer full-stack development, handling both frontend and backend technologies to deliver complete solutions.",
  },
  {
    question: "Can you help with technical mentoring or code reviews?",
    answer:
      "Yes, I provide code reviews, guidance, and mentoring to help developers improve their skills and best practices.",
  },
  {
    question: "Are you available for in-person meetings or consultations?",
    answer:
      "I am available for online consultations primarily, but in-person meetings can be arranged depending on location and project scope.",
  },
  {
    question: "What makes your development approach different from other developers?",
    answer:
      "I focus on clean code, performance optimization, and creating interactive, modern user experiences tailored to client needs.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
 id?: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 flex justify-between items-center font-medium text-lg hover:text-blue-600 transition-colors"
      >
        {question}
        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
          +
        </span>
      </button>
      {isOpen && <p className="text-gray-600 dark:text-gray-300 py-2">{answer}</p>}
    </div>
  );
};

const FAQs = ({id}: FAQItemProps) => {
  return (
    <section id={id} className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <p className="text-center mb-12 text-gray-600 dark:text-gray-400">
        Can't find what you're looking for? Feel free to <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">contact me directly</a>.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
