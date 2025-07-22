import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

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
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center">
          {shouldShowPrompt ? (
            <Download className="h-5 w-5 text-blue-600 mr-2" />
          ) : (
            <Smartphone className="h-5 w-5 text-blue-600 mr-2" />
          )}
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {shouldShowPrompt ? 'Install CampusOrbit' : 'Add to Device'}
          </h3>
        </div>
        <button
          onClick={handleDismiss}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        {shouldShowPrompt 
          ? 'Install CampusOrbit on your device for quick access and offline functionality.'
          : 'Add CampusOrbit to your home screen for easy access. Use your browser\'s install option.'
        }
      </p>
      
      <div className="flex gap-2">
        <button
          onClick={handleInstallClick}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
        >
          {shouldShowPrompt ? 'Install App' : 'Show Instructions'}
        </button>
        <button
          onClick={handleDismiss}
          className="px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        >
          Not now
        </button>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
