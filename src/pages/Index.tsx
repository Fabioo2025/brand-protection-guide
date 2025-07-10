
import { lazy, Suspense, useEffect } from "react";

// Lazy load components para reduzir bundle inicial
const Hero = lazy(() => import("@/components/Hero"));
const WhyRegister = lazy(() => import("@/components/WhyRegister"));
const Solution = lazy(() => import("@/components/Solution"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Footer = lazy(() => import("@/components/Footer"));
const FAQ = lazy(() => import("@/components/FAQ"));
const UrgencyBanner = lazy(() => import("@/components/UrgencyBanner"));

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
      <Suspense fallback={<div className="h-20 bg-brand-orange animate-pulse" />}>
        <UrgencyBanner />
      </Suspense>
      <Suspense fallback={<div className="h-screen bg-gradient-to-r from-brand-blue-50 to-brand-blue-100 animate-pulse" />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <WhyRegister />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <Solution />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-gray-50 animate-pulse" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="h-96 bg-white animate-pulse" />}>
        <FAQ />
      </Suspense>
      <div id="checkout">
        <Suspense fallback={<div className="h-96 bg-brand-blue-50 animate-pulse" />}>
          <Pricing />
        </Suspense>
      </div>
      <Suspense fallback={<div className="h-48 bg-brand-blue-950 animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
