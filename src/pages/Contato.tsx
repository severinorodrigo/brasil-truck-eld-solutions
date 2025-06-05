
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageSquare, Globe, HeadphonesIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    tipoFrota: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode implementar o envio do formulário
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-blue-600 text-white">
            Contato e Suporte
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Fale Conosco
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa equipe está pronta para ajudar você em português, inglês ou espanhol. 
            Suporte especializado para a comunidade brasileira nos EUA.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Telefone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Ligação direta</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MessageSquare className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+1 (555) 987-6543</p>
                <p className="text-sm text-gray-500">Chat rápido</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">suporte@eldbrasilusa.com</p>
                <p className="text-sm text-gray-500">Suporte técnico</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Endereço</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">123 Main Street</p>
                <p className="text-gray-600">New York, NY 10001</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Solicite Informações
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="empresa">Nome da Empresa</Label>
                    <Input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="tipoFrota">Tipo de Frota</Label>
                  <select
                    id="tipoFrota"
                    name="tipoFrota"
                    value={formData.tipoFrota}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  >
                    <option value="">Selecione o tipo de frota</option>
                    <option value="heavy-duty">Heavy Duty (Reefer, Dry Van, Step Bed)</option>
                    <option value="car-hauling">Car Hauling (Medium/Light Duty)</option>
                    <option value="box-truck">Box Truck (Carga Seca)</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Conte-nos sobre suas necessidades..."
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  Enviar Mensagem
                </Button>
              </form>
            </div>

            {/* Support Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                    Horários de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Segunda a Sexta:</span>
                    <span className="text-blue-600">7:00 AM - 7:00 PM (NY)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Fins de Semana:</span>
                    <span className="text-blue-600">7:00 AM - 5:00 PM (NY)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Feriados:</span>
                    <span className="text-gray-500">Horário reduzido</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-blue-600" />
                    Idiomas de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-green-100 text-green-800">🇧🇷 Português</Badge>
                    <Badge className="bg-blue-100 text-blue-800">🇺🇸 English</Badge>
                    <Badge className="bg-red-100 text-red-800">🇪🇸 Español</Badge>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Nossa equipe é especializada em atender brasileiros nos EUA, 
                    oferecendo suporte completo em sua língua nativa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <HeadphonesIcon className="w-6 h-6 text-blue-600" />
                    Suporte Emergencial
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Para questões urgentes relacionadas a compliance ou problemas 
                    técnicos que impeçam suas operações:
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Suporte 24/7 Emergencial
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
