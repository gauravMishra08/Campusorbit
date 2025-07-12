import React from 'react';
import { Menu, X, Orbit } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ sidebarOpen, setSidebarOpen, activeSection, setActiveSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F0F]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-3 transition-transform hover:scale-105">
          <a href="/" className="flex items-center space-x-2 focus:outline-none">
            <img 
              src="https://hanushrajputh.github.io/Cloud/OrbitLogo.png" 
              alt="Orbit" 
              className="h-8 w-auto"
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => setActiveSection('about')}
            className={`font-medium transition-colors focus:outline-none ${
              activeSection === 'about' ? 'text-[#FF5E5B]' : 'text-white hover:text-[#FF5E5B]'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => setActiveSection('feedback')}
            className={`font-medium transition-colors focus:outline-none ${
              activeSection === 'feedback' ? 'text-[#FF5E5B]' : 'text-white hover:text-[#FF5E5B]'
            }`}
          >
            Feedback
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center space-x-4">
          <button 
            onClick={() => setActiveSection('about')}
            className={`font-medium transition-colors text-sm focus:outline-none ${
              activeSection === 'about' ? 'text-[#FF5E5B]' : 'text-white hover:text-[#FF5E5B]'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => setActiveSection('feedback')}
            className={`font-medium transition-colors text-sm focus:outline-none ${
              activeSection === 'feedback' ? 'text-[#FF5E5B]' : 'text-white hover:text-[#FF5E5B]'
            }`}
          >
            Feedback
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 bg-[#1A1A1A] rounded-lg border border-gray-700 hover:bg-[#2A2A2A] transition-colors ml-2"
          >
            {sidebarOpen ? (
              <X size={20} className="text-white" />
            ) : (
              <Menu size={20} className="text-white" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;