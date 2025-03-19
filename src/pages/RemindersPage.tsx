
import PageLayout from "@/components/layout/PageLayout";
import MedicationReminders from "@/components/reminders/MedicationReminders";

const RemindersPage = () => {
  return (
    <PageLayout>
      <div className="py-8 space-y-6">
        <h1 className="text-3xl font-bold">Reminders</h1>
        <MedicationReminders />
      </div>
    </PageLayout>
  );
};

export default RemindersPage;
