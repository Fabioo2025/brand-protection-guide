
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-950 to-brand-blue-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTI2MjciIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgzLjhjLjUgMCAuOS40LjkuOSAwIC41LS40LjktLjkuOUgyMHYtMmgtMi4yYy0uNSAwLS45LjQtLjkuOSAwIC41LjQuOS45LjlIMzZWMzR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      <div className="container max-w-6xl mx-auto px-6 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-brand-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium">GUIA PRÁTICO</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Evite Perder o Nome da Sua Empresa!
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-brand-blue-200">
              Aprenda como registrar sua marca de forma rápida, prática e legal com este guia definitivo.
            </h2>
            <p className="text-brand-blue-100">
              Um passo a passo direto ao ponto, sem juridiquês, ideal para empreendedores, profissionais liberais e donos de pequenas empresas.
            </p>
            <div className="pt-4">
              <Button 
                onClick={scrollToCheckout}
                className="bg-brand-orange hover:bg-opacity-90 text-white font-medium text-lg px-8 py-6 rounded-lg transition-all transform hover:scale-105"
              >
                Quero registrar minha marca agora! <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue-400 to-brand-orange rounded-lg blur opacity-30"></div>
              <div className="relative transform hover:scale-105 transition-all duration-500">
                <div className="ipad-mockup bg-black rounded-[36px] p-3 rotate-3 shadow-2xl">
                  {/* iPad Frame */}
                  <div className="relative bg-black rounded-[28px] pt-[35px] pb-[45px] px-[10px] border-[10px] border-gray-800 shadow-inner">
                    {/* iPad Screen */}
                    <div className="relative bg-gradient-to-br from-brand-blue-900 to-brand-blue-950 overflow-hidden rounded-lg aspect-[3/4] flex items-center justify-center">
                      {/* Ebook Cover */}
                      <div className="p-4 text-center w-full h-full flex flex-col items-center justify-between bg-gradient-to-br from-brand-blue-900 via-brand-blue-900 to-brand-blue-700">
                        <div className="bg-brand-orange px-4 py-1 rounded-full text-white text-xs md:text-sm font-bold mb-4 mt-8">
                          EBOOK COMPLETO
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <h3 className="text-xl md:text-3xl font-bold text-white text-center mb-2">
                            Guia Prático:<br />
                            <span className="text-brand-orange">Registro de Marca</span><br />
                            no Brasil
                          </h3>
                        </div>
                        <div className="mb-8 border-t border-white/20 w-2/3 pt-4">
                          <p className="text-xs md:text-sm text-white/80">O caminho seguro para proteger sua identidade</p>
                        </div>
                      </div>
                    </div>
                    {/* iPad Home Button */}
                    <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 w-[14px] h-[14px] rounded-full border-2 border-gray-600"></div>
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
