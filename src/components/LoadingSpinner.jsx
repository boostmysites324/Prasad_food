import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white/90">
      <div className="spinner-container">
        {/* Simple spinning circle with brand colors */}
        <div className="w-16 h-16 border-4 border-[#FF9933] border-t-[#800000] border-solid rounded-full spinner-minimal"></div>
      </div>

      {/* Animated loading text */}
      <div className="mt-6 text-center">
        <span className="inline-block text-[#800000] font-medium text-lg loading-text">
          Loading<span className="dot-1">.</span>
          <span className="dot-2">.</span>
          <span className="dot-3">.</span>
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
