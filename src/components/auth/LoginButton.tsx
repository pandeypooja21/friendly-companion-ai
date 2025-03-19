
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <Button 
      onClick={() => navigate("/auth")}
      className="bg-companion hover:bg-companion/90 text-white"
    >
      <LogIn className="mr-2 h-4 w-4" />
      Login / Register
    </Button>
  );
};

export default LoginButton;
