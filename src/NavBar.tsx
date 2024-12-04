import React from "react";
import { NavLink as Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? "text-white font-bold no-underline"
      : "text-gray-300 hover:text-white underline";
  };
  return (
    <nav className="bg-gray-800 h-screen w-100 fixed">
      <ul className="flex flex-col space-y-4 p-4">
        <li>
          <Link to="/" className={navLinkStyles}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/accordion" className={navLinkStyles}>
            Accordion
          </Link>
        </li>
        <li>
          <Link to="/searchautocomplete" className={navLinkStyles}>
            Search Auto Complete
          </Link>
        </li>
        <li>
          <Link to="/randomcolorgenerator" className={navLinkStyles}>
            Random Color Generator
          </Link>
        </li>
        <li>
          <Link to="/monthanddatecalculator" className={navLinkStyles}>
            Month and Date Calculator
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
