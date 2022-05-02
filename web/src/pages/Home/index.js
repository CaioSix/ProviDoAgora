import "./styles.css";
import Header from "../../components/Header"
import Conteudo from "../../components/Main";
import Footer from "../../components/Footer";
import SectionSearch from "../../components/SectionSearch"


export function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Conteudo />
        <SectionSearch />
        <Footer />
      </main>
    </>
  );
}
