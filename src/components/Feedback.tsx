"use client"

import { Mail, Bug, LayoutPanelTop, Lightbulb, MessageSquare, Instagram, Linkedin, MessageCircle } from "lucide-react"

const Feedback = () => {
  const feedbackTopics = [
    {
      icon: Bug,
      title: "Report an Issue",
      description: "Found problems with roommate matching, mess menus, or other features?"
    },
    {
      icon: LayoutPanelTop,
      title: "UI/UX Suggestions",
      description: "Ideas to improve the interface or user experience"
    },
    {
      icon: Lightbulb,
      title: "Feature Requests",
      description: "Suggest new tools for hostel life or academics"
    },
    {
      icon: MessageSquare,
      title: "General Feedback",
      description: "Share your experience using CampusOrbit"
    }
  ]

  const contactMethods = [
    {
      icon: Mail,
      name: "Email",
      handle: "campusorbit.in@gmail.com",
      action: "mailto:campusorbit.in@gmail.com?subject=CampusOrbit%20Feedback",
      color: "text-red-400"
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@campusorbit.in",
      action: "https://www.instagram.com/campusorbit.in/",
      color: "text-pink-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "CampusOrbit",
      action: "https://www.linkedin.com/company/bitsorbit/",
      color: "text-blue-400"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      handle: "Community Group",
      action: "https://chat.whatsapp.com/HfjGE5yC9qpESZFq6l2wha",
      color: "text-green-400"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      {/* Header Section */}
      <div className="bg-[#2A2A2E] rounded-2xl p-8 border border-[#3A3A3E]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FF6B6B] mb-6">Help Improve CampusOrbit</h1>
        <div className="space-y-4 text-[#E0E0E0] leading-relaxed">
          <p className="text-lg">
            Your suggestions shape CampusOrbit's development. We're building this platform for SRM students, 
            with your input guiding every update.
          </p>
          <p>
            Notice any bugs? Have ideas for new features? Want to suggest improvements? 
            Reach out through any channel below.
          </p>
        </div>
      </div>

      {/* Contact Options */}
      <div className="bg-[#2A2A2E] rounded-2xl p-8 border border-[#3A3A3E]">
        <h2 className="text-2xl font-bold text-[#FF8E8E] mb-6">Connect With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <a
                key={index}
                href={method.action}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E1E22] rounded-xl p-6 border border-[#3A3A3E] hover:border-[#FF8E8E]/40 transition-all duration-200 group"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`p-3 rounded-full bg-[#1E1E22] border ${method.color} border-current`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium text-[#F4F4F5]">{method.name}</h3>
                  <p className="text-[#D1D1D6] text-sm">{method.handle}</p>
                  <div className="text-sm text-[#FF6B6B] font-medium mt-2 group-hover:underline">
                    {method.name === "WhatsApp" ? "Join Group" : "Contact Us"}
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>

      {/* Feedback Topics */}
      <div className="bg-[#2A2A2E] rounded-2xl p-8 border border-[#3A3A3E]">
        <h2 className="text-2xl font-bold text-[#FF8E8E] mb-6">Common Feedback Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {feedbackTopics.map((topic, index) => {
            const Icon = topic.icon
            return (
              <div 
                key={index}
                className="bg-[#1E1E22] rounded-xl p-6 border border-[#3A3A3E] hover:border-[#FF8E8E]/40 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#FF6B6B]/10 rounded-lg">
                    <Icon className="w-6 h-6 text-[#FF6B6B]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#F4F4F5]">{topic.title}</h3>
                    <p className="text-[#D1D1D6] mt-2 text-sm">{topic.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Response Info */}
      <div className="bg-[#2A2A2E] rounded-2xl p-6 border border-[#3A3A3E] text-center">
        <p className="text-[#E0E0E0]">
          We review all feedback weekly. For urgent campus-related issues, please use WhatsApp Community for the fastest response.
        </p>
      </div>
    </div>
  )
}

export default Feedback