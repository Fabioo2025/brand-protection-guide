
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Pricing = () => {
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePurchase = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Compra simulada com sucesso!",
        description: "Este é um exemplo de compra. Para implementar o Stripe, será necessário configurar uma conta.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section id="checkout" className="py-16 md:py-24 bg-brand-blue-950 text-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">💰 Oferta Especial</h2>
            <p className="text-lg text-brand-blue-100 mb-2">
              Este material é fruto de anos de experiência, pesquisa e prática direta no sistema do INPI.
            </p>
            <p className="text-lg text-brand-blue-100">
              Profissionais cobram até <span className="font-bold">R$ 800</span> por esse tipo de orientação.
            </p>
          </div>
          
          <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border-t-8 border-brand-orange">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-brand-blue-950 mb-2">Guia Prático</h3>
                  <h4 className="text-xl font-semibold text-brand-blue-800">Registro de Marca no Brasil</h4>
                </div>
                <div className="mt-4 md:mt-0 text-center">
                  <div className="flex items-center">
                    <span className="text-gray-400 line-through text-lg mr-2">R$ 149,90</span>
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-2 py-1 rounded">-67%</span>
                  </div>
                  <div className="text-3xl font-bold text-brand-blue-950">
                    R$ 49,90
                  </div>
                  <div className="text-sm text-gray-500">Pagamento único</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Acesso imediato ao e-book completo em formato PDF</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Modelos de documentos necessários para o processo</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Lista de verificação para evitar erros comuns</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>Atualizações gratuitas por 12 meses</span>
                </div>
              </div>
              
              <Button 
                onClick={handlePurchase}
                disabled={isProcessing}
                className="w-full bg-brand-orange hover:bg-opacity-90 text-white font-medium text-lg px-8 py-6 rounded-lg transition-all"
              >
                {isProcessing ? "Processando..." : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Quero registrar minha marca agora!
                  </>
                )}
              </Button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Pagamento 100% seguro via PIX, cartão de crédito ou boleto
              </p>
            </div>
            
            <div className="bg-gray-50 px-8 py-4 text-center">
              <p className="text-gray-600">
                <strong>Garantia de 7 dias</strong> ou seu dinheiro de volta, sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
