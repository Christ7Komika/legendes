import Navbar from "../components/Navbar";
import Init from "../components/Init";
import Footer from "../components/Footer";
import Hero from "../components/contact/Hero";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <>
      <title>LEGENDES | Contact</title>
      <Init />
      <Navbar />
      <Hero />
      <ContactForm />
      <Footer />
    </>
  );
}
