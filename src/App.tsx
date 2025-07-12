import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import KnowYourCampus from './components/KnowYourCampus';
import WhatsInMess from './components/WhatsInMess';
import Resources from './components/Resources';
import FindRoommate from './components/FindRoommate';
import EventsHub from './components/EventsHub';
import QuickServe from './components/QuickServe';
import Marketplace from './components/Marketplace';
import LostFound from './components/LostFound';
import JoinCommunity from './components/JoinCommunity';
import About from './components/About';
import Feedback from './components/Feedback';

function App() {
  const [activeSection, setActiveSection] = useState('find-roommate');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'find-roommate':
        return <FindRoommate />;
      case 'whats-in-mess':
        return <WhatsInMess />;
      case 'events-hub':
        return <EventsHub />;
      case 'resources':
        return <Resources />;
      case 'know-your-campus':
        return <KnowYourCampus />;
      case 'quickserve':
        return <QuickServe />;
      case 'marketplace':
        return <Marketplace />;
      case 'lost-found':
        return <LostFound />;
      case 'join-community':
        return <JoinCommunity />;
      case 'about':
        return <About />;
      case 'feedback':
        return <Feedback />;
      default:
        return <FindRoommate />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="flex">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="flex-1 p-4 md:p-6 lg:ml-64 min-h-[calc(100vh-4rem)]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;