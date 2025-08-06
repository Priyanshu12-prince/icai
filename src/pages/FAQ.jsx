import React, { useState } from "react";
import Accordion from "../components/Accordion";
import { imageUrl } from '../imageUrl';

const tabData = [
    {
        title: "BANKING SYSTEM & LOANS SCHEMES UNDER GOVT",
        content: [
            {
                question: "What does the banking system of India comprise of?",
                answer: "The banking system of India comprises the Central bank (Reserve Bank of India), Commercial banks (Public sector, Private sector, and Foreign banks), Cooperative banks (Urban and Rural Co-operative Banks), and Development banks like IDBI."
            },
            {
                question: "Who governs the functioning of Banks and Financial Institutions in India?",
                answer: "The functioning of Banks and Financial Institutions in India is governed by the Department of Financial Services, Ministry of Finance."
            },
            {
                question: "Why should I have a Bank Account?",
                answer: "Having a bank account will encourage savings and investments. A bank account will henceforth pave the way for further investment. Alongside this, your money will also be protected from theft. Moreover, instead of keeping hard cash with you, saving your money in a bank account will earn you a designated interest rate from the bank."
            },
            {
                question: "What are the types of accounts you can open in a bank?",
                answer: "There are plenty of varied types of accounts that you can avail at a bank. Some of the examples of such bank accounts are: Savings account, Current account, Overdraft account, Cash credit account, Zero balance account"
            },
            {
                question: "What is the purpose of a savings account?",
                answer: "A savings account is the most basic account one can open. It is a suitable option for individuals who would like to deposit their money to keep it safe with the bank. A saving account is ideal for salaried employees or for those who have a monthly income to be deposited in their accounts. A savings bank account is a basic account type that lets you deposit money safely with a bank and helps you earn interest."
            },
            {
                question: "What is the purpose of a current account?",
                answer: "A current account is suitable for individuals who deal with multiple transactions on a daily basis, thus making it ideal for business owners such as traders and entrepreneurs who need to access their accounts frequently."
            },
            {
                question: "What is an overdraft account?",
                answer: "An overdraft account is a type of financial instrument that can easily be availed as an extended credit facility by the customers. This usually comes into effect when the bank balance of the customer reaches zero. This facility is chargeable and is provided to customers as an unsecured form of credit."
            },
            {
                question: "What is a cash credit account?",
                answer: "Cash Credit account is a type of short-term loan provided to businesses by the banks to maintain the liquidity of the cash flow in the business. It is a form of working capital loan that is usually availed by business corporations."
            },
            {
                question: "What are the investment options available in the bank?",
                answer: "When it comes to creating assets, banks can be a great help, especially for beginners. Investment options include: Recurring deposit account, Fixed deposit account, Public Provident Fund (PPF) account."
            },
            {
                question: "What is a recurring deposit account?",
                answer: "A recurring deposit is a special kind of term deposit offered by Indian banks which helps people with regular incomes to deposit a fixed amount every month."
            },
            {
                question: "What is a fixed deposit account?",
                answer: "A Fixed Deposit is a lump sum cash amount in your bank for a fixed tenure at an agreed rate of interest. During the end of the tenure, you receive the total invested amount along with the compound interest."
            },
            {
                question: "What is a Zero Balance Account?",
                answer: "A zero balance account is a type of savings account where you are not required to maintain a minimum balance. This is a great option for students, low-income individuals, and anyone who wants to avoid the hassle of maintaining a minimum balance."
            },
            {
                question: "What type of a bank account should I open as a student?",
                answer: "As a student, a zero balance savings account is the most suitable option. It allows you to save money without worrying about maintaining a minimum balance. Many banks offer special student accounts with additional benefits like a free debit card, educational loan offers, and discounts on online purchases."
            },
            {
                question: "What are the various loan schemes launched by Indian government?",
                answer: "The Indian government has launched several loan schemes including: Pradhan Mantri Mudra Yojana (PMMY), Stand-Up India Scheme, Pradhan Mantri Awas Yojana (PMAY), National Small Industries Corporation (NSIC) Subsidy."
            }
        ]
    },
    {
        title: "DIGITAL PAYMENTS",
        content: [
            {
                question: "What is ECS facility?",
                answer: "ECS stands for Electronic Clearing Service. It is a facility provided by banks in the Indian market that allows the automatic transfer of funds from one bank account to another electronically. ECS is commonly used for activities like salary credits, bill payments, loan EMIs, and other regular transactions, making the process faster, safer, and more convenient for customers."
            },
            {
                question: "What is internet banking? And what are the things that one should keep in mind while using it?",
                answer: "Internet banking, also known as online banking, is a service offered by banks that allows customers to perform various financial transactions and access banking services through the internet using a computer or mobile device. Things to keep in mind: Keep your login credentials confidential, Use secure and strong passwords, Avoid accessing internet banking from public computers, Regularly update your device's operating system and antivirus software, Be cautious of phishing emails and fraudulent websites."
            },
            {
                question: "How can bank accounts enable UPI payments and what are some digital payment apps that provide this service?",
                answer: "When you link your bank account with digital payment apps like Paytm and Gpay, you can use the UPI feature for making payments. UPI, or Unified Payments Interface, allows you to connect your bank account to these digital service providers and enables you to make payments from anywhere using your linked device. It's a convenient and secure way to carry out transactions."
            },
            {
                question: "What is ATM? How it must be used?",
                answer: "An ATM, or Automated Teller Machine, is an electronic banking outlet that allows customers to complete basic transactions without the aid of a branch representative or teller. How to use: Insert your debit or credit card, Select your preferred language, Enter your 4-digit PIN, Select the type of transaction, Enter the amount, Collect your cash and receipt, Always remember to take your card back."
            },
            {
                question: "What are the other services provided by the bank?",
                answer: "In the Indian market, banks offer various other services, including: Credit Cards, Debit Cards, Online Banking/Mobile Banking, Locker Facility, Insurance Products, Investment Services, Currency Exchange and Money Transfer, Remittance Services, Demat Account. These services cater to various banking needs and make financial management more convenient for customers."
            }
        ]
    },
    {
        title: "GOODS AND SERVICES TAX",
        content: [
            {
                question: "What is a Loan? and What are the types of loans you can avail from the bank?",
                answer: "A loan is a sum of money that you borrow from a bank or financial institution and promise to pay back with interest over a period of time. Types of loans include: Personal Loan, Home Loan, Car Loan, Education Loan, Business Loan, Gold Loan."
            },
            {
                question: "For what purposes can I seek a first time home loan?",
                answer: "A first-time home loan can be sought for the following purposes: Purchase of a new or resale house/flat, Construction of a house on a plot of land you own, Purchase of a plot of land and construction of a house on it, Home extension or renovation."
            },
            {
                question: "How will your bank decide your home loan eligibility?",
                answer: "Your home loan eligibility is decided based on several factors: Your income and financial stability, Age (determines loan tenure), Property value (loan amount will be a percentage of property value), Existing loans and liabilities (debt-to-income ratio assessment)."
            },
            {
                question: "What is an EMI?",
                answer: "EMI stands for Equated Monthly Instalment. It is the fixed amount that you pay to the bank every month to repay your loan. The EMI consists of both the principal amount and the interest component."
            },
            {
                question: "What documents are generally sought for a loan approval?",
                answer: "The documents generally sought for a loan approval include: Identity proof (Aadhaar card, PAN card, passport, driving license), Address proof (Aadhaar card, utility bills, passport, driving license), Income proof (Salary slips, bank statements, income tax returns), Property documents (Sale agreement, title deed, approved building plan for home loans)."
            },
            {
                question: "What are the different interest rate options offered by banks?",
                answer: "Banks generally offer two types of interest rate options: Fixed interest rate (remains fixed for the entire loan tenure), Floating interest rate (linked to the bank's benchmark rate and can change over the loan tenure)."
            },
            {
                question: "Can I withdraw more money than I have in my account?",
                answer: "Generally, you cannot withdraw more money than you have in your account. However, some banks offer an overdraft facility, which allows you to withdraw more money than your account balance, up to a certain limit. This is a type of short-term loan and you will be charged interest on the overdrawn amount."
            }
        ]
    },
    {
        title: "FINANCIAL CRISIS",
        content: [
            {
                question: "Is salary account saving or current?",
                answer: "A salary account is a type of savings account. The main difference is that it is opened by the employer for the employee to receive their salary. It often comes with special benefits like zero balance requirement, free cheque book, and a debit card."
            },
            {
                question: "What features should I look for in a saving account?",
                answer: "When choosing a savings account, you should look for: Interest rate (higher rate helps money grow faster), Minimum balance requirement, ATM and branch access (wide network for convenience), Online and mobile banking facilities, Debit card benefits (purchase protection, insurance coverage, reward points)."
            },
            {
                question: "What is minimum balance?",
                answer: "Minimum balance is the minimum amount of money that you need to maintain in your bank account to avoid penalty charges. The minimum balance requirement varies from bank to bank and also depends on the type of account you have."
            },
            {
                question: "What happens to bank account when not used?",
                answer: "If a bank account is not used for a long period of time (usually 12-24 months), it may be classified as a dormant or inoperative account. The bank may restrict transactions on such accounts for security reasons. To reactivate the account, you will need to contact the bank and complete the necessary KYC (Know Your Customer) process."
            },
            {
                question: "Is ATM allowed in current account?",
                answer: "Yes, ATM cards are allowed for current accounts. They can be used for cash withdrawals, balance inquiries, and other transactions, just like with a savings account."
            }
        ]
    }
];

const FAQ = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="w-full mb-6">
            <div className="w-full overflow-hidden">
                <img
                    src={imageUrl.faqImage}
                    alt="FAQ Banner"
                    className="w-full h-auto object-cover sm:object-cover sm:h-[40vh]"
                />
            </div>

            {/* Tab Navigation */}
            <div className="flex overflow-x-auto sm:flex-wrap gap-2 sm:gap-4 justify-start sm:justify-center p-4 bg-gray-100">
                {tabData.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveTab(index);
                            setOpenIndex(null); // Reset accordion when switching tabs
                        }}
                        className={`px-4 py-2 rounded-lg font-medium text-sm sm:text-base whitespace-nowrap transition-colors ${
                            activeTab === index
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>

            {/* FAQ Content */}
            <div className="p-4 sm:p-6 lg:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
                    {tabData[activeTab].title}
                </h2>
                <div className="max-w-4xl mx-auto space-y-4">
                    {tabData[activeTab].content.map((faq, index) => (
                        <Accordion
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;

