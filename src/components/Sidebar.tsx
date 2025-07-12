import React from 'react';
import { 
  Users, 
  UtensilsCrossed, 
  Calendar, 
  BookOpen, 
  Map, 
  Zap, 
  ShoppingBag, 
  Search, 
  UserPlus 
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar = ({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const menuItems = [
    { id: 'find-roommate', label: 'Find My Roommate', icon: Users },
    { id: 'whats-in-mess', label: "What's in Mess", icon: UtensilsCrossed },
    { id: 'events-hub', label: 'Events Hub', icon: Calendar },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'know-your-campus', label: 'Know Your Campus', icon: Map },
    { id: 'quickserve', label: 'QuickServe', icon: Zap },
    { id: 'marketplace', label: 'Marketplace', icon: ShoppingBag },
    { id: 'lost-found', label: 'Lost & Found', icon: Search },
    { id: 'join-community', label: 'Join Community', icon: UserPlus },
  ];

  const handleItemClick = (itemId: string) => {
    setActiveSection(itemId);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:fixed lg:left-0 z-40 w-64 bg-gray-800 border-r border-gray-700 
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'right-0 translate-x-0' : 'right-0 translate-x-full lg:translate-x-0 lg:right-auto lg:left-0'}
        top-16 lg:top-16 h-[calc(100vh-4rem)]
      `}>
        <nav className="py-4 lg:py-6 h-full overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full flex items-center space-x-3 px-4 lg:px-6 py-3 text-left transition-colors ${
                  isActive
                    ? 'text-red-400 bg-gray-700 border-r-2 border-red-400'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium text-sm lg:text-base">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;