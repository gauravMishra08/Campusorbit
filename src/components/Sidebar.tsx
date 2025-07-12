"use client"
import { Users, UtensilsCrossed, Calendar, BookOpen, Map, Zap, ShoppingBag, Search, UserPlus } from "lucide-react"

interface SidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const Sidebar = ({ activeSection, setActiveSection, sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const menuItems = [
    { id: "find-roommate", label: "Find My Roommate", icon: Users, color: "#3B82F6" },
    { id: "whats-in-mess", label: "What's in Mess", icon: UtensilsCrossed, color: "#22C55E" },
    { id: "events-hub", label: "Events Hub", icon: Calendar, color: "#FF6B6B" },
    { id: "resources", label: "Resources", icon: BookOpen, color: "#3B82F6" },
    { id: "know-your-campus", label: "Know Your Campus", icon: Map, color: "#22C55E" },
    { id: "quickserve", label: "QuickServe", icon: Zap, color: "#FF6B6B" },
    { id: "marketplace", label: "Marketplace", icon: ShoppingBag, color: "#3B82F6" },
    { id: "lost-found", label: "Lost & Found", icon: Search, color: "#EF4444" },
    { id: "join-community", label: "Join Community", icon: UserPlus, color: "#22C55E" },
  ]

  const handleItemClick = (itemId: string) => {
    setActiveSection(itemId)
    setSidebarOpen(false)
  }

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed z-50 w-64 bg-[#0E0E10] border-r border-[#2A2A2E]
        transform transition-transform duration-300 ease-in-out
        top-20 bottom-0 overflow-y-auto {/* Reverted top for header only */}
        lg:left-0 lg:translate-x-0
        ${sidebarOpen ? "right-0 translate-x-0" : "right-0 translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="p-4 h-full flex flex-col">

          <nav className="space-y-1 flex-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                    isActive
                      ? "bg-[#2A2A2E] text-[#F4F4F5] shadow-lg border-l-4 border-[#FF6B6B]"
                      : "text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-[#2A2A2E]/50"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      isActive ? "bg-[#FF6B6B]/20" : "bg-[#2D2D30] group-hover:bg-[#2D2D30]"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${isActive ? "text-[#FF6B6B]" : "text-[#A1A1AA] group-hover:text-[#F4F4F5]"}`}
                    />
                  </div>
                  <span className="font-medium text-sm">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Sidebar