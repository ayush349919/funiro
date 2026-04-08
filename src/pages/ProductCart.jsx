import Footer from "../components/Footer";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar"
import Paynow from "../buttons/Paynow";

export default function ProductCart() {
  return (
    <>
      <Navbar />
      <Cart />
      <Paynow />
      <Footer />
    </>
  );
}