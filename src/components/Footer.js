import React from 'react';

export default function Footer() {
  return (
    <div className="bg-white">
      {/* First part: Logo */}
      <div className="bg-white px-8 py-4 flex items-center justify-between">
        <img src="https://1000logos.net/wp-content/uploads/2017/05/PayPal-Logo-768x483.jpg" alt="PayPal Logo" className="h-24" />
      </div>

      {/* Second part: First column of options */}
      <div className="bg-white px-4 py-2">
        <ul className="text-blue-900 text-lg flex flex-wrap gap-4 font-bold">
          <li><a href="/">Help</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Fees</a></li>
          <li><a href="/">Security</a></li>
          <li><a href="/">Apps</a></li>
          <li><a href="/">Shop</a></li>
          <li><a href="/">Enterprise</a></li>
          <li><a href="/">Partners</a></li>
          <li><a href="/">Feedback</a></li>
          <li className="ml-auto"><img src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png" alt="US Flag" className="h-6" /></li>
        </ul>
      </div>

      {/* Thin gray line separator */}
      <hr className="border-gray-300 my-2" />

      {/* Third part: More options */}
      <div className="bg-white px-4 py-2 flex items-center justify-between">
        <ul className="text-blue-900 text-lg flex flex-wrap gap-4 font-bold">
          <li><a href="/">About</a></li>
          <li><a href="/">Newsroom</a></li>
          <li><a href="/">Jobs</a></li>
          <li><a href="/">Investor Relations</a></li>
          <li><a href="/">Values in Action</a></li>
          <li><a href="/">Public Policy</a></li>
          <li><a href="/">Sitemap</a></li>
        </ul>
        <div className="flex items-center space-x-4">
          {/* Copyright information, accessibility, private, legal */}
          <p className="text-gray-700 text-lg ">&copy; 1999-2022</p>
          <span className="text-blue-900 text-lg font-bold">Accessibility</span>
          <span className="text-blue-900 text-lg font-bold">Privacy</span>
          <span className="text-blue-900 text-lg font-bold">Cookies</span>
          <span className="text-blue-900 text-lg font-bold">Legal</span>
        </div>
      </div>
    </div>
  );
}

export function MobileFooter() {
  return (
    <div className="bg-white">
      {/* First part: Logo */}
      <div className="bg-white px-4 py-2 flex items-center justify-center">
        <img src="https://1000logos.net/wp-content/uploads/2017/05/PayPal-Logo-768x483.jpg" alt="PayPal Logo" className="h-16" />
      </div>

      {/* Second part: First column of options */}
      <div className="bg-white px-4 py-2">
        <ul className="text-blue-900 text-lg flex flex-wrap gap-4 font-bold justify-center">
          <li><a href="/">Help</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">Security</a></li>
          <li><a href="/">Shop</a></li>
          <li><a href="/">Partners</a></li>
          <li className="ml-auto"><img src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/united-states-flag-icon.png" alt="US Flag" className="h-6" /></li>
        </ul>
      </div>

      {/* Thin gray line separator */}
      <hr className="border-gray-300 my-2" />

      {/* Third part: More options */}
      <div className="bg-white px-4 py-2">
        <ul className="text-blue-900 text-base flex flex-col gap-1 font-bold">
          <li><a href="/">About</a></li>
          <li><a href="/">Jobs</a></li>
          <li><a href="/">Investor Relations</a></li>
          <li><a href="/">Sitemap</a></li>
          <li><a href="/">Feedback</a></li>
        </ul>
        <div className="flex flex-col items-center space-y-2 mt-4">
          <p className="text-gray-700 text-lg">&copy; 1999-2022</p>
          <span className="text-blue-900 text-base font-bold">Accessibility</span>
          <span className="text-blue-900 text-base font-bold">Privacy</span>
          <span className="text-blue-900 text-base font-bold">Legal</span>
        </div>
      </div>
    </div>
  );
}