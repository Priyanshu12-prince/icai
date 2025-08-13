import React from "react";
import { imageUrl } from "../imageUrl";

const Footer = () => {
  const quickLinks = ["Terms Of Use", "Contact Us"];

  return (
    <footer className="w-full py-12 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              About This Initiative
            </h2>
            <p className="text-blue-900 text-sm leading-relaxed text-justify mb-8">
              "The Institute of Chartered Accountants of India (ICAI) keenly
              desires that all Indians should be financially literate. In line
              with the Government of India's national mission{" "}
              <span className="font-bold">Vittiya Saksharta Abhiyaan</span>
              ", this website, under the financial and tax literacy drive of
              ICAI, is a step towards making Indians financially informed.
              Through the dedicated Financial and Tax Literacy Directorate, the
              ICAI is developing a financially empowered nation by conducting
              FTL programs, sessions, webinars, pad yatras, nukkad nataks, radio
              campaigns, developing e-learning course modules, etc."
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 mb-8">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-blue-900 font-semibold hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="bg-gray-100 rounded-lg p-2 w-fit">
              <img
                src={imageUrl.newLogo}
                alt="Vitiyagyan Logo"
                className="w-32 h-14 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Links Section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
          {/* Social */}
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-gray-800 mb-3">Follow Us On</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://x.com/icaivittiyagyan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={imageUrl.twitter}
                  alt="Twitter"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>

          {/* Branch Links */}
          {[
            {
              title: "WIRC of ICAI",
              link: "https://wirc-icai.org/wirc/branch"
            },
            {
              title: "SIRC of ICAI",
              link: "https://www.sirc-icai.org/statewise-branches-of-sirc-of-icai.phpirc/branch"
            },
            {
              title: "EIRC of ICAI",
              link: "https://eirc-icai.org/overview/branches-of-eirc"
            },
            {
              title: "CIRC of ICA",
              link: "https://circ.icai.org/branch-contact-details-2/"
            },
            {
              title: "NIRC of ICAI",
              link: "https://nirc.icai.org/branches-of-nirc/"
            }
          ].map((branch, index) => (
            <div
              key={index}
              className="flex flex-col items-center max-w-[140px] text-center"
            >
              <h3 className="font-bold text-gray-800 mb-2">{branch.title}</h3>
              <a
                href={branch.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-xs break-words hover:underline"
              >
                {branch.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
