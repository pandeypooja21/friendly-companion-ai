
import { ReactNode, useEffect } from "react";
import BottomNav from "./BottomNav";
import { useLocation } from "react-router-dom";

interface PageLayoutProps {
  children: ReactNode;
  fullHeight?: boolean;
  noBottomNav?: boolean;
  className?: string;
}

const PageLayout = ({ 
  children, 
  fullHeight = false, 
  noBottomNav = false,
  className = ""
}: PageLayoutProps) => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main 
        className={`flex-1 w-full mx-auto max-w-lg px-4 pb-24 ${fullHeight ? 'h-screen' : ''} ${className}`}
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
