import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import './Navbar.css';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/20 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
    >
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 mr-2" src={logo} alt="Logo" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-base">
                  {item.label}
                </a>
              </li>
            ))}
            {/* Dropdown menu */}
            <li className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="hover:text-blue-800 text-base">
                More
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-2 w-64 bg-white border border-gray-200 shadow-lg">
                  <div className="p-4">
                    <h3 className="font-bold mb-2">For Partners</h3>
                    <ul className="mb-4">
                      <li><a href="#" className="block py-1">Partners Home</a></li>
                      <li><a href="#" className="block py-1">Partner Program</a></li>
                      <li><a href="#" className="block py-1">Support</a></li>
                      <li><a href="#" className="block py-1">Tools</a></li>
                    </ul>
                    <h3 className="font-bold mb-2">Already a Partner?</h3>
                    <a
                      href="#"
                      className="block py-2 px-4 bg-blue-500 text-white text-center rounded-md mb-2 hover:bg-blue-600 hover:text-white"
                    >
                      Log in
                    </a>
                    <ul>
                      <li><a href="#" className="block py-1">Find a Cisco Partner</a></li>
                      <li><a href="#" className="block py-1">Meet our Partners</a></li>
                      <li><a href="#" className="block py-1">Become a Cisco Partner</a></li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
          </ul>
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a href="#" className="py-2 px-3 rounded-2xl text-blue-800 border border-blue-800">
              Trials and demos
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white w-full p-12 flex flex-col justify-center items-center lg:hidden border-b border-neutral-700/20">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Login
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md text-white"
              >
                Trials and demos
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
