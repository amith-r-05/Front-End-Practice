import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Links */}
          <div className="flex items-center space-x-8">
            <div className="font-[Pacifico] text-2xl text-primary">
              Raaga Maala
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#top"
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#live"
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                Live Classes
              </a>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block px-4 py-2 text-primary border border-primary rounded-button hover:bg-primary hover:text-white transition-all duration-200 whitespace-nowrap">
              Sign In
            </button>
            <button className="hidden md:block px-4 py-2 text-primary border border-primary rounded-button hover:bg-primary hover:text-white transition-all duration-200 whitespace-nowrap">
              Teach Music
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-button hover:bg-primary/90 transition-all duration-200 whitespace-nowrap">
              Get Started
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <RiMenuLine className="text-xl" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-2">
            <a
              href="#top"
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#live"
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Live Classes
            </a>
            <button className="px-4 py-2 text-primary border border-primary rounded-button hover:bg-primary hover:text-white transition-all duration-200 whitespace-nowrap">
              Sign In
            </button>
            <button className="px-4 py-2 text-primary border border-primary rounded-button hover:bg-primary hover:text-white transition-all duration-200 whitespace-nowrap">
              Teach Music
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
