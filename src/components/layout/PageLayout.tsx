
import { ReactNode, useEffect } from "react";
import BottomNav from "./BottomNav";
import { useLocation } from "react-router-dom";
import { useIsMobile, useResponsiveValue } from "@/hooks/use-mobile";

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
  
  // Use responsive values for padding and max-width
  const responsivePadding = useResponsiveValue("px-3", "px-5", "px-6");
  const responsiveMaxWidth = useResponsiveValue(
    "max-w-full", 
    maxWidth, 
    maxWidth === "max-w-lg" ? "max-w-xl" : maxWidth
  );
  
  // Responsive bottom padding to account for the nav
  const bottomPadding = !noBottomNav && isMobile ? "pb-24" : "pb-10";
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main 
        className={`flex-1 w-full mx-auto ${responsiveMaxWidth} ${responsivePadding} ${bottomPadding} ${fullHeight ? 'h-screen' : ''} ${className}`}
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
