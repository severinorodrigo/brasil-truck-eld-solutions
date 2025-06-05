import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "O que é um ELD e por que preciso dele?",
      answer: "ELD (Electronic Logging Device) é obrigatório por lei federal para motoristas comerciais nos EUA. Registra automaticamente as horas de serviço para compliance com as regulamentações DOT/FMCSA."
    },
    {
      question: "O equipamento é difícil de instalar?",
      answer: "Não! Nosso ELD se conecta facilmente na porta diagnóstica do seu caminhão (OBD-II). A instalação leva apenas alguns minutos e nosso suporte te ajuda durante todo o processo."
    },
    {
      question: "Funciona em todos os estados americanos?",
      answer: "Sim, nosso ELD é certificado FMCSA e funciona em todos os 50 estados americanos. Cumprimos todas as regulamentações federais e estaduais."
    },
    {
      question: "Que tipos de relatórios posso gerar?",
      answer: "Nosso software gera relatórios automáticos de HOS, DVIR, dados de localização, performance do motorista e relatórios personalizados para sua empresa."
    },
    {
      question: "O suporte realmente funciona em português?",
      answer: "Sim! Nossa equipe é especializada em atender brasileiros nos EUA. Falamos português nativo e entendemos as necessidades específicas da nossa comunidade."
    },
    {
      question: "Qual o custo mensal do serviço?",
      answer: "Oferecemos planos flexíveis a partir de $20/mês por veículo. Entre em contato para um orçamento personalizado baseado no tamanho da sua frota."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Perguntas Frequentes
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Tire Suas Dúvidas sobre ELD
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reunimos as principais dúvidas sobre regulamentações ELD e nossos serviços 
            para ajudar você a entender melhor como funciona.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-start gap-3 text-slate-900">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Não encontrou sua pergunta? Nossa equipe está pronta para ajudar!
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
