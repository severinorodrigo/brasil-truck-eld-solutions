
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Shield, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white overflow-hidden">
      {/* Background Image with better overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Dodge RAM 3500 transportando carros"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/90"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-32 flex items-center min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 text-sm font-medium rounded-full border-0 shadow-lg">
              <Shield className="w-4 h-4 mr-2" />
              Compliance ELD • Suporte 7 Dias por Semana
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-none tracking-tight">
            ELD Compliance
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              para Brasileiros
            </span>
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-300">
              nos EUA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Software e hardware ELD completos com suporte em português, inglês e espanhol. 
            Atendimento especializado para motoristas e empresários do transporte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/ecommerce">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg px-10 py-6 rounded-full shadow-2xl border-0 group transition-all duration-300 hover:scale-105">
                Comprar ELD Online
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button size="lg" variant="outline" className="border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white hover:bg-white hover:text-slate-900 text-lg px-10 py-6 rounded-full transition-all duration-300 hover:scale-105">
                Falar com Especialista
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">100% Compliance</p>
                <p className="text-sm text-gray-400">FMCSA Certificado</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Suporte 7am-7pm</p>
                <p className="text-sm text-gray-400">Segunda a Sexta</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-white">Todos os Tipos</p>
                <p className="text-sm text-gray-400">de Frota</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
