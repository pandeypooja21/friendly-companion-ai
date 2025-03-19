
import { useState } from "react";
import { User, Bell, Shield, HelpCircle, Moon, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import PageLayout from "@/components/layout/PageLayout";
import { toast } from "sonner";

const SettingsPage = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [emergencyAccess, setEmergencyAccess] = useState(true);
  
  const handleNotifications = (checked: boolean) => {
    setNotifications(checked);
    toast.success(checked ? "Notifications enabled" : "Notifications disabled");
  };
  
  const handleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    toast.success(checked ? "Dark mode enabled" : "Dark mode disabled");
  };
  
  const handleEmergencyAccess = (checked: boolean) => {
    setEmergencyAccess(checked);
    toast.success(checked ? "Emergency access enabled" : "Emergency access disabled");
  };
  
  const settingsGroups = [
    {
      title: "Account",
      items: [
        {
          icon: User,
          color: "text-blue-500",
          bg: "bg-blue-100",
          label: "Personal Information",
          action: <ChevronRight className="h-5 w-5 text-muted-foreground" />,
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          icon: Bell,
          color: "text-purple-500",
          bg: "bg-purple-100",
          label: "Notifications",
          action: (
            <Switch 
              checked={notifications} 
              onCheckedChange={handleNotifications} 
            />
          ),
        },
        {
          icon: Moon,
          color: "text-slate-500",
          bg: "bg-slate-100",
          label: "Dark Mode",
          action: (
            <Switch 
              checked={darkMode} 
              onCheckedChange={handleDarkMode} 
            />
          ),
        },
      ],
    },
    {
      title: "Privacy & Security",
      items: [
        {
          icon: Shield,
          color: "text-green-500",
          bg: "bg-green-100",
          label: "Emergency Contact Access",
          action: (
            <Switch 
              checked={emergencyAccess} 
              onCheckedChange={handleEmergencyAccess} 
            />
          ),
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          icon: HelpCircle,
          color: "text-companion",
          bg: "bg-companion-muted",
          label: "Help & Support",
          action: <ChevronRight className="h-5 w-5 text-muted-foreground" />,
        },
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="py-8 space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        
        {settingsGroups.map((group) => (
          <div key={group.title} className="space-y-3 animate-appear">
            <h2 className="text-lg font-medium text-muted-foreground">{group.title}</h2>
            <Card className="glass-panel border-none">
              <CardContent className="p-0">
                {group.items.map((item, index) => (
                  <div 
                    key={item.label}
                    className="flex items-center justify-between p-4 border-b last:border-b-0 border-border"
                  >
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full ${item.bg}`}>
                        <item.icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <span className="ml-3 font-medium">{item.label}</span>
                    </div>
                    <div>
                      {item.action}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        ))}
        
        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">
            Companion AI • Version 1.0.0
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default SettingsPage;
