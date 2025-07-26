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
      role: "Full-Stack Designer",
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
      name: "Rashmika Das",
      role: "Contributor",
      image: "Rashmika.png",
      portfolio: "https://rashmika-portfolio-eight.vercel.app/",
      github: "https://github.com/SillyLlam",
      linkedin: "https://www.linkedin.com/in/rashmika-das-82a08b2b6/",
      instagram: "https://www.instagram.com/rashmiikka/"
    },
    {
      name: "Saatvik Shashank",
      role: "Contributor",
      image: "Saatvik.png",
      portfolio: "https://saatvikss-teal.vercel.app/",
      github: "https://github.com/SaatvikSS",
      linkedin: "https://www.linkedin.com/in/saatvikss/",
      instagram: "https://www.instagram.com/saatvik_ss/"
    },

  ]

  const faqs = [
    {
      question: "What exactly is CampusOrbit?",
      answer:
      "CampusOrbit is your all-in-one student life companion. From academics and hostel updates to events and food - it's a unified platform built by SRM students, for SRM students.",
    },
    {
      question: "How is this different from our college portal?",
      answer:
        "Unlike official portals that focus on academics, CampusOrbit brings together mess menus, events, notes, resources, and more - all designed around real student needs with a modern UI.",
    },
    {
      question: "Can I contribute to CampusOrbit's development?",
      answer:
      "Absolutely! We're open to collaborations, contributions, and cool ideas. Just reach out to us directly - we’d love to connect.",
    },
    {
      question: "Will this work for all SRM campuses?",
      answer: 
"Right now, it’s optimized for SRM KTR. But yes, we’re working to expand it across all SRM campuses very soon.",
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
            CampusOrbit was born out of late-night hostel chats and those “why isn’t there an app for this?” moments. 
    It’s our answer to the everyday chaos of college life - combining academics, food, events, and more into one 
    seamless, student-first platform built at SRM, for SRM.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#2A2A2E] rounded-2xl p-6 border border-[#3A3A3E]">
          <h2 className="text-2xl font-bold text-[#FF8E8E] mb-4">Our Vision</h2>
          <p className="text-[#E0E0E0] leading-relaxed">
            To build a digital ecosystem where every SRM student can thrive - academically, socially, and beyond. 
            CampusOrbit isn't just tech; it’s a reflection of real campus life, built to make student life simpler, smarter, and more connected.
          </p>
        </div>

        <div className="bg-[#2A2A2E] rounded-2xl p-6 border border-[#3A3A3E]">
          <h2 className="text-2xl font-bold text-[#FF8E8E] mb-4">The Problem We Solve</h2>
          <p className="text-[#E0E0E0] leading-relaxed">
            Campus life is scattered - notes in one group, mess menu in another, event updates somewhere else. 
  We bring it all together in one clean, easy-to-use space - from academics and hostels to food, events, and more.
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
    className="w-full bg-[#FF6B6B] hover:bg-[#EF4444] text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-md mt-3 transform hover:scale-[1.02] flex items-center justify-center gap-1"
  >
    View Portfolio
    <ExternalLink className="w-4 h-4" />
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