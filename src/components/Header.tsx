"use client"
import { Menu, X } from "lucide-react"

interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
  activeSection: string
  setActiveSection: (section: string) => void
}

const Header = ({ sidebarOpen, setSidebarOpen, activeSection, setActiveSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0E0E10]/95 backdrop-blur-md border-b border-[#2A2A2E] h-20">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 h-full">
        <div className="flex items-center space-x-3">
          <img src="https://hanushrajputh.github.io/Cloud/OrbitLogo.png" alt="CampusOrbit" className="h-12 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => setActiveSection("dashboard-home")}
            className={`px-1 py-2 font-medium transition-all duration-200 ${
              activeSection === "dashboard-home"
                ? "text-[#FF6B6B]"
                : "text-[#A1A1AA] hover:text-[#FF6B6B]"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveSection("about")}
            className={`px-1 py-2 font-medium transition-all duration-200 ${
              activeSection === "about"
                ? "text-[#FF6B6B]"
                : "text-[#A1A1AA] hover:text-[#FF6B6B]"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveSection("feedback")}
            className={`px-1 py-2 font-medium transition-all duration-200 ${
              activeSection === "feedback"
                ? "text-[#FF6B6B]"
                : "text-[#A1A1AA] hover:text-[#FF6B6B]"
            }`}
          >
            Feedback
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setActiveSection("dashboard-home")}
            className={`px-1 py-1.5 text-sm font-medium transition-all duration-200 ${
              activeSection === "dashboard-home" ? "text-[#FF6B6B]" : "text-[#A1A1AA] hover:text-[#FF6B6B]"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveSection("about")}
            className={`px-1 py-1.5 text-sm font-medium transition-all duration-200 ${
              activeSection === "about" ? "text-[#FF6B6B]" : "text-[#A1A1AA] hover:text-[#FF6B6B]"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveSection("feedback")}
            className={`px-1 py-1.5 text-sm font-medium transition-all duration-200 ${
              activeSection === "feedback" ? "text-[#FF6B6B]" : "text-[#A1A1AA] hover:text-[#FF6B6B]"
            }`}
          >
            Feedback
          </button>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-[#2A2A2E] transition-colors"
          >
            {sidebarOpen ? <X size={20} className="text-[#F4F4F5]" /> : <Menu size={20} className="text-[#F4F4F5]" />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header