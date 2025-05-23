import React from 'react';
import { Link } from 'react-router-dom';

const GamePanel = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">English Learning Games</h1>
      <p className="text-center mb-12">Choose from our selection of interactive games designed to help you improve your English skills while having fun!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <Link to="/games/memory-card" className="block">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 bg-primary rounded-lg mb-4 flex items-center justify-center shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4z" />
                </svg>
              </div>

              <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l9 9-9 9-9-9 9-9z" />
                </svg>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-2">Memory Card</h2>
            <p className="text-gray-600">Improve your English vocabulary by matching words with their corresponding images</p>
          </div>

        </Link>

        <Link to="/games/word-matching" className="block">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 bg-primary rounded-lg mb-4 flex items-center justify-center shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4z" />
                </svg>
              </div>

              <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l9 9-9 9-9-9 9-9z" />
                </svg>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-2">Word Matching</h2>
            <p className="text-gray-600">Improve your English vocabulary by matching words to their pairs</p>
          </div>

        </Link>

        <Link to="/games/story-game" className="block">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 bg-primary rounded-lg mb-4 flex items-center justify-center shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4z" />
                </svg>
              </div>

              <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l9 9-9 9-9-9 9-9z" />
                </svg>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-2">Story Game</h2>
            <p className="text-gray-600">Improve your English vocabulary by dragging and dropping words to complete a story</p>
          </div>

        </Link>

        <Link to="/games/word-scramble" className="block">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group">
            <div className="w-16 h-16 bg-primary rounded-lg mb-4 flex items-center justify-center shadow-lg relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4z" />
                </svg>
              </div>

              <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l9 9-9 9-9-9 9-9z" />
                </svg>
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-2">Word Scramble</h2>
            <p className="text-gray-600">Improve your English vocabulary by unscrambling words based to given hints</p>
          </div>

        </Link>

        {[1].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-lg p-6 opacity-50">
            <div className="w-16 h-16 bg-gray-200 rounded-lg mb-4"></div>
            <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
            <p className="text-gray-400">New game coming soon...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamePanel; 