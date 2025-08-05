// components/Accordion.jsx
import React, { useState } from "react";
import { imageUrl } from '../imageUrl';

const Accordion = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-gray-100 rounded-lg">
      <button
        onClick={onClick}
        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-200 transition-colors"
      >
        <h3 className="text-xl font-bold font-sans text-blue-900 pr-4">
          {question}
        </h3>
        <img
            src={isOpen ? imageUrl.orangeIcon : imageUrl.upIcon}
            alt="Toggle Icon"
            className={`w-8 h-8 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="px-8 pb-6">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
