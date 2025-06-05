
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
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Truck className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-slate-900">ELD Brasil USA</span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex gap-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link 
                    to="/" 
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive('/') ? 'text-blue-600' : 'text-slate-700'
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
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive('/sobre') ? 'text-blue-600' : 'text-slate-700'
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
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive('/ecommerce') ? 'text-blue-600' : 'text-slate-700'
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
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive('/demo') ? 'text-blue-600' : 'text-slate-700'
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
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                      isActive('/contato') ? 'text-blue-600' : 'text-slate-700'
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
              <Button className="bg-blue-600 hover:bg-blue-700">
                Falar com Especialista
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-2">
              <Link 
                to="/" 
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/') ? 'text-blue-600' : 'text-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/sobre" 
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/sobre') ? 'text-blue-600' : 'text-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link 
                to="/ecommerce" 
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/ecommerce') ? 'text-blue-600' : 'text-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Loja ELD
              </Link>
              <Link 
                to="/demo" 
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/demo') ? 'text-blue-600' : 'text-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </Link>
              <Link 
                to="/contato" 
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive('/contato') ? 'text-blue-600' : 'text-slate-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link to="/contato" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-blue-600 hover:bg-blue-700 mt-2 w-full">
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
