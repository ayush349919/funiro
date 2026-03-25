import { Route, Routes } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./Redux/Store";

import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Favourite from "./pages/Favourite";
import Cart from "./pages/Cart";


function ThemeWrapper({ children }) {

  const theme = useSelector((state) => state.theme.value);

  return (

    <div data-theme={theme} className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/favourite" element={<Favourite/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </ThemeWrapper>
    </Provider>
  );
}
