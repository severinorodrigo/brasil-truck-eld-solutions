import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Clock, MapPin, MessageCircle, Truck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contato = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Dodge RAM 3500 transportando carros"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-blue-600 text-white">
            Fale Conosco
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Suporte Especializado em ELD
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Atendimento em português, inglês e espanhol. Nossa equipe está pronta 
            para ajudar você com todas as questões sobre compliance ELD.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Informações de Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entre em contato conosco por telefone, email ou através do formulário abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-xl text-slate-900">Telefone</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <a href="tel:+15551234567" className="text-blue-600 hover:underline">+1 (555) 123-4567</a>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-xl text-slate-900">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <a href="mailto:suporte@eldbrasilusa.com" className="text-blue-600 hover:underline">suporte@eldbrasilusa.com</a>
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-xl text-slate-900">Endereço</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  123 Main Street, Suite 456
                  <br />
                  New York, NY 10001
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Formulário de Contato
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Envie sua mensagem e nossa equipe entrará em contato o mais breve possível.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <div className="mt-1">
                  <Input type="text" id="name" placeholder="Seu nome" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1">
                  <Input type="email" id="email" placeholder="Seu email" />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefone</label>
                <div className="mt-1">
                  <Input type="tel" id="phone" placeholder="Seu telefone" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
                <div className="mt-1">
                  <Textarea id="message" rows={4} placeholder="Sua mensagem" />
                </div>
              </div>

              <div>
                <Button className="w-full">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Horário de Suporte
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nossa equipe está disponível para ajudar de segunda a sexta-feira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="bg-slate-800 border-0">
              <CardHeader>
                <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <CardTitle className="text-xl text-center">Suporte por Telefone</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  7:00 AM - 7:00 PM (Seg-Sex)
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-0">
              <CardHeader>
                <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <CardTitle className="text-xl text-center">Suporte por Email</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>
                  Resposta em até 24 horas
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
