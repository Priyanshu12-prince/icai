import React, { useState } from 'react';

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
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=426&h=324&fit=crop",
    },
    {
      title: "Handling Financial Crises",
      description: "Develop an understanding of appropriate actions to be taken in a financial crisis situation.",
      image: "https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg?auto=compress&cs=tinysrgb&w=426&h=324&fit=crop",
    },
    {
      title: "Analyze Your Spending",
      description: "Explore your spending preferences in this activity.",
      image: "https://images.pexels.com/photos/3184467/pexels-photo-3184467.jpeg?auto=compress&cs=tinysrgb&w=426&h=324&fit=crop",
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
        <div className="flex justify-center mb-8">
          <div className="flex gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded font-bold text-sm transition-colors ${
                  activeTab === tab.id
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
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
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