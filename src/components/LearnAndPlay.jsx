import React, { useState } from 'react';
import { imageUrl } from '../imageUrl';
import "../css/calculator.css"

const LearnAndPlay = () => {
  const [activeTab, setActiveTab] = useState('activities');

  const tabs = [
    { id: 'activities', label: 'ACTIVITIES' },
    { id: 'videos', label: 'VIDEOS' },
    { id: 'articles', label: 'ARTICLES' },
  ];

  const activityCards = [
    {
      title: "Types of Loan",
      description: "Develop an understanding about the different types of loans.",
      image: imageUrl.a1,
    },
    {
      title: "Handling Financial Crises",
      description: "Develop an understanding of appropriate actions to be taken in a financial crisis situation.",
      image: imageUrl.a2,
    },
    {
      title: "Analyze Your Spending",
      description: "Explore your spending preferences in this activity.",
      image: imageUrl.a3,
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-blue-900 to-blue-800">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Play and Learn
          </h2>
          <p className="text-white text-lg">
            Read the most accessed and liked articles by our visitors
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 px-2">
          <div className="flex gap-4 overflow-x-auto max-w-full scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-6 sm:px-8 py-2 sm:py-4 rounded font-bold text-xs sm:text-sm transition-colors whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-gray-100 text-blue-900'
                    : 'bg-transparent text-white border border-white hover:bg-white hover:text-blue-900'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>


        {/* Content */}
        {activeTab === 'activities' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activityCards.map((card, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="p-6 text-center">
                  <h3 className=" mb-4 aText">
                    {card.title}
                  </h3>
                  <p className=" mb-6 leading-relaxed aDis">
                    {card.description}
                  </p>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded font-bold transition-colors">
                    LET'S DO
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="text-center text-white">
            <p className="text-lg">Video content coming soon...</p>
          </div>
        )}

        {activeTab === 'articles' && (
          <div className="text-center text-white">
            <p className="text-lg">Article content coming soon...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LearnAndPlay;