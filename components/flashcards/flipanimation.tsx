"use client";

import { useState } from "react";

type FlipFlashcardProps = {
  question: string;
  answer: string;
  flipped?: boolean;
  onToggle?: () => void;
};

export default function FlipFlashcard({
  question,
  answer,
  flipped,
  onToggle,
}: FlipFlashcardProps) {
  const [internalFlipped, setInternalFlipped] = useState(false);
  const isControlled = typeof flipped === "boolean";
  const isFlipped = isControlled ? flipped : internalFlipped;

  const toggle = () => {
    onToggle?.();
    if (!isControlled) setInternalFlipped((v) => !v);
  };

  return (
    <div className="w-full max-w-xl mx-auto perspective">
      <div
        onClick={toggle}
        className={`relative w-full h-64 cursor-pointer transition-transform duration-500 transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-900 border rounded-xl flex items-center justify-center p-6 text-xl font-semibold shadow">
          {question}
        </div>

        <div
          className="absolute w-full h-full backface-hidden bg-blue-500 text-white border rounded-xl flex items-center justify-center p-6 text-lg shadow"
          style={{ transform: "rotateY(180deg)" }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

