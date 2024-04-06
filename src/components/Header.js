import React from "react";
import Logo from "./Logo";
import Navigator from "./Navigator";
import WhiteButton from "./WhiteButton";
import BlueButton from "./BlueButton";

export default function Header() {
  return (
    <header className="bg-white-800 text-white w-full">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo with reduced margin */}
        <div className="flex items-center">
          <div className="mr-4">
            <Logo />
          </div>

          {/* Navigation items */}
          <div>
            <Navigator />
          </div>
        </div>

        {/* Login and Signup buttons right-aligned */}
        <div className="flex">
          <WhiteButton buttonText="Login"/>
          <BlueButton buttonText="Register"/>
        </div>
      </div>
    </header>
  );
}
