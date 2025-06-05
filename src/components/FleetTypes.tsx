
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FleetTypes = () => {
  const fleetTypes = [
    {
      title: "Heavy Duty",
      description: "Caminhões pesados para transporte de longa distância",
      types: ["Reefer (Refrigerados)", "Dry Van (Carga Seca)", "Step Bed (Plataforma)"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Light/Medium Duty",
      description: "Veículos para transporte especializado de carros",
      types: ["Car Hauling", "Transport Trailers", "Auto Carriers"],
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Box Trucks",
      description: "Caminhões menores para carga seca e entregas",
      types: ["Carga Seca Local", "Delivery Services", "Moving Trucks"],
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-slate-100 to-gray-100 text-slate-800 hover:from-slate-200 hover:to-gray-200 px-4 py-2 rounded-full border-0">
            Tipos de Frota
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Atendemos Todos os
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Tipos de Veículos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Nossa solução ELD é compatível com todos os tipos de veículos comerciais, 
            desde caminhões pesados até box trucks para entregas locais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {fleetTypes.map((fleet, index) => (
            <Card key={index} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden bg-white">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={fleet.image} 
                  alt={fleet.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${fleet.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl text-slate-900 font-bold mb-2">{fleet.title}</CardTitle>
                <p className="text-gray-600 leading-relaxed">{fleet.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {fleet.types.map((type, typeIndex) => (
                    <li key={typeIndex} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors">
                      <div className={`w-3 h-3 bg-gradient-to-r ${fleet.gradient} rounded-full mr-4 shadow-sm`}></div>
                      <span className="font-medium">{type}</span>
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
