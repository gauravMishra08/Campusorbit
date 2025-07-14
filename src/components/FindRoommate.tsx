"use client"

import { useState } from "react"
import { Users, Mail, ShieldCheck, Home, UserPlus, Info } from "lucide-react"

type Hostel = {
  id: string
  name: string
  gender: 'Male' | 'Female' | 'Mixed'
}

type Roommate = {
  id: string
  name: string
  email: string
  instagram?: string
  phone?: string
  course: string
  year: string
  hostel: string
  roomNumber: string
  addedOn: string
  verified: boolean
}

type FlatmatePost = {
  id: string
  location: string
  address: string
  flatmatesNeeded: number
  type: string
  bhk: string
  availableFrom: string
  rent: string
  genderPreference: string
  contact: string
  postedBy: string
  postedOn: string
  verified: boolean
}

const FindRoommate = () => {
  // Hostel data
  const hostels: Hostel[] = [
    { id: 'h1', name: 'SRM Hostel - Block A (Male)', gender: 'Male' },
    { id: 'h2', name: 'SRM Hostel - Block B (Male)', gender: 'Male' },
    { id: 'h3', name: 'SRM Hostel - Block C (Female)', gender: 'Female' },
    { id: 'h4', name: 'SRM Hostel - Block D (Female)', gender: 'Female' },
    { id: 'h5', name: 'SRM Hostel - Block E (Mixed)', gender: 'Mixed' },
    { id: 'h6', name: 'Abode Valley (Private)', gender: 'Mixed' },
    { id: 'h7', name: 'Estancia (Private)', gender: 'Mixed' },
    { id: 'h8', name: 'Green Fields (Private)', gender: 'Mixed' },
  ]

  // Dummy roommate data
  const dummyRoommates: Roommate[] = [
    {
      id: 'r1',
      name: 'Gaurav Mishra',
      email: 'gm6674@srmist.edu.in',
      instagram: '@gauravmishra',
      phone: '+91 9876543210',
      course: 'CSE w/s Cyber Security',
      year: '2nd Year',
      hostel: 'SRM Hostel - Block A (Male)',
      roomNumber: 'B-204',
      addedOn: '2023-05-15',
      verified: true,
    },
    {
      id: 'r2',
      name: 'Priya Sharma',
      email: 'ps1234@srmist.edu.in',
      instagram: '@priyasharma',
      course: 'Computer Science',
      year: '3rd Year',
      hostel: 'SRM Hostel - Block C (Female)',
      roomNumber: 'G-105',
      addedOn: '2023-06-20',
      verified: true,
    },
    {
      id: 'r3',
      name: 'Rahul Verma',
      email: 'rv5678@srmist.edu.in',
      phone: '+91 8765432109',
      course: 'Mechanical Engineering',
      year: '1st Year',
      hostel: 'SRM Hostel - Block B (Male)',
      roomNumber: 'C-302',
      addedOn: '2023-07-10',
      verified: false,
    },
  ]

  // Dummy flatmate posts
  const initialFlatmatePosts: FlatmatePost[] = [
    {
      id: 'f1',
      location: 'Abode Valley',
      address: 'Block 12, Room 304, Abode Valley, Kattankulathur',
      flatmatesNeeded: 1,
      type: 'Fully Furnished',
      bhk: '2.75 BHK',
      availableFrom: '2023-05-01',
      rent: '8000/month',
      genderPreference: 'Female Only',
      contact: 'ah6323@srmist.edu.in',
      postedBy: 'Ananya H',
      postedOn: '2023-04-15',
      verified: true,
    },
    {
      id: 'f2',
      location: 'Estancia',
      address: 'Tower B, Flat 502, Estancia, Guduvanchery',
      flatmatesNeeded: 3,
      type: 'Fully Furnished',
      bhk: '3 BHK',
      availableFrom: '2023-04-20',
      rent: '12000/month',
      genderPreference: 'Male Only',
      contact: 'gd3424@srmist.edu.in',
      postedBy: 'Gaurav D',
      postedOn: '2023-04-10',
      verified: true,
    },
  ]

  // State management
  const [selectedHostel, setSelectedHostel] = useState('')
  const [roomNumber, setRoomNumber] = useState('')
  const [searchResult, setSearchResult] = useState<Roommate | null>(null)
  const [searchError, setSearchError] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [newRoommate, setNewRoommate] = useState({
    name: '',
    email: '',
    instagram: '',
    phone: '',
    course: '',
    year: '',
    hostel: '',
    roomNumber: '',
  })
  const [showPostForm, setShowPostForm] = useState(false)
  const [newFlatPost, setNewFlatPost] = useState({
    location: '',
    address: '',
    flatmatesNeeded: 1,
    type: '',
    bhk: '',
    availableFrom: '',
    rent: '',
    genderPreference: '',
    contact: '',
  })
  const [flatmatePosts, setFlatmatePosts] = useState(initialFlatmatePosts)

  // Handle hostel selection
  const handleHostelSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedHostel(e.target.value)
    setNewRoommate({ ...newRoommate, hostel: e.target.value })
  }

  // Search for roommate
  const handleSearch = () => {
    setSearchError('')
    if (!selectedHostel || !roomNumber) {
      setSearchError('Please select hostel and enter room number')
      return
    }

    // Simulate API call with timeout
    setTimeout(() => {
      const foundRoommate = dummyRoommates.find(
        r => r.hostel === selectedHostel && 
             r.roomNumber.toLowerCase() === roomNumber.toLowerCase()
      )
      
      if (foundRoommate) {
        setSearchResult(foundRoommate)
      } else {
        setSearchError(`No roommate found in ${selectedHostel}, Room ${roomNumber}`)
        setSearchResult(null)
        setShowAddForm(true)
      }
    }, 800)
  }

  // Add new roommate
  const handleAddRoommate = () => {
    if (!newRoommate.name || !newRoommate.email || !newRoommate.course || !newRoommate.year) {
      setSearchError('Please fill all required fields')
      return
    }

    // In real app, you would send this to backend
    const addedRoommate: Roommate = {
      id: `r${dummyRoommates.length + 1}`,
      ...newRoommate,
      hostel: selectedHostel,
      roomNumber: roomNumber,
      addedOn: new Date().toISOString().split('T')[0],
      verified: false,
    }

    console.log("Added roommate:", addedRoommate)
    setSearchResult(addedRoommate)
    setShowAddForm(false)
    setSearchError('')
    alert('Your details have been added! Your roommate will see this information.')
  }

  // Post new flat
  const handlePostFlat = () => {
    if (!newFlatPost.location || !newFlatPost.address || !newFlatPost.type || 
        !newFlatPost.bhk || !newFlatPost.availableFrom || !newFlatPost.rent || 
        !newFlatPost.genderPreference || !newFlatPost.contact) {
      setSearchError('Please fill all required fields')
      return
    }

    const newPost: FlatmatePost = {
      id: `f${flatmatePosts.length + 1}`,
      ...newFlatPost,
      postedBy: "You", // In real app, this would be current user's name
      postedOn: new Date().toISOString().split('T')[0],
      verified: false,
    }

    setFlatmatePosts([...flatmatePosts, newPost])
    setShowPostForm(false)
    setSearchError('')
    alert('Your flat post has been added!')
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF6B6B] mb-2">
        Find Your Roommate
        </h1>
        <p className="text-lg text-[#22C55E] mb-6">
        Not sure who's your roommate? Let's find out.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="bg-[#2A2A2E] rounded-2xl p-4 border border-[#2D2D30]">
        <div className="flex items-start space-x-3">
          <p className="text-sm text-[#A1A1AA]">
            Disclaimer: The information you provide will be visible to potential roommates. 
            Please ensure all details are accurate.
          </p>
        </div>
      </div>

      {/* Find Roommate Section */}
      <div className="bg-[#2A2A2E] rounded-2xl p-6 border border-[#2D2D30]">
        <div className="flex items-center space-x-3 mb-4">
          <Users className="w-6 h-6 text-[#3B82F6]" />
          <h2 className="text-xl font-bold text-[#F4F4F5]">Find My Roommate</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Select Hostel</label>
            <select
              value={selectedHostel}
              onChange={handleHostelSelect}
              className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] focus:outline-none focus:border-[#22C55E] transition-colors"
            >
              <option value="">Select your hostel</option>
              {hostels.map((hostel) => (
                <option key={hostel.id} value={hostel.name}>{hostel.name}</option>
              ))}
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Room Number</label>
            <input
              type="text"
              placeholder="e.g., B-204"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
            />
          </div>
          <div className="col-span-1 flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg"
            >
              Find Roommate
            </button>
          </div>
        </div>

        {searchError && (
          <div className="text-[#FF6B6B] mb-4 text-sm">{searchError}</div>
        )}

        {/* Search Result or Add Form */}
        {searchResult ? (
          <div className="bg-[#1E1E22] rounded-xl p-5 border border-[#2D2D30] animate-fade-in">
            <div className="flex items-start space-x-4">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[#F4F4F5]">{searchResult.name}</h3>
                </div>
                <p className="text-[#A1A1AA]">{searchResult.email}</p>
                <p className="text-[#A1A1AA]">{searchResult.course} • {searchResult.year}</p>
                <p className="text-[#A1A1AA] mt-1">
                  {searchResult.hostel}, Room {searchResult.roomNumber}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {searchResult.instagram && (
                    <a href={`https://instagram.com/${searchResult.instagram.replace('@', '')}`} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="bg-[#0E0E10] text-[#3B82F6] px-3 py-1 rounded-lg text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      {searchResult.instagram}
                    </a>
                  )}
                  {searchResult.phone && (
                    <a href={`tel:${searchResult.phone}`} 
                       className="bg-[#0E0E10] text-[#22C55E] px-3 py-1 rounded-lg text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                      </svg>
                      {searchResult.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : showAddForm && (
          <div className="bg-[#1E1E22] rounded-xl p-5 border border-[#2D2D30] animate-fade-in">
            <h3 className="text-lg font-bold text-[#F4F4F5] mb-4">
              Add Your Details (Room {roomNumber}, {selectedHostel})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Full Name*</label>
                <input
                  type="text"
                  value={newRoommate.name}
                  onChange={(e) => setNewRoommate({...newRoommate, name: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">SRM Email*</label>
                <input
                  type="email"
                  value={newRoommate.email}
                  onChange={(e) => setNewRoommate({...newRoommate, email: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
                  placeholder="abc1234@srmist.edu.in"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Instagram (optional)</label>
                <input
                  type="text"
                  value={newRoommate.instagram}
                  onChange={(e) => setNewRoommate({...newRoommate, instagram: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
                  placeholder="@username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Phone (optional)</label>
                <input
                  type="text"
                  value={newRoommate.phone}
                  onChange={(e) => setNewRoommate({...newRoommate, phone: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Course*</label>
                <input
                  type="text"
                  value={newRoommate.course}
                  onChange={(e) => setNewRoommate({...newRoommate, course: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
                  placeholder="e.g., CSE w/s Cyber Security"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Year*</label>
                <select
                  value={newRoommate.year}
                  onChange={(e) => setNewRoommate({...newRoommate, year: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] focus:outline-none focus:border-[#22C55E] transition-colors"
                >
                  <option value="">Select year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowAddForm(false)}
                className="bg-[#2A2A2E] hover:bg-[#3A3A3E] text-white px-6 py-2 rounded-xl font-medium transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleAddRoommate}
                className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg"
              >
                Add My Details
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Find Flatmate Section */}
      <div className="bg-[#2A2A2E] rounded-2xl p-6 border border-[#2D2D30] mt-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Home className="w-6 h-6 text-[#3B82F6]" />
            <h2 className="text-xl font-bold text-[#F4F4F5]">Find Flatmates</h2>
          </div>
          <button
            onClick={() => setShowPostForm(!showPostForm)}
            className="bg-[#FF6B6B] hover:bg-[#EF4444] text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg flex items-center"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            {showPostForm ? 'Cancel' : 'Post Flat Details'}
          </button>
        </div>

        {/* Post Flat Form */}
        {showPostForm && (
          <div className="bg-[#1E1E22] rounded-xl p-5 border border-[#2D2D30] mb-6 animate-fade-in">
            <h3 className="text-lg font-bold text-[#F4F4F5] mb-4">Post Your Flat Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Location*</label>
                <input
                  type="text"
                  value={newFlatPost.location}
                  onChange={(e) => setNewFlatPost({...newFlatPost, location: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
                  placeholder="e.g., Abode Valley"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Flatmates Needed*</label>
                <select
                  value={newFlatPost.flatmatesNeeded}
                  onChange={(e) => setNewFlatPost({...newFlatPost, flatmatesNeeded: parseInt(e.target.value)})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] focus:outline-none focus:border-[#22C55E] transition-colors"
                >
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num} value={num}>{num} Flatmate{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Full Address*</label>
                <input
                  type="text"
                  value={newFlatPost.address}
                  onChange={(e) => setNewFlatPost({...newFlatPost, address: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
                  placeholder="Block, Floor, Flat Number, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Type*</label>
                <select
                  value={newFlatPost.type}
                  onChange={(e) => setNewFlatPost({...newFlatPost, type: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] focus:outline-none focus:border-[#22C55E] transition-colors"
                >
                  <option value="">Select type</option>
                  <option value="Fully Furnished">Fully Furnished</option>
                  <option value="Semi-Furnished">Semi-Furnished</option>
                  <option value="Unfurnished">Unfurnished</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">BHK*</label>
                <select
                  value={newFlatPost.bhk}
                  onChange={(e) => setNewFlatPost({...newFlatPost, bhk: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] focus:outline-none focus:border-[#22C55E] transition-colors"
                >
                  <option value="">Select BHK</option>
                  <option value="1 BHK">1 BHK</option>
                  <option value="2 BHK">2 BHK</option>
                  <option value="3 BHK">3 BHK</option>
                  <option value="4 BHK">4 BHK</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Available From*</label>
                <input
                  type="date"
                  value={newFlatPost.availableFrom}
                  onChange={(e) => setNewFlatPost({...newFlatPost, availableFrom: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Rent (per person)*</label>
                <input
                  type="text"
                  value={newFlatPost.rent}
                  onChange={(e) => setNewFlatPost({...newFlatPost, rent: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
                  placeholder="e.g., 8000/month"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Gender Preference*</label>
                <select
                  value={newFlatPost.genderPreference}
                  onChange={(e) => setNewFlatPost({...newFlatPost, genderPreference: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] focus:outline-none focus:border-[#22C55E] transition-colors"
                >
                  <option value="">Select preference</option>
                  <option value="Male Only">Male Only</option>
                  <option value="Female Only">Female Only</option>
                  <option value="No Preference">No Preference</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#A1A1AA] mb-1">Contact Info*</label>
                <input
                  type="text"
                  value={newFlatPost.contact}
                  onChange={(e) => setNewFlatPost({...newFlatPost, contact: e.target.value})}
                  className="w-full bg-[#0E0E10] border border-[#2D2D30] rounded-xl px-4 py-3 text-[#F4F4F5] placeholder-[#A1A1AA] focus:outline-none focus:border-[#22C55E] transition-colors"
                  placeholder="Email or phone number"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setShowPostForm(false)}
                className="bg-[#2A2A2E] hover:bg-[#3A3A3E] text-white px-6 py-2 rounded-xl font-medium transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handlePostFlat}
                className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg"
              >
                Post Details
              </button>
            </div>
          </div>
        )}

        {/* Flatmate Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {flatmatePosts.map((flat) => (
            <div
              key={flat.id}
              className="bg-[#1E1E22] rounded-xl p-5 border border-[#2D2D30] hover:border-[#FF6B6B]/30 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-[#22C55E]">{flat.location}</h3>
              </div>
              <p className="text-sm text-[#A1A1AA] mb-2">{flat.address}</p>
              <div className="space-y-2 text-sm mb-4">
                <p className="text-[#F4F4F5] font-medium">
                  {flat.flatmatesNeeded} Flatmate{flat.flatmatesNeeded > 1 ? 's' : ''} Needed
                </p>
                <p className="text-[#A1A1AA]">{flat.type} • {flat.bhk}</p>
                <p className="text-[#A1A1AA]">Available from: {flat.availableFrom}</p>
                <p className="text-[#FF6B6B] font-medium">
                  {flat.rent} • {flat.genderPreference}
                </p>
              </div>
              <button className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-2 rounded-lg text-sm transition-colors flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Contact: {flat.contact}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FindRoommate