
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Shield, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
            Compliance ELD • Suporte 7 Dias por Semana
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            ELD Compliance para
            <span className="text-blue-400"> Brasileiros</span> nos EUA
          </h1>
          
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Software e hardware ELD completos com suporte em português, inglês e espanhol. 
            Atendimento especializado para motoristas e empresários do transporte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Comprar ELD Online
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-4">
              Falar com Especialista
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-sm">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>100% Compliance FMCSA</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm">
              <Clock className="w-5 h-5 text-blue-400" />
              <span>Suporte 7am-7pm (Seg-Sex)</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm">
              <Truck className="w-5 h-5 text-blue-400" />
              <span>Todos os Tipos de Frota</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
