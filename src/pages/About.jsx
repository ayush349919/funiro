import Footer from '../components/Footer'
import Info from '../components/Info'
import Navbar from '../components/Navbar'
import Navigations from '../components/Navigations'

function About() {
    return (
        <>
            <Navbar />
            <Navigations pageTitle={"About"}/>
            <Info/>
            <Footer/>
        </>
    )
}

export default About