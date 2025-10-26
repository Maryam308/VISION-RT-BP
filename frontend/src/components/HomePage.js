import React from "react";
import { LogOut, Play } from "lucide-react";
import authService from "../services/authService";

const HomePage = ({ user, onSignOut, onStartSession }) => {
  // Add onStartSession prop
  const handleSignOut = async () => {
    try {
      await authService.signOut();
      onSignOut();
    } catch (error) {
      console.error("Sign out error:", error);
      alert("Error signing out. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Successfully Signed In!
          </h1>
          <p className="text-gray-600">
            Welcome back, {user?.username || "User"}!
          </p>
        </div>

        {/* Add Start Session Button */}
        <button
          onClick={onStartSession}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 mb-4 shadow-sm"
        >
          <Play size={20} />
          <span>Start New Session</span>
        </button>

        <button
          onClick={handleSignOut}
          className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2"
        >
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
