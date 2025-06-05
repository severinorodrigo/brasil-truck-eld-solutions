
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { Truck, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">ELD Brasil USA</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-8">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/" 
                    className={`px-4 py-2 text-sm font-semibold transition-all hover:text-blue-600 rounded-lg hover:bg-blue-50 ${
                      isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                    }`}
                  >
                    Início
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/sobre" 
                    className={`px-4 py-2 text-sm font-semibold transition-all hover:text-blue-600 rounded-lg hover:bg-blue-50 ${
                      isActive('/sobre') ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                    }`}
                  >
                    Sobre
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/ecommerce" 
                    className={`px-4 py-2 text-sm font-semibold transition-all hover:text-blue-600 rounded-lg hover:bg-blue-50 ${
                      isActive('/ecommerce') ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                    }`}
                  >
                    Loja ELD
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/demo" 
                    className={`px-4 py-2 text-sm font-semibold transition-all hover:text-blue-600 rounded-lg hover:bg-blue-50 ${
                      isActive('/demo') ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                    }`}
                  >
                    Demo
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/contato" 
                    className={`px-4 py-2 text-sm font-semibold transition-all hover:text-blue-600 rounded-lg hover:bg-blue-50 ${
                      isActive('/contato') ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                    }`}
                  >
                    Contato
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contato">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-6 py-2 font-semibold shadow-lg hover:scale-105 transition-all">
                Falar com Especialista
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className={`px-4 py-3 text-sm font-semibold transition-all hover:text-blue-600 rounded-lg hover:bg-blue-50 ${
                  isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className={`px-4 py-3 text-sm font-semibold transition-all hover:text-blue-600 rounded-lg hover:bg-blue-50 ${
                  isActive('/sobre') ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                to="/ecommerce" 
                className={`px-4 py-3 text-sm font-semibold transition-all hover:text-blue-600 rounded-lg hover:bg-blue-50 ${
                  isActive('/ecommerce') ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Loja ELD
              </Link>
              <Link 
                to="/demo" 
                className={`px-4 py-3 text-sm font-semibold transition-all hover:text-blue-600 rounded-lg hover:bg-blue-50 ${
                  isActive('/demo') ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </Link>
              <Link 
                to="/contato" 
                className={`px-4 py-3 text-sm font-semibold transition-all hover:text-blue-600 rounded-lg hover:bg-blue-50 ${
                  isActive('/contato') ? 'text-blue-600 bg-blue-50' : 'text-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full mt-4 w-full font-semibold">
                  Falar com Especialista
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
