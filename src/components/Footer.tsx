
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="mb-8 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-blue-950 mb-6">
            🔒 Não arrisque perder sua identidade no mercado
          </h2>
          <p className="text-gray-700 mb-4">
            Imagina ver sua identidade, seu nome, sua ideia... registrada por outra pessoa?
          </p>
          <p className="text-gray-700 mb-3">
            Garanta agora o controle da sua marca com um investimento acessível.
          </p>
          <p className="text-gray-700">
            📘 <strong>O primeiro passo começa clicando no botão acima.</strong>
          </p>
        </div>
        
        <hr className="border-gray-200 mb-8" />
        
        <div className="text-center text-sm text-gray-500">
          <p>© {currentYear} Guia Prático: Registro de Marca no Brasil. Todos os direitos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-brand-blue-700 hover:underline transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-brand-blue-700 hover:underline transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-brand-blue-700 hover:underline transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
