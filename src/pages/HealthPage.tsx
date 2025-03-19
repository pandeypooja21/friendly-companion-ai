
import PageLayout from "@/components/layout/PageLayout";
import HealthDashboard from "@/components/health/HealthDashboard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Stethoscope, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HealthPage = () => {
  return (
    <PageLayout>
      <div className="py-8 space-y-6">
        <h1 className="text-3xl font-bold">Health Tracking</h1>
        
        <HealthDashboard />
        
        <h2 className="text-2xl font-semibold">Upcoming Appointments</h2>
        
        <div className="space-y-4 animate-appear" style={{ animationDelay: "0.1s" }}>
          <Card className="glass-panel border-none">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Stethoscope className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Check-up Appointment</h3>
                    <p className="text-sm text-muted-foreground">Dr. Robert Smith - Cardiologist</p>
                    <div className="mt-1 flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-1 text-companion" />
                      <span className="text-muted-foreground">Tomorrow, 2:30 PM</span>
                    </div>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="rounded-full h-8 bg-companion hover:bg-companion/90"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  Call
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-panel border-none">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-100">
                    <Stethoscope className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Physical Therapy</h3>
                    <p className="text-sm text-muted-foreground">Dr. Lisa Jones - Physical Therapist</p>
                    <div className="mt-1 flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-1 text-companion" />
                      <span className="text-muted-foreground">Friday, 10:00 AM</span>
                    </div>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="rounded-full h-8 bg-companion hover:bg-companion/90"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="rounded-full">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule New Appointment
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default HealthPage;
