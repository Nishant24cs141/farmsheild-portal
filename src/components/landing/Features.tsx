import { 
  Shield, 
  Smartphone, 
  Users, 
  Bell, 
  MapPin, 
  BookOpen,
  ClipboardCheck,
  MessageSquare,
  Wifi,
  Languages
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Multilingual SOP Library",
    description: "Easy-to-follow biosecurity guides in local languages with gamified quizzes for better understanding.",
    color: "primary"
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Tracking",
    description: "Digital vaccination logs, hygiene checklists, and complete farm health records in one place.",
    color: "secondary"
  },
  {
    icon: Users,
    title: "Connected Ecosystem",
    description: "Farmer, Veterinarian, and Authority dashboards - all connected for seamless collaboration.",
    color: "accent"
  },
  {
    icon: Bell,
    title: "Real-time Alerts",
    description: "SMS notifications for nearby disease outbreaks and preventive care reminders.",
    color: "secondary"
  },
  {
    icon: MapPin,
    title: "Disease Mapping",
    description: "Interactive maps showing disease spread patterns across regions with predictive analytics.",
    color: "primary"
  },
  {
    icon: Wifi,
    title: "Offline Access",
    description: "Works in low connectivity zones with voice-guided navigation for rural accessibility.",
    color: "accent"
  }
];

const colorClasses = {
  primary: "gradient-primary text-primary-foreground",
  secondary: "gradient-orange text-secondary-foreground",
  accent: "bg-accent text-accent-foreground"
};

const Features = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Key Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Biosecurity
            <span className="text-gradient"> Management</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A modular platform with multilingual training, real-time alerts, secure logs, 
            and predictive analytics designed for India's farming community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "8+", label: "Languages Supported" },
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "<1s", label: "Alert Response" },
            { value: "100%", label: "Data Security" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
