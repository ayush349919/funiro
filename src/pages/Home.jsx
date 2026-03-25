import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import BrowseRange from "../components/BrowseRange"
import OurProducts from "../components/OurProducts";
import Inspiration from "../components/Inspirastion";
import Footer from "../components/Footer";

export default function Home() {

    return (
        <>
            <Navbar />
            <Hero />
            <BrowseRange/>
            <OurProducts limit={8} />
            <Inspiration />
            <Footer />
        </>
    )
}