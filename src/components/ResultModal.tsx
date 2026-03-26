import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { XCircle, CheckCircle, ArrowRight } from 'lucide-react';

interface ResultModalProps {
  isOpen: boolean;
  isCorrect: boolean;
  correctAnswerText: string;
  explanation: string;
  onNext: () => void;
}

export const ResultModal: React.FC<ResultModalProps> = ({
  isOpen,
  isCorrect,
  correctAnswerText,
  explanation,
  onNext,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            <div className={`p-6 ${isCorrect ? 'bg-green-100' : 'bg-red-100'} flex flex-col items-center text-center`}>
              {isCorrect ? (
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              ) : (
                <XCircle className="w-16 h-16 text-red-500 mb-4" />
              )}
              <h2 className={`text-2xl font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {isCorrect ? 'Chính xác! (+4 điểm)' : 'Chưa chính xác!'}
              </h2>
            </div>
            
            <div className="p-6 space-y-4">
              {!isCorrect && (
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="text-sm text-blue-600 font-semibold uppercase mb-1">Đáp án đúng</p>
                  <p className="text-lg font-bold text-gray-800">{correctAnswerText}</p>
                </div>
              )}
              
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500 font-semibold uppercase mb-1">Giải thích</p>
                <p className="text-gray-700 leading-relaxed">{explanation}</p>
              </div>

              <button
                onClick={onNext}
                className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2"
              >
                Tiếp tục <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
