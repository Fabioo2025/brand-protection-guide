
import Hero from "@/components/Hero";
import WhyRegister from "@/components/WhyRegister";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Ensure smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";
    
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <WhyRegister />
      <Solution />
      <Testimonials />
      <div id="checkout">
        <Pricing />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
