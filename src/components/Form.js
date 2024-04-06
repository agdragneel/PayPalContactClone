import React from 'react';

export default function Form() {
  return (
    <div className="transform -translate-x-1/3 absolute top-1/4 right-0 bg-white shadow-lg p-8 rounded-lg max-w-lg w-full" style={{top: '25%'}}>
      <h2 className="text-left text-2xl font-semibold mb-4">Get Started</h2>
      <p className="text-left mb-4">Tell us a little about your business so we can connect you with the right people.</p>
      <form>
        <div className="mb-4 font-semibold">
          <input type="text" id="firstname" name="firstname" placeholder="First Name*" className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4 font-semibold">
          <input type="text" id="lastname" name="lastname" placeholder="Last Name*" className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4 font-semibold">
          <input type="email" id="email" name="email" placeholder="Work Email*" className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4 font-semibold">
          <input type="tel" id="phone" name="phone" placeholder="Phone Number*" className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4 font-semibold">
          <input type="text" id="company" name="company" placeholder="Company Name*" className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4 font-semibold">
          <input type="url" id="website" name="website" placeholder="Company Website*" className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4 font-semibold">
          <select id="country" name="country" className="mt-1 p-2 border rounded-md w-full">
            <option value="" disabled defaultValue hidden>Country*</option>
            <option value="India">India</option>
            <option value="United States of America">United States of America</option>
            <option value="England">England</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4 font-semibold">
          <input type="text" id="salary" name="salary" placeholder="Estimated Annual Sales*" className="mt-1 p-2 border rounded-md w-full" />
        </div>
        <div className="mb-4 font-semibold">
          <select id="paypal" name="paypal" className="mt-1 p-2 border rounded-md w-full font-semibold">
            <option value="">Do you already have a PayPal Business account?*</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="privacy-policy" name="privacy-policy" className="mr-2" />
          <label htmlFor="privacy-policy" className="text-left text-sm text-gray-700">I have read and accepted the PayPal Privacy Policy</label>
        </div>
        <div className="text-left text-xs mb-4">
          <p>I consent to PayPal contacting me by phone or by email, and to sending me product or industry information relevant to my query. I know I can unsubscribe at any time.</p>
        </div>
        <div className="mt-4">
          <button
            type="button"
            className="border border-blue-900 text-white bg-blue-900 hover:bg-white hover:text-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-green-800 w-full"
          >
            Submit
          </button>
          <p className="text-xs">*Required Fields</p>
        </div>
      </form>
    </div>
  );
}
