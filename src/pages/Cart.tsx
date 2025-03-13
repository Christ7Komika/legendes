import CartList from "../components/cart/CartList";
import Hero from "../components/cart/Hero";
import Footer from "../components/Footer";
import Init from "../components/Init";
import Navbar from "../components/Navbar";

export default function Cart() {
  return (
    <>
      <title>LEGENDES | Panier</title>
      <Init />
      <Navbar />
      <Hero />
      <CartList />
      <Footer />
    </>
  );
}
