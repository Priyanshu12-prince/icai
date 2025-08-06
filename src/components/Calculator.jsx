import React, { useState } from 'react';
import "../css/calculator.css"

const Calculator = () => {
  const [activeTab, setActiveTab] = useState('loan-emi');
  const [formData, setFormData] = useState({
    amount: '',
    rate: '',
    duration: '',
  });
  const [results, setResults] = useState(null);

  const calculatorTabs = [
    { id: 'loan-emi', label: 'LOAN EMI\nCALCULATOR', active: false },
    { id: 'sip', label: 'SIP\nCALCULATOR', active: false },
    { id: 'simple-interest', label: 'SIMPLE INTEREST\nCALCULATOR', active: false },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setFormData({ amount: '', rate: '', duration: '' });
    setResults(null);
  };

  const calculateLoanEMI = (principal, rate, tenure) => {
    const monthlyRate = rate / (12 * 100);
    const numberOfPayments = tenure * 12;
    
    if (monthlyRate === 0) {
      return {
        emi: principal / numberOfPayments,
        totalPayment: principal,
        totalInterest: 0
      };
    }
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    const totalPayment = emi * numberOfPayments;
    const totalInterest = totalPayment - principal;
    
    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      principal: Math.round(principal)
    };
  };

  const calculateSIP = (monthlyInvestment, annualRate, months) => {
    const monthlyRate = annualRate / (12 * 100);
    
    if (monthlyRate === 0) {
      return {
        maturityAmount: monthlyInvestment * months,
        totalInvestment: monthlyInvestment * months,
        totalReturns: 0
      };
    }
    
    const maturityAmount = monthlyInvestment * 
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const totalInvestment = monthlyInvestment * months;
    const totalReturns = maturityAmount - totalInvestment;
    
    return {
      maturityAmount: Math.round(maturityAmount),
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(totalReturns)
    };
  };

  const calculateSimpleInterest = (principal, rate, time) => {
    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;
    
    return {
      interest: Math.round(interest),
      totalAmount: Math.round(totalAmount),
      principal: Math.round(principal)
    };
  };

  const handleCalculate = () => {
    const amount = parseFloat(formData.amount);
    const rate = parseFloat(formData.rate);
    const duration = parseFloat(formData.duration);

    if (!amount || !rate || !duration) {
      alert('Please fill in all fields');
      return;
    }

    let calculationResults;

    switch (activeTab) {
      case 'loan-emi':
        calculationResults = calculateLoanEMI(amount, rate, duration);
        break;
      case 'sip':
        calculationResults = calculateSIP(amount, rate, duration);
        break;
      case 'simple-interest':
        calculationResults = calculateSimpleInterest(amount, rate, duration);
        break;
      default:
        calculationResults = calculateLoanEMI(amount, rate, duration);
    }

    setResults(calculationResults);
  };

  const getInputLabels = () => {
    switch (activeTab) {
      case 'loan-emi':
        return {
          amount: 'Loan Amount',
          rate: 'Interest Rate (% per annum)',
          duration: 'Loan Tenure (years)',
          amountPlaceholder: 'Enter Loan Amount',
          ratePlaceholder: 'Enter Interest Rate',
          durationPlaceholder: 'Enter Tenure in Years'
        };
      case 'sip':
        return {
          amount: 'SIP Amount (Monthly)',
          rate: 'Expected Rate of Return (% per annum)',
          duration: 'Investment Duration (months)',
          amountPlaceholder: 'Enter Monthly SIP Amount',
          ratePlaceholder: 'Enter Expected Return Rate',
          durationPlaceholder: 'Enter Duration in Months'
        };
      case 'simple-interest':
        return {
          amount: 'Principal Amount',
          rate: 'Interest Rate (% per annum)',
          duration: 'Time Period (years)',
          amountPlaceholder: 'Enter Principal Amount',
          ratePlaceholder: 'Enter Interest Rate',
          durationPlaceholder: 'Enter Time in Years'
        };
      default:
        return {
          amount: 'Loan Amount',
          rate: 'Interest Rate (% per annum)',
          duration: 'Loan Tenure (years)',
          amountPlaceholder: 'Enter Loan Amount',
          ratePlaceholder: 'Enter Interest Rate',
          durationPlaceholder: 'Enter Tenure in Years'
        };
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'loan-emi':
        return 'Loan EMI Calculator';
      case 'sip':
        return 'SIP Calculator';
      case 'simple-interest':
        return 'Simple Interest Calculator';
      default:
        return 'Loan EMI Calculator';
    }
  };

  const getDescription = () => {
    switch (activeTab) {
      case 'loan-emi':
        return 'Fill in the loan amount, interest rate, and loan tenure below. Then click on \'calculate\' to view the resulting EMI and the breakup.';
      case 'sip':
        return 'Fill in the monthly SIP amount, expected rate of return, and investment duration below. Then click on \'calculate\' to view the maturity amount.';
      case 'simple-interest':
        return 'Fill in the principal amount, interest rate, and time period below. Then click on \'calculate\' to view the simple interest and total amount.';
      default:
        return 'Fill in the loan amount, interest rate, and loan tenure below. Then click on \'calculate\' to view the resulting EMI and the breakup.';
    }
  };

  const renderResults = () => {
    if (!results) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 text-center">
          <div>
            <h3 className="font-bold mb-2 text-sm sm:text-base">Result 1</h3>
            <p className="text-xl sm:text-2xl font-bold">₹ 0</p>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-sm sm:text-base">Result 2</h3>
            <p className="text-xl sm:text-2xl font-bold">₹ 0</p>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-sm sm:text-base">Result 3</h3>
            <p className="text-xl sm:text-2xl font-bold">₹ 0</p>
          </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'loan-emi':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 text-center">
            <div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Your EMI</h3>
              <p className="text-xl sm:text-2xl font-bold">₹ {results.emi.toLocaleString()}</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Total Interest</h3>
              <p className="text-xl sm:text-2xl font-bold">₹ {results.totalInterest.toLocaleString()}</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Total Payment</h3>
              <p className="text-xs sm:text-sm mb-1">(Principal + Interest)</p>
              <p className="text-xl sm:text-2xl font-bold">₹ {results.totalPayment.toLocaleString()}</p>
            </div>
          </div>
        );
      case 'sip':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 text-center">
            <div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Maturity Amount</h3>
              <p className="text-xl sm:text-2xl font-bold">₹ {results.maturityAmount.toLocaleString()}</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Total Investment</h3>
              <p className="text-xl sm:text-2xl font-bold">₹ {results.totalInvestment.toLocaleString()}</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Total Returns</h3>
              <p className="text-xs sm:text-sm mb-1">(Gains)</p>
              <p className="text-xl sm:text-2xl font-bold">₹ {results.totalReturns.toLocaleString()}</p>
            </div>
          </div>
        );
      case 'simple-interest':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 text-center">
            <div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Simple Interest</h3>
              <p className="text-xl sm:text-2xl font-bold">₹ {results.interest.toLocaleString()}</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Principal Amount</h3>
              <p className="text-xl sm:text-2xl font-bold">₹ {results.principal.toLocaleString()}</p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">Total Amount</h3>
              <p className="text-xs sm:text-sm mb-1">(Principal + Interest)</p>
              <p className="text-xl sm:text-2xl font-bold">₹ {results.totalAmount.toLocaleString()}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const labels = getInputLabels();

  return (
    <section className=" calculatorSection">
      <div className="">
        {/* Calculator Tabs */}
        <div className="w-full overflow-x-auto">
          <div className="flex gap-4 mb-8 w-max px-2 lg:mx-auto">
            {calculatorTabs.map((tab, index) => (
              <div
                key={index}
                onClick={() => handleTabClick(tab.id)}
                className={`tabText min-w-[140px] px-4 py-3 rounded text-center font-bold whitespace-pre-line text-xs sm:text-sm md:text-base cursor-pointer transition-colors ${
                  activeTab === tab.id
                    ? 'bg-gray-100 text-blue-900'
                    : 'border border-white text-white hover:bg-gray-800'
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
              {getTitle()}
            </h2>

            <p className="mb-8 calDis">
              {getDescription()}
            </p>

            <div className="space-y-6">
              <div>
                <label className="block font-bold mb-2 text-sm sm:text-base">{labels.amount}</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder={labels.amountPlaceholder}
                  className="w-full px-3 py-2 sm:px-4 bg-gray-100 text-gray-900 rounded text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block font-bold mb-2 text-sm sm:text-base">{labels.rate}</label>
                <input
                  type="number"
                  name="rate"
                  value={formData.rate}
                  onChange={handleInputChange}
                  placeholder={labels.ratePlaceholder}
                  className="w-full px-3 py-2 sm:px-4 bg-gray-100 text-gray-900 rounded text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block font-inter mb-2 text-sm sm:text-base">{labels.duration}</label>
                <input
                  type="number"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                  placeholder={labels.durationPlaceholder}
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
            {/* Results Summary - responsive grid */}
            {renderResults()}

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
                    <div className="label-calc left-label-calc">
                      {activeTab === 'loan-emi' ? 'Interest Amount' : 
                       activeTab === 'sip' ? 'Total Returns' : 'Interest Amount'}
                    </div>
                    <div className="label-calc right-label-calc">
                      {activeTab === 'loan-emi' ? 'Principal' : 
                       activeTab === 'sip' ? 'Investment' : 'Principal'}
                    </div>
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

