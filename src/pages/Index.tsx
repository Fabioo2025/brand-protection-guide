
import Hero from "@/components/Hero";
import WhyRegister from "@/components/WhyRegister";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
