import React from 'react';
import { imageUrl } from '../imageUrl';
import '../css/calculator.css'

const KnowledgeHub = () => {
  const knowledgeCards = [
    {
      title: "Banking System\nLoan Schemes of Govt.",
      icon: imageUrl.k1
    },
    {
      title: "Book",
      icon: imageUrl.k2
    },
    {
      title: "Dealing with\nFinancial Crises",
     icon: imageUrl.k3
    },
    {
      title: "Digital Payment\nProcess & Safeguard",
    icon: imageUrl.k4
    },
    {
      title: "Retirement Planning\nand Succession",
    icon: imageUrl.k5
    },
    {
      title: "Utility of Credit Cards",
     icon: imageUrl.k6
    },
  ];

  return (
    <section className="w-full py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className=" mb-4 kText">
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
              className=""
            >
             
              <div className="">
                <img
                  src={card.icon}
                 
                 
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