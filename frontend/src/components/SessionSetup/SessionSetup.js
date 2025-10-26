import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import WitnessInfo from "./WitnessInfo";
import IdentityVerification from "./IdentityVerification";
import TranslationSettings from "./TranslationSettings";

const SessionSetup = ({ onBackToDashboard, onStartInvestigation }) => {
  const [sessionData, setSessionData] = useState({
    sessionId: "#2024-NV-0043",
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
    <div className="session-setup-container">
      <div className="session-setup-content">
        {/* Header */}
        <div className="session-header">
          <h1 className="session-title">Create New Investigation Session</h1>
          <p className="session-id">
            Session ID:{" "}
            <span className="session-id-code">{sessionData.sessionId}</span>{" "}
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
        <div className="action-buttons">
          <button onClick={onBackToDashboard} className="btn btn-outline">
            <ArrowLeft size={18} />
            Back to Dashboard
          </button>

          <button
            onClick={handleStartInvestigation}
            className="btn btn-primary"
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
