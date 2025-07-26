"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import KnowYourCampus from "./components/KnowYourCampus"
import WhatsInMess from "./components/WhatsInMess"
import Resources from "./components/Resources"
import EventsHub from "./components/EventsHub"
import QuickServe from "./components/QuickServe"
import About from "./components/About"
import Feedback from "./components/Feedback"
import Dashboard from "./components/Dashboard" // Import the new Dashboard component
import PWAInstallPrompt from "./components/PWAInstallPrompt"

function App() {
  const [activeSection, setActiveSection] = useState("dashboard-home") // Set default to dashboard-home
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [redirectTriggered, setRedirectTriggered] = useState(false) // To prevent multiple redirects

  useEffect(() => {
    // If "join-community" is still triggered from somewhere else, it will redirect
    if (activeSection === "join-community" && !redirectTriggered) {
      window.open("https://chat.whatsapp.com/HfjGE5yC9qpESZFq6l2wha", "_blank")
      setRedirectTriggered(true) // Mark as triggered
      setActiveSection("dashboard-home") // Revert to dashboard-home after redirect
    } else if (activeSection !== "join-community" && redirectTriggered) {
      setRedirectTriggered(false)
    }
  }, [activeSection, redirectTriggered])

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard-home":
        return <Dashboard setActiveSection={setActiveSection} /> // Pass setActiveSection to Dashboard
      case "whats-in-mess":
        return <WhatsInMess />
      case "events-hub":
        return <EventsHub />
      case "resources":
        return <Resources />
      case "know-your-campus":
        return <KnowYourCampus />
      case "quickserve":
        return <QuickServe />
      case "about":
        return <About />
      case "feedback":
        return <Feedback />
      default:
        return <Dashboard setActiveSection={setActiveSection} /> // Fallback to dashboard
    }
  }

  return (
    <div className="min-h-screen bg-[#0E0E10] text-[#F4F4F5]">
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <div className="flex pt-20">
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {/* Main content area */}
        <main className="flex-1 lg:ml-64 min-h-[calc(100vh-5rem)] overflow-hidden">
          <div className="p-2 sm:p-4 lg:p-6 h-full flex flex-col">{renderContent()}</div>
        </main>
      </div>
      
      {/* PWA Install Prompt */}
      <PWAInstallPrompt />
    </div>
  )
}

export default App
