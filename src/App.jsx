import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-background text-white overflow-y-hidden">
      <Navbar />
      <Hero />
      {/* <About/> */}
      <Services />
      <Testimonials/>
      {/* <Pricing/> */}
      {/* <Contact/> */}
      <Footer />
    </div>
  );
}

export default App;
