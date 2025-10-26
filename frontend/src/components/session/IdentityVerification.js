// src/components/session/IdentityVerification.js
import React, { useState } from 'react';
import { User, Upload } from 'lucide-react';

const IdentityVerification = () => {
  const [fullName, setFullName] = useState('');
  const [idNumber, setIdNumber] = useState('');

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <User className="h-6 w-6 text-blue-600" />
        <h3 className="text-xl font-bold text-gray-900">Identity Verification Configuration</h3>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Left: Reference Image */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Reference Image</h4>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition cursor-pointer">
            <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
            <p className="font-medium text-gray-700 mb-1">Upload ID Photo</p>
            <p className="text-sm text-gray-500">JPG, PNG (max 5MB)</p>
          </div>
        </div>

        {/* Right: Person Details */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-4">Person Details</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter witness name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ID Number (Optional)
              </label>
              <input
                type="text"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                placeholder="e.g., BH-12345678"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Start Verification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityVerification;