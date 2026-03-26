import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, XCircle } from 'lucide-react';

interface QuestionCardProps {
  question: {
    id: number;
    text: string;
    options: string[];
    correctAnswer: number;
  };
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
  isAnswered: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  onSelectOption,
  isAnswered,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-3xl shadow-xl border border-gray-100">
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-bold mb-2">
          Câu hỏi {question.id}
        </span>
        <h2 className="text-2xl font-bold text-gray-800 leading-tight">
          {question.text}
        </h2>
      </div>

      <div className="grid gap-4">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isCorrect = index === question.correctAnswer;
          
          let optionClass = "border-2 border-gray-100 hover:border-indigo-200 hover:bg-indigo-50";
          if (isAnswered) {
            if (isSelected) {
              optionClass = isCorrect 
                ? "border-green-500 bg-green-50 text-green-700" 
                : "border-red-500 bg-red-50 text-red-700";
            } else if (isCorrect) {
              optionClass = "border-green-500 bg-green-50 text-green-700";
            } else {
              optionClass = "opacity-50 border-gray-100";
            }
          } else if (isSelected) {
            optionClass = "border-indigo-500 bg-indigo-50 text-indigo-700 ring-2 ring-indigo-200";
          }

          return (
            <motion.button
              key={index}
              whileHover={!isAnswered ? { scale: 1.02 } : {}}
              whileTap={!isAnswered ? { scale: 0.98 } : {}}
              onClick={() => !isAnswered && onSelectOption(index)}
              className={`w-full p-4 rounded-xl text-left font-medium transition-all flex items-center justify-between ${optionClass}`}
              disabled={isAnswered}
            >
              <span className="flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  isSelected || (isAnswered && isCorrect) ? 'bg-white/50' : 'bg-gray-100 text-gray-500'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                {option}
              </span>
              
              {isAnswered && isCorrect && <CheckCircle className="w-6 h-6 text-green-600" />}
              {isAnswered && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-600" />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
