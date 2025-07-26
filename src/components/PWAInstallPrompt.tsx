import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Zap } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

const PWAInstallPrompt: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [showManualButton, setShowManualButton] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebAppiOS = (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    
    if (isStandalone || isInWebAppiOS) {
      setIsInstalled(true);
      return;
    }

    // Show manual install button after a delay if no prompt is available
    const manualButtonTimer = setTimeout(() => {
      if (!deferredPrompt) {
        setShowManualButton(true);
      }
    }, 5000);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('beforeinstallprompt event fired');
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowManualButton(false);
      
      // Show install prompt after a delay (if user hasn't dismissed it)
      setTimeout(() => {
        const hasShownPrompt = localStorage.getItem('pwa-install-dismissed');
        if (!hasShownPrompt) {
          setShowPrompt(true);
        }
      }, 3000);
    };

    // Listen for app installation
    const handleAppInstalled = () => {
      console.log('App installed');
      setIsInstalled(true);
      setShowPrompt(false);
      setShowManualButton(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      clearTimeout(manualButtonTimer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [deferredPrompt]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Show manual install instructions if no prompt available
      showManualInstallInstructions();
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const showManualInstallInstructions = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    let instructions = '';

    if (userAgent.includes('chrome') && !userAgent.includes('edg')) {
      instructions = 'Click the install icon in the address bar or go to Chrome menu > Install CampusOrbit';
    } else if (userAgent.includes('firefox')) {
      instructions = 'This app can be installed. Look for the install option in your browser menu.';
    } else if (userAgent.includes('safari')) {
      instructions = 'Tap the Share button and select "Add to Home Screen"';
    } else if (userAgent.includes('edg')) {
      instructions = 'Click the install icon in the address bar or go to Edge menu > Apps > Install CampusOrbit';
    } else {
      instructions = 'Look for an install option in your browser menu to add this app to your device.';
    }

    alert(`Install CampusOrbit App\n\n${instructions}`);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    setShowManualButton(false);
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  // Show prompt if available or manual button if not
  const shouldShowPrompt = showPrompt && deferredPrompt;
  const shouldShowManualButton = showManualButton && !deferredPrompt && !isInstalled;

  // Don't show anything if app is installed
  if (isInstalled) {
    return null;
  }

  // Show either the automatic prompt or manual install button
  if (!shouldShowPrompt && !shouldShowManualButton) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-[#2A2A2E] rounded-xl p-4 border border-[#2D2D30] shadow-xl z-50 animate-fade-in-up">
      <div className="group relative overflow-hidden">
        {/* Animated Background on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#FF6B6B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex items-start justify-between mb-3 relative z-10">
          <div className="flex items-center">
            <div className={`w-10 h-10 ${shouldShowPrompt ? 'bg-[#3B82F6]' : 'bg-[#FF6B6B]'} rounded-lg flex items-center justify-center shadow-md mr-3`}>
              {shouldShowPrompt ? (
                <Download className="h-5 w-5 text-white" />
              ) : (
                <Zap className="h-5 w-5 text-white" />
              )}
            </div>
            <h3 className="font-bold text-[#F4F4F5]">
              {shouldShowPrompt ? 'Install CampusOrbit' : 'Add to Home Screen'}
            </h3>
          </div>
          <button
            onClick={handleDismiss}
            className="text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <p className="text-sm text-[#A1A1AA] mb-4 relative z-10">
          {shouldShowPrompt 
            ? 'Install CampusOrbit on your device for quick access and offline functionality.'
            : 'Add CampusOrbit to your home screen for easy access. Use your browser\'s install option.'
          }
        </p>
        
        <div className="flex gap-3 relative z-10">
          <button
            onClick={handleInstallClick}
            className="flex-1 bg-[#FF6B6B] hover:bg-[#EF4444] text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {shouldShowPrompt ? 'Install Now' : 'Show Instructions'}
          </button>
          <button
            onClick={handleDismiss}
            className="px-4 py-2 text-sm text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors"
          >
            Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;