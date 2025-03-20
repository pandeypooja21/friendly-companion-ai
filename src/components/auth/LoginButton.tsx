
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const LoginButton = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleAuthClick = () => {
    navigate(user ? "/settings" : "/auth");
  };

  return (
    <Button 
      onClick={handleAuthClick}
      className="bg-companion hover:bg-companion/90 text-white"
    >
      <LogIn className="mr-2 h-4 w-4" />
      {user ? "My Account" : "Login / Register"}
    </Button>
  );
};

export default LoginButton;
