import ArticlesSection from "./components/ArticlesSection";
import CalltoActionSection from "./components/CalltoActionSection";
import Footer from "./components/Footer";
import GoogleMap from "./components/GoogleMap";
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
    {/* <GoogleMap/> */}
    <Footer/>
   </>
  );
}

export default App;
