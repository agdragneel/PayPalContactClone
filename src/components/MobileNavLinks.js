import React from 'react';


const MobileNavLinks = () => {
  return (
    <div className="lg:hidden">
      <nav className="flex flex-col bg-blue-900">
        <a href="/" className="px-2 text-white font-semibold hover:font-bold my-2">Personal</a>
        <a href="/" className="px-2 text-white font-semibold hover:font-bold my-2">Business</a>
        <a href="/" className="px-2 text-white font-semibold hover:font-bold my-2">Developer</a>
        <a href="/" className="px-2 text-white font-semibold hover:font-bold my-2">Help</a>
      </nav>
    </div>
  );
};

export default MobileNavLinks;
