
import PageLayout from "@/components/layout/PageLayout";
import EmergencyContacts from "@/components/emergency/EmergencyContacts";

const EmergencyPage = () => {
  return (
    <PageLayout>
      <div className="py-8 space-y-6">
        <h1 className="text-3xl font-bold">Emergency Services</h1>
        <p className="text-muted-foreground">Quickly connect with your emergency contacts or services</p>
        
        <EmergencyContacts />
      </div>
    </PageLayout>
  );
};

export default EmergencyPage;
