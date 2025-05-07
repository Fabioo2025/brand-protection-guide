
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Solution = () => {
  const isMobile = useIsMobile();
  
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-950 mb-6">
              📘 A Solução Está Aqui
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Este ebook foi criado para te ensinar, de forma simples e acessível, como registrar sua marca no INPI — mesmo sem experiência com processos legais.
            </p>
            
            <h3 className="text-2xl font-semibold text-brand-blue-800 mb-4">
              ✅ O que você vai aprender:
            </h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-blue-100 text-brand-blue-700 flex items-center justify-center mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-gray-700">O que é uma marca e por que ela vale mais que o produto</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-blue-100 text-brand-blue-700 flex items-center justify-center mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-gray-700">Como evitar que sua marca seja copiada por concorrentes</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-blue-100 text-brand-blue-700 flex items-center justify-center mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-gray-700">O passo a passo exato para registrar sua marca no INPI</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-blue-100 text-brand-blue-700 flex items-center justify-center mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-gray-700">Dicas práticas para economizar tempo e não errar</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-blue-100 text-brand-blue-700 flex items-center justify-center mr-3 mt-0.5">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-gray-700">Os maiores erros que fazem marcas serem recusadas</span>
              </li>
            </ul>
            
            <div className="pt-2 flex justify-center">
              <Button 
                onClick={scrollToCheckout}
                className="bg-brand-orange hover:bg-opacity-90 text-white font-medium px-6 py-3 rounded-lg transition-all transform hover:scale-105"
              >
                Garantir meu guia agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
