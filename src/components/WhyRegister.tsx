
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
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-blue-100 text-brand-blue-800 mb-6 mx-auto">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-brand-blue-900 text-center mb-4">Proteção Legal</h3>
            <p className="text-gray-600 text-center">
              Garanta exclusividade sobre o uso da sua marca em todo o território nacional.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-blue-100 text-brand-blue-800 mb-6 mx-auto">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-brand-blue-900 text-center mb-4">Evite Problemas</h3>
            <p className="text-gray-600 text-center">
              Previna-se contra processos por uso indevido de marca e evite ter que rebrandear todo seu negócio.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-blue-100 text-brand-blue-800 mb-6 mx-auto">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-brand-blue-900 text-center mb-4">Valor ao Negócio</h3>
            <p className="text-gray-600 text-center">
              Aumente o patrimônio da sua empresa e ganhe credibilidade no mercado com uma marca registrada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRegister;
