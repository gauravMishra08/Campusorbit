"use client"

import { Users, UtensilsCrossed, Calendar, BookOpen, Map, Zap, ShoppingBag, Search, UserPlus } from "lucide-react"

interface DashboardProps {
  setActiveSection: (section: string) => void
}

const Dashboard = ({ setActiveSection }: DashboardProps) => {
  const features = [
    {
      id: "find-roommate",
      icon: Users,
      title: "Find My Roommate",
      description: "Search by room number or register in seconds to instantly find and connect with your verified roommates.",
      buttonText: "Find Roommate",
      color: "bg-[#3B82F6]",
    },
    {
      id: "whats-in-mess",
      icon: UtensilsCrossed,
      title: "What's in Mess",
      description: "From Idli-Sambhar mornings to Pani Poori snack breaks, get real-time updates straight from your mess.",
      buttonText: "View Menu",
      color: "bg-[#22C55E]",
    },
    {
      id: "events-hub",
      icon: Calendar,
      title: "Events Hub",
      description: "Discover upcoming fests, hackathons, club activities, and workshops. RSVP, share, and set reminders - all from one place.",
      buttonText: "Explore Events",
      color: "bg-[#FF6B6B]",
    },
    {
      id: "resources",
      icon: BookOpen,
      title: "Resources",
      description: "Access semester-wise study materials, PYQs, and CT/SEM prep content for every branch. Your complete academic toolkit.",
      buttonText: "Access Resources",
      color: "bg-[#3B82F6]",
    },
    {
      id: "know-your-campus",
      icon: Map,
      title: "Know Your Campus",
      description:
        "Explore your college like a pro. From academic blocks and food joints to hidden gems and nearby essentials.",
      buttonText: "Explore Campus",
      color: "bg-[#22C55E]",
    },
    {
      id: "quickserve",
      icon: Zap,
      title: "QuickServe",
      description: "Browse outlet menus, compare prices, and call directly to place your order. Stay updated on offers like Buy 1 Get 1.",
      buttonText: "Order Now",
      color: "bg-[#FF6B6B]",
    },
    {
      id: "marketplace",
      icon: ShoppingBag,
      title: "Marketplace",
      description: "Buy, sell, or trade campus essentials - books, gadgets, decor, and more. Verified student listings ensure a safe, smooth exchange.",
      buttonText: "Browse Marketplace",
      color: "bg-[#3B82F6]",
    },
    {
      id: "lost-found",
      icon: Search,
      title: "Lost & Found",
      description: "Lost something on campus? Report, track, or help others reclaim their items. Community-powered recovery made simple.",
      buttonText: "View Lost & Found",
      color: "bg-[#22C55E]",
    },
    {
      id: "join-community",
      icon: UserPlus,
      title: "More Features Coming Soon",
      description: "Something exciting is in the works! Connect with fellow students through our WhatsApp group. Find your tribe and stay updated!",
      buttonText: "Join WhatsApp Group",
      color: "bg-[#FF6B6B]",
    },
  ]

  return (
    <div className="dashboard-bg rounded-xl">
      {/* Improved Announcement Banner */}
      <div className="w-full sticky top-0 z-20 border-y border-white/20 py-2 bg-gradient-to-r from-[#ff0844]/70 via-[#ff4565]/70 to-[#ff0844]/70 backdrop-blur-md">
        <div className="h-10 flex items-center justify-center relative overflow-hidden">
          <div className="marquee-container w-full whitespace-nowrap">
            <div className="marquee-content inline-flex items-center text-white text-base font-medium animate-marquee [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              Find My Roommate: Instantly connect with verified roommates using your room number! &nbsp;&nbsp;&nbsp; 
              What's in Mess: Real-time updates on daily/weekly menus across all meal slots! &nbsp;&nbsp;&nbsp; 
              Events Hub: Discover fests, hackathons & workshops - RSVP with one click! &nbsp;&nbsp;&nbsp; 
              Resources: Semester-wise study materials & PYQs for all branches! &nbsp;&nbsp;&nbsp; 
              Know Your Campus: Interactive map with academic blocks, food joints & hidden gems! &nbsp;&nbsp;&nbsp; 
              QuickServe: Order food in advance & unlock exclusive offers! &nbsp;&nbsp;&nbsp; 
              Marketplace: Buy/sell campus essentials with verified student listings! &nbsp;&nbsp;&nbsp; 
              Lost & Found: Community-powered item recovery system! &nbsp;&nbsp;&nbsp; 
              Coming Soon: Game-changing features for smarter campus life!
            </div>
            {/* Duplicate content for seamless looping */}
            <div className="marquee-content inline-flex items-center text-white text-base font-medium animate-marquee [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              Find My Roommate: Instantly connect with verified roommates using your room number! &nbsp;&nbsp;&nbsp; 
              What's in Mess: Real-time updates on daily/weekly menus across all meal slots! &nbsp;&nbsp;&nbsp; 
              Events Hub: Discover fests, hackathons & workshops - RSVP with one click! &nbsp;&nbsp;&nbsp; 
              Resources: Semester-wise study materials & PYQs for all branches! &nbsp;&nbsp;&nbsp; 
              Know Your Campus: Interactive map with academic blocks, food joints & hidden gems! &nbsp;&nbsp;&nbsp; 
              QuickServe: Order food in advance & unlock exclusive offers! &nbsp;&nbsp;&nbsp; 
              Marketplace: Buy/sell campus essentials with verified student listings! &nbsp;&nbsp;&nbsp; 
              Lost & Found: Community-powered item recovery system! &nbsp;&nbsp;&nbsp; 
              Coming Soon: Game-changing features for smarter campus life!
            </div>
          </div>
          {/* Breaking news effect elements */}
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-black/30 to-transparent"></div>
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-black/30 to-transparent"></div>
          <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2U9IiMxMTExMTEiPjwvcGF0aD4KPC9zdmc+')] opacity-10"></div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                onClick={() => setActiveSection(feature.id)}
                className="group bg-[#2A2A2E] rounded-xl p-4 space-y-3 transition-all duration-300 border border-[#2D2D30] hover:border-[#FF6B6B] hover:scale-[1.02] shadow-lg hover:shadow-xl flex flex-col justify-between text-left cursor-pointer relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${100 * index}ms` }}
              >
                {/* Animated Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#FF6B6B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon with Animation */}
                <div
                  className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center shadow-md mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 relative z-10`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col justify-center relative z-10">
                  <h3 className="text-xl font-bold text-[#F4F4F5] mb-2">{feature.title}</h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">{feature.description}</p>
                </div>

                {/* Button */}
                <button className="w-full bg-[#FF6B6B] hover:bg-[#EF4444] text-white py-3 px-4 rounded-xl text-base font-medium transition-all duration-200 shadow-lg hover:shadow-xl mt-4 transform group-hover:scale-[1.02] relative z-10">
                  {feature.buttonText}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Dashboard