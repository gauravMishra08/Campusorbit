"use client"

import { useState } from "react"
import { Search, Plus, MapPin, Calendar, Tag, MessageCircle } from "lucide-react"

const LostFound = () => {
  const [activeTab, setActiveTab] = useState("Lost")
  const [searchTerm, setSearchTerm] = useState("")

  const tabs = ["Lost", "Found"]

  const lostItems = [
    {
      id: 1,
      title: "Black iPhone 14",
      description: "Lost my black iPhone 14 near the library. Has a clear case with stickers.",
      location: "Central Library",
      date: "2 days ago",
      category: "Electronics",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400",
      contact: "Rahul Kumar",
      reward: "₹500 reward",
    },
    {
      id: 2,
      title: "Blue Water Bottle",
      description: "Milton blue water bottle with my name written on it. Lost during sports hour.",
      location: "Sports Complex",
      date: "1 day ago",
      category: "Personal Items",
      image: "https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400",
      contact: "Priya Sharma",
      reward: null,
    },
    {
      id: 3,
      title: "Engineering Notebook",
      description: "Red colored notebook with engineering notes. Very important for exams.",
      location: "Tech Park",
      date: "3 days ago",
      category: "Academic",
      image:
        "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
      contact: "Amit Singh",
      reward: null,
    },
  ]

  const foundItems = [
    {
      id: 4,
      title: "Silver Watch",
      description: "Found a silver watch near the canteen. Looks expensive, owner can contact me.",
      location: "Java Canteen",
      date: "1 day ago",
      category: "Accessories",
      image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400",
      contact: "Vikash Gupta",
    },
    {
      id: 5,
      title: "Red Earphones",
      description: "Found red colored earphones in the computer lab. Still in good condition.",
      location: "Computer Lab",
      date: "4 hours ago",
      category: "Electronics",
      image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400",
      contact: "Sneha Patel",
    },
  ]

  const currentItems = activeTab === "Lost" ? lostItems : foundItems

  const filteredItems = currentItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF6B6B] mb-2">Lost & Found</h1>
        <p className="text-lg text-[#22C55E]">
          Lost something on campus? Post here and get it back. Found something? Help a fellow student!
        </p>
      </div>

      {/* Search and Add Item */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A1A1AA] w-5 h-5" />
          <input
            type="text"
            placeholder="Search lost/found items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#2A2A2E] border border-[#2D2D30] rounded-xl pl-10 pr-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
          />
        </div>
        <button className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 shadow-lg">
          <Plus className="w-5 h-5" />
          Post Item
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              activeTab === tab
                ? "bg-[#22C55E] text-white shadow-lg"
                : "bg-[#2A2A2E] text-[#A1A1AA] hover:bg-[#2D2D30] hover:text-[#F4F4F5]"
            }`}
          >
            {tab} Items
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#2A2A2E] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 border border-[#2D2D30] hover:border-[#FF6B6B]/30"
          >
            <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />

            <div className="p-5 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-[#F4F4F5]">{item.title}</h3>
                <span
                  className={`px-2 py-1 rounded-lg text-xs font-medium ${
                    activeTab === "Lost" ? "bg-[#EF4444] text-white" : "bg-[#22C55E] text-white"
                  }`}
                >
                  {activeTab}
                </span>
              </div>

              <p className="text-[#A1A1AA] text-sm line-clamp-3">{item.description}</p>

              <div className="space-y-2 text-sm text-[#A1A1AA]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span>{item.category}</span>
                </div>
                {activeTab === "Lost" && item.reward && <div className="text-[#FF6B6B] font-medium">{item.reward}</div>}
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-[#3B82F6] hover:bg-[#2563EB] text-white py-2 px-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center gap-2 shadow-lg">
                  <MessageCircle className="w-4 h-4" />
                  Contact {item.contact}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-[#A1A1AA] text-lg">No {activeTab.toLowerCase()} items found matching your search.</p>
          <button className="mt-4 bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200">
            Post the first {activeTab.toLowerCase()} item
          </button>
        </div>
      )}
    </div>
  )
}

export default LostFound
