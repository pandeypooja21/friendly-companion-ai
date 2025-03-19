
import { useAuth } from "@/context/AuthContext";
import { LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import UserProfile from "@/components/settings/UserProfile";

const SettingsPage = () => {
  const { signOut, user } = useAuth();

  return (
    <PageLayout>
      <div className="py-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>

        <UserProfile />

        <div className="space-y-4 animate-appear">
          <h2 className="text-2xl font-semibold flex items-center">
            <Settings className="mr-2 h-5 w-5" />
            Account Settings
          </h2>

          <Button 
            onClick={signOut}
            variant="outline" 
            className="w-full flex items-center justify-center text-companion-emergency"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default SettingsPage;
