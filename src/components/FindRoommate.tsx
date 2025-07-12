"use client"

import { useState } from "react"
import { Users } from "lucide-react"

const FindRoommate = () => {
  const [hostel, setHostel] = useState("")
  const [roomNumber, setRoomNumber] = useState("")

  const flatmates = [
    {
      location: "Abode Valley",
      flatmatesNeeded: 1,
      type: "Fully Furnished",
      bhk: "2.75 BHK",
      timing: "Shifting May",
      rent: "8000/month",
      gender: "Girls Only",
      email: "ah6323@srmist.edu.in",
      verified: true,
    },
    {
      location: "Estancia",
      flatmatesNeeded: 3,
      type: "Fully Furnished",
      bhk: "3 BHK",
      timing: "Shifting April",
      rent: "12000/month",
      gender: "Boys Only",
      email: "gd3424@srmist.edu.in",
      verified: true,
    },
    {
      location: "Estancia",
      flatmatesNeeded: 3,
      type: "Fully Furnished",
      bhk: "3 BHK",
      timing: "Shifting April",
      rent: "12000/month",
      gender: "Boys Only",
      email: "gd3424@srmist.edu.in",
      verified: true,
    },
    {
      location: "Abode Valley",
      flatmatesNeeded: 1,
      type: "Fully Furnished",
      bhk: "2.75 BHK",
      timing: "Shifting May",
      rent: "8000/month",
      gender: "Girls Only",
      email: "ah6323@srmist.edu.in",
      verified: true,
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF6B6B] mb-2">Find Your Roommate</h1>
        <p className="text-lg text-[#22C55E] mb-6">Not sure who's your roommate? Let's find out.</p>
      </div>

      {/* Search Form */}
      <div className="bg-[#2A2A2E] rounded-2xl p-6 mb-6 border border-[#2D2D30]">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Hostel"
            value={hostel}
            onChange={(e) => setHostel(e.target.value)}
            className="flex-1 bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
          />
          <input
            type="text"
            placeholder="Room Number"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="flex-1 bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
          />
          <button className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg">
            Search
          </button>
        </div>
      </div>

      {/* Search Result */}
      <div className="bg-[#2A2A2E] rounded-2xl p-6 mb-6 border border-[#2D2D30]">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#F4F4F5]">Gaurav Mishra</h3>
            <p className="text-[#A1A1AA]">gm6674@srmist.edu.in</p>
            <p className="text-[#A1A1AA]">CSE w/s Cyber Security</p>
          </div>
        </div>
      </div>

      {/* Look for Roommates/Flatmates */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#F4F4F5]">Look for Roommates/Flatmates</h2>
          <button className="bg-[#FF6B6B] hover:bg-[#EF4444] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg">
            Post Flat Details
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {flatmates.map((flat, index) => (
            <div
              key={index}
              className="bg-[#2A2A2E] rounded-2xl p-5 space-y-4 border border-[#2D2D30] hover:border-[#FF6B6B]/30 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-[#22C55E]">{flat.location}</h3>
                {flat.verified && (
                  <span className="bg-[#3B82F6] text-white text-xs px-2 py-1 rounded-lg font-medium">VERIFIED</span>
                )}
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-[#F4F4F5] font-medium">
                  {flat.flatmatesNeeded} Flatmate{flat.flatmatesNeeded > 1 ? "s" : ""} Needed
                </p>
                <p className="text-[#A1A1AA]">{flat.type}</p>
                <p className="text-[#A1A1AA]">{flat.bhk}</p>
                <p className="text-[#A1A1AA]">{flat.timing}</p>
                <p className="text-[#FF6B6B] font-medium">
                  {flat.rent} | {flat.gender}
                </p>
                <p className="text-[#3B82F6] text-xs">{flat.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FindRoommate
