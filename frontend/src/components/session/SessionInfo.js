// src/components/session/SessionInfo.js
import React from 'react';
import { FileText } from 'lucide-react';

const SessionInfo = ({ sessionData }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center space-x-2 mb-4">
        <FileText className="h-5 w-5 text-blue-600" />
        <h3 className="font-bold text-gray-900">Session Info</h3>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Witness:</p>
          <p className="text-sm font-semibold text-gray-900">{sessionData.witness}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Session ID:</p>
          <p className="text-sm font-semibold text-gray-900">{sessionData.sessionId}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Language:</p>
          <p className="text-sm font-semibold text-gray-900">{sessionData.language}</p>
        </div>

        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Duration:</p>
          <p className="text-sm font-semibold text-gray-900">{sessionData.duration}</p>
        </div>

        <div className="border-t border-gray-200 pt-3">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">Statistics:</p>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Words:</span>
              <span className="font-semibold text-gray-900">247</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Translations:</span>
              <span className="font-semibold text-gray-900">12</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Avg Confidence:</span>
              <span className="font-semibold text-green-600">98%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionInfo;