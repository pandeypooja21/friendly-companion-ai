
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bell, Heart, MessageCircle, Activity, ArrowRight, Info, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import PageLayout from "@/components/layout/PageLayout";
import HealthDashboard from "@/components/health/HealthDashboard";
import { cn } from "@/lib/utils";

// Mock user data - this would come from a real backend in production
const userData = {
  name: "Alice Johnson",
  age: 72,
  profilePic: null, // Would be a URL in a real app
  lastCheckup: "2023-08-15",
  healthStatus: "Good",
  medications: [
    { name: "Lisinopril", dose: "10mg", time: "8:00 AM", taken: false },
    { name: "Metformin", dose: "500mg", time: "6:00 PM", taken: false }
  ],
  appointments: [
    { doctor: "Dr. Robert Smith", specialty: "Cardiology", date: "2023-09-05", time: "2:30 PM" }
  ],
  vitalSigns: {
    bloodPressure: "120/80",
    heartRate: 72,
    bloodSugar: 110,
    temperature: 98.6
  }
};

const HomePage = () => {
  const [greeting, setGreeting] = useState("Good day");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showNotification, setShowNotification] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
    
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update time every minute

    // Simulate a notification after 5 seconds
    const notificationTimer = setTimeout(() => {
      setShowNotification(true);
      toast({
        title: "Medication Reminder",
        description: "It's time to take your Lisinopril (10mg)",
        variant: "default",
      });
    }, 5000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(notificationTimer);
    };
  }, [toast]);
  
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

  const getUserHealthStatusClass = (status: string) => {
    switch (status.toLowerCase()) {
      case "good":
        return "health-status-good";
      case "fair":
        return "health-status-warning";
      case "poor":
        return "health-status-alert";
      default:
        return "health-status-good";
    }
  };

  return (
    <PageLayout>
      <div className="py-8 space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">
              {greeting}, <span className="text-companion">{userData.name.split(" ")[0]}</span>
            </h1>
            <p className="text-muted-foreground">{formatDate(currentTime)}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-companion-muted flex items-center justify-center">
            {userData.profilePic ? (
              <img src={userData.profilePic} alt="Profile" className="w-full h-full rounded-full object-cover" />
            ) : (
              <User className="text-companion h-6 w-6" />
            )}
          </div>
        </div>
        
        <Card className="glass-panel border-none animate-appear">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-lg">Your Health Summary</h3>
                <div className="flex items-center mt-2 space-x-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Overall Status</p>
                    <span className={cn("inline-block mt-1", getUserHealthStatusClass(userData.healthStatus))}>
                      {userData.healthStatus}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Heart Rate</p>
                    <p className="font-medium flex items-center">
                      <Heart className="h-3 w-3 text-companion-emergency mr-1" />
                      {userData.vitalSigns.heartRate} bpm
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">BP</p>
                    <p className="font-medium">{userData.vitalSigns.bloodPressure}</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/health" className="flex items-center text-companion">
                  <Info className="mr-1 h-4 w-4" /> Details
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-2 gap-4 animate-appear">
          {quickActions.map((action, index) => (
            <Link key={action.label} to={action.path}>
              <Card className="h-full glass-panel border-none hover:shadow-elevation transition-shadow">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className={cn("p-3 rounded-full my-2 relative", action.bg)}>
                    <action.icon className={cn("h-6 w-6", action.color)} />
                    {action.badge && showNotification && (
                      <div className="notification-badge">
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
