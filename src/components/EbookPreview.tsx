import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye, ArrowLeft, ArrowRight, X } from "lucide-react";

const EbookPreview = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const pages = [
    {
      title: "Índice",
      content: `
        CAPÍTULO 1: O que é uma marca?
        • Diferença entre marca e produto
        • Por que a marca vale mais que tudo
        
        CAPÍTULO 2: Os riscos de não registrar
        • Casos reais de empresas prejudicadas
        • Como concorrentes podem te prejudicar
        
        CAPÍTULO 3: Passo a passo INPI
        • Criando sua conta no INPI
        • Preenchendo a petição
        • Pagamento das taxas
        
        CAPÍTULO 4: Evitando erros fatais
        • Os 7 erros que mais rejeitam pedidos
        • Como escolher a classe correta
      `
    },
    {
      title: "Capítulo 1: O que é uma marca?",
      content: `
        Uma marca não é apenas um nome ou logo. É o conjunto de elementos que identifica e diferencia seus produtos ou serviços no mercado.
        
        ELEMENTOS DE UMA MARCA:
        ✓ Nome (denominação)
        ✓ Logo (sinal visual)
        ✓ Slogan (frase de efeito)
        ✓ Cores características
        ✓ Tipografia específica
        
        POR QUE A MARCA VALE MAIS QUE O PRODUTO?
        
        Pense na Coca-Cola. O refrigerante em si custa centavos para produzir, mas a marca vale bilhões. Isso porque a marca carrega:
        
        • Confiança do consumidor
        • Memória afetiva
        • Status social
        • Garantia de qualidade
      `
    },
    {
      title: "Capítulo 2: Os riscos de não registrar",
      content: `
        CASO REAL: Padaria do João
        
        João tinha uma padaria famosa em sua cidade há 15 anos. Nunca registrou a marca "Pão Quentinho". 
        
        Um empresário de outra cidade registrou o nome e processou João, obrigando-o a:
        • Mudar o nome da padaria
        • Trocar toda a comunicação visual
        • Perder clientes confusos
        • Pagar indenização
        
        OUTROS RISCOS:
        ❌ Concorrentes registrarem seu nome
        ❌ Perder credibilidade no mercado
        ❌ Não poder expandir para outras cidades
        ❌ Dificuldade para vender o negócio
        ❌ Problemas com fornecedores
      `
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center mb-8">
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors"
          >
            <Eye className="mr-2 h-4 w-4" />
            👀 Prévia do Ebook
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-brand-blue-950">
              Preview do Ebook - Página {currentPage + 1} de {pages.length}
            </h3>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 min-h-[400px] overflow-y-auto">
            <h4 className="text-xl font-bold text-brand-blue-900 mb-4">
              {pages[currentPage].title}
            </h4>
            <div className="text-gray-700 whitespace-pre-line leading-relaxed">
              {pages[currentPage].content}
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-4">
            <Button 
              variant="outline" 
              onClick={prevPage} 
              disabled={currentPage === 0}
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Anterior
            </Button>
            
            <span className="text-sm text-gray-500">
              {currentPage + 1} / {pages.length}
            </span>
            
            <Button 
              variant="outline" 
              onClick={nextPage} 
              disabled={currentPage === pages.length - 1}
              className="flex items-center"
            >
              Próxima
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-6 p-4 bg-brand-orange/10 rounded-lg text-center">
            <p className="text-brand-blue-900 font-medium">
              🔒 Esta é apenas uma prévia. O ebook completo tem mais de 50 páginas com todos os detalhes!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EbookPreview;