import ArticlesSection from "./components/ArticlesSection";
import CalltoActionSection from "./components/CalltoActionSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import QuickAccessSection from "./components/QuickAccessSection";


function App() {
  return (
   <>
    <Navbar/>
    <HeroSection/>
    <QuickAccessSection />
    <ArticlesSection />
    <IntroSection />
    <CalltoActionSection />
    <Footer/>
   </>
  );
}

export default App;
