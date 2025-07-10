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
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      toast({
        title: "🎉 Checklist enviado!",
        description: "Verifique seu email para baixar o checklist gratuito."
      });
      setEmail("");
      setName("");
    }, 1500);
  };
  return <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-brand-orange to-red-500 rounded-full flex items-center justify-center">
            <Gift className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-brand-blue-950">
            🎁 Checklist Gratuito: Registro de Marca
          </h3>
          <p className="text-gray-600">
            Receba por email um checklist com os pontos mais importantes antes de registrar sua marca!
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div>
            <Input type="text" placeholder="Seu nome completo" value={name} onChange={e => setName(e.target.value)} required className="w-full" />
          </div>
          <div>
            <Input type="email" placeholder="Seu melhor email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full" />
          </div>
          <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-brand-orange to-red-500 hover:from-red-500 hover:to-brand-orange text-white font-bold">
            {isSubmitting ? "Enviando..." : "Receber Checklist Grátis"}
            {!isSubmitting && <Mail className="ml-2 h-4 w-4" />}
          </Button>
        </form>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          💌 Não enviamos spam. Seus dados estão protegidos.
        </p>
      </DialogContent>
    </Dialog>;
};
export default LeadForm;