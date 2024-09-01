import ArticlesSection from "./components/ArticlesSection";
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
   </>
  );
}

export default App;
