// src/components/session/ProcessingView.js
import React from 'react';
import { Loader } from 'lucide-react';

const ProcessingView = ({ sessionData }) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="text-center">
          <Loader className="h-16 w-16 text-blue-600 animate-spin mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Processing Session Data</h2>
          <p className="text-gray-600 mb-2">
            Analyzing transcription and translation quality...
          </p>
          <p className="text-sm text-gray-500">
            Session: {sessionData.sessionId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessingView;