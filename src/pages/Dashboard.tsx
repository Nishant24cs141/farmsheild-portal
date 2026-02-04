import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Shield,
  Home,
  BookOpen,
  ClipboardCheck,
  Bell,
  MapPin,
  Settings,
  LogOut,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  ChevronRight,
  Menu,
  X,
  Stethoscope,
  Building2
} from "lucide-react";

// Sidebar Navigation Items
const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
  { icon: BookOpen, label: "Training", href: "/training" },
  { icon: ClipboardCheck, label: "Compliance", href: "/compliance" },
  { icon: Bell, label: "Alerts", href: "/alerts", badge: 3 },
  { icon: MapPin, label: "Disease Map", href: "/map" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

// Stats Cards Data
const stats = [
  {
    title: "Total Farms",
    value: "1,234",
    change: "+12%",
    trend: "up",
    icon: Building2,
    color: "primary"
  },
  {
    title: "Compliance Rate",
    value: "94.5%",
    change: "+2.3%",
    trend: "up",
    icon: CheckCircle2,
    color: "success"
  },
  {
    title: "Active Alerts",
    value: "7",
    change: "-3",
    trend: "down",
    icon: AlertTriangle,
    color: "warning"
  },
  {
    title: "Veterinarians",
    value: "156",
    change: "+8",
    trend: "up",
    icon: Stethoscope,
    color: "accent"
  },
];

// Recent Activities
const activities = [
  {
    id: 1,
    type: "alert",
    message: "New disease outbreak reported in Nashik district",
    time: "2 hours ago",
    icon: AlertTriangle,
    color: "warning"
  },
  {
    id: 2,
    type: "success",
    message: "Farm #456 completed vaccination schedule",
    time: "4 hours ago",
    icon: CheckCircle2,
    color: "success"
  },
  {
    id: 3,
    type: "info",
    message: "New biosecurity SOP published for poultry",
    time: "6 hours ago",
    icon: BookOpen,
    color: "info"
  },
  {
    id: 4,
    type: "alert",
    message: "Hygiene inspection due for 12 farms",
    time: "1 day ago",
    icon: ClipboardCheck,
    color: "secondary"
  },
];

// Upcoming Tasks
const tasks = [
  { id: 1, title: "Vaccination Drive - Zone A", date: "Feb 5, 2026", progress: 75 },
  { id: 2, title: "Monthly Hygiene Audit", date: "Feb 10, 2026", progress: 30 },
  { id: 3, title: "Staff Training Session", date: "Feb 15, 2026", progress: 0 },
];

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside 
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-sidebar transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-20"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              {sidebarOpen && (
                <div>
                  <span className="text-lg font-bold text-sidebar-foreground">BioSecure</span>
                  <p className="text-xs text-sidebar-foreground/60">Farm Portal</p>
                </div>
              )}
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  item.active 
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-md" 
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && (
                  <>
                    <span className="font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-sidebar-accent">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                RS
              </div>
              {sidebarOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-sidebar-foreground truncate">Raj Sharma</p>
                  <p className="text-xs text-sidebar-foreground/60">Farm Manager</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="w-10 h-10 rounded-lg hover:bg-muted flex items-center justify-center transition-colors"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, Raj! Here's your farm overview.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Notifications */}
              <button className="relative w-10 h-10 rounded-lg hover:bg-muted flex items-center justify-center transition-colors">
                <Bell className="w-5 h-5 text-foreground" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary" />
              </button>

              {/* Language */}
              <Button variant="outline" size="sm" className="hidden md:flex">
                🇮🇳 हिंदी
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6 space-y-6">
          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={stat.title} className="hover-lift animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      <p className={`text-sm mt-1 flex items-center gap-1 ${
                        stat.trend === "up" ? "text-primary" : "text-secondary"
                      }`}>
                        <TrendingUp className={`w-4 h-4 ${stat.trend === "down" ? "rotate-180" : ""}`} />
                        {stat.change} this month
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      stat.color === "primary" ? "gradient-primary text-primary-foreground" :
                      stat.color === "success" ? "bg-primary/10 text-primary" :
                      stat.color === "warning" ? "gradient-orange text-secondary-foreground" :
                      "bg-accent/10 text-accent"
                    }`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <Card className="lg:col-span-2 animate-fade-in delay-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Recent Activity
                  <Button variant="ghost" size="sm" className="text-primary">
                    View All
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {activities.map((activity) => (
                  <div 
                    key={activity.id}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activity.color === "warning" ? "bg-warning/10 text-warning" :
                      activity.color === "success" ? "bg-primary/10 text-primary" :
                      activity.color === "info" ? "bg-info/10 text-info" :
                      "bg-secondary/10 text-secondary"
                    }`}>
                      <activity.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">{activity.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card className="animate-fade-in delay-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Upcoming Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground">{task.title}</p>
                      <span className="text-xs text-muted-foreground">{task.date}</span>
                    </div>
                    <Progress value={task.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">{task.progress}% complete</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="animate-fade-in delay-400">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks you can perform right away</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: ClipboardCheck, label: "Log Vaccination", color: "primary" },
                  { icon: AlertTriangle, label: "Report Issue", color: "secondary" },
                  { icon: BookOpen, label: "View SOPs", color: "accent" },
                  { icon: Users, label: "Contact Vet", color: "primary" }
                ].map((action) => (
                  <Button
                    key={action.label}
                    variant="outline"
                    className="h-auto py-6 flex-col gap-3 hover-lift"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      action.color === "primary" ? "gradient-primary text-primary-foreground" :
                      action.color === "secondary" ? "gradient-orange text-secondary-foreground" :
                      "bg-accent text-accent-foreground"
                    }`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <span className="font-medium">{action.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
