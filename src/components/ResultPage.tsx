"use client";

import { motion } from "motion/react";

export default function ResultPage({ answers }: { answers: string[] }) {
  return (
    <motion.div className="text-center">
      <motion.h2 className="mb-6 text-3xl font-bold">테스트 결과</motion.h2>
      <motion.div className="rounded-lg bg-white p-6 shadow-lg">
        {answers.map((answer, index) => (
          <motion.p key={index} className="mb-2">
            질문 {index + 1}: {answer}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}
