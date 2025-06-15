"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  analytics,
  initGA,
  initScrollTracking,
  initTimeTracking,
} from "@/src/lib/analytics";

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Google Analytics
    initGA();

    // Track page view
    analytics.pageView(pathname);

    // Initialize scroll tracking
    const cleanupScroll = initScrollTracking();

    // Initialize time tracking
    const cleanupTime = initTimeTracking();

    // Cleanup on unmount
    return () => {
      cleanupScroll?.();
      cleanupTime?.();
    };
  }, [pathname]);

  return <>{children}</>;
}
