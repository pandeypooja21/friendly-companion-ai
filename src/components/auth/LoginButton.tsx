
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useToast } from "@/hooks/use-toast";

const LoginButton = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const handleAuthClick = () => {
    if (user) {
      navigate("/settings");
    } else {
      navigate("/auth");
      toast({
        title: "Welcome to Senior Companion",
        description: "Please sign in or register to continue",
      });
    }
  };

  return (
    <Button 
      onClick={handleAuthClick}
      className="bg-companion hover:bg-companion/90 text-white"
    >
      {user ? (
        <>
          <User className="mr-2 h-4 w-4" />
          My Account
        </>
      ) : (
        <>
          <LogIn className="mr-2 h-4 w-4" />
          Login / Register
        </>
      )}
    </Button>
  );
};

export default LoginButton;
