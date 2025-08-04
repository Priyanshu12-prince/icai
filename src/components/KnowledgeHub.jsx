import React from 'react';

const KnowledgeHub = () => {
  const knowledgeCards = [
    {
      title: "Banking System\nLoan Schemes of Govt.",
      icon: "https://images.pexels.com/photos/3184474/pexels-photo-3184474.jpeg?auto=compress&cs=tinysrgb&w=30&h=33&fit=crop",
    },
    {
      title: "Book",
      icon: "https://images.pexels.com/photos/3184475/pexels-photo-3184475.jpeg?auto=compress&cs=tinysrgb&w=30&h=33&fit=crop",
    },
    {
      title: "Dealing with\nFinancial Crises",
      icon: "https://images.pexels.com/photos/3184476/pexels-photo-3184476.jpeg?auto=compress&cs=tinysrgb&w=30&h=33&fit=crop",
    },
    {
      title: "Digital Payment\nProcess & Safeguard",
      icon: "https://images.pexels.com/photos/3184477/pexels-photo-3184477.jpeg?auto=compress&cs=tinysrgb&w=30&h=33&fit=crop",
    },
    {
      title: "Retirement Planning\nand Succession",
      icon: "https://images.pexels.com/photos/3184478/pexels-photo-3184478.jpeg?auto=compress&cs=tinysrgb&w=30&h=33&fit=crop",
    },
    {
      title: "Utility of Credit Cards",
      icon: "https://images.pexels.com/photos/3184479/pexels-photo-3184479.jpeg?auto=compress&cs=tinysrgb&w=30&h=33&fit=crop",
    },
  ];

  return (
    <section className="w-full py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Knowledge HUB
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            The Knowledge Hub brings together professional and technical content
            to provide awareness about Indian Finance & Tax related concepts
            and information as a repository.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {knowledgeCards.map((card, index) => (
            <div
              key={index}
              className="h-96 rounded-2xl p-6 relative bg-gradient-to-br from-blue-900 to-blue-700 text-white cursor-pointer hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold leading-7 whitespace-pre-line">
                {card.title}
              </h3>
              <div className="absolute bottom-6 right-6">
                <img
                  src={card.icon}
                  alt="Plus"
                  className="w-8 h-8"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-end">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-colors">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;