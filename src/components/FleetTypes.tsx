
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FleetTypes = () => {
  const fleetTypes = [
    {
      title: "Heavy Duty",
      description: "Caminhões pesados para transporte de longa distância",
      types: ["Reefer (Refrigerados)", "Dry Van (Carga Seca)", "Step Bed (Plataforma)"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Light/Medium Duty",
      description: "Veículos para transporte especializado de carros",
      types: ["Car Hauling", "Transport Trailers", "Auto Carriers"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80"
    },
    {
      title: "Box Trucks",
      description: "Caminhões menores para carga seca e entregas",
      types: ["Carga Seca Local", "Delivery Services", "Moving Trucks"],
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
            <Card key={index} className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={fleet.image} 
                  alt={fleet.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="text-center">
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
