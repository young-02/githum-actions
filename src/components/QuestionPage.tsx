"use client";

import { motion } from "motion/react";

interface QuestionPageProps {
  question: {
    question: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
}

export default function QuestionPage({
  question,
  onAnswer,
}: QuestionPageProps) {
  return (
    <div className="w-full max-w-2xl px-4">
      <motion.h2
        className="mb-8 text-center text-2xl font-bold"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {question.question}
      </motion.h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full rounded-lg bg-white p-4 text-left shadow transition-all duration-1000 hover:shadow-lg"
            initial={{ opacity: 0, y: index * 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
