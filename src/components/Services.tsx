
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, HeadphonesIcon, Globe, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Hardware ELD",
      description: "Dispositivos certificados pela FMCSA, fáceis de instalar e usar. Compatíveis com todos os tipos de veículos comerciais.",
      features: ["Instalação simples", "Durabilidade garantida", "Suporte técnico incluso"]
    },
    {
      icon: Shield,
      title: "Software Logbook",
      description: "Plataforma completa para gestão de horas de serviço, relatórios automáticos e compliance total com as regulamentações.",
      features: ["Interface intuitiva", "Relatórios automáticos", "Backup na nuvem"]
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Multilíngue",
      description: "Atendimento especializado em português, inglês e espanhol por nossa equipe experiente em regulamentações DOT.",
      features: ["Atendimento em 3 idiomas", "Equipe especializada", "Suporte rápido"]
    },
    {
      icon: Globe,
      title: "Cobertura Nacional",
      description: "Serviços disponíveis em todos os estados americanos com suporte local e conhecimento das regulamentações regionais.",
      features: ["50 estados cobertos", "Regulamentações locais", "Suporte nacional"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Nossos Serviços
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Solução Completa em ELD
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos hardware, software e suporte especializado para manter sua frota em compliance 
            total com as regulamentações FMCSA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
