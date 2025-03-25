import styles from "./page.module.css";
import Header from "./components/header";
import Banner from "./components/banner";
import Card from "./components/cards";
import Footer from "./components/footer";
import Categories from "./components/category";
import Novos from "./components/lancamenetos";
import NewLetter from "./components/newLetter";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Card />
      <Categories />
      <Novos />
      <NewLetter />
      <Footer />
    </div>
  );
}
