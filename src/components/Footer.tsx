
import { Badge } from "@/components/ui/badge";
import { Truck, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-black tracking-tight">ELD Brasil USA</span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-lg">
              Especialistas em soluções ELD para a comunidade brasileira nos Estados Unidos. 
              Compliance, suporte e tecnologia que você pode confiar.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full border-0">FMCSA Certified</Badge>
              <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full border-0">Suporte 7 Dias</Badge>
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full border-0">3 Idiomas</Badge>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Navegação</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Sobre</Link></li>
              <li><Link to="/ecommerce" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Loja ELD</Link></li>
              <li><Link to="/demo" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Demo</Link></li>
              <li><Link to="/contato" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>Telefone: +1 (XXX) XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>WhatsApp: +1 (XXX) XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <span>Email: info@eldbrasil.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Seg-Sex: 7AM-7PM (NY)</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🕐</span>
                <span>Fim de Semana: 7AM-5PM (NY)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg">
              © 2024 ELD Brasil USA. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-8 mt-6 md:mt-0">
              <span className="text-gray-400">Certificado FMCSA</span>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-gray-400">100% Compliance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
