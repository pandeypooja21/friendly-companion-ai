
import { useState } from "react";
import { Sun, Moon, Coffee, Clock, Check, Plus, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Medication {
  id: string;
  name: string;
  time: string;
  period: "morning" | "afternoon" | "evening" | "night";
  taken: boolean;
}

const MedicationReminders = () => {
  const [medications, setMedications] = useState<Medication[]>([
    {
      id: "1",
      name: "Lisinopril",
      time: "8:00 AM",
      period: "morning",
      taken: false,
    },
    {
      id: "2",
      name: "Metformin",
      time: "1:00 PM",
      period: "afternoon",
      taken: true,
    },
    {
      id: "3",
      name: "Simvastatin",
      time: "6:00 PM",
      period: "evening",
      taken: false,
    },
    {
      id: "4",
      name: "Aspirin",
      time: "9:00 PM",
      period: "night",
      taken: false,
    },
  ]);

  const toggleMedication = (id: string) => {
    setMedications(
      medications.map((med) =>
        med.id === id ? { ...med, taken: !med.taken } : med
      )
    );
  };

  const getPeriodIcon = (period: string) => {
    switch (period) {
      case "morning":
        return <Sun className="h-5 w-5 text-yellow-500" />;
      case "afternoon":
        return <Coffee className="h-5 w-5 text-orange-500" />;
      case "evening":
        return <Clock className="h-5 w-5 text-blue-500" />;
      case "night":
        return <Moon className="h-5 w-5 text-purple-500" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Today's Medications</h2>
        <Button variant="outline" size="sm" className="rounded-full">
          <Plus className="h-4 w-4 mr-1" /> Add
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {medications.map((medication) => (
          <Card 
            key={medication.id} 
            className={cn(
              "glass-panel border-none transition-all duration-300 animate-appear",
              medication.taken && "bg-muted/40"
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={cn(
                    "p-3 rounded-full",
                    medication.taken ? "bg-green-100" : `bg-companion-muted`
                  )}>
                    {medication.taken ? 
                      <Check className="h-5 w-5 text-green-500" /> : 
                      getPeriodIcon(medication.period)
                    }
                  </div>
                  <div>
                    <h3 
                      className={cn(
                        "font-medium",
                        medication.taken && "line-through text-muted-foreground"
                      )}
                    >
                      {medication.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{medication.time}</p>
                  </div>
                </div>
                <Button
                  variant={medication.taken ? "outline" : "default"}
                  size="sm"
                  className={cn(
                    "rounded-full",
                    !medication.taken && "bg-companion hover:bg-companion/90"
                  )}
                  onClick={() => toggleMedication(medication.id)}
                >
                  {medication.taken ? (
                    <>
                      <X className="h-4 w-4 mr-1" /> Undo
                    </>
                  ) : (
                    <>
                      <Check className="h-4 w-4 mr-1" /> Take
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MedicationReminders;
