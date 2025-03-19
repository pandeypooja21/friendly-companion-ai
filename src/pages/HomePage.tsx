
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bell, Heart, MessageCircle, Activity, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import HealthDashboard from "@/components/health/HealthDashboard";
import { cn } from "@/lib/utils";

const HomePage = () => {
  const [greeting, setGreeting] = useState("Good day");
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update time every minute
    
    return () => clearInterval(timer);
  }, []);
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };
  
  const medicationsDue = 2;

  const quickActions = [
    {
      icon: MessageCircle,
      color: "text-companion",
      bg: "bg-companion/10",
      label: "Talk to Companion",
      path: "/companion",
    },
    {
      icon: Bell,
      color: "text-companion-accent",
      bg: "bg-companion-accent/10",
      label: "Medication Reminders",
      path: "/reminders",
      badge: medicationsDue,
    },
    {
      icon: Heart,
      color: "text-companion-emergency",
      bg: "bg-companion-emergency/10",
      label: "Emergency Help",
      path: "/emergency",
    },
    {
      icon: Activity,
      color: "text-green-500",
      bg: "bg-green-500/10",
      label: "Health Status",
      path: "/health",
    },
  ];

  return (
    <PageLayout>
      <div className="py-8 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{greeting}, Alice</h1>
            <p className="text-muted-foreground">{formatDate(currentTime)}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-companion-muted flex items-center justify-center">
            <span className="text-companion font-medium">A</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 animate-appear">
          {quickActions.map((action, index) => (
            <Link key={action.label} to={action.path}>
              <Card className="h-full glass-panel border-none hover:shadow-elevation transition-shadow">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className={cn("p-3 rounded-full my-2", action.bg)}>
                    <action.icon className={cn("h-6 w-6", action.color)} />
                    {action.badge && (
                      <div className="absolute -right-1 -top-1 w-5 h-5 rounded-full bg-companion-emergency text-white text-xs flex items-center justify-center">
                        {action.badge}
                      </div>
                    )}
                  </div>
                  <p className="text-sm font-medium">{action.label}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Health Overview</h2>
            <Button variant="ghost" size="sm">
              <Link to="/health" className="flex items-center">
                See all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <HealthDashboard />
        </div>
        
        <div className="space-y-4 animate-appear" style={{ animationDelay: "0.2s" }}>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Upcoming Reminders</h2>
            <Button variant="ghost" size="sm">
              <Link to="/reminders" className="flex items-center">
                See all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <Card className="glass-panel border-none">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-companion-muted">
                    <Bell className="h-5 w-5 text-companion" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Take Medication</h3>
                    <p className="text-sm text-muted-foreground">Lisinopril - 1 pill</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">8:00 AM</div>
                  <div className="text-xs text-muted-foreground">Today</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-panel border-none">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Activity className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Doctor Appointment</h3>
                    <p className="text-sm text-muted-foreground">Dr. Robert Smith</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">2:30 PM</div>
                  <div className="text-xs text-muted-foreground">Tomorrow</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
};

export default HomePage;
