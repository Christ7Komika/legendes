import CartList from "../components/cart/CartList";
import Hero from "../components/cart/Hero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Cart() {
  return (
    <>
      <title>LEGENDES | Panier</title>
      <Navbar />
      <Hero />
      <CartList />
      <Footer />
    </>
  );
}
