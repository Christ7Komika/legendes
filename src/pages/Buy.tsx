import AlbumList from "../components/buy/AlbumList";
import Hero from "../components/buy/Hero";
import Footer from "../components/Footer";
import Init from "../components/Init";
import Navbar from "../components/Navbar";

export default function Buy() {
  return (
    <>
      <title>LEGENDES | Boutique</title>
      <Init />
      <Navbar />
      <Hero />
      <AlbumList />
      <Footer />
    </>
  );
}
