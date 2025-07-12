"use client"

import { useState } from "react"
import { Eye } from "lucide-react"

const Resources = () => {
  const [activeSemester, setActiveSemester] = useState("Semester 1")
  const [selectedSubject, setSelectedSubject] = useState("Calculus and Linear Algebra")

  const semesters = ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6"]

  const subjects = [
    "Calculus and Linear Algebra",
    "Communicative English",
    "Electrical and Electronics Engineering",
    "Engineering Graphics and Design",
    "Programming for Problem Solving",
    "Semiconductor Physics and Computational Methods",
  ]

  const units = [
    { name: "Unit 1: Matrices", type: "PPTs" },
    { name: "Unit 2: Functions Of Several Variables", type: "PYQs" },
    { name: "Unit 3: Ordinary Differential Equations", type: "Syllabus" },
    { name: "Unit 4: Differential Calculus Applications", type: "PPTs" },
    { name: "Unit 5: Sequence And Series", type: "PYQs" },
  ]

  return (
    <div className="space-y-8 p-4 md:p-6">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF6B6B] mb-2">Resources</h1>
        <p className="text-lg text-[#22C55E]">
          Your complete academic toolkit, curated and shared by students like you.
        </p>
      </div>

      {/* Semester Tabs */}
      <div className="flex flex-wrap gap-2">
        {semesters.map((semester) => (
          <button
            key={semester}
            onClick={() => setActiveSemester(semester)}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 text-sm lg:text-base ${
              activeSemester === semester
                ? "bg-[#22C55E] text-white shadow-lg"
                : "bg-[#2A2A2E] text-[#A1A1AA] hover:bg-[#2D2D30] hover:text-[#F4F4F5]"
            }`}
          >
            {semester}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Subjects List */}
        <div className="lg:col-span-1 space-y-3 overflow-y-auto max-h-[60vh]">
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                selectedSubject === subject
                  ? "bg-[#3B82F6] text-white shadow-lg"
                  : "bg-[#2A2A2E] text-[#A1A1AA] hover:bg-[#2D2D30] hover:text-[#F4F4F5] border border-[#2D2D30]"
              }`}
            >
              <span className="font-medium text-sm lg:text-base">{subject}</span>
            </button>
          ))}
        </div>

        {/* Subject Details */}
        <div className="lg:col-span-2 bg-[#2A2A2E] rounded-2xl p-6 border border-[#2D2D30] flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <h2 className="text-xl lg:text-2xl font-bold text-[#3B82F6]">{selectedSubject}</h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#22C55E] text-white px-3 py-1 rounded-lg text-sm font-medium">PPTs</span>
              <span className="bg-[#3B82F6] text-white px-3 py-1 rounded-lg text-sm font-medium">PYQs</span>
              <span className="bg-[#FF6B6B] text-white px-3 py-1 rounded-lg text-sm font-medium">Syllabus</span>
            </div>
          </div>

          <div className="space-y-3 flex-1 overflow-y-auto max-h-[50vh]">
            {units.map((unit, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#0E0E10] rounded-xl p-4 gap-3 border border-[#2D2D30]"
              >
                <div className="flex-1">
                  <h3 className="text-[#F4F4F5] font-medium text-sm lg:text-base">{unit.name}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      unit.type === "PPTs"
                        ? "bg-[#22C55E] text-white"
                        : unit.type === "PYQs"
                          ? "bg-[#3B82F6] text-white"
                          : "bg-[#FF6B6B] text-white"
                    }`}
                  >
                    {unit.type}
                  </span>
                  <button className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 shadow-lg">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resources