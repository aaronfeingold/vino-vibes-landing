"use client";

import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

interface VenmoDeepLinkProps {
  username: string;
  className?: string;
  children: React.ReactNode;
}

const VenmoDeepLink: React.FC<VenmoDeepLinkProps> = ({
  username,
  className,
  children,
}) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [showFallbackDialog, setShowFallbackDialog] = useState(false);
  const [appOpenAttempted, setAppOpenAttempted] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined") return false;
      const userAgent = navigator.userAgent || navigator.vendor;
      return /android|iphone|ipad|ipod/i.test(userAgent.toLowerCase());
    };

    setIsMobile(checkMobile());
  }, []);

  // Reset app open attempt when dialog is closed
  useEffect(() => {
    if (!showFallbackDialog) {
      setAppOpenAttempted(false);
    }
  }, [showFallbackDialog]);

  const handleVenmoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile === null) return;
    if (!isMobile) return;
    if (appOpenAttempted) return;

    e.preventDefault();
    setAppOpenAttempted(true);

    const venmoDeepLink = `venmo://users/${username}`;

    // Try to open the app using iframe method
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = venmoDeepLink;
    document.body.appendChild(iframe);

    // Show dialog only if we're still in the same window after delay
    const openedAt = Date.now();
    setTimeout(() => {
      document.body.removeChild(iframe);
      // Only show dialog if we're still in the same window context
      if (document.hasFocus() && Date.now() - openedAt > 2000) {
        setShowFallbackDialog(true);
      }
    }, 2500);
  };

  const handleOpenBrowser = () => {
    window.open(`https://venmo.com/${username}`, "_blank");
    setShowFallbackDialog(false);
  };

  const handleInstallApp = () => {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent.toLowerCase());
    const appStoreUrl = isIOS
      ? "https://apps.apple.com/us/app/venmo/id351727428"
      : "https://play.google.com/store/apps/details?id=com.venmo";

    window.location.href = appStoreUrl;
    setShowFallbackDialog(false);
  };

  return (
    <>
      <a
        href={`https://venmo.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleVenmoClick}
        className={className}
      >
        {children}
      </a>

      <AlertDialog
        open={showFallbackDialog}
        onOpenChange={setShowFallbackDialog}
      >
        <AlertDialogContent className="bg-wine-light border-none max-w-xs">
          <AlertDialogHeader className="space-y-3">
            <AlertDialogTitle className="text-wine-900 text-xl">
              Venmo App Not Found
            </AlertDialogTitle>
            <AlertDialogDescription className="text-pink-900 text-base">
              The Venmo app doesn&apos;t seem to be installed. Would you like to
              install it or continue to the website?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-2">
            <AlertDialogAction
              onClick={handleInstallApp}
              className="bg-wine-900 text-white hover:bg-wine-800 px-4 py-2 rounded-lg"
            >
              Install Venmo App
            </AlertDialogAction>
            <AlertDialogAction
              onClick={handleOpenBrowser}
              className="bg-pink-900 text-white hover:bg-pink-800 px-4 py-2 rounded-lg"
            >
              Open in Browser
            </AlertDialogAction>
            <AlertDialogCancel className="border-2 border-wine-900 text-wine-900 hover:bg-wine-900 hover:text-white px-4 py-2 rounded-lg">
              Cancel
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default VenmoDeepLink;
