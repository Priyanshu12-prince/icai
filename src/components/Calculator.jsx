import React, { useState } from 'react';
import "../css/calculator.css"

const Calculator = () => {
  const [formData, setFormData] = useState({
    sipAmount: '',
    rateOfReturn: '',
    investmentDuration: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCalculate = () => {
    // Add calculation logic here
    console.log('Calculating with:', formData);
  };

  const calculatorTabs = [
    { id: 'loan-emi', label: 'LOAN EMI\nCALCULATOR', active: true },
    { id: 'sip', label: 'SIP\nCALCULATOR', active: false },
    { id: 'simple-interest', label: 'SIMPLE INTEREST\nCALCULATOR', active: false },
    { id: 'loan-emi', label: 'LOAN EMI\nCALCULATOR', active: false },
    { id: 'sip', label: 'SIP\nCALCULATOR', active: false },
    { id: 'simple-interest', label: 'SIMPLE INTEREST\nCALCULATOR', active: false },
    { id: 'sip', label: 'SIP\nCALCULATOR', active: false },
    { id: 'simple-interest', label: 'SIMPLE INTEREST\nCALCULATOR', active: false },


  ];

  return (
    <section className=" calculatorSection">
      <div className="">
        {/* Calculator Tabs */}
        <div className="flex gap-4 mb-8">
          {calculatorTabs.map((tab) => (
            <div
              key={tab.id}
              className={`tabText mx-auto px-4 py-4 rounded text-center font-bold text-sm ${tab.active
                ? 'bg-gray-100 text-blue-900'
                : 'border border-white text-white'
                }`}
            >
              {tab.label.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  CalculatorContainer">
          {/* Left Column - Form */}
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4  calText ">Loan EMI Calculator</h2>
            <p className="mb-8 text-gray-200">
              Fill in the loan amount, interest rate, and loan tenure below.
              Then click on 'calculate' to view the resulting EMI and the breakup.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block font-bold mb-2">SIP Amount</label>
                <input
                  type="text"
                  name="sipAmount"
                  value={formData.sipAmount}
                  onChange={handleInputChange}
                  placeholder="Enter Amount"
                  className="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Expected Rate of Return (%)</label>
                <input
                  type="text"
                  name="rateOfReturn"
                  value={formData.rateOfReturn}
                  onChange={handleInputChange}
                  placeholder="Enter Rate"
                  className="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded"
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Investment Duration (months)</label>
                <input
                  type="text"
                  name="investmentDuration"
                  value={formData.investmentDuration}
                  onChange={handleInputChange}
                  placeholder="Enter Duration"
                  className="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded"
                />
              </div>

              <button
                onClick={handleCalculate}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
              >
                CALCULATE
              </button>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="text-white barGraph">
            <div className="grid grid-cols-3 gap-8 mb-8 text-center">
              <div>
                <h3 className="font-bold mb-2">Your EMI</h3>
                <p className="text-2xl font-bold">₹ 71,735</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Total Interest</h3>
                <p className="text-2xl font-bold">₹ 36,08,200</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Total Payment</h3>
                <p className="text-xs mb-1">(Principal + Interest)</p>
                <p className="text-2xl font-bold">₹ 36,08,200</p>
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className=" rounded-lg p-8 text-center">
              <h4 className="font-bold mb-4">BREAKUP OF TOTAL PAYMENT</h4>
              <div className="w-64 h-64 mx-auto bg-blue-700 rounded-full flex items-center justify-center">
                <span className="text-sm">Chart Visualization</span>
              </div>
              <div className="flex justify-center gap-8 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 bg-orange-600 rounded"></div>
                  <span className="text-xs">Interest Amount</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 bg-blue-400 rounded"></div>
                  <span className="text-xs">Principal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;