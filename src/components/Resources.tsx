"use client"

import { useState, useEffect } from "react"
import { Download, Loader2 } from "lucide-react"
import Papa from "papaparse"
import astronautImage from '/astronaut.png';


interface SubjectResource {
  semester: string
  subject: string
  ppts: string
  pyqs: string
  syllabus: string
}

interface ParsedResource {
  name: string
  driveId: string
  type: "PPTs" | "PYQs" | "Syllabus"
}

const Resources = () => {
  const [activeSemester, setActiveSemester] = useState("Semester 1")
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [subjects, setSubjects] = useState<SubjectResource[]>([])
  const [resources, setResources] = useState<ParsedResource[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<"All" | "PPTs" | "PYQs" | "Syllabus">("All")
  const [viewerUrl, setViewerUrl] = useState<string | null>(null)

  const semesters = [
    "Semester 1", "Semester 2", "Semester 3", 
    "Semester 4", "Semester 5", "Semester 6"
  ]

  // Extract drive ID from URL
  const extractDriveId = (url: string) => {
    const match = url.match(/\/file\/d\/([^\/]+)/)
    return match ? match[1] : url
  }

  // Fetch and parse CSV data
  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true)
        const response = await fetch('/resources.csv')
        const csvData = await response.text()
        
        Papa.parse<SubjectResource>(csvData, {
          header: true,
          complete: (results) => {
            setSubjects(results.data)
            setLoading(false)
          },
          error: (error) => {
            setError("Failed to parse CSV data")
            setLoading(false)
          }
        })
      } catch (err) {
        setError("Failed to fetch resources")
        setLoading(false)
      }
    }

    fetchResources()
  }, [])

  // Parse resources when subject changes
  useEffect(() => {
    if (!selectedSubject) return

    const subjectData = subjects.find(
      sub => sub.semester === activeSemester && sub.subject === selectedSubject
    )

    if (!subjectData) {
      setResources([])
      return
    }

    const parsedResources: ParsedResource[] = []

    // Parse PPTs
    if (subjectData.ppts) {
      subjectData.ppts.split(',').forEach(item => {
        const parts = item.trim().split('|')
        if (parts.length >= 2) {
          const name = parts[0].trim()
          const driveId = extractDriveId(parts[1].trim())
          parsedResources.push({
            name,
            driveId,
            type: "PPTs"
          })
        }
      })
    }

    // Parse PYQs
    if (subjectData.pyqs) {
      subjectData.pyqs.split(',').forEach(item => {
        const parts = item.trim().split('|')
        if (parts.length >= 2) {
          const name = parts[0].trim()
          const driveId = extractDriveId(parts[1].trim())
          parsedResources.push({
            name,
            driveId,
            type: "PYQs"
          })
        }
      })
    }

    // Parse Syllabus
    if (subjectData.syllabus) {
      const parts = subjectData.syllabus.trim().split('|')
      if (parts.length >= 2) {
        const name = parts[0].trim()
        const driveId = extractDriveId(parts[1].trim())
        parsedResources.push({
          name,
          driveId,
          type: "Syllabus"
        })
      }
    }

    setResources(parsedResources)
  }, [selectedSubject, subjects, activeSemester])

  // Get unique subjects for active semester
  const semesterSubjects = Array.from(new Set(
    subjects
      .filter(subject => subject.semester === activeSemester)
      .map(subject => subject.subject)
  ))

  // Set first subject as default when semester changes
  useEffect(() => {
    if (semesterSubjects.length > 0 && !selectedSubject) {
      setSelectedSubject(semesterSubjects[0])
    } else if (semesterSubjects.length > 0 && !semesterSubjects.includes(selectedSubject!)) {
      setSelectedSubject(semesterSubjects[0])
    }
  }, [activeSemester, semesterSubjects])

  // Get filtered resources
  const filteredResources = filter === "All" 
    ? resources 
    : resources.filter(res => res.type === filter)

  const openSecureViewer = (driveId: string) => {
    setViewerUrl(`https://drive.google.com/file/d/${driveId}/preview`)
  }

  const closeViewer = () => {
    setViewerUrl(null)
  }

  const downloadResource = (driveId: string) => {
    window.open(`https://drive.google.com/uc?export=download&id=${driveId}`, '_blank')
  }

  return (
    <div className="space-y-4 p-2 md:p-4 relative">
      {viewerUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col p-2">
          <div className="flex justify-between items-center mb-2 p-2 bg-[#1E1E22] rounded-lg">
            <h3 className="text-white text-lg">Orbit Resource Viewer</h3>
            <div className="flex gap-2">
              <button 
                onClick={() => downloadResource(viewerUrl.split('/')[5])}
                className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-3 py-1 rounded-lg flex items-center gap-1 text-sm"
              >
                <Download className="w-3 h-3" />
                <span className="hidden sm:inline">Download</span>
              </button>
              <button 
                onClick={closeViewer}
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-3 py-1 rounded-lg text-sm"
              >
                Close
              </button>
            </div>
          </div>
          <div className="flex-1">
            <iframe 
              src={viewerUrl}
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="px-2">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#FF6B6B] mb-1">Resources</h1>
        <p className="text-md text-[#22C55E]">
          All your resources in one place
        </p>
      </div>

      {/* Semester Tabs - Horizontal Scroll for Mobile */}
      <div className="overflow-x-auto pb-2">
        <div className="flex gap-2 w-max px-2">
          {semesters.map((semester) => (
            <button
              key={semester}
              onClick={() => {
                setActiveSemester(semester)
                setSelectedSubject(null)
              }}
              className={`px-3 py-1 rounded-lg font-medium transition-all duration-200 text-sm ${
                activeSemester === semester
                  ? "bg-[#22C55E] text-white shadow-lg"
                  : "bg-[#2A2A2E] text-[#A1A1AA] hover:bg-[#2D2D30] hover:text-[#F4F4F5]"
              }`}
            >
              {semester}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin text-[#3B82F6] h-10 w-10" />
        </div>
      ) : error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-2">
          {error}
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-4 px-2">
          {/* Subjects List */}
          <div className="lg:w-1/3 space-y-2">
            {semesterSubjects.length > 0 ? (
              semesterSubjects.map((subject) => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 text-sm ${
                    selectedSubject === subject
                      ? "bg-[#3B82F6] text-white shadow-lg"
                      : "bg-[#2A2A2E] text-[#A1A1AA] hover:bg-[#2D2D30] hover:text-[#F4F4F5] border border-[#2D2D30]"
                  }`}
                >
                  {subject}
                </button>
              ))
            ) : (
              <div className="bg-[#2A2A2E] text-[#A1A1AA] p-3 rounded-lg border border-[#2D2D30] text-sm">
                Resources for {activeSemester} coming soon!
              </div>
            )}
          </div>

          {/* Subject Details */}
          <div className="lg:w-2/3 bg-[#2A2A2E] rounded-xl p-4 border border-[#2D2D30]">
            {selectedSubject ? (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <h2 className="text-lg font-bold text-[#3B82F6] truncate">{selectedSubject}</h2>
                  <div className="flex gap-1 flex-wrap">
                    <button
                      onClick={() => setFilter("All")}
                      className={`px-2 py-1 rounded-md text-xs ${
                        filter === "All" 
                          ? "bg-[#3B82F6] text-white" 
                          : "bg-[#2A2A2E] text-[#A1A1AA] border border-[#2D2D30]"
                      }`}
                    >
                      All
                    </button>
                    <button
                      onClick={() => setFilter("PPTs")}
                      className={`px-2 py-1 rounded-md text-xs ${
                        filter === "PPTs" 
                          ? "bg-[#22C55E] text-white" 
                          : "bg-[#2A2A2E] text-[#A1A1AA] border border-[#2D2D30]"
                      }`}
                    >
                      PPTs
                    </button>
                    <button
                      onClick={() => setFilter("PYQs")}
                      className={`px-2 py-1 rounded-md text-xs ${
                        filter === "PYQs" 
                          ? "bg-[#3B82F6] text-white" 
                          : "bg-[#2A2A2E] text-[#A1A1AA] border border-[#2D2D30]"
                      }`}
                    >
                      PYQs
                    </button>
                    <button
                      onClick={() => setFilter("Syllabus")}
                      className={`px-2 py-1 rounded-md text-xs ${
                        filter === "Syllabus" 
                          ? "bg-[#FF6B6B] text-white" 
                          : "bg-[#2A2A2E] text-[#A1A1AA] border border-[#2D2D30]"
                      }`}
                    >
                      Syllabus
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  {filteredResources.length > 0 ? (
                    filteredResources.map((resource, index) => (
                      <div 
                        key={index}
                        className="flex items-center justify-between p-3 bg-[#0E0E10] rounded-lg border border-[#2D2D30] hover:bg-[#1E1E22] transition-colors"
                      >
                        <p className="text-[#F4F4F5] text-sm truncate flex-1">{resource.name}</p>
                        <button 
                          onClick={() => openSecureViewer(resource.driveId)}
                          className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-3 py-1 rounded-lg flex items-center gap-1 text-xs sm:text-sm"
                        >
                          <span>View</span>
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="bg-[#0E0E10] rounded-lg p-4 text-center border border-[#2D2D30]">
                      <p className="text-[#A1A1AA] text-sm">
                        {filter === "All" 
                          ? "No resources available yet." 
                          : `No ${filter} available yet.`}
                      </p>
                    </div>
                  )}
                </div>
              </>
            ) : (
<img 
  src={astronautImage} 
  className="w-32 h-32 object-contain opacity-80 mx-auto" 
/>

            
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Resources