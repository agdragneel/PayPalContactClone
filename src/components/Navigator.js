import React from "react";
import NavItem from "./NavItem";

export default function Navigator() {
  return (
    <nav className="flex">
      <div className="mx-4">
        <NavItem>Personal</NavItem>
      </div>
      <div className="mx-4">
        <NavItem>Business</NavItem>
      </div>
      <div className="mx-4">
        <NavItem>Developer</NavItem>
      </div>
      <div className="mx-4">
        <NavItem>Help</NavItem>
      </div>
    </nav>
  );
}