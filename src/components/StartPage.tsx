"use client";

import { motion } from "motion/react";

export default function StartPage({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-8 text-4xl font-bold"
      >
        MBTI 테스트
      </motion.h1>
      <motion.button
        onClick={onStart}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-lg bg-blue-500 px-6 py-3 text-lg text-white"
      >
        시작하기
      </motion.button>
    </motion.div>
  );
}
