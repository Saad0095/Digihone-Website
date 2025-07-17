import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#161F2C] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">Digihone Solutions</h2>
          <p className="text-sm text-gray-400">
            We help B2B companies grow faster with tailored strategies and
            qualified leads.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-primary transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-primary transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <p className="text-sm text-gray-400 mb-2">
            Email: info@yourcompany.com
          </p>
          <p className="text-sm text-gray-400 mb-4">Phone: +1 (123) 456-7890</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary transition">
              🌐
            </a>
            <a href="#" className="hover:text-primary transition">
              🔗
            </a>
            <a href="#" className="hover:text-primary transition">
              📘
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Digihone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
