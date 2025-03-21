
import { ReactNode, useEffect } from "react";
import BottomNav from "./BottomNav";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

interface PageLayoutProps {
  children: ReactNode;
  fullHeight?: boolean;
  noBottomNav?: boolean;
  className?: string;
  maxWidth?: string;
}

const PageLayout = ({ 
  children, 
  fullHeight = false, 
  noBottomNav = false,
  className = "",
  maxWidth = "max-w-lg"
}: PageLayoutProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main 
        className={`flex-1 w-full mx-auto ${maxWidth} px-4 sm:px-6 pb-24 ${fullHeight ? 'h-screen' : ''} ${className}`}
      >
        <div className="animate-slide-up">
          {children}
        </div>
      </main>
      {!noBottomNav && <BottomNav />}
    </div>
  );
};

export default PageLayout;
