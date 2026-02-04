import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const roles = [
  {
    title: "For Farmers",
    emoji: "👨‍🌾",
    description: "Reduce livestock losses and stabilize income with preventive care",
    benefits: [
      "Interactive training in local languages",
      "Self-assessment dashboard",
      "Feed optimization tips",
      "Offline mode access"
    ],
    color: "primary",
    link: "/dashboard"
  },
  {
    title: "For Veterinarians",
    emoji: "🩺",
    description: "Faster triage and smarter decision-making with real-time data",
    benefits: [
      "Connected patient management",
      "Risk assessment tools",
      "Treatment protocol library",
      "Farm visit scheduling"
    ],
    color: "secondary",
    link: "/dashboard"
  },
  {
    title: "For Authorities",
    emoji: "🏛️",
    description: "Stronger surveillance and rapid outbreak response capabilities",
    benefits: [
      "Analytic dashboards",
      "Disease database integration",
      "Predictive mapping",
      "Policy compliance reports"
    ],
    color: "accent",
    link: "/dashboard"
  }
];

const Roles = () => {
  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            One Platform,
            <span className="text-gradient"> Three Dashboards</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored experiences for every stakeholder in the livestock ecosystem
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div 
              key={role.title}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover-lift"
            >
              {/* Top accent bar */}
              <div className={`h-1 ${role.color === 'primary' ? 'gradient-primary' : role.color === 'secondary' ? 'gradient-orange' : 'bg-accent'}`} />
              
              <div className="p-8">
                {/* Emoji */}
                <div className="text-5xl mb-4">{role.emoji}</div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {role.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6">
                  {role.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {role.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to={role.link}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    Access Dashboard
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;
