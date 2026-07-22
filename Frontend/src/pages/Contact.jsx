import Navbar from "../components/Navbar"
import Navigations from "../components/Navigations"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"


function Contact() {
  return (
    <>
      <Navbar />
      <Navigations pageTitle={"Contact"} />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact