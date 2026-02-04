import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/landing/Footer";
import {
  MapPin,
  Search,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  Filter,
  Layers,
  RefreshCw,
  Info
} from "lucide-react";

const outbreaks = [
  {
    id: 1,
    disease: "Avian Influenza (H5N1)",
    location: "Nashik, Maharashtra",
    severity: "high",
    affectedFarms: 12,
    date: "Feb 2, 2026",
    status: "active",
    coordinates: { lat: 19.9975, lng: 73.7898 }
  },
  {
    id: 2,
    disease: "African Swine Fever",
    location: "Mizoram",
    severity: "high",
    affectedFarms: 8,
    date: "Jan 28, 2026",
    status: "contained",
    coordinates: { lat: 23.1645, lng: 92.9376 }
  },
  {
    id: 3,
    disease: "Newcastle Disease",
    location: "Punjab",
    severity: "medium",
    affectedFarms: 5,
    date: "Jan 25, 2026",
    status: "active",
    coordinates: { lat: 31.1471, lng: 75.3412 }
  },
  {
    id: 4,
    disease: "Porcine Reproductive Syndrome",
    location: "Assam",
    severity: "low",
    affectedFarms: 3,
    date: "Jan 20, 2026",
    status: "resolved",
    coordinates: { lat: 26.2006, lng: 92.9376 }
  },
];

const stats = [
  { label: "Active Outbreaks", value: "4", color: "secondary" },
  { label: "Affected Districts", value: "12", color: "warning" },
  { label: "Farms at Risk", value: "156", color: "accent" },
  { label: "Resolved This Month", value: "8", color: "primary" },
];

const severityColors = {
  high: "bg-destructive text-destructive-foreground",
  medium: "bg-secondary text-secondary-foreground",
  low: "bg-primary text-primary-foreground"
};

const statusIcons = {
  active: AlertTriangle,
  contained: AlertCircle,
  resolved: CheckCircle2
};

const DiseaseMap = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 animate-fade-in">
            <div>
              <Badge className="mb-4 gradient-orange text-secondary-foreground">
                <MapPin className="w-3 h-3 mr-1" />
                Real-time Tracking
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Disease Outbreak Map
              </h1>
              <p className="text-muted-foreground">
                Monitor disease outbreaks across India with real-time updates and predictive analytics
              </p>
            </div>
            <Button className="gradient-primary">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Data
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-4 text-center">
                  <p className={`text-3xl font-bold ${
                    stat.color === "secondary" ? "text-secondary" :
                    stat.color === "warning" ? "text-warning" :
                    stat.color === "accent" ? "text-accent" :
                    "text-primary"
                  }`}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map Placeholder */}
            <Card className="lg:col-span-2 animate-fade-in delay-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>India Disease Map</CardTitle>
                  <CardDescription>Interactive map showing outbreak locations</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Layers className="w-4 h-4 mr-1" />
                    Layers
                  </Button>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-1" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {/* Map Visualization */}
                <div className="relative aspect-[16/10] bg-muted/30 rounded-xl overflow-hidden">
                  {/* India Map SVG Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 800 700" className="w-full h-full opacity-20">
                      <path
                        d="M400,50 C550,50 650,150 700,250 C750,350 700,450 650,500 C600,550 500,600 400,650 C300,600 200,550 150,500 C100,450 50,350 100,250 C150,150 250,50 400,50 Z"
                        fill="currentColor"
                        className="text-primary"
                      />
                    </svg>
                  </div>
                  
                  {/* Outbreak Markers */}
                  {outbreaks.map((outbreak, index) => (
                    <div
                      key={outbreak.id}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                      style={{
                        left: `${20 + index * 20}%`,
                        top: `${30 + index * 15}%`
                      }}
                    >
                      <div className={`w-6 h-6 rounded-full ${
                        outbreak.severity === "high" ? "bg-destructive" :
                        outbreak.severity === "medium" ? "bg-secondary" :
                        "bg-primary"
                      } flex items-center justify-center shadow-lg`}>
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                      <div className={`absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-xs font-medium ${
                        outbreak.severity === "high" ? "bg-destructive text-destructive-foreground" :
                        outbreak.severity === "medium" ? "bg-secondary text-secondary-foreground" :
                        "bg-primary text-primary-foreground"
                      }`}>
                        {outbreak.location.split(",")[0]}
                      </div>
                    </div>
                  ))}

                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm p-4 rounded-lg border border-border">
                    <p className="text-xs font-semibold text-foreground mb-2">Severity Level</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-3 h-3 rounded-full bg-destructive" />
                        <span className="text-muted-foreground">High Risk</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-3 h-3 rounded-full bg-secondary" />
                        <span className="text-muted-foreground">Medium Risk</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="w-3 h-3 rounded-full bg-primary" />
                        <span className="text-muted-foreground">Low Risk</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Outbreak List */}
            <Card className="animate-fade-in delay-300">
              <CardHeader>
                <CardTitle>Active Outbreaks</CardTitle>
                <div className="relative mt-2">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {outbreaks.map((outbreak) => {
                  const StatusIcon = statusIcons[outbreak.status as keyof typeof statusIcons];
                  return (
                    <div 
                      key={outbreak.id}
                      className="p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <StatusIcon className={`w-4 h-4 ${
                            outbreak.status === "active" ? "text-destructive" :
                            outbreak.status === "contained" ? "text-secondary" :
                            "text-primary"
                          }`} />
                          <Badge className={severityColors[outbreak.severity as keyof typeof severityColors]}>
                            {outbreak.severity.toUpperCase()}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">{outbreak.date}</span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">{outbreak.disease}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {outbreak.location}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {outbreak.affectedFarms} farms affected
                      </p>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Alert Banner */}
          <Card className="mt-8 border-secondary/50 bg-secondary/5 animate-fade-in delay-400">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl gradient-orange flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">SMS Alerts Enabled</h4>
                <p className="text-sm text-muted-foreground">
                  You will receive SMS notifications for any new outbreaks within 50km of your farm location.
                </p>
              </div>
              <Button variant="outline" size="sm">
                Manage Alerts
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DiseaseMap;
