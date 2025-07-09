import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Preciso de advogado para registrar minha marca?",
      answer: "Não! O registro pode ser feito diretamente no INPI por qualquer pessoa. Nosso guia ensina exatamente como fazer isso de forma segura e econômica."
    },
    {
      question: "Quanto tempo demora o processo de registro?",
      answer: "O processo completo pode levar de 12 a 24 meses, mas você estará protegido desde o depósito inicial. O guia explica todas as etapas e prazos."
    },
    {
      question: "Posso registrar qualquer nome como marca?",
      answer: "Nem todos os nomes podem ser registrados. Existe uma série de critérios e restrições. O ebook ensina como verificar se seu nome é registrável."
    },
    {
      question: "O que acontece se alguém já registrou minha marca?",
      answer: "Se alguém registrou primeiro, você pode ter problemas legais. Por isso é urgente proteger sua marca o quanto antes. O guia também ensina como pesquisar marcas existentes."
    },
    {
      question: "Quanto custa registrar uma marca no INPI?",
      answer: "As taxas do INPI variam conforme o tipo de empresa (MEI, pequena empresa, etc.). O guia detalha todas as taxas atualizadas e como economizar."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-950 mb-12 text-center">
          ❓ Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white border border-gray-200 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="font-semibold text-brand-blue-900">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;