import React from 'react';

export default function WhiteBackground() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="container mx-auto px-4 text-center lg:text-left">
        <h2 className="text-2xl lg:text-3xl mx-4 lg:mx-16 text-black-400 mb-8">Some other ways to <br/> connect with us</h2>
        <div className="mx-4 lg:mx-16">
          <p className="text-base font-semibold text-black-700 mb-1">Want to speak with Sales right away?</p>
          <p className="text-base mb-12 font-bold"><a href="tel:877-794-7639" className="text-sky-600">Call 877-794-7639</a></p>
          
          <p className="text-base font-semibold text-black-700 mb-1">Need Help with your existing account?</p>
          <p className="text-base mb-12 font-bold"><a href="/" className="text-sky-600">Visit Our Help Center→</a></p>

          <p className="text-base font-semibold text-black-700 mb-1">Want useful Business Insights?</p>
          <p className="text-base mb-12 font-bold"><a href="/" className="text-sky-600">Visit Our Business Resource Center→</a></p>
        </div>
      </div>
    </section>
  );
}
