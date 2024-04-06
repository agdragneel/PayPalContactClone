import React from 'react';

export default function WhiteBackground() {
  return (
    <div>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-left">
          <h2 className="text-3xl mx-16 text-black-400 mb-8">Some other ways to <br/> connect with us</h2>
          <p className="text-base mx-16 font-semibold text-black-700 mb-1">Want to speak with Sales right away?</p>
          <p className="text-base mx-16 mb-12 text-sky-600 font-bold">Call <a href="tel:877-794-7639" className="font-bold text-sky-600">877-794-7639</a></p>
          
          <p className="text-base mx-16 font-semibold text-black-700 mb-1">Need Help with your existing account?</p>
          <p className="text-base mx-16 mb-12 font-bold"><a href="/" className="text-sky-600">Visit Our Help Center→</a></p>

          <p className="text-base mx-16 font-semibold text-black-700 mb-1   ">Want useful Business Insights?</p>
          <p className="text-base mx-16 mb-12 font-bold"><a href="/" className="text-sky-600">Visit Our Business Resource Center→</a></p>

          {/* Add more headers and paragraphs as needed */}
        </div>
      </section>
    </div>
  );
}
