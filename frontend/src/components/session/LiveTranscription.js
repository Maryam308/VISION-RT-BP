// src/components/session/LiveTranscription.js
import React from 'react';
import { FileText, Download, Copy } from 'lucide-react';

const LiveTranscription = () => {
  const transcriptLines = [
    { time: '00:15:23', speaker: 'Ahmad', language: 'AR', text: 'أنا لم أكن على علم بتغيير السياسة' },
    { time: '00:15:28', speaker: 'M. AlZebari', language: 'AR', text: 'متى علمت بهذا التغيير؟' },
    { time: '00:15:32', speaker: 'Ahmad', language: 'AR', text: 'في الأسبوع الماضي فقط' },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FileText className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-bold text-gray-900">Live Transcription</h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-red-500">Recording</span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 space-y-3 min-h-[200px] max-h-[400px] overflow-y-auto mb-4">
        {transcriptLines.map((line, index) => (
          <div key={index} className="text-sm font-mono">
            <span className="text-gray-500">{line.time}</span>{' '}
            <span className="font-semibold text-gray-700">[{line.speaker}]</span>{' '}
            <span className="text-gray-600">{line.language}:</span>{' '}
            <span className="text-gray-900">{line.text}</span>
          </div>
        ))}
      </div>

      <div className="flex space-x-3">
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
          <Download className="h-4 w-4" />
          <span className="text-sm font-medium">Download</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
          <Copy className="h-4 w-4" />
          <span className="text-sm font-medium">Copy All</span>
        </button>
      </div>
    </div>
  );
};

export default LiveTranscription;