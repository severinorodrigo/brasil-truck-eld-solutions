
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, HeadphonesIcon, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-700">
            Contato e Suporte
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Atendimento Especializado
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa equipe está pronta para ajudar você em português, inglês ou espanhol. 
            Suporte rápido, prático e fácil quando você precisar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-400" />
                  Horários de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Segunda a Sexta:</span>
                  <span className="text-blue-400">7:00 AM - 7:00 PM (NY)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Fins de Semana:</span>
                  <span className="text-blue-400">7:00 AM - 5:00 PM (NY)</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-blue-400" />
                  Idiomas Disponíveis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-blue-600 text-white">🇧🇷 Português</Badge>
                  <Badge className="bg-blue-600 text-white">🇺🇸 English</Badge>
                  <Badge className="bg-blue-600 text-white">🇪🇸 Español</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <HeadphonesIcon className="w-6 h-6 text-blue-400" />
                  Entre em Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
                  Ligar Agora - Suporte Imediato
                </Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-slate-900 text-lg py-6">
                  WhatsApp - Chat Rápido
                </Button>
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-slate-900 text-lg py-6">
                  Email - Suporte Técnico
                </Button>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <p className="text-gray-300 mb-4">
                Pronto para começar? Fale com nossos especialistas agora!
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                Solicitar Orçamento Gratuito
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
