import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/slices/theme";
import { Heart, ShoppingCart, UserRound } from "lucide-react"; // Search hta diya
import logo from "../assets/main.svg";

export default function Navbar() {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

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
              <button onClick={() => dispatch(toggleTheme())} className="p-2 transition-transform active:scale-90">
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
              </button>
            </li>
            <li><Link to="/profile"><UserRound className="hover:text-gray-400 transition-colors" /></Link></li>
            <li><Link to="/favourite"><Heart className="hover:text-gray-400 transition-colors" /></Link></li>
            <li><Link to="/cart"><ShoppingCart className="hover:text-gray-400 transition-colors" /></Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
