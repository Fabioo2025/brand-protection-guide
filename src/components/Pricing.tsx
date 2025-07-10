import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
const Pricing = () => {
  const {
    toast
  } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const isMobile = useIsMobile();
  const handlePurchase = () => {
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Compra simulada com sucesso!",
        description: "Este é um exemplo de compra. Para implementar o Stripe, será necessário configurar uma conta.",
        variant: "default"
      });
    }, 1500);
  };
  return <section id="checkout" className="py-16 md:py-24 bg-gradient-to-br from-brand-blue-950 via-brand-blue-900 to-brand-blue-800 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-brand-orange/5 rounded-full blur-3xl animate-bounce-soft"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-brand-blue-400/5 rounded-full blur-3xl animate-bounce-soft" style={{
      animationDelay: '2s'
    }}></div>
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-red-500 to-brand-orange px-4 py-2 rounded-full text-white text-sm font-bold mb-4 animate-pulse-glow">
              🔥 ÚLTIMAS VAGAS COM DESCONTO
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">💰 Oferta Especial Limitada</h2>
            <p className="text-lg text-brand-blue-100 mb-2">
              Este material é fruto de anos de experiência, pesquisa e prática direta no sistema do INPI.
            </p>
            <p className="text-lg text-brand-blue-100">
              Profissionais cobram até <span className="font-bold">R$ 800</span> por esse tipo de orientação.
            </p>
          </div>
          
          <div className="bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl border-t-8 border-brand-orange relative animate-slide-in-up">
            {/* Guarantee badge */}
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12">
              ✅ GARANTIA 7 DIAS
            </div>
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
                <div className="flex items-start p-3 bg-green-50 rounded-lg">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">📖 Acesso imediato ao e-book completo em formato PDF (50+ páginas)</span>
                </div>
                <div className="flex items-start p-3 bg-blue-50 rounded-lg">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">📄 Modelos de documentos e formulários necessários</span>
                </div>
                <div className="flex items-start p-3 bg-yellow-50 rounded-lg">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">✅ Lista de verificação para evitar erros comuns</span>
                </div>
                <div className="flex items-start p-3 bg-purple-50 rounded-lg">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">🎁 <strong>BÔNUS:</strong> Checklist de 10 pontos antes do registro</span>
                </div>
              </div>
              
              <Button onClick={handlePurchase} disabled={isProcessing} className="w-full bg-gradient-to-r from-brand-orange to-red-500 hover:from-red-500 hover:to-brand-orange text-white font-bold text-lg px-4 py-6 rounded-xl transition-all transform hover:scale-105 shadow-2xl pulse-glow">
                {isProcessing ? "Processando..." : <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {isMobile ? "🚀 COMPRAR AGORA" : "🚀 QUERO PROTEGER MINHA MARCA AGORA"}
                  </>}
              </Button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                Pagamento 100% seguro via PIX, cartão de crédito ou boleto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;