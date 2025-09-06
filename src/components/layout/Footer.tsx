import { Link } from "react-router-dom";
import { Github, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass-card border-t border-glass-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="w-6 h-6 text-primary" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-3 bg-background rounded-sm" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold gradient-text">Enigma Protocol</span>
                <span className="text-xs text-muted-foreground">by AvalPay</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Privacidad de transacciones con eERC20 en Avalanche. Auditoría opcional y sin custodia.
            </p>
          </div>

          {/* Productos */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Productos</h4>
            <div className="space-y-2">
              <Link to="/app/dashboard" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/pricing/precinct" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Precinct
              </Link>
              <Link to="/docs" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Documentación
              </Link>
              <Link to="/help/faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Health
              </Link>
              <Link to="/help/faq" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </div>
          </div>

          {/* Compañía */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Compañía</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Acerca de
              </Link>
              <Link to="/about#become-auditor" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Conviértete en Auditor
              </Link>
              <Link to="/about#contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-card-foreground">Legal</h4>
            <div className="space-y-2">
              <Link to="/legal/terms" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos de uso
              </Link>
              <Link to="/legal/privacy" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de privacidad
              </Link>
              <Link to="/legal/cookies" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de cookies
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © AvalPay 2025. Todos los derechos reservados.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/avalpay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;