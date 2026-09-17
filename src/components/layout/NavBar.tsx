import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

interface NavBarProps {
  onMenuClick?: () => void;
}

const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
  `font-montserrat font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
    isActive
      ? "text-[#ffb4a8] border-b-2 border-primary-container pb-1"
      : "text-[#c7c6c6] hover:text-white"
  }`;

export const NavBar: React.FC<NavBarProps> = ({ onMenuClick }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300">
      <div className="flex justify-between items-center px-6 sm:px-12 md:px-20 py-6 max-w-360 mx-auto">
        <Link
          to="/"
          className="hover:scale-105 transition-transform duration-300"
        >
          <BrandLogo />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" end className={navLinkClassName}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClassName}>
            Services
          </NavLink>
          <NavLink to="/our-work" className={navLinkClassName}>
            Our Work
          </NavLink>
          <NavLink to="/why-us" className={navLinkClassName}>
            Why Us
          </NavLink>
          <NavLink to="/process" className={navLinkClassName}>
            Process
          </NavLink>
          <NavLink to="/reviews" className={navLinkClassName}>
            Reviews
          </NavLink>
          <NavLink to="/contact" className={navLinkClassName}>
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-block px-6 py-3 rounded bg-linear-to-br from-primary-container to-on-primary-fixed-variant font-montserrat font-bold text-xs text-white uppercase tracking-widest shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_16px_rgba(215,0,0,0.3)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            BOOK NOW
          </Link>
          <button
            type="button"
            onClick={onMenuClick}
            className="md:hidden text-white p-2 hover:text-primary-container transition-colors focus:outline-none"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
