import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, Shield } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import EbookPreview from "@/components/EbookPreview";
import LeadForm from "@/components/LeadForm";
const Hero = () => {
  const isMobile = useIsMobile();
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-950 via-brand-blue-900 to-brand-blue-800 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTI2MjciIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgzLjhjLjUgMCAuOS40LjkuOSAwIC41LS40LjktLjkuOUgyMHYtMmgtMi4yYy0uNSAwLS45LjQtLjkuOSAwIC41LjQuOS45LjlIMzZWMzR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-orange/10 rounded-full blur-xl animate-bounce-soft"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-blue-400/10 rounded-full blur-xl animate-bounce-soft" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="container max-w-6xl mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 animate-fade-in">
            <span className="inline-block bg-gradient-to-r from-brand-orange to-red-500 text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg animate-pulse-glow">
              🔥 GUIA PRÁTICO + BÔNUS
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-brand-blue-100 to-white bg-clip-text text-transparent">
                Evite Perder o Nome da Sua Empresa!
              </span>
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-brand-blue-200">
              Aprenda como registrar sua marca de forma rápida, prática e legal com este guia definitivo.
            </h2>
            <p className="text-sm md:text-base text-brand-blue-100">
              Um passo a passo direto ao ponto, sem juridiquês, ideal para empreendedores, profissionais liberais e donos de pequenas empresas.
            </p>
            
            {/* Social proof badges */}
            <div className="flex flex-wrap gap-4 text-xs md:text-sm">
              <div className="flex items-center bg-white/10 rounded-full px-3 py-2">
                <Users className="h-4 w-4 mr-2 text-green-400" />
                <span>+500 marcas registradas</span>
              </div>
              <div className="flex items-center bg-white/10 rounded-full px-3 py-2">
                <Clock className="h-4 w-4 mr-2 text-blue-400" />
                <span>Método em 7 dias</span>
              </div>
              
            </div>
            
            <div className="space-y-4">
              <EbookPreview />
              <LeadForm />
            </div>
            
            <div className="pt-2 md:pt-4">
              <Button onClick={scrollToCheckout} className="bg-gradient-to-r from-brand-orange to-red-500 hover:from-red-500 hover:to-brand-orange text-white font-bold text-base md:text-lg px-6 md:px-10 py-4 md:py-6 rounded-xl transition-all transform hover:scale-105 w-full md:w-auto shadow-2xl pulse-glow">
                {isMobile ? "🚀 Quero proteger minha marca" : "🚀 Quero proteger minha marca agora!"} <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-0">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue-400 to-brand-orange rounded-lg blur opacity-30"></div>
              <div className="relative transform hover:scale-105 transition-all duration-500 w-full">
                <div className="ipad-mockup bg-black rounded-[36px] p-2 md:p-3 rotate-3 shadow-2xl">
                  {/* iPad Frame */}
                  <div className="relative bg-black rounded-[28px] pt-[25px] md:pt-[35px] pb-[35px] md:pb-[45px] px-[8px] md:px-[10px] border-[8px] md:border-[10px] border-gray-800 shadow-inner">
                    {/* iPad Screen */}
                    <div className="relative bg-gradient-to-br from-brand-blue-900 to-brand-blue-950 overflow-hidden rounded-lg aspect-[3/4] flex items-center justify-center">
                      {/* Ebook Cover */}
                      <div className="w-full h-full">
                        <img 
                          src="/lovable-uploads/a35e7b1b-9593-4f3e-972d-6de3849e5e51.png"
                          alt="Guia Completo: Registro de Marca no Brasil"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    {/* iPad Home Button */}
                    <div className="absolute bottom-[8px] md:bottom-[10px] left-1/2 transform -translate-x-1/2 w-[10px] h-[10px] md:w-[14px] md:h-[14px] rounded-full border-2 border-gray-600"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;