import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Smartphone, Users, Bell, MapPin, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-farm.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Smart Farm Technology" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex items-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in opacity-0 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground text-sm font-medium backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              Digital Biosecurity Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in opacity-0 delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Protecting Livestock,
            <br />
            <span className="text-primary">Empowering Farmers</span>
          </h1>

          {/* Description */}
          <p className="animate-fade-in opacity-0 delay-200 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 leading-relaxed">
            A comprehensive digital farm management portal for implementing biosecurity measures 
            in pig and poultry farms. Real-time alerts, compliance tracking, and multilingual support 
            for farmers across India.
          </p>

          {/* Stats */}
          <div className="animate-fade-in opacity-0 delay-300 flex flex-wrap gap-8 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">10K+</p>
                <p className="text-sm text-primary-foreground/60">Farmers</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">500+</p>
                <p className="text-sm text-primary-foreground/60">Districts</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Bell className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">24/7</p>
                <p className="text-sm text-primary-foreground/60">Alerts</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in opacity-0 delay-400 flex flex-wrap gap-4">
            <Link to="/dashboard">
              <Button size="lg" className="gradient-primary hover-lift text-lg px-8 py-6 rounded-xl shadow-glow">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/training">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-xl border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <BookOpen className="mr-2 w-5 h-5" />
                View Training
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
