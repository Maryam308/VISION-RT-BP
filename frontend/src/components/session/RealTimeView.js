// src/components/session/RealTimeView.js
import React, { useState } from 'react';
import { Play, FileText, User, MessageSquare, ChevronUp, ChevronDown } from 'lucide-react';
import LiveTranscription from './LiveTranscription';
import Translation from './Translation';
import IdentityVerification from './IdentityVerification';
import AIAssistant from './AIAssistant';
import SessionInfo from './SessionInfo';

const RealTimeView = ({ sessionState, setSessionState, sessionData }) => {
  const [activeTab, setActiveTab] = useState(null); // null, 'transcription', 'identity'
  const [aiExpanded, setAiExpanded] = useState(false);

  const handleStartRecording = () => {
    setSessionState('recording');
    setActiveTab('transcription');
  };

  return (
    <div className="flex">
      {/* Left Main Content */}
      <div className="flex-1 p-6">
        {sessionState === 'ready' && (
          <div className="flex items-center justify-center min-h-[600px]">
            <div className="text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gray-200 rounded-full mb-6">
                  <Play className="h-16 w-16 text-gray-400" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start</h2>
                <p className="text-gray-600 mb-8">
                  Click the button below to begin recording the investigation session.
                </p>
              </div>
              <button
                onClick={handleStartRecording}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg"
              >
                <Play className="h-5 w-5" />
                <span>Start Recording</span>
              </button>
            </div>
          </div>
        )}

        {sessionState === 'recording' && (
          <div className="space-y-6">
            {/* Content based on active tab */}
            {activeTab === 'transcription' && (
              <>
                <LiveTranscription />
                <Translation />
              </>
            )}
            {activeTab === 'identity' && <IdentityVerification />}
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <div className="w-96 bg-white border-l border-gray-200 p-6 space-y-4">
        {/* Navigation Buttons */}
        <div className="space-y-2">
          <button
            onClick={() => setActiveTab('transcription')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition ${
              activeTab === 'transcription'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
            disabled={sessionState === 'ready'}
          >
            <FileText className="h-5 w-5" />
            <span>Transcription & Translation</span>
          </button>

          <button
            onClick={() => setActiveTab('identity')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition ${
              activeTab === 'identity'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
            disabled={sessionState === 'ready'}
          >
            <User className="h-5 w-5" />
            <span>Identity Verification</span>
          </button>
        </div>

        {/* AI Assistant Section */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setAiExpanded(!aiExpanded)}
            className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition"
          >
            <div className="flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-900">AI Assistant</span>
            </div>
            {aiExpanded ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {aiExpanded && <AIAssistant sessionState={sessionState} />}
        </div>

        {/* Session Info */}
        <SessionInfo sessionData={sessionData} />
      </div>
    </div>
  );
};

export default RealTimeView;