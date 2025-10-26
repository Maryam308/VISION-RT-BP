// src/components/SessionPage.js
import React, { useState } from 'react';
import { ArrowLeft, Clock } from 'lucide-react';
import RealTimeView from './session/RealTimeView';
import ProcessingView from './session/ProcessingView';
import SessionSummaryModal from './session/SessionSummaryModal';

const SessionPage = ({ user, onSignOut }) => {
  const [activeMainTab, setActiveMainTab] = useState('real-time'); // 'real-time' or 'processing'
  const [sessionState, setSessionState] = useState('ready'); // 'ready', 'recording', 'completed'
  const [showSummaryModal, setShowSummaryModal] = useState(false);

  const sessionData = {
    sessionId: '#2024-INV-0042',
    investigator: 'M. AlZebari',
    language: 'Arabic',
    duration: '15:23',
    witness: 'Not set',
    status: 'Active'
  };

  const handleEndSession = () => {
    setSessionState('completed');
    setShowSummaryModal(true);
  };

  const handleCloseSummary = () => {
    setShowSummaryModal(false);
    setSessionState('ready');
  };

  const handleBackToHome = () => {
    onSignOut();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-full px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            <button
              onClick={handleBackToHome}
              className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </button>

            {/* Center - Logo and Session Info */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-blue-600 mb-1">VISION-RT</h1>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-gray-600 text-sm">Session</span>
                <span className="font-bold text-gray-900">{sessionData.sessionId}</span>
                {sessionState === 'recording' && (
                  <span className="flex items-center space-x-1 text-red-500">
                    <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-medium">LIVE</span>
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Investigator: {sessionData.investigator}
              </p>
            </div>

            {/* Right - Language, Time, End Session */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-lg">
                <span className="text-sm text-gray-600">Language:</span>
                <button className="px-3 py-1 bg-white text-blue-600 font-medium rounded border border-gray-300 hover:bg-blue-50">
                  EN
                </button>
                <button className="px-3 py-1 text-gray-600 hover:bg-white rounded">
                  AR
                </button>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span className="font-medium">{sessionData.duration}</span>
              </div>
              {sessionState === 'recording' && (
                <button
                  onClick={handleEndSession}
                  className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
                >
                  End Session
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Tabs - Real-time / Processing */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-full px-6">
          <div className="flex justify-center space-x-4 pt-4">
            <button
              onClick={() => setActiveMainTab('real-time')}
              className={`px-8 py-3 font-semibold rounded-t-lg transition ${
                activeMainTab === 'real-time'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Real-time
            </button>
            <button
              onClick={() => setActiveMainTab('processing')}
              className={`px-8 py-3 font-semibold rounded-t-lg transition ${
                activeMainTab === 'processing'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Processing
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-full">
        {activeMainTab === 'real-time' ? (
          <RealTimeView
            sessionState={sessionState}
            setSessionState={setSessionState}
            sessionData={sessionData}
          />
        ) : (
          <ProcessingView sessionData={sessionData} />
        )}
      </div>

      {/* Session Summary Modal */}
      {showSummaryModal && (
        <SessionSummaryModal
          sessionData={sessionData}
          onClose={handleCloseSummary}
        />
      )}
    </div>
  );
};

export default SessionPage;