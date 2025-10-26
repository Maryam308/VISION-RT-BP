import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import WitnessInfo from "./WitnessInfo";
import IdentityVerification from "./IdentityVerification";
import TranslationSettings from "./TranslationSettings";
import "../../App.css";
const SessionSetup = ({ onBackToDashboard, onStartInvestigation }) => {
  const [sessionData, setSessionData] = useState({
    sessionId: "#2024-NV-0043", // Auto-generated
    witnessData: {
      fullName: "",
      idNumber: "",
    },
    identityData: {
      referencePhoto: null,
      isVerified: false,
    },
    translationSettings: {
      sourceLanguage: "ar",
      targetLanguage: "en",
    },
  });

  const updateWitnessData = (field, value) => {
    setSessionData((prev) => ({
      ...prev,
      witnessData: {
        ...prev.witnessData,
        [field]: value,
      },
    }));
  };

  const updateIdentityData = (field, value) => {
    setSessionData((prev) => ({
      ...prev,
      identityData: {
        ...prev.identityData,
        [field]: value,
      },
    }));
  };

  const updateTranslationSettings = (field, value) => {
    setSessionData((prev) => ({
      ...prev,
      translationSettings: {
        ...prev.translationSettings,
        [field]: value,
      },
    }));
  };

  const handleVerifyIdentity = () => {
    // Add identity verification logic here
    updateIdentityData("isVerified", true);
    alert("Identity verification process started!");
  };

  const handleStartInvestigation = () => {
    if (!sessionData.witnessData.fullName) {
      alert("Please enter witness full name.");
      return;
    }

    if (!sessionData.identityData.referencePhoto) {
      alert("Please upload a reference photo.");
      return;
    }

    onStartInvestigation(sessionData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Create New Investigation Session
          </h1>
          <p className="text-gray-600">
            Session ID:{" "}
            <span className="font-mono text-blue-600">
              {sessionData.sessionId}
            </span>{" "}
            (Auto-generated)
          </p>
        </div>

        {/* Form Sections */}
        <WitnessInfo
          witnessData={sessionData.witnessData}
          onWitnessDataChange={updateWitnessData}
        />

        <IdentityVerification
          identityData={sessionData.identityData}
          onIdentityDataChange={updateIdentityData}
          onVerifyIdentity={handleVerifyIdentity}
        />

        <TranslationSettings
          translationSettings={sessionData.translationSettings}
          onTranslationSettingsChange={updateTranslationSettings}
        />

        {/* Action Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={onBackToDashboard}
            className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition duration-200"
          >
            <ArrowLeft size={18} />
            Back to Dashboard
          </button>

          <button
            onClick={handleStartInvestigation}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
          >
            Continue to investigation
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionSetup;
