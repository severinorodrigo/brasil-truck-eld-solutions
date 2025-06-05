
import { Badge } from "@/components/ui/badge";
import { Truck, HeadphonesIcon, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">ELD Brasil USA</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Especialistas em soluções ELD para a comunidade brasileira nos Estados Unidos. 
              Compliance, suporte e tecnologia que você pode confiar.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-600 text-white">FMCSA Certified</Badge>
              <Badge className="bg-green-600 text-white">Suporte 7 Dias</Badge>
              <Badge className="bg-purple-600 text-white">3 Idiomas</Badge>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Hardware ELD</li>
              <li>Software Logbook</li>
              <li>Suporte Técnico</li>
              <li>Treinamento HOS</li>
              <li>Compliance Audit</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>📞 Telefone: +1 (XXX) XXX-XXXX</li>
              <li>📱 WhatsApp: +1 (XXX) XXX-XXXX</li>
              <li>✉️ Email: info@eldbrasil.com</li>
              <li>🕐 Seg-Sex: 7AM-7PM (NY)</li>
              <li>🕐 Fim de Semana: 7AM-5PM (NY)</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ELD Brasil USA. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-400">Certificado FMCSA</span>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-400">100% Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
