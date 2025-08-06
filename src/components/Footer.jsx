import React from 'react';
import { imageUrl } from '../imageUrl';

const Footer = () => {
  const quickLinks = ['Terms Of Use', 'Contact Us'];

  return (
    <footer className="w-full py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold font-sans text-gray-800 mb-4">
              About This Initiative
            </h2>
            <p className="text-blue-900 text-sm leading-relaxed text-justify font-sans mb-8">
              "The Institute of Chartered Accountants of India (ICAI) keenly
              desires that all Indians should be financially literate. In line
              with the Government of India's national mission{' '}
              <span className="font-bold">Vittiya Saksharta Abhiyaan</span>
              ", this website, under the financial and tax literacy drive of
              ICAI, is a step towards making Indians financially informed. Through
              the dedicated Financial and Tax Literacy Directorate, the ICAI is
              developing a financially empowered nation by conducting FTL
              programs, sessions, webinars, pad yatras, nukkad nataks, radio
              campaigns, developing e-learning course modules, etc."
            </p>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 font-sans">Follow Us On</h3>
              <div className="flex items-center gap-4">
                <a href="https://x.com/icaivittiyagyan" target="_blank" rel="noopener noreferrer">
                  <img src={imageUrl.twitter} alt="Twitter" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-2xl font-bold font-sans text-gray-800 mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 mb-8">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-900 font-semibold hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="bg-gray-100 rounded-lg p-2 w-fit">
              <img 
                src={imageUrl.logo}
                alt="Vitiyagyan Logo"
                className="w-32 h-14 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;