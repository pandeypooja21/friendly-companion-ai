
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <div className="text-center space-y-6 max-w-md animate-appear">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-companion">404</h1>
          <p className="text-2xl font-medium">Page not found</p>
          <p className="text-muted-foreground">
            We couldn't find the page you were looking for. Let's get you back to safety.
          </p>
        </div>
        
        <Button asChild className="rounded-full bg-companion hover:bg-companion/90">
          <Link to="/" className="flex items-center">
            <Home className="mr-2 h-5 w-5" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
