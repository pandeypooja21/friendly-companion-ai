
import * as React from "react"

// Constants for different breakpoints
export const MOBILE_BREAKPOINT = 768
export const TABLET_BREAKPOINT = 1024

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initial check
    checkIsMobile()
    
    // Add event listener
    window.addEventListener("resize", checkIsMobile)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return !!isMobile
}

// Additional hook for tablet detection
export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkIsTablet = () => {
      const width = window.innerWidth
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT)
    }
    
    // Initial check
    checkIsTablet()
    
    // Add event listener
    window.addEventListener("resize", checkIsTablet)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIsTablet)
  }, [])

  return !!isTablet
}

// Responsive value hook that returns different values based on screen size
export function useResponsiveValue<T>(
  mobileValue: T,
  tabletValue: T,
  desktopValue: T
): T {
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  
  if (isMobile) return mobileValue
  if (isTablet) return tabletValue
  return desktopValue
}
