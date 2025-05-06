
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "O guia é super didático! Consegui registrar a marca do meu ateliê. Vale cada centavo!",
      author: "Fernanda M., São Paulo/SP",
      avatar: "/lovable-uploads/b86c2ba6-47da-45dc-be0f-c896e6b92f61.png"
    },
    {
      quote: "Sempre achei que só advogado resolvia isso. Depois do ebook, fiz tudo sozinho e deu certo!",
      author: "Carlos Henrique, Belo Horizonte/MG",
      avatar: "/lovable-uploads/1e985435-a3fe-419f-9443-7d3928f5163a.png"
    },
    {
      quote: "Muito melhor que os vídeos que vi no YouTube. O conteúdo é claro e direto!",
      author: "Aline Torres, Recife/PE",
      avatar: "/lovable-uploads/4290f0fd-fc17-4e1d-8a5f-89ecb8df1f7e.png"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-950 mb-16 text-center">
          💬 O que dizem sobre o guia
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <div className="absolute -top-5 left-8">
                <span className="text-5xl text-brand-blue-500">"</span>
              </div>
              <div className="pt-4">
                <p className="text-gray-700 italic mb-6">
                  🗣️ <em>{testimonial.quote}</em>
                </p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 border-2 border-brand-blue-100 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={`Avatar de ${testimonial.author}`} />
                    <AvatarFallback className="bg-brand-blue-100 text-brand-blue-800">
                      {testimonial.author.split(',')[0].substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <p className="font-semibold text-brand-blue-900">
                    <strong>— {testimonial.author}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
