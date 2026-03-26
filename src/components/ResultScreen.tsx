import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Trophy, Star, RefreshCcw } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const POKEMON_REWARDS = [
  { name: 'Charizard', id: 6, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png' },
  { name: 'Greninja', id: 658, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/658.png' },
  { name: 'Raichu', id: 26, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png' },
  { name: 'Mewtwo', id: 150, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png' },
  { name: 'Lucario', id: 448, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/448.png' },
];

export const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  const isWinner = score >= 80;
  const randomPokemon = POKEMON_REWARDS[Math.floor(Math.random() * POKEMON_REWARDS.length)];

  useEffect(() => {
    if (isWinner) {
      const duration = 3000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#ff0000', '#00ff00', '#0000ff'],
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#ff0000', '#00ff00', '#0000ff'],
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    }
  }, [isWinner]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 text-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-lg w-full text-center shadow-2xl border border-white/20"
      >
        <div className="mb-8 relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-3xl opacity-30"
          />
          {isWinner ? (
            <Trophy className="w-24 h-24 text-yellow-300 mx-auto relative z-10 drop-shadow-lg" />
          ) : (
            <Star className="w-24 h-24 text-gray-300 mx-auto relative z-10 drop-shadow-lg" />
          )}
        </div>

        <h1 className="text-4xl font-black mb-2 drop-shadow-md">
          {isWinner ? 'CHÚC MỪNG!' : 'CỐ GẮNG LÊN!'}
        </h1>
        
        <p className="text-xl font-medium text-white/80 mb-8">
          Bạn đã hoàn thành bài thi
        </p>

        <div className="bg-white/20 rounded-2xl p-6 mb-8 backdrop-blur-md border border-white/10">
          <p className="text-sm uppercase tracking-widest font-bold text-white/60 mb-1">Tổng điểm</p>
          <p className="text-6xl font-black text-white drop-shadow-lg">{score}</p>
          <p className="text-sm font-medium text-white/60 mt-2">
            Trên tổng số {totalQuestions * 4} điểm tối đa
          </p>
        </div>

        {isWinner && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8 bg-gradient-to-b from-yellow-100 to-yellow-50 rounded-2xl p-6 text-gray-800 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300"
          >
            <p className="text-sm font-bold text-yellow-600 uppercase mb-2">Phần thưởng của bạn</p>
            <div className="relative w-40 h-40 mx-auto mb-4">
              <img 
                src={randomPokemon.image} 
                alt={randomPokemon.name}
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
            <h3 className="text-2xl font-black text-gray-900">{randomPokemon.name}</h3>
            <p className="text-sm text-gray-500 font-medium">Pokemon Huyền Thoại</p>
          </motion.div>
        )}

        <button
          onClick={onRestart}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-white/20 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-white/30 w-full"
        >
          <RefreshCcw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-500" />
          Làm lại bài thi
        </button>
      </motion.div>
    </div>
  );
};
