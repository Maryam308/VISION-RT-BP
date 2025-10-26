// src/components/session/AIAssistant.js
import React from 'react';
import { Sparkles, Copy } from 'lucide-react';

const AIAssistant = ({ sessionState }) => {
  const suggestedQuestions = [
    { text: 'Can you clarify the exact date?', color: 'red' },
    { text: 'Who informed you about this?', color: 'yellow' },
    { text: 'Was it communicated in writing?', color: 'green' },
  ];

  return (
    <div className="p-4 bg-white">
      <button
        disabled={sessionState === 'ready'}
        className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-semibold transition mb-4 ${
          sessionState === 'ready'
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        <Sparkles className="h-5 w-5" />
        <span>Generate Questions</span>
      </button>

      {sessionState === 'recording' && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700 mb-3">Suggested Questions:</p>
          {suggestedQuestions.map((question, index) => {
            const borderColor = {
              red: 'border-l-red-500',
              yellow: 'border-l-yellow-500',
              green: 'border-l-green-500',
            }[question.color];

            return (
              <div
                key={index}
                className={`border-l-4 ${borderColor} bg-gray-50 p-3 rounded-r-lg`}
              >
                <p className="text-sm text-gray-800 mb-2">{question.text}</p>
                <button className="flex items-center space-x-1 text-xs text-gray-600 hover:text-gray-900 transition">
                  <Copy className="h-3 w-3" />
                  <span>Copy</span>
                </button>
              </div>
            );
          })}
        </div>
      )}

      {sessionState === 'ready' && (
        <p className="text-sm text-gray-500 text-center py-4">
          Start recording to generate questions
        </p>
      )}
    </div>
  );
};

export default AIAssistant;