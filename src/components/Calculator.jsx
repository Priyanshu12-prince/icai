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
        <div className="w-full overflow-x-auto">
          <div className="flex gap-4 mb-8 w-max px-2 lg:mx-auto">
            {calculatorTabs.map((tab, index) => (
              <div
                key={index}
                className={`tabText min-w-[140px] px-4 py-3 rounded text-center font-bold whitespace-pre-line text-xs sm:text-sm md:text-base ${tab.active
                  ? 'bg-gray-100 text-blue-900'
                  : 'border border-white text-white'
                  }`}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </div>


        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12  CalculatorContainer">
          {/* Left Column - Form */}
          <div className="text-white px-4 sm:px-0 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:text-left calText">
              Loan EMI Calculator
            </h2>

            <p className="mb-8 calDis">
              Fill in the loan amount, interest rate, and loan tenure below.
              Then click on 'calculate' to view the resulting EMI and the breakup.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block font-bold mb-2 text-sm sm:text-base">SIP Amount</label>
                <input
                  type="text"
                  name="sipAmount"
                  value={formData.sipAmount}
                  onChange={handleInputChange}
                  placeholder="Enter Amount"
                  className="w-full px-3 py-2 sm:px-4 bg-gray-100 text-gray-900 rounded text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block font-bold mb-2 text-sm sm:text-base">Expected Rate of Return (%)</label>
                <input
                  type="text"
                  name="rateOfReturn"
                  value={formData.rateOfReturn}
                  onChange={handleInputChange}
                  placeholder="Enter Rate"
                  className="w-full px-3 py-2 sm:px-4 bg-gray-100 text-gray-900 rounded text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block font-inter mb-2 text-sm sm:text-base">Investment Duration (months)</label>
                <input
                  type="text"
                  name="investmentDuration"
                  value={formData.investmentDuration}
                  onChange={handleInputChange}
                  placeholder="Enter Duration"
                  className="w-full px-3 py-2 sm:px-4 bg-gray-100 text-gray-900 rounded text-sm sm:text-base"
                />
              </div>

              <button
                onClick={handleCalculate}
                className="bg-orange-600 hover:bg-orange-700 text-white  sm:w-auto px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold transition-colors"
              >
                CALCULATE
              </button>
            </div>
          </div>


          {/* Right Column - Results */}
          <div className="text-white barGraph px-4 sm:px-6 md:px-10 py-6">
            {/* EMI Summary - responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 text-center">
              <div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">Your EMI</h3>
                <p className="text-xl sm:text-2xl font-bold">₹ 71,735</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">Total Interest</h3>
                <p className="text-xl sm:text-2xl font-bold">₹ 36,08,200</p>
              </div>
              <div>
                <h3 className="font-bold mb-2 text-sm sm:text-base">Total Payment</h3>
                <p className="text-xs sm:text-sm mb-1">(Principal + Interest)</p>
                <p className="text-xl sm:text-2xl font-bold">₹ 36,08,200</p>
              </div>
            </div>

            {/* Pie Chart Section */}
            <div className="rounded-lg p-4 sm:p-8 text-center">
              <h4 className="font-bold mb-4 sm:mb-6 text-xs sm:text-sm tracking-wider opacity-90">
                BREAKUP OF TOTAL PAYMENT
              </h4>

              <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-6">
                <div className="chart-container-calc">
                  <div className="pie-chart-calc">
                    <div className="pie-half-calc left-half-calc">
                      <div className="pie-segment-calc orange-gradient-calc"></div>
                    </div>
                    <div className="pie-half-calc right-half-calc">
                      <div className="pie-segment-calc blue-gradient-calc"></div>
                    </div>
                    <div className="center-circle-calc"></div>
                  </div>
                  <div className="chart-labels-calc">
                    <div className="label-calc left-label-calc">Interest Amount</div>
                    <div className="label-calc right-label-calc">Principal</div>
                  </div>
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

