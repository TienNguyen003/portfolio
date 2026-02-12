import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LenisScroll from "./components/LenisScroll";
import Experience from "./components/Experience";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <>
        <LenisScroll />
        <Navbar />
        <Header />
        <Stats />
        <About />
        <Skills />
        <Services />
        <Work />
        <Experience />
        <Contact />
        <Footer />
      </>
    </LanguageProvider>
  );
}
