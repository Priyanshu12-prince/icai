import React, { useState } from "react";
import YouTube from "react-youtube";
import Book from "./Book"; // Import your Book component
import LearnAndPlay from "./LearnAndPlay";
import PlayQuize from "./PlayQuize";
const LearnTab = () => {
  const [activeTab, setActiveTab] = useState("learn");
  const tabs = [
    { id: 'activities', label: 'ACTIVITIES' },
    { id: 'videos', label: 'VIDEOS' },
    { id: 'articles', label: 'ARTICLES' },
  ];
  // Tab Header
  const renderHeader = () => (
    <div>
      <div className="flex justify-center mb-8 px-2">
        <div className="flex gap-4 overflow-x-auto max-w-full scrollbar-hide">
          {["learn", "watch", "play"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-6 sm:px-8 py-4 sm:py-4 rounded-lg font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap
          ${activeTab === tab
                  ? "bg-white text-indigo-800"
                  : "bg-indigo-700 text-white"
                }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>


      </div>

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
    <div className="max-w-4xl w-full mx-auto">
      <YouTube
        videoId="1d-gpAQxG6I"
        opts={{
          width: "100%", // let CSS handle actual sizing
          height: "100%",
          playerVars: { autoplay: 0, controls: 1 },
        }}
        className="w-full aspect-video rounded-lg overflow-hidden"
      />
    </div>
  );

  // Play tab placeholder
  const renderPlay = () => (
    <div className="p-8 text-center text-white">
      <p>Games or interactive activities will appear here!</p>
      <PlayQuize/>
    </div>
  );

  return (
    <div className="learn-tab-container min-h-screen p-6 bg-[rgba(2,60,108,1)]">
      {renderHeader()}
      <div className="bg-white bg-opacity-20 rounded-b-lg p-6 flex justify-center">
        {activeTab === "learn" && renderLearn()}
        {activeTab === "watch" && renderWatch()}
        {activeTab === "play" && renderPlay()}
      </div>
      <LearnAndPlay/>
    </div>
  );
};

export default LearnTab;
