
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Truck, Shield, Clock, Star, Package } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Ecommerce = () => {
  const products = [
    {
      id: 1,
      name: "ELD Starter - Motorista Individual",
      price: "$25",
      period: "/mês",
      description: "Solução completa para motoristas independentes",
      features: [
        "Hardware ELD certificado FMCSA",
        "Software mobile iOS/Android",
        "Suporte em português 7 dias",
        "Relatórios HOS automáticos",
        "Backup na nuvem",
        "1 veículo incluído"
      ],
      popular: false,
      setupFee: "$50"
    },
    {
      id: 2,
      name: "ELD Professional - Pequena Frota",
      price: "$20",
      period: "/mês por veículo",
      description: "Ideal para empresas com 2-10 veículos",
      features: [
        "Tudo do plano Starter",
        "Dashboard web administrativo",
        "Relatórios personalizados",
        "Gestão de motoristas",
        "API de integração",
        "Suporte prioritário",
        "Treinamento incluído"
      ],
      popular: true,
      setupFee: "Grátis"
    },
    {
      id: 3,
      name: "ELD Enterprise - Grande Frota",
      price: "$15",
      period: "/mês por veículo",
      description: "Solução corporativa para frotas 10+ veículos",
      features: [
        "Tudo do plano Professional",
        "Gerente de conta dedicado",
        "Integração ERP personalizada",
        "Relatórios avançados BI",
        "Suporte 24/7",
        "SLA garantido",
        "Treinamento presencial"
      ],
      popular: false,
      setupFee: "Consulte-nos"
    }
  ];

  const addons = [
    {
      name: "DVIR Digital",
      price: "$5/mês",
      description: "Inspeção veicular digital completa"
    },
    {
      name: "Dashcam Integration",
      price: "$10/mês", 
      description: "Integração com câmeras de segurança"
    },
    {
      name: "Fuel Management",
      price: "$8/mês",
      description: "Controle avançado de combustível"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80"
            alt="Transporte de carros com Dodge RAM"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-blue-600 text-white">
            Loja Online ELD
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Compre Seu ELD Online
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Escolha o plano ideal para sua operação. Hardware certificado, software completo 
            e suporte em português. Compliance garantido!
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>Certificado FMCSA</span>
            </div>
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-400" />
              <span>Entrega Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-blue-400" />
              <span>5 Estrelas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Planos ELD para Todos os Tamanhos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde motoristas independentes até grandes frotas. 
              Encontre a solução perfeita para seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className={`relative ${product.popular ? 'border-blue-600 border-2 shadow-xl' : 'border-gray-200'}`}
              >
                {product.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-slate-900">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {product.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">{product.price}</span>
                    <span className="text-gray-600">{product.period}</span>
                  </div>
                  <p className="text-sm text-gray-500">Taxa de setup: {product.setupFee}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${product.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-900 hover:bg-slate-800'}`}
                  >
                    Comprar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Serviços Adicionais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expanda sua solução ELD com serviços especializados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addons.map((addon, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">{addon.name}</CardTitle>
                  <CardDescription>{addon.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-600 mb-4">{addon.price}</div>
                  <Button variant="outline" className="w-full">
                    Adicionar ao Plano
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Fale com nossos especialistas para escolher o melhor plano 
            ou tire suas dúvidas antes de comprar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Falar com Especialista
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Solicitar Demo Gratuita
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ecommerce;
