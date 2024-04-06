import React from 'react';


const MobileNavLinks = () => {
  return (
    <div className="lg:hidden">
      <nav className="flex flex-col bg-white">
        <a href="/" className="px-2 text-blue-900 font-bold hover:font-bold my-2">Personal</a>
        <a href="/" className="px-2 text-blue-900 font-bold hover:font-bold my-2">Business</a>
        <a href="/" className="px-2 text-blue-900 font-bold hover:font-bold my-2">Developer</a>
        <a href="/" className="px-2 text-blue-900 font-bold hover:font-bold my-2">Help</a>
      </nav>
    </div>
  );
};

export default MobileNavLinks;
