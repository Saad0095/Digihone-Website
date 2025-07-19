import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ScrollingText from "./components/ScrollingText";

function App() {
  return (
    <div className="bg-background text-white overflow-y-hidden md:px-10">
      <Navbar />
      <Hero />
      {/* <About/> */}
      <Services />
      <Testimonials/>
      <ScrollingText/>
      {/* <Pricing/> */}
      {/* <Contact/> */}
      <Footer />
    </div>
  );
}

export default App;
