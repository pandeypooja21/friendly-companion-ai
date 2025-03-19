
import { Activity, Heart, Thermometer, Clock, Calendar, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const HealthDashboard = () => {
  const healthMetrics = [
    {
      title: "Heart Rate",
      value: "72",
      unit: "bpm",
      icon: Heart,
      color: "text-companion-emergency",
      progress: 72,
      status: "Normal",
    },
    {
      title: "Temperature",
      value: "98.6",
      unit: "°F",
      icon: Thermometer,
      color: "text-green-500",
      progress: 50,
      status: "Normal",
    },
    {
      title: "Activity",
      value: "1,234",
      unit: "steps",
      icon: Activity,
      color: "text-companion",
      progress: 45,
      status: "Below Target",
    },
    {
      title: "Sleep",
      value: "7.5",
      unit: "hours",
      icon: Clock,
      color: "text-purple-500",
      progress: 80,
      status: "Good",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="glass-panel border-none animate-appear">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-companion" />
            Today's Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {healthMetrics.map((metric) => (
              <div 
                key={metric.title}
                className="bg-white rounded-xl p-4 shadow-soft"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-sm text-muted-foreground">{metric.title}</div>
                    <div className="text-2xl font-medium">
                      {metric.value} <span className="text-sm font-normal">{metric.unit}</span>
                    </div>
                  </div>
                  <div className={`p-2 rounded-full ${metric.color.replace('text-', 'bg-')}/10`}>
                    <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  </div>
                </div>
                <Progress value={metric.progress} className="h-1.5 bg-companion-muted" />
                <div className="mt-2 text-xs text-muted-foreground flex items-center">
                  <div className={`w-2 h-2 rounded-full ${metric.progress > 70 ? 'bg-green-500' : metric.progress > 40 ? 'bg-yellow-500' : 'bg-red-500'} mr-1.5`}></div>
                  {metric.status}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="glass-panel border-none animate-appear" style={{ animationDelay: "0.1s" }}>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center">
            <TrendingUp className="mr-2 h-5 w-5 text-companion" />
            Weekly Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[150px] flex items-end justify-between px-1">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
              <div key={day} className="flex flex-col items-center">
                <div 
                  className="w-8 bg-companion-muted rounded-t-md transition-all duration-500" 
                  style={{ 
                    height: `${Math.floor(60 + Math.random() * 70)}px`,
                    animationDelay: `${i * 0.1}s`
                  }}
                ></div>
                <div className="text-xs mt-2 text-muted-foreground">{day}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthDashboard;
