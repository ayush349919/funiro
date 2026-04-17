import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/slices/themeSlice";
import { ShoppingCart, UserRound, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/main.svg";

export default function Navbar() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const handleClick = () => {
    dispatch(toggleTheme())
  }

  return (
    <nav className="font-poppins sticky top-0 z-50 shadow-sm transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white">

      {/* Desktop & Mobile Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex justify-between items-center min-h-20">

        {/* Logo */}
        <div className="font-bold text-[24px] md:text-[34px] tracking-wide flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 md:w-auto" />
          <span>Furniro</span>
        </div>

        {/* Center Links (Desktop only) */}
        <div className="hidden md:block">
          <ul className="flex gap-8 lg:gap-12 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-gray-400 transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Icons & Toggle */}
        <div className="flex items-center gap-3 md:gap-6 lg:gap-8">
          <button onClick={handleClick} className="p-2 transition-transform active:scale-90 text-sm">
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <Link to="/profile" className="hidden sm:block"><UserRound className="w-5 h-5 hover:text-gray-400" /></Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 hover:text-gray-400" />
            {/* Optional: Add badge here if you have totalQuantity */}
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-64 border-t" : "max-h-0"}`}>
        <ul className="flex flex-col p-4 gap-4 text-center font-medium">
          {navLinks.map((link) => (
            <li key={link.name} onClick={() => setIsOpen(false)}>
              <Link to={link.path} className="block py-2">{link.name}</Link>
            </li>
          ))}
          <div className="flex justify-center gap-8 py-2 border-t pt-4 sm:hidden">
            <Link to="/profile" onClick={() => setIsOpen(false)}><UserRound /></Link>

          </div>
        </ul>
      </div>
    </nav>
  );
}
