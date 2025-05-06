
const Testimonials = () => {
  const testimonials = [
    {
      quote: "O guia é super didático! Consegui registrar a marca do meu ateliê. Vale cada centavo!",
      author: "Fernanda M., São Paulo/SP",
      avatar: "https://via.placeholder.com/60?text=FM"
    },
    {
      quote: "Sempre achei que só advogado resolvia isso. Depois do ebook, fiz tudo sozinho e deu certo!",
      author: "Carlos Henrique, Belo Horizonte/MG",
      avatar: "https://via.placeholder.com/60?text=CH"
    },
    {
      quote: "Muito melhor que os vídeos que vi no YouTube. O conteúdo é claro e direto!",
      author: "Aline Torres, Recife/PE",
      avatar: "https://via.placeholder.com/60?text=AT"
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
                  <img 
                    src={testimonial.avatar} 
                    alt={`Avatar de ${testimonial.author}`} 
                    className="h-12 w-12 rounded-full mr-4 border-2 border-brand-blue-100"
                  />
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
