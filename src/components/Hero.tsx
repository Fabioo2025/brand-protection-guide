
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
              ✅ Evite Perder o Nome da Sua Empresa!
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
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/600x800?text=Ebook+Registro+de+Marca" 
                  alt="Guia Prático: Registro de Marca no Brasil" 
                  className="rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
