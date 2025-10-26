import React from "react";

const WitnessInfo = ({ witnessData, onWitnessDataChange }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Witness Information
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            value={witnessData.fullName}
            onChange={(e) => onWitnessDataChange("fullName", e.target.value)}
            placeholder="Enter witness full name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ID Number (Optional)
          </label>
          <input
            type="text"
            value={witnessData.idNumber}
            onChange={(e) => onWitnessDataChange("idNumber", e.target.value)}
            placeholder="e.g., BH-12345678"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default WitnessInfo;
