
import { Link, useLocation } from "react-router-dom";
import { Home, Bell, MessageCircle, Activity, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: MessageCircle, label: "Companion", path: "/companion" },
    { icon: Bell, label: "Reminders", path: "/reminders" },
    { icon: Activity, label: "Health", path: "/health" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-xs z-10 animate-appear"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <div className="relative z-20">
        {isMenuOpen && (
          <div className="bg-white rounded-t-3xl shadow-elevation mb-[4.5rem] mx-4 p-6 animate-slide-up">
            <div className="space-y-4">
              <div className="text-xl font-medium mb-4">Menu</div>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center space-x-4 p-3 rounded-xl hover:bg-companion-muted transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="icon-container">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span>{item.label}</span>
                </Link>
              ))}
              <Link
                to="/emergency"
                className="flex items-center space-x-4 p-3 rounded-xl bg-companion-emergency/10 text-companion-emergency hover:bg-companion-emergency/20 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="icon-container bg-companion-emergency/20 text-companion-emergency">
                  <Bell className="w-5 h-5" />
                </div>
                <span>Emergency</span>
              </Link>
              <Link
                to="/settings"
                className="flex items-center space-x-4 p-3 rounded-xl hover:bg-companion-muted transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="icon-container">
                  <Menu className="w-5 h-5" />
                </div>
                <span>Settings</span>
              </Link>
            </div>
          </div>
        )}
        
        <div className="glass-panel rounded-t-3xl mx-4 p-2 flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center p-3 rounded-xl transition-all duration-300",
                  isActive
                    ? "text-companion bg-companion-muted"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon className={cn("w-6 h-6", isActive && "animate-pulse-gentle")} />
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center p-3 rounded-xl text-muted-foreground hover:text-foreground transition-all duration-300"
          >
            <Menu className="w-6 h-6" />
            <span className="text-xs mt-1">More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
