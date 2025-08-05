// components/FAQ.jsx
import React, { useState } from "react";
import Accordion from "./Accordion"; // adjust path if needed

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "What does the banking system of India comprise of?",
      answer:
        "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI.",
    },
    {
      question:
        "Who governs the functioning of Banks and Financial Institutions in India?",
      answer:
        "The Reserve Bank of India (RBI) is the central banking institution that governs and regulates the functioning of banks and financial institutions in India.",
    },
    {
      question: "Why should I have a Bank Account?",
      answer:
        "Having a bank account provides security for your money, enables easy transactions, helps in building credit history, provides access to various financial services, and is essential for receiving salaries and government benefits.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full py-16 px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
