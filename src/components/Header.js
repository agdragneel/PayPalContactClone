import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import WhiteButton from "./WhiteButton";
import BlueButton from "./BlueButton";
import Navigator from "./Navigator";
import MobileNavLinks from "./MobileNavLinks";

export default function Header() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 768); // Define your mobile viewport width
    }

    handleResize(); // Call handleResize once to set the initial viewport
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on unmount
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-white-800 text-white w-full">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="mr-4">
            <Logo />
          </div>

          {/* Hamburger menu icon (for mobile viewport) */}
          {isMobileView && (
            <div className="mr-4">
              <button onClick={toggleMenu} className="text-black focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Login and Signup buttons (for mobile viewport) */}
          {isMobileView && (
            <div className="flex ">
            <WhiteButton buttonText="Login" />
            <div className="ml-2">
              <BlueButton buttonText="Signup" />
            </div>
          </div>
          )}

          {/* Navigator (for PC viewport) */}
          {!isMobileView && <Navigator />}
        </div>

        {/* Login and Signup buttons (for PC viewport) */}
        {!isMobileView && (
          <div className="flex ">
            <WhiteButton buttonText="Login" />
            <div className="ml-2">
              <BlueButton buttonText="Sign Up" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation Links */}
      {isMobileView && showMenu && <MobileNavLinks />}
    </header>
  );
}
