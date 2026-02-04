import { Link } from "react-router-dom";
import { Shield, Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">BioSecure</span>
            </Link>
            <p className="text-sidebar-foreground/70 mb-6">
              Empowering farmers with digital biosecurity solutions for healthier livestock 
              and sustainable farming practices.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 rounded-lg bg-sidebar-accent flex items-center justify-center hover:bg-sidebar-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Dashboard", "Training", "SOP Library", "Disease Map", "Alerts"].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {["Help Center", "Documentation", "API Reference", "Community", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sidebar-foreground/70">
                <Mail className="w-5 h-5 text-sidebar-primary" />
                <span>support@biosecure.in</span>
              </li>
              <li className="flex items-center gap-3 text-sidebar-foreground/70">
                <Phone className="w-5 h-5 text-sidebar-primary" />
                <span>1800-123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-sidebar-foreground/70">
                <MapPin className="w-5 h-5 text-sidebar-primary flex-shrink-0 mt-0.5" />
                <span>Ministry of Agriculture, New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sidebar-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sidebar-foreground/50 text-sm">
            © 2025 BioSecure Farm. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-sidebar-foreground/50">
            <a href="#" className="hover:text-sidebar-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sidebar-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-sidebar-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
