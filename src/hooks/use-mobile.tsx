
import * as React from "react"

// Constants for different breakpoints
export const MOBILE_BREAKPOINT = 768
export const TABLET_BREAKPOINT = 1024
export const DESKTOP_BREAKPOINT = 1280

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Initialize with server-safe default
    return typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Add event listener
    window.addEventListener("resize", checkIsMobile)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return isMobile
}

// Additional hook for tablet detection
export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean>(() => {
    // Initialize with server-safe default
    if (typeof window === 'undefined') return false
    const width = window.innerWidth
    return width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    const checkIsTablet = () => {
      const width = window.innerWidth
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT)
    }
    
    // Add event listener
    window.addEventListener("resize", checkIsTablet)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIsTablet)
  }, [])

  return isTablet
}

// Desktop detection hook
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState<boolean>(() => {
    // Initialize with server-safe default
    return typeof window !== 'undefined' ? window.innerWidth >= DESKTOP_BREAKPOINT : true
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT)
    }
    
    // Add event listener
    window.addEventListener("resize", checkIsDesktop)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIsDesktop)
  }, [])

  return isDesktop
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
