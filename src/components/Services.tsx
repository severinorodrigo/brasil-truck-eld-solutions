
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, HeadphonesIcon, Globe, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Hardware ELD",
      description: "Dispositivos certificados pela FMCSA, fáceis de instalar e usar. Compatíveis com todos os tipos de veículos comerciais.",
      features: ["Instalação simples", "Durabilidade garantida", "Suporte técnico incluso"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "Software Logbook",
      description: "Plataforma completa para gestão de horas de serviço, relatórios automáticos e compliance total com as regulamentações.",
      features: ["Interface intuitiva", "Relatórios automáticos", "Backup na nuvem"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Multilíngue",
      description: "Atendimento especializado em português, inglês e espanhol por nossa equipe experiente em regulamentações DOT.",
      features: ["Atendimento em 3 idiomas", "Equipe especializada", "Suporte rápido"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Cobertura Nacional",
      description: "Serviços disponíveis em todos os estados americanos com suporte local e conhecimento das regulamentações regionais.",
      features: ["50 estados cobertos", "Regulamentações locais", "Suporte nacional"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 hover:from-blue-200 hover:to-indigo-200 px-4 py-2 rounded-full border-0">
            Nossos Serviços
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Solução Completa em
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> ELD</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Oferecemos hardware, software e suporte especializado para manter sua frota em compliance 
            total com as regulamentações FMCSA.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="text-center pb-4 relative">
                <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-slate-900 font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-6 text-center leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
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
