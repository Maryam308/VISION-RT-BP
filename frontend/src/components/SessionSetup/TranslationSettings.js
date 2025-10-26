import React from "react";

const TranslationSettings = ({
  translationSettings,
  onTranslationSettingsChange,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Translation Settings
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Source Language
          </label>
          <select
            value={translationSettings.sourceLanguage}
            onChange={(e) =>
              onTranslationSettingsChange("sourceLanguage", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="ar">
              Arabic (a<sub>id</sub>)
            </option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Target Language
          </label>
          <select
            value={translationSettings.targetLanguage}
            onChange={(e) =>
              onTranslationSettingsChange("targetLanguage", e.target.value)
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <p className="text-sm text-blue-800">
            <strong>Translation:</strong>{" "}
            {translationSettings.sourceLanguage.toUpperCase()} →{" "}
            {translationSettings.targetLanguage.toUpperCase()}
          </p>
          <p className="text-sm text-blue-700 mt-1">
            Real-time transcription, translation, identity verification, and AI
            assistant will be automatically enabled
          </p>
        </div>
      </div>
    </div>
  );
};

export default TranslationSettings;
