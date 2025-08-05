import React, { useState } from "react";
import Accordion from "../components/Accordion";
import { imageUrl } from '../imageUrl';

const tabData = [
    {
        title: "BANK SYSTEM & LOAN SCHEMES UNDER GOVT. OF INDIA",
        content: [
            {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
            {
                question: "Who governs the functioning of Banks and Financial Institutions in India?",
                answer:
                    "The Reserve Bank of India (RBI) governs and regulates the functioning of banks and financial institutions in India through various policies, guidelines, and inspections.",
            },
        ],
    },
    {
        title: "DIGITAL PAYMENT",
        content: [
            {
                question: "What is a digital payment system?",
                answer: "Digital payment systems enable transactions using electronic modes such as UPI, cards, or net banking.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
        ],
    },
    {
        title: "FINANCIAL CRISIS",
        content: [
            {
                question: "What causes a financial crisis?",
                answer: "Financial crises are often triggered by poor fiscal policies, banking failures, or global economic downturns.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
        ],
    },
    {
        title: "BANK SYSTEM & LOAN SCHEMES UNDER GOVT. OF INDIA",
        content: [
            {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
            {
                question: "Who governs the functioning of Banks and Financial Institutions in India?",
                answer:
                    "The Reserve Bank of India (RBI) governs and regulates the functioning of banks and financial institutions in India through various policies, guidelines, and inspections.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
            
        ],
    },
    {
        title: "DIGITAL PAYMENT",
        content: [
            {
                question: "What is a digital payment system?",
                answer: "Digital payment systems enable transactions using electronic modes such as UPI, cards, or net banking.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
        ],
    },
    {
        title: "FINANCIAL CRISIS",
        content: [
            {
                question: "What causes a financial crisis?",
                answer: "Financial crises are often triggered by poor fiscal policies, banking failures, or global economic downturns.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
             {
                question: "What does the banking system of India comprise of ?",
                answer:
                    "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
            },
        ],
    },
    // Add more tabs as needed
];

const FAQ = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="w-ful mb-6">
            <div className="w-full overflow-hidden">
                <img
                    src={imageUrl.faqImage}
                    alt="FAQ Banner"
                    className="w-full h-auto object-cover sm:object-cover sm:h-[40vh]"
                />
            </div>


            {/* Tab Navigation */}
          <div className="flex overflow-x-auto sm:flex-wrap gap-2 sm:gap-4 justify-start sm:justify-center px-4 sm:px-20 my-6 scrollbar-hide">

                {tabData.map((tab, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setActiveTab(idx);
                            setOpenIndex(null);
                        }}
                        className={`break-words text-left whitespace-normal max-w-[200px] px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200
        ${activeTab === idx
                                ? "bg-white border border-blue-600 text-blue-700 shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent"}
      `}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto space-y-4">
                {tabData[activeTab].content.map((item, idx) => (
                    <Accordion
                        key={idx}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === idx}
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
