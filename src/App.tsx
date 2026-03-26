/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { exams } from './data/questions';
import { QuestionCard } from './components/QuestionCard';
import { ResultModal } from './components/ResultModal';
import { ResultScreen } from './components/ResultScreen';
import { Clock, Trophy, Play, BookOpen } from 'lucide-react';

type GameState = 'start' | 'playing' | 'result';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('start');
  const [currentExamId, setCurrentExamId] = useState<number>(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(50 * 60); // 50 minutes in seconds
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);

  const currentExam = exams.find(e => e.id === currentExamId) || exams[0];
  const currentQuestion = currentExam.questions[currentQuestionIndex];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const handleStartGame = (examId: number) => {
    setCurrentExamId(examId);
    setGameState('playing');
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(50 * 60);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowResultModal(false);
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 4);
      // Auto advance after a short delay for correct answers
      setTimeout(() => {
        handleNextQuestion();
      }, 1000);
    } else {
      // Show modal for wrong answers
      setShowResultModal(true);
    }
  };

  const handleNextQuestion = () => {
    setShowResultModal(false);
    setSelectedOption(null);
    setIsAnswered(false);

    if (currentQuestionIndex < currentExam.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      handleFinishExam();
    }
  };

  const handleFinishExam = () => {
    setGameState('result');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <AnimatePresence mode="wait">
        {gameState === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl max-w-2xl w-full text-center border border-white/20">
              <BookOpen className="w-20 h-20 mx-auto mb-6 text-yellow-300 drop-shadow-lg" />
              <h1 className="text-5xl font-black mb-4 drop-shadow-md">HKIMO Math Hero</h1>
              <p className="text-xl mb-8 text-blue-100 font-medium">
                Chinh phục đỉnh cao Toán học và thu thập Pokemon huyền thoại!
              </p>
              
              <div className="grid gap-4">
                {exams.map((exam) => (
                  <button
                    key={exam.id}
                    onClick={() => handleStartGame(exam.id)}
                    className="group relative flex items-center justify-between w-full p-6 bg-white text-indigo-900 rounded-2xl hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-indigo-100 p-3 rounded-xl group-hover:bg-indigo-200 transition-colors">
                        <Play className="w-8 h-8 text-indigo-600" fill="currentColor" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold">{exam.title}</h3>
                        <p className="text-sm text-gray-500 font-medium">25 Câu hỏi • 50 Phút</p>
                      </div>
                    </div>
                    <div className="bg-yellow-100 px-4 py-2 rounded-lg">
                      <span className="text-yellow-700 font-bold text-sm">Thưởng Pokemon</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {gameState === 'playing' && (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col"
          >
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-10">
              <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-xl">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <span className="font-mono font-bold text-xl text-indigo-900">
                    {formatTime(timeLeft)}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-xl border border-yellow-100">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  <span className="font-bold text-xl text-yellow-800">
                    {score} <span className="text-sm font-normal text-yellow-600">điểm</span>
                  </span>
                </div>

                <button
                  onClick={handleFinishExam}
                  className="px-4 py-2 bg-red-100 text-red-700 rounded-xl font-bold hover:bg-red-200 transition-colors text-sm"
                >
                  Kết thúc
                </button>
              </div>
              
              {/* Progress Bar */}
              <div className="h-2 bg-gray-100 w-full">
                <motion.div 
                  className="h-full bg-indigo-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestionIndex + 1) / currentExam.questions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 container mx-auto px-4 py-8 flex flex-col items-center">
              <QuestionCard
                question={currentQuestion}
                selectedOption={selectedOption}
                onSelectOption={handleSelectOption}
                isAnswered={isAnswered}
              />
            </main>

            {/* Result Modal */}
            <ResultModal
              isOpen={showResultModal}
              isCorrect={false}
              correctAnswerText={currentQuestion.options[currentQuestion.correctAnswer]}
              explanation={currentQuestion.explanation}
              onNext={handleNextQuestion}
            />
          </motion.div>
        )}

        {gameState === 'result' && (
          <ResultScreen
            key="result"
            score={score}
            totalQuestions={currentExam.questions.length}
            onRestart={() => setGameState('start')}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

