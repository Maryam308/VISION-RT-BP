// src/components/session/Translation.js
import React from 'react';
import { Globe, Download, ChevronDown } from 'lucide-react';

const Translation = () => {
  const translations = [
    { time: '00:15:23', speaker: 'Ahmad', text: 'I was not aware of the policy change', confidence: '98%' },
    { time: '00:15:28', speaker: 'M. AlZebari', text: 'When did you learn about this change?', confidence: '99%' },
    { time: '00:15:32', speaker: 'Ahmad', text: 'Just last week', confidence: '97%' },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Globe className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Translation</h3>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-lg">
          <span className="text-sm text-gray-700">AR → EN</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 space-y-3 min-h-[200px] max-h-[400px] overflow-y-auto mb-4">
        {translations.map((line, index) => (
          <div key={index} className="text-sm">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-gray-500 font-mono">{line.time}</span>{' '}
                <span className="font-semibold text-gray-700">[{line.speaker}]:</span>{' '}
                <span className="text-gray-900">{line.text}</span>
              </div>
              <span className="text-xs text-green-600 font-medium">({line.confidence})</span>
            </div>
          </div>
        ))}
      </div>

      <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
        <Download className="h-4 w-4" />
        <span className="text-sm font-medium">Download</span>
      </button>
    </div>
  );
};

export default Translation;