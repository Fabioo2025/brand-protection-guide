
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-950 to-brand-blue-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTI2MjciIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgzLjhjLjUgMCAuOS40LjkuOSAwIC41LS40LjktLjkuOUgyMHYtMmgtMi4yYy0uNSAwLS45LjQtLjkuOSAwIC41LjQuOS45LjlIMzZWMzR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      <div className="container max-w-6xl mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <span className="inline-block bg-brand-blue-700 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">GUIA PRÁTICO</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Evite Perder o Nome da Sua Empresa!
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-brand-blue-200">
              Aprenda como registrar sua marca de forma rápida, prática e legal com este guia definitivo.
            </h2>
            <p className="text-sm md:text-base text-brand-blue-100">
              Um passo a passo direto ao ponto, sem juridiquês, ideal para empreendedores, profissionais liberais e donos de pequenas empresas.
            </p>
            <div className="pt-2 md:pt-4">
              <Button 
                onClick={scrollToCheckout}
                className="bg-brand-orange hover:bg-opacity-90 text-white font-medium text-base md:text-lg px-4 md:px-8 py-4 md:py-6 rounded-lg transition-all transform hover:scale-105 w-full md:w-auto"
              >
                {isMobile ? "Quero registrar minha marca" : "Quero registrar minha marca agora!"} <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
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
                      <div className="p-3 md:p-4 text-center w-full h-full flex flex-col items-center justify-between bg-gradient-to-br from-brand-blue-900 via-brand-blue-900 to-brand-blue-700">
                        <div className="bg-brand-orange px-3 py-1 rounded-full text-white text-xs font-bold mb-2 md:mb-4 mt-6 md:mt-8">
                          EBOOK COMPLETO
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <h3 className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-white text-center mb-2">
                            Guia Prático:<br />
                            <span className="text-brand-orange">Registro de Marca</span><br />
                            no Brasil
                          </h3>
                        </div>
                        <div className="mb-6 md:mb-8 border-t border-white/20 w-2/3 pt-3 md:pt-4">
                          <p className="text-xs md:text-sm text-white/80">O caminho seguro para proteger sua identidade</p>
                        </div>
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
    </section>
  );
};

export default Hero;
