// src/components/session/SessionSummaryModal.js
import React from 'react';
import { X, Download, Share2 } from 'lucide-react';

const SessionSummaryModal = ({ sessionData, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Session Summary</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Session Details</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Session ID:</p>
                  <p className="font-bold text-gray-900">{sessionData.sessionId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Duration:</p>
                  <p className="font-semibold text-gray-900">15 minutes 23 seconds</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Witness:</p>
                  <p className="font-bold text-gray-900">Ahmad Khalil</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Status:</p>
                  <p className="font-semibold text-green-600">Completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              <Download className="h-5 w-5" />
              <span>Download PDF</span>
            </button>
            <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition">
              <Share2 className="h-5 w-5" />
              <span>Share Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionSummaryModal;