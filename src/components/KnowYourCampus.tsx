"use client"

import { useState } from "react"

const KnowYourCampus = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Academics", "Food", "Hostel & Stay", "Essentials", "Beyond Campus"]

  const locations = [
    {
      id: 1,
      title: "Tech Park (TP)",
      description: "Major hub for CSE/IT/EEE classes. Hosts tech events.",
      image: "https://i.postimg.cc/7LCzxpx8/image-183.png",
      category: "Academics",
      mapLink: "https://goo.gl/maps/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 2,
      title: "Central Library",
      description: "Multi-floor silent zone with Wi‑Fi. Busy during exams.",
      image: "https://i.postimg.cc/jdFdsCC2/image-187.png",
      category: "Academics",
      mapLink: "https://goo.gl/maps/qzYp3vizwEFJiFVw9",
    },
    {
      id: 3,
      title: "University Building (Main Block)",
      description: "Home to admin offices, classrooms & placement cell.",
      image: "https://via.placeholder.com/400",
      category: "Academics",
      mapLink: "https://goo.gl/maps/qzYp3vizwEFJiFVw9",
    },
    {
      id: 4,
      title: "TP Auditorium",
      description: "Venue for technical & cultural fests with modern AV.",
      image: "https://via.placeholder.com/400",
      category: "Academics",
      mapLink: "https://goo.gl/maps/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 5,
      title: "Electrical & Electronics Block",
      description: "Labs & classrooms for EEE/ECE branches.",
      image: "https://via.placeholder.com/400",
      category: "Academics",
      mapLink: "https://goo.gl/maps/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 6,
      title: "Management Block",
      description: "Hosts MBA/BBA classes, departmental offices, seminars.",
      image: "https://via.placeholder.com/400",
      category: "Academics",
      mapLink: "https://goo.gl/maps/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 7,
      title: "UB Canteen",
      description: "Serves South Indian staples & lunch plates.",
      image: "https://via.placeholder.com/400",
      category: "Food",
      mapLink: "https://maps.app.goo.gl/ho1CTqiPgeP1MMZu7",
    },
    {
      id: 8,
      title: "Java Canteen",
      description: "Famous for shawarma rolls, butty rolls & juices.",
      image: "https://i.postimg.cc/RV75YFf2/Rectangle-34625269.png",
      category: "Food",
      mapLink: "https://maps.app.goo.gl/ho1CTqiPgeP1MMZu7",
    },
    {
      id: 9,
      title: "Tech Park Cafeteria",
      description: "650-seat cafeteria on TP ground floor, 7:30 AM–7:30 PM.",
      image: "https://via.placeholder.com/400",
      category: "Food",
      mapLink: "https://maps.app.goo.gl/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 10,
      title: "Spice of Life",
      description: "Indian meals, shakes & snacks near Medical College.",
      image: "https://via.placeholder.com/400",
      category: "Food",
      mapLink: "https://maps.app.goo.gl/ho1CTqiPgeP1MMZu7",
    },
    {
      id: 11,
      title: "Kopperundevi (M Block)",
      description: "Standard non‑AC hostel with shared bathrooms.",
      image: "https://via.placeholder.com/400",
      category: "Hostel & Stay",
      mapLink: "https://maps.app.goo.gl/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 12,
      title: "Nelson Mandela Hostel",
      description: "Spacious, well‑furnished male hostel for seniors.",
      image: "https://i.postimg.cc/MKPXvd3W/image-185.png",
      category: "Hostel & Stay",
      mapLink: "https://maps.app.goo.gl/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 13,
      title: "Senbagam Block",
      description: "Girls’ hostel with decent amenities & proximity.",
      image: "https://via.placeholder.com/400",
      category: "Hostel & Stay",
      mapLink: "https://maps.app.goo.gl/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 14,
      title: "Meenakshi Hostel",
      description: "Girls’ hostel near YouPrints, known for cleanliness.",
      image: "https://via.placeholder.com/400",
      category: "Hostel & Stay",
      mapLink: "https://maps.app.goo.gl/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 15,
      title: "Sannasi A & C",
      description: "AC/Non‑AC options with attached bathrooms.",
      image: "https://via.placeholder.com/400",
      category: "Hostel & Stay",
      mapLink: "https://maps.app.goo.gl/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 16,
      title: "Paari Hostel",
      description: "Non‑AC basic hostel for junior students.",
      image: "https://via.placeholder.com/400",
      category: "Hostel & Stay",
      mapLink: "https://maps.app.goo.gl/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 17,
      title: "Adhiyaman Hostel",
      description: "AC rooms with attached washrooms. Highly competitive.",
      image: "https://via.placeholder.com/400",
      category: "Hostel & Stay",
      mapLink: "https://maps.app.goo.gl/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 18,
      title: "SRM Hospital",
      description: "In‑campus clinic with 24×7 casualty, OPD & pharmacy.",
      image: "https://via.placeholder.com/400",
      category: "Essentials",
      mapLink: "https://maps.app.goo.gl/ho1CTqiPgeP1MMZu7",
    },
    {
      id: 19,
      title: "Durgaswamy Supermarket",
      description: "Groceries, snacks & daily essentials for hostelers.",
      image: "https://via.placeholder.com/400",
      category: "Essentials",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 20,
      title: "YouPrints Xerox Shop",
      description: "Go‑to for urgent printing & photocopy near Meenakshi.",
      image: "https://i.postimg.cc/2jPrJMtL/Rectangle-34625258.png",
      category: "Essentials",
      mapLink: "https://maps.app.goo.gl/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 21,
      title: "ATM",
      description: "Multiple ATMs (Axis, SBI, ICICI) near Arch Gate & UB.",
      image: "https://via.placeholder.com/400",
      category: "Essentials",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 22,
      title: "Arch Gate",
      description: "Main entrance—meetups & pickup point.",
      image: "https://i.postimg.cc/k46vp2VS/image-182.png",
      category: "Essentials",
      mapLink: "https://maps.app.goo.gl/GwtWeGXS8LR4oBTP6",
    },
    {
      id: 23,
      title: "Shiv Temple",
      description: "Serene temple inside campus. Popular before exams.",
      image: "https://via.placeholder.com/400",
      category: "Essentials",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 24,
      title: "Estancia Apartments",
      description: "Premium gated complex opposite SRM.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 25,
      title: "ECR Beach",
      description: "Scenic beach 1–1.5 hr ride—a weekend escape.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 26,
      title: "Mahabalipuram",
      description: "UNESCO World Heritage town ~60 km away.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 27,
      title: "Vandalur Zoo",
      description: "One of India’s largest zoos, 20 min away.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 28,
      title: "VGP Snow Kingdom",
      description: "Indoor snow-themed amusement and photo ops.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 29,
      title: "Hotel Saravana Bhavan",
      description: "Popular veg restaurant near campus.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 30,
      title: "Domino’s",
      description: "Potheri outlet—great for group dinners.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 31,
      title: "KFC",
      description: "Ideal for late-night cravings across Arch Gate.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 32,
      title: "McDonald’s",
      description: "Grab-and-go burgers & coffee.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 33,
      title: "Brew n Bliss Café",
      description: "Cozy café for desserts, coffee, and small hangouts.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 34,
      title: "A2B (Adyar Ananda Bhavan)",
      description: "South Indian restaurant great for breakfast & sweets.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 35,
      title: "Rameshwaram",
      description: "Beach-temple town ~600 km—good for long breaks.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 36,
      title: "Coimbatore",
      description: "Bustling Tier‑2 city—industry, temples, culture.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 37,
      title: "China Town, Potheri",
      description: "Budget Indo‑Chinese spot—fried rice & Manchurian.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 38,
      title: "Gaming Arena, Potheri",
      description: "Local gaming & VR center—PS, PC, FIFA.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
    {
      id: 39,
      title: "Football Ground",
      description: "Main football ground—active during evenings.",
      image: "https://via.placeholder.com/400",
      category: "Beyond Campus",
      mapLink: "https://goo.gl/maps/XYZplaceholder",
    },
  ]

  const filteredLocations = activeFilter === "All" ? locations : locations.filter((location) => location.category === activeFilter)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF6B6B] mb-2">Know Your Campus</h1>
        <p className="text-lg text-[#22C55E]">
          From academic blocks to food joints and nearby essentials - view pictures, descriptions, and map locations.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
              activeFilter === filter
                ? "bg-[#22C55E] text-white shadow-lg"
                : "bg-[#2A2A2E] text-[#A1A1AA] hover:bg-[#2D2D30] hover:text-[#F4F4F5]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredLocations.map((location) => (
          <div
            key={location.id}
            className="bg-[#2A2A2E] rounded-2xl overflow-hidden shadow-lg border border-[#2D2D30] hover:border-[#FF6B6B]/30 transition-all duration-200"
          >
            <img
              src={location.image || "/placeholder.svg"}
              alt={location.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-4">
              <h3 className="text-xl font-bold text-[#22C55E]">{location.title}</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">{location.description}</p>
              <a
                href={location.mapLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-4 rounded-xl transition-all duration-200 font-medium shadow-lg text-center"
              >
                View on Map
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KnowYourCampus
