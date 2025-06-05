
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Globe, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sobre = () => {
  const team = [
    {
      name: "Carlos Silva",
      role: "CEO & Fundador",
      description: "15+ anos na indústria de transporte nos EUA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Maria Santos",
      role: "Diretora de Suporte",
      description: "Especialista em regulamentações DOT/FMCSA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "João Costa",
      role: "CTO",
      description: "Desenvolvedor de soluções tecnológicas para transporte",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80"
            alt="Nossa equipe"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/75"></div>
        </div>
        
        <div className="relative container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-blue-600 text-white">
            Nossa História
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Quem Somos
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Somos uma empresa brasileira especializada em soluções ELD 
            para a comunidade brasileira nos Estados Unidos.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Nossa Missão
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Facilitar o compliance ELD para brasileiros nos EUA, oferecendo 
              suporte especializado em português e soluções adaptadas às 
              necessidades da nossa comunidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Compromisso</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dedicados ao sucesso dos brasileiros na indústria de transporte americana
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Experiência</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Mais de 10 anos ajudando motoristas e empresários brasileiros nos EUA
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Qualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Soluções certificadas FMCSA com suporte técnico especializado
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profissionais experientes dedicados ao seu sucesso
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Nossos Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Comunidade</h3>
              <p className="text-gray-600">Apoiamos a comunidade brasileira nos EUA</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Excelência</h3>
              <p className="text-gray-600">Comprometidos com a máxima qualidade</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Confiança</h3>
              <p className="text-gray-600">Relações baseadas em transparência</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Inovação</h3>
              <p className="text-gray-600">Sempre na vanguarda da tecnologia</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para Trabalhar Conosco?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Junte-se a centenas de empresários e motoristas brasileiros 
            que confiam em nossas soluções ELD.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Entre em Contato
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sobre;
