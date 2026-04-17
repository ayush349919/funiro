import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ProductCart from "./pages/ProductCart";
import ProfilePage from "./pages/ProfilePage";
import ProceedToPay from "./pages/ProceedToPay"
import SingleProductPage from "./pages/SingleProductPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";


export default function App() {
  const theme = useSelector((state) => state.theme.value)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/cart" element={<ProductCart />} />
      <Route path="/checkout" element={<ProceedToPay />}></Route>
      <Route path="/details/:id" element={<SingleProductPage />} ></Route>
    </Routes>
  );
}
