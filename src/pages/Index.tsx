
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FleetTypes from "@/components/FleetTypes";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <FleetTypes />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
