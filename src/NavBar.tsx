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
        <li>
          <Link to="/starrating" className={navLinkStyles}>
            Star Rating
          </Link>
        </li>
        <li>
          <Link to="/showmodal" className={navLinkStyles}>
            Modal PopUp
          </Link>
        </li>
        <li>
          <Link to="/qrcode" className={navLinkStyles}>
            QR-Code Generator
          </Link>
        </li>
        <li>
          <Link to="/imageslider" className={navLinkStyles}>
            Image Slider
          </Link>
        </li>
        <li>
          <Link to="/lightdark" className={navLinkStyles}>
            Light and Dark
          </Link>
        </li>
        <li>
          <Link to="/customtab" className={navLinkStyles}>
            Custom Tab
          </Link>
        </li>
        <li>
          <Link to="/loadmorebutton" className={navLinkStyles}>
            Load More Button
          </Link>
        </li>
        <li>
          <Link to="/pagination" className={navLinkStyles}>
            Pagination
          </Link>
        </li>
        <li>
          <Link to="/digitalclock" className={navLinkStyles}>
            Digital Clock And Count Timer
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
