
import { Phone, MessageSquare, Heart, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

interface Contact {
  id: string;
  name: string;
  relation: string;
  phone: string;
  isPrimary: boolean;
}

const EmergencyContacts = () => {
  const contacts: Contact[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      relation: "Daughter",
      phone: "(555) 123-4567",
      isPrimary: true,
    },
    {
      id: "2",
      name: "Michael Johnson",
      relation: "Son",
      phone: "(555) 987-6543",
      isPrimary: false,
    },
    {
      id: "3",
      name: "Dr. Robert Smith",
      relation: "Primary Doctor",
      phone: "(555) 456-7890",
      isPrimary: false,
    },
  ];

  const handleEmergencyCall = (contact: Contact) => {
    toast.success(`Calling ${contact.name}...`, {
      description: `Connecting to ${contact.phone}`,
      icon: <Phone className="h-5 w-5" />,
    });
  };

  const handleMessage = (contact: Contact) => {
    toast.success(`Messaging ${contact.name}...`, {
      description: "Sending your location and status",
      icon: <MessageSquare className="h-5 w-5" />,
    });
  };

  return (
    <div className="space-y-6">
      <div className="animate-appear">
        <Button 
          className="w-full bg-companion-emergency hover:bg-companion-emergency/90 text-white py-6 text-lg rounded-xl shadow-soft"
          onClick={() => handleEmergencyCall(contacts[0])}
        >
          <AlertTriangle className="h-5 w-5 mr-2 animate-pulse" />
          Emergency Assistance
        </Button>
      </div>

      <h2 className="text-2xl font-semibold">Emergency Contacts</h2>

      <div className="grid grid-cols-1 gap-4 animate-appear" style={{ animationDelay: "0.1s" }}>
        {contacts.map((contact) => (
          <Card key={contact.id} className="glass-panel border-none">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center">
                    <h3 className="font-medium text-lg">{contact.name}</h3>
                    {contact.isPrimary && (
                      <div className="ml-2 px-2 py-0.5 bg-companion-accent/10 text-companion-accent rounded-full text-xs flex items-center">
                        <Heart className="h-3 w-3 mr-1" />
                        Primary
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{contact.relation}</p>
                  <p className="text-sm font-medium">{contact.phone}</p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-companion-muted/50 border-none"
                    onClick={() => handleMessage(contact)}
                  >
                    <MessageSquare className="h-5 w-5 text-companion" />
                  </Button>
                  <Button
                    variant="default"
                    size="icon"
                    className="rounded-full bg-companion hover:bg-companion/90"
                    onClick={() => handleEmergencyCall(contact)}
                  >
                    <Phone className="h-5 w-5 text-white" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmergencyContacts;
