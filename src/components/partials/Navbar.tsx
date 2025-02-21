import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
      <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="py-4 container mx-auto px-4  items-center drop-shadow-md ">
          <div className="flex justify-between items-center font-semibold">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-8 w-8"/>
              <h2 className="text-[#04345c] font-bold text-3xl ml-2">Book Hub</h2>
            </Link>

            {/* Mobile Menu Button */}
            <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link to="/" className="hover:text-[#04345c]">Home</Link>
              <Link to="/work" className="hover:text-[#04345c]">Work</Link>
              <Link to="/about" className="hover:text-[#04345c]">About</Link>
              <Link to="/services" className="hover:text-[#04345c]">Services</Link>
              <Link to="/testimonial" className="hover:text-[#04345c]">Testimonial</Link>
              <div className="flex items-center justify-end gap-2">
                <button
                    onClick={() => navigate('/signup')}
                    className="py-2 px-6 bg-white border border-[#04345c] text-[#04345c] text-center hover:text-white rounded-3xl font-semibold hover:bg-[#032a49] transition-colors duration-500">
                  Sign Up
                </button>
                <button
                    onClick={() => navigate('/login')}
                    className="py-2 px-6 bg-[#04345c] hover:bg-white border border-[#04345c] text-white hover:text-[#04345c] rounded-3xl font-semibold transition-colors duration-500">
                  Sign In
                </button>
              </div>

            </nav>

            {/* Mobile Navigation with Animation */}
            <nav
                className={`absolute top-full left-0 right-0 bg-white lg:hidden shadow-lg transform transition-all duration-700 ease-in-out ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                }`}>
              <div className="flex flex-col gap-4 p-4">
                <Link to="/" className="hover:text-[#04345c] transition-colors duration-300">Home</Link>
                <Link to="/work" className="hover:text-[#04345c] transition-colors duration-300">Work</Link>
                <Link to="/about" className="hover:text-[#04345c] transition-colors duration-300">About</Link>
                <Link to="/services" className="hover:text-[#04345c] transition-colors duration-300">Services</Link>
                <Link to="/testimonial" className="hover:text-[#04345c] transition-colors duration-300">Testimonial</Link>
                <button className="py-2 px-6 bg-[#04345c] text-white rounded-lg font-semibold hover:bg-[#032a49] transition-colors duration-300">
                  Sign In
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>
  );
}
