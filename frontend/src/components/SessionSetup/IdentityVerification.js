import React, { useRef } from "react";
import { Upload, CheckCircle } from "lucide-react";

const IdentityVerification = ({
  identityData,
  onIdentityDataChange,
  onVerifyIdentity,
}) => {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      onIdentityDataChange("referencePhoto", file);
    }
  };

  const handleVerifyClick = () => {
    if (identityData.referencePhoto) {
      onVerifyIdentity();
    } else {
      alert("Please upload a reference photo first.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Identity Verification
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reference Photo *
          </label>
          <p className="text-sm text-gray-600 mb-4">
            Upload official ID photo for real-time identity verification during
            the investigation
          </p>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition duration-200">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".jpg,.jpeg,.png"
              className="hidden"
            />

            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-3" />
            <p className="text-sm text-gray-600 mb-2">
              Upload a reference photo and enter witness name to verify identity
            </p>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              Upload Photo
            </button>
            <p className="text-xs text-gray-500 mt-2">JPG, PNG</p>

            {identityData.referencePhoto && (
              <div className="mt-3 flex items-center justify-center gap-2 text-green-600">
                <CheckCircle size={16} />
                <span className="text-sm">Photo uploaded successfully</span>
              </div>
            )}
          </div>
        </div>

        <button
          onClick={handleVerifyClick}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
        >
          Verify Identity
        </button>
      </div>
    </div>
  );
};

export default IdentityVerification;
