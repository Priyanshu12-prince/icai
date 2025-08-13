import React, { useState } from "react";
import YouTube from "react-youtube";
import Book from "./Book"; // Import your Book component

const LearnTab = () => {
  const [activeTab, setActiveTab] = useState("learn");

  // Tab Header
  const renderHeader = () => (
    <div className="flex justify-center space-x-2 mb-4">
      {["learn", "watch", "play"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 rounded-t-lg font-semibold ${
            activeTab === tab
              ? "bg-white text-indigo-800"
              : "bg-indigo-700 text-white"
          }`}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>
  );

  // Learn tab: Show Book component
  const renderLearn = () => (
    <div className="flex justify-center">
      <Book />
    </div>
  );

  // Watch tab: Embed YouTube video
  const renderWatch = () => (
    <div className="max-w-lg mx-auto">
      <YouTube
        videoId="1d-gpAQxG6I" // from URL
        opts={{
          width: "100%",
          playerVars: { autoplay: 0, controls: 1 },
        }}
        className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden"
      />
    </div>
  );

  // Play tab placeholder
  const renderPlay = () => (
    <div className="p-8 text-center text-white">
      <p>Games or interactive activities will appear here!</p>
    </div>
  );

  return (
    <div className="learn-tab-container min-h-screen p-6 bg-gradient-to-b from-indigo-900 to-indigo-700">
      {renderHeader()}
      <div className="bg-white bg-opacity-20 rounded-b-lg p-6 flex justify-center">
        {activeTab === "learn" && renderLearn()}
        {activeTab === "watch" && renderWatch()}
        {activeTab === "play" && renderPlay()}
      </div>
    </div>
  );
};

export default LearnTab;
