import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navigations from "../components/Navigations";
import OurProducts from "../components/OurProducts";


export default function Shop() {

    return (
        <>
            <Navbar />
            <Navigations pageTitle={"Shop"} />
            <OurProducts heading={false} button={false} />
            <Footer />
        </>
    )   
}