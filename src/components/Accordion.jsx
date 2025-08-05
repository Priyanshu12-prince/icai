import React from "react";
import { imageUrl } from '../imageUrl';

const Accordion = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-gray-100 rounded-lg">
      <button
        onClick={onClick}
        className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex justify-between items-center hover:bg-gray-200 transition-colors"
      >
        <h3 className="text-base sm:text-lg md:text-xl font-bold font-sans text-blue-900 pr-2 sm:pr-3 md:pr-4">
          {question}
        </h3>
        <img
          src={isOpen ? imageUrl.orangeIcon : imageUrl.upIcon}
          alt="Toggle Icon"
          className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
