import { useSelector } from "react-redux"; 
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar"
import Paynow from "../buttons/Paynow";

export default function ProductCart() {
  const products = useSelector((state) => state.cart.cartitems); 

  return (
    <>
      <Navbar />
      <Cart />
      {products.length > 0 && <Paynow />}
      <Footer />
    </>
  );
}
