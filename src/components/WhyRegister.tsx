
import { Shield, AlertTriangle, Zap } from "lucide-react";

const WhyRegister = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-950 mb-6">
            🔐 Por que você precisa registrar sua marca?
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Você sabia que qualquer pessoa pode registrar o nome da sua empresa antes de você... e te obrigar a mudar tudo?
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Sem registro, sua marca está vulnerável. Copiadores podem lucrar com seu nome e até te processar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover-lift group">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-brand-blue-100 to-brand-blue-200 text-brand-blue-800 mb-6 mx-auto group-hover:scale-110 transition-transform">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-brand-blue-900 text-center mb-4">🛡️ Proteção Legal</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Garanta exclusividade sobre o uso da sua marca em todo o território nacional por <strong>10 anos renováveis</strong>.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover-lift group">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-red-100 to-red-200 text-red-700 mb-6 mx-auto group-hover:scale-110 transition-transform">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-brand-blue-900 text-center mb-4">⚠️ Evite Problemas</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Previna-se contra processos por uso indevido de marca e evite ter que rebrandear todo seu negócio e <strong>perder clientes</strong>.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover-lift group">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-green-100 to-green-200 text-green-700 mb-6 mx-auto group-hover:scale-110 transition-transform">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-brand-blue-900 text-center mb-4">💰 Valor ao Negócio</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Aumente o patrimônio da sua empresa e ganhe credibilidade no mercado. <strong>Uma marca pode valer milhões!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRegister;
