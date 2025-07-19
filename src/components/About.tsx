"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, ExternalLink, Github, Linkedin, Instagram } from "lucide-react"

const About = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const founders = [
    {
      name: "Hanush Singh",
      role: "Founder",
      image: "Hanush.png",
      portfolio: "https://hanush.co.in/",
      github: "https://github.com/hanushrajputh",
      linkedin: "https://www.linkedin.com/in/hanushsinghrajputh/",
      instagram: "https://www.instagram.com/hanushsinghrajputh/"
    },
    {
      name: "Gaurav Mishra",
      role: "Designer & Developer",
      image: "Gaurav.png",
      portfolio: "https://gauravmishra08.vercel.app/",
      github: "https://github.com/gauravMishra08",
      linkedin: "https://www.linkedin.com/in/gaurav-mishra-2668691b3/",
      instagram: "https://www.instagram.com/_mishraagaurav/"
    },
    {
      name: "Utkarsh Jaiswal",
      role: "Developer",
      image: "Utkarsh.png",
      portfolio: "https://karshj.framer.website/",
      github: "https://github.com/UtkarshJaiswal1406",
      linkedin: "https://www.linkedin.com/in/1406utkarsh/",
      instagram: "https://www.instagram.com/its_karshj/"
    },
    {
      name: "Saatvik Shashank",
      role: "Developer",
      image: "Saatvik.png",
      portfolio: "https://saatvikss-teal.vercel.app/",
      github: "https://github.com/SaatvikSS",
      linkedin: "https://www.linkedin.com/in/saatvikss/",
      instagram: "https://www.instagram.com/saatvik_ss/"
    },
    {
      name: "Rashmika Das",
      role: "Developer",
      image: "Rashmika.png",
      portfolio: "https://rashmika-portfolio-eight.vercel.app/",
      github: "https://github.com/SillyLlam",
      linkedin: "https://www.linkedin.com/in/rashmika-das-82a08b2b6/",
      instagram: "https://www.instagram.com/rashmiikka/"
    },
  ]

  const faqs = [
    {
      question: "What exactly is CampusOrbit?",
      answer:
        "CampusOrbit is your all-in-one campus companion app that connects all aspects of college life - from academics and hostel living to events and marketplaces. Think of it as your digital campus ecosystem built by students, for students.",
    },
    {
      question: "How is this different from our college portal?",
      answer:
        "Unlike official portals that focus on academics, CampusOrbit integrates everything - find roommates, check mess menus, buy/sell items, discover events, and more. It's designed around actual student needs with a modern, user-friendly interface.",
    },
    {
      question: "How can I find my roommate before hostel check-in?",
      answer:
        "Use the 'Find My Roommate' feature. Just search by your room number or register your details, and if your roommate has done the same, you'll be able to connect.",
    },
    {
      question: "Can I contribute to CampusOrbit's development?",
      answer:
        "Yes! We're open to collaborations. Reach out to us directly for opportunities.",
    },
    {
      question: "Will this work for all SRM campuses?",
      answer: 
      "Currently optimized for SRM KTR, but we're expanding to other SRM campuses soon. Stay tuned for updates!",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      {/* About Section */}
      <div className="bg-[#2A2A2E] rounded-2xl p-8 border border-[#3A3A3E]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FF6B6B] mb-6">About CampusOrbit</h1>
        <div className="space-y-4 text-[#E0E0E0] leading-relaxed">
          <p className="text-lg">
            Born from late-night hostel discussions and countless "there should be an app for this" moments, CampusOrbit is 
            revolutionizing how SRM students navigate college life. We've combined essential services into one 
            intuitive platform.
          </p>
          <p>
            From finding your roommate before move-in day to selling your textbooks after exams - we've got every 
            campus life scenario covered.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#2A2A2E] rounded-2xl p-6 border border-[#3A3A3E]">
          <h2 className="text-2xl font-bold text-[#FF8E8E] mb-4">Our Vision</h2>
          <p className="text-[#E0E0E0] leading-relaxed">
            To create a self-sustaining digital ecosystem where every SRM student can thrive academically, socially, 
            and personally through technology that understands campus life.
          </p>
        </div>

        <div className="bg-[#2A2A2E] rounded-2xl p-6 border border-[#3A3A3E]">
          <h2 className="text-2xl font-bold text-[#FF8E8E] mb-4">The Problem We Solve</h2>
          <p className="text-[#E0E0E0] leading-relaxed">
            College life is fragmented across dozens of groups, portals and notice boards. We consolidate everything - 
            academics, hostels, events, marketplaces - into one seamless experience.
          </p>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="bg-[#2A2A2E] rounded-2xl p-8 border border-[#3A3A3E]">
        <h2 className="text-2xl font-bold text-[#FF8E8E] mb-4">The CampusOrbit Team</h2>
        <p className="text-[#E0E0E0] mb-8">
          A passionate group of SRM students who built what they wished existed. We eat, sleep, and breathe campus life:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-[#1E1E22] rounded-xl p-4 text-center border border-[#3A3A3E] hover:border-[#FF8E8E]/40 transition-all duration-200 group"
            >
              <img
                src={founder.image || "/placeholder.svg"}
                alt={founder.name}
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-[#FF8E8E]/30 group-hover:border-[#FF8E8E]/50 transition-all"
              />
              <h3 className="text-[#F4F4F5] font-bold text-lg">{founder.name}</h3>
              <p className="text-[#D1D1D6] text-sm mb-3">{founder.role}</p>
              
              <div className="flex justify-center gap-3 mt-4">
                <a href={founder.github} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#FF8E8E] transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#FF8E8E] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={founder.instagram} target="_blank" rel="noopener noreferrer" className="text-[#A1A1AA] hover:text-[#FF8E8E] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
              <a 
                href={founder.portfolio} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#A1A1AA] hover:text-[#FF8E8E] transition-colors flex items-center justify-center gap-1 text-xs mt-2"
              >
                View my portfolio
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-[#2A2A2E] rounded-2xl p-8 border border-[#3A3A3E]">
        <h2 className="text-2xl font-bold text-[#FF8E8E] mb-6">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#1E1E22] rounded-xl border border-[#3A3A3E] overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#2A2A2E] transition-colors"
              >
                <h3 className="text-[#FF8E8E] font-medium text-lg">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-[#A1A1AA] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#A1A1AA] flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#E0E0E0] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About