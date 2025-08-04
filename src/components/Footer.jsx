import React from 'react';

const Footer = () => {
  const quickLinks = ['Terms Of Use', 'Contact Us'];

  return (
    <footer className="w-full py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              About This Initiative
            </h2>
            <p className="text-blue-900 text-sm leading-relaxed text-justify mb-8">
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
              <h3 className="font-bold text-gray-800 mb-3">Follow Us On</h3>
              <div className="flex items-center gap-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
                src="https://images.pexels.com/photos/3184485/pexels-photo-3184485.jpeg?auto=compress&cs=tinysrgb&w=132&h=58&fit=crop"
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