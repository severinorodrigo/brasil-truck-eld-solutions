
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Play, CheckCircle, Shield, Clock, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Demo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Demonstração ELD"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-blue-600 text-white">
            <Play className="w-4 h-4 mr-2" />
            Demo Gratuita
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Veja o ELD em Ação
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experimente nossa solução ELD gratuitamente. Veja como é fácil 
            manter sua frota em compliance com as regulamentações FMCSA.
          </p>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Solicite Sua Demo Gratuita
              </h2>
              <p className="text-xl text-gray-600">
                Agende uma demonstração personalizada com nossa equipe
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Informações da Demo</CardTitle>
                    <CardDescription>
                      Preencha o formulário para agendar sua demonstração
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Nome da Empresa
                        </label>
                        <Input id="company" placeholder="Sua empresa" />
                      </div>
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                          Seu Nome
                        </label>
                        <Input id="contact-name" placeholder="Seu nome" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="seu@email.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Telefone
                        </label>
                        <Input id="phone" placeholder="+1 (555) 123-4567" />
                      </div>
                      <div>
                        <label htmlFor="fleet-size" className="block text-sm font-medium text-gray-700 mb-1">
                          Tamanho da Frota
                        </label>
                        <Input id="fleet-size" placeholder="Número de veículos" />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Mensagem (Opcional)
                        </label>
                        <Textarea id="message" placeholder="Conte-nos sobre suas necessidades" rows={3} />
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Agendar Demo Gratuita
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      O que você verá na demo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Instalação e configuração do hardware ELD</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Registro automático de horas de serviço (HOS)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Truck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Dashboard de gestão da frota</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>Relatórios de compliance FMCSA</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Duração da Demo</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      30-45 minutos de demonstração personalizada
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>Disponível Seg-Sex, 7AM-7PM (NY)</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
