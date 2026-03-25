import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/slices/theme";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import logo from "../assets/main.svg";
import { useRef, useState, useEffect } from "react"; // 1. useEffect add kiya

export default function Navbar() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const searchRef = useRef(null);
  const [input, setInput] = useState('')

const handleChange = (e) => {
 setInput(e.target.value);
 console.log(input);
}

  // 2. Correct Way: useEffect ke andar listener lagana
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShow(false);
      }
      console.log();
    };

    if (show) { // Performance ke liye: sirf tabhi listen karo jab search dikh raha ho
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]); // Jab bhi 'show' change ho, ye effect reset hoga

  return (
    <>
      <nav className={`navbar font-poppins flex justify-between items-center min-h-20 px-16 sticky top-0 z-20 shadow-sm transition-colors duration-300
                       ${theme === 'light' ? 'bg-white text-black' : "bg-black text-white"}`}>

        <div className="navbar-start font-bold text-[34px] tracking-wide flex gap-2">
          <img src={logo} alt="logo" />
          <span>Furniro</span>
        </div>

        <div className="navbar-center">
          <ul className="flex justify-center gap-12 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="navbar-end">
          <ul className="flex items-center justify-center gap-8 text-sm">
            <li>
              <button onClick={() => dispatch(toggleTheme())} className="p-2">
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
              </button>
            </li>
            <li><Link to="/profile"><UserRound className="hover:text-gray-400" /></Link></li>
            
            {/* Search Button */}
            <li>
              <button onClick={() => setShow(!show)}>
                <Search className="hover:text-gray-400" />
              </button>
            </li>

            {/* Search Input with REF */}
            {show && (
              <input
               onChange={handleChange} 
                ref={searchRef} // 3. Ref yahan attach kiya
                name="input"
                value={input}
                type="text"
                placeholder="Search..."
                className="absolute left-1/2 -translate-x-1/2 top-20 w-64 p-2 border rounded-md shadow-lg z-50 focus:outline-none text-black"
                autoFocus
              />
            )}

            <li><Link to="/favourite"><Heart className="hover:text-gray-400" /></Link></li>
            <li><Link to="/cart"><ShoppingCart className="hover:text-gray-400" /></Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
