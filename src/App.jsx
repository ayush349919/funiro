import { Route, Routes } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./Redux/Store";

import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Favourite from "./pages/Favourite";
import ProductCart from "./pages/ProductCart";
import ProfilePage from "./pages/ProfilePage";
import ProceedToPay from "./pages/ProceedToPay"
import SingleProductPage from "./pages/SingleProductPage";


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
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/cart" element={<ProductCart />} />
          <Route path="/checkout" element={<ProceedToPay/>}></Route>
          <Route path="/details/:id" element={<SingleProductPage/>} ></Route>
        </Routes>
      </ThemeWrapper>
    </Provider>
  );
}
