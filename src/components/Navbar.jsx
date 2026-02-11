import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const navLinkClass = ({ isActive }) =>
  `hover:text-accent transition-colors ${isActive ? 'text-accent font-semibold' : ''}`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <nav className="bg-primary text-white sticky top-0 z-40 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl" onClick={closeMobile}>
            <span className="text-accent">MEGA GLORY</span>
            <span className="hidden sm:inline">GLOBAL RESOURCES</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navLinkClass} end>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `flex items-center gap-1 hover:text-accent transition-colors ${isActive ? 'text-accent font-semibold' : ''}`
                }
              >
                Products <FaChevronDown className="text-xs" />
              </NavLink>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-0 bg-white text-gray-800 rounded-lg shadow-xl py-2 w-48">
                  <Link
                    to="/products/medicine"
                    className="block px-4 py-2 hover:bg-light hover:text-primary transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Medicine
                  </Link>
                  <Link
                    to="/products/baby-diapers"
                    className="block px-4 py-2 hover:bg-light hover:text-primary transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Baby Diapers
                  </Link>
                  <Link
                    to="/products/baby-foods"
                    className="block px-4 py-2 hover:bg-light hover:text-primary transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Baby Foods
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-primary-light">
            <NavLink to="/" className="block py-3 hover:text-accent" onClick={closeMobile} end>
              Home
            </NavLink>
            <NavLink to="/about" className="block py-3 hover:text-accent" onClick={closeMobile}>
              About Us
            </NavLink>

            {/* Mobile Products Dropdown */}
            <div>
              <button
                className="flex items-center justify-between w-full py-3 hover:text-accent"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Products <FaChevronDown className={`text-xs transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileDropdownOpen && (
                <div className="pl-4 border-l-2 border-accent ml-2">
                  <Link to="/products" className="block py-2 hover:text-accent" onClick={closeMobile}>
                    All Products
                  </Link>
                  <Link to="/products/medicine" className="block py-2 hover:text-accent" onClick={closeMobile}>
                    Medicine
                  </Link>
                  <Link to="/products/baby-diapers" className="block py-2 hover:text-accent" onClick={closeMobile}>
                    Baby Diapers
                  </Link>
                  <Link to="/products/baby-foods" className="block py-2 hover:text-accent" onClick={closeMobile}>
                    Baby Foods
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/contact" className="block py-3 hover:text-accent" onClick={closeMobile}>
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
