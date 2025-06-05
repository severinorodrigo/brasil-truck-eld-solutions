
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FleetTypes = () => {
  const fleetTypes = [
    {
      title: "Heavy Duty",
      description: "Caminhões pesados para transporte de longa distância",
      types: ["Reefer (Refrigerados)", "Dry Van (Carga Seca)", "Step Bed (Plataforma)"],
      image: "🚛"
    },
    {
      title: "Light/Medium Duty",
      description: "Veículos para transporte especializado de carros",
      types: ["Car Hauling", "Transport Trailers", "Auto Carriers"],
      image: "🚐"
    },
    {
      title: "Box Trucks",
      description: "Caminhões menores para carga seca e entregas",
      types: ["Carga Seca Local", "Delivery Services", "Moving Trucks"],
      image: "📦"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-slate-100 text-slate-800 hover:bg-slate-200">
            Tipos de Frota
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Atendemos Todos os Tipos de Veículos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa solução ELD é compatível com todos os tipos de veículos comerciais, 
            desde caminhões pesados até box trucks para entregas locais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleetTypes.map((fleet, index) => (
            <Card key={index} className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{fleet.image}</div>
                <CardTitle className="text-2xl text-slate-900">{fleet.title}</CardTitle>
                <p className="text-gray-600">{fleet.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {fleet.types.map((type, typeIndex) => (
                    <li key={typeIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {type}
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

export default FleetTypes;
