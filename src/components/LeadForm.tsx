import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Mail, Gift } from "lucide-react";

const LeadForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      toast({
        title: "🎉 Checklist enviado!",
        description: "Verifique seu email para baixar o checklist gratuito.",
      });
      setEmail("");
      setName("");
    }, 1500);
  };

  return (
    <div className="text-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline"
            className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-medium px-6 py-3 transition-all"
          >
            <Gift className="mr-2 h-5 w-5" />
            🎁 Baixar Checklist Gratuito
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <div className="text-center mb-6">
            <div className="mx-auto w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
              <Gift className="h-8 w-8 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold text-brand-blue-950 mb-2">
              🎁 Checklist Gratuito
            </h3>
            <p className="text-gray-600">
              "10 Pontos Essenciais Antes de Registrar Sua Marca"
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Seu melhor email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-medium py-3"
            >
              {isSubmitting ? "Enviando..." : (
                <>
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar Checklist Gratuito
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            📧 Não enviamos spam. Seus dados estão seguros conosco.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LeadForm;