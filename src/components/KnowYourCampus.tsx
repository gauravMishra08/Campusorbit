"use client"

import { useState } from "react"

const KnowYourCampus = () => {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Academics", "Food", "Hostel & Stay", "Essentials", "Beyond Campus"]

  const locations = [
    {
      id: 1,
      title: "Arch Gate",
      description: "Main entry point. Food delivery guys wait here with orders.",
      image: "https://i.postimg.cc/cCpvyLjh/pic3.jpg",
      category: "Essentials",
      mapLink: "https://maps.app.goo.gl/DDVKYpqKpWwB69Pi9",
    },
    {
      id: 2,
      title: "SRM Hospital",
      description: "In‑campus clinic with 24×7 casualty, OPD & pharmacy.",
      image: "https://i.postimg.cc/pXKT5x3N/0408fecb-4d79-4a74-b7fd-b61c6aafef7a.jpg",
      category: "Essentials",
      mapLink: "https://maps.app.goo.gl/23ymGnuk2BgwGiVa8",
    },
    {
      id: 3,
      title: "Durgaswamy",
      description: "Overpriced but convenient. Stocks chips, soap, and cheap stationery.",
      image: "https://i.postimg.cc/rFGVFjtM/durgaswamy-supermarket-kattankolathur-chengalpattu-supermarkets-na8ccoj.avif",
      category: "Essentials",
      mapLink: "https://maps.app.goo.gl/3tKJ8CEmGpU6dFWp7",
    },
    {
      id: 4,
      title: "Tech Park (TP)",
      description: "Engineering 2nd/3rd yr classes; food court on ground floor.",
      image: "https://i.postimg.cc/NGzFP209/tech-park.jpg",
      category: "Academics",
      mapLink: "https://maps.app.goo.gl/hSgfo6oYMgAGU4pr7",
    },
    {
      id: 5,
      title: "Tech Park Cafeteria",
      description: "100-seat cafeteria on TP ground floor, 7:30 AM-4:30 PM.",
      image: "https://i.postimg.cc/mg85Q9Rk/food-court.jpg",
      category: "Food",
      mapLink: "https://maps.app.goo.gl/ay98XB3fmpU8ZHjFA",
    },
    {
      id: 6,
      title: "Central Library",
      description: "Multi-floor silent zone with Wi‑Fi. Busy during exams.",
      image: "https://i.postimg.cc/QxS3nRm6/3417862014-a4708d1a51-b.jpg",
      category: "Academics",
      mapLink: "https://maps.app.goo.gl/nnnTc2atCi4Zn3us6",
    },
    {
      id: 7,
      title: "University Building",
      description: "Home to admin offices, classrooms & central library.",
      image: "https://i.postimg.cc/pdHJh6bH/Screenshot-2025-07-14-214850.png",
      category: "Academics",
      mapLink: "https://maps.app.goo.gl/VP2TPDtLYuUJ8drS6",
    },
    {
      id: 8,
      title: "YouPrints Xerox Shop",
      description: "Go‑to for urgent printing & photocopy near Meenakshi.",
      image: "https://i.postimg.cc/CxWmPGmn/Screenshot-2025-07-14-231824.png",
      category: "Essentials",
      mapLink: "https://maps.app.goo.gl/TkCreS9VoZEyCFuP6",
    },
    {
      id: 9,
      title: "Java Canteen",
      description: "Famous for rolls & lime juices. Near Clock Tower. Closes 7 PM",
      image: "https://i.postimg.cc/RV75YFf2/Rectangle-34625269.png",
      category: "Food",
      mapLink: "https://maps.app.goo.gl/XAHuKaZCWHP8ZtqA8",
    },
    {
      id: 10,
      title: "UB Canteen",
      description: "Mess-style South Indian. With the capacity of over 150 students.",
      image: "https://i.postimg.cc/q7wZx3Tg/Screenshot-2025-07-14-215229.png",
      category: "Food",
      mapLink: "https://maps.app.goo.gl/6WA1TKsA1o9yPgjCA",
    },
    {
      id: 11,
      title: "Slice of Life",
      description: "Indian meals & snacks. Medical College side 5-min walk from TP.",
      image: "https://i.postimg.cc/pd223F0k/481903410-1119970829928205-5035039138980332897-n-1.jpg",
      category: "Food",
      mapLink: "https://maps.app.goo.gl/XPwVMFpmfGtinsg3A",
    },
    {
      id: 12,
      title: "Estancia Apartments",
      description: "Premium gated complex opposite SRM (2 km away). ₹2–3L/year.",
      image: "https://i.postimg.cc/7Y17zjWR/estancia-tower-3-guduvanchery-chengalpattu-63v1ufyypd.avif",
      category: "Beyond Campus",
      mapLink: "https://maps.app.goo.gl/6b6jgzKcBmoKbvhw7",
    },
    {
      id: 13,
      title: "KFC",
      description: "Ideal for late-night cravings across Arch Gate.",
      image: "https://i.postimg.cc/T2NmJrdV/KFC-Chizza-851x315px-2-19-06-25-07-27-24.jpg",
      category: "Beyond Campus",
      mapLink: "https://maps.app.goo.gl/p57Z2KW2KuzgHips8",
    },
    {
      id: 14,
      title: "Domino's",
      description: "Guduvanchery outlet-great for group dinners.",
      image: "https://i.postimg.cc/264cB0R7/468862621-10162636247147745-924446671252180210-n.jpg",
      category: "Beyond Campus",
      mapLink: "https://maps.app.goo.gl/T2B8ozZhEWug3uYa6",
    },
    {
      id: 15,
      title: "McDonald's",
      description: "Grab-and-go burgers & coffee",
      image: "https://i.postimg.cc/qMdtLjfC/30265379-422027744919322-671988667576745984-n.jpg",
      category: "Beyond Campus",
      mapLink: "https://maps.app.goo.gl/x6r1XxoLRQ5wJ8Fb6",
    },
    {
      id: 16,
      title: "A2B",
      description: "South Indian restaurant",
      image: "https://i.postimg.cc/yYPNTKXw/adyar-ananda-bhavan-potheri-chengalpattu-sweet-shops-k9h1ct5s8o-250.jpg",
      category: "Beyond Campus",
      mapLink: "https://maps.app.goo.gl/KABzFK6C7VXwxD3k6",
    },
    {
      id: 17,
      title: "ECR Beach",
      description: "Must-visit. Rent bikes (₹500/day). Go at sunrise-less crowd.",
      image: "https://i.postimg.cc/4NtCQQ6q/Merina-Beach-Chennai.webp",
      category: "Beyond Campus",
      mapLink: "https://maps.app.goo.gl/tF6qFPun8hLxu4LR9",
    },
    {
      id: 18,
      title: "Vandalur Zoo",
      description: "₹50 entry. One of India's largest zoos. Good hangout spot after classes.",
      image: "https://i.postimg.cc/y8ZN9Rx8/1720975930975.png",
      category: "Beyond Campus",
      mapLink: "https://maps.app.goo.gl/rqtX2fQ3avNDN4i28",
    },
    {
      id: 19,
      title: "Shiv Temple",
      description: "Serene temple inside campus. Amazon/Flipkart delivery point",
      image: "https://i.postimg.cc/pLYZ2mvp/Screenshot-2025-07-15-010401.png",
      category: "Essentials",
      mapLink: "https://maps.app.goo.gl/exmoC9uRzZMdEUn3A",
    },
    {
      id: 20,
      title: "TP Auditorium",
      description: "Asia's largest (3,000+ seats). Hosts fests, TEDx, and culturals.",
      image: "https://i.postimg.cc/sgVY90D9/dr-t-p-ganesan-auditorium-potheri-chengalpattu-auditoriums-ln3LcQCnDl.avif",
      category: "Academics",
      mapLink: "https://maps.app.goo.gl/YmgJgRumj31hBGNL7",
    },
    {
      id: 21,
      title: "Kopperundevi - M Block",
      description: "Biggest hostel (500+ rooms). Strict 6:30 PM curfew.",
      image: "https://i.postimg.cc/wMczWxhn/Kopperundevi-M-Block-scaled.jpg",
      category: "Hostel & Stay",
      mapLink: "https://maps.app.goo.gl/QsZLNfxhTwZz3bV1A",
    },
    {
      id: 22,
      title: "Meenakshi Hostel",
      description: "Girls' hostel near YouPrints, known for cleanliness.",
      image: "https://i.postimg.cc/mrvNjTZY/Meenakshi-Hostel-SRMIST.jpg",
      category: "Hostel & Stay",
      mapLink: "https://maps.app.goo.gl/ZQwRKVnEJcRiFr7y5",
    },
    {
      id: 23,
      title: "Adhiyaman Hostel",
      description: "AC rooms with attached washrooms.",
      image: "https://i.postimg.cc/VNKP0HYP/image-002-e1649296856588.jpg",
      category: "Hostel & Stay",
      mapLink: "https://maps.app.goo.gl/WVxfqQav7mxurxfaA",
    },
    {
      id: 24,
      title: "Mahabalipuram",
      description: "UNESCO World Heritage town ~60 km away.",
      image: "https://i.postimg.cc/qvbGt9tT/5468bcb2a5a0902e29b3b0fd29e0a9d1-1000x1000.jpg",
      category: "Beyond Campus",
      mapLink: "https://maps.app.goo.gl/iFwh3FNiudSiviVn6",
    },
    {
      id: 25,
      title: "Hotel Saravana Bhavan",
      description: "Popular veg restaurant near campus.",
      image: "https://i.postimg.cc/FHVHD4yM/808e938ba4f3a49879ce25abf8ebd200080ddbb8-2-1024x686.jpg",
      category: "Beyond Campus",
      mapLink: "https://maps.app.goo.gl/G3zDGVvZAtEeYT327",
    },
  ]

  const filteredLocations = activeFilter === "All" 
    ? locations 
    : locations.filter(loc => loc.category === activeFilter)

  return (
    <div className="space-y-8 p-4">
      {/* Heading */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF6B6B] mb-2">
          Know Your Campus
        </h1>
        <p className="text-lg text-[#22C55E]">
          From academic blocks to food joints and nearby essentials.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="overflow-x-auto pb-2">
        <div className="flex flex-nowrap gap-3 w-max">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 whitespace-nowrap rounded-xl font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-[#22C55E] text-white shadow-lg"
                  : "bg-[#2A2A2E] text-[#A1A1AA] hover:bg-[#2D2D30] hover:text-[#F4F4F5]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <div
              key={location.id}
              className="bg-[#2A2A2E] rounded-2xl overflow-hidden shadow-lg border border-[#2D2D30] hover:border-[#FF6B6B]/30 transition-all duration-200"
            >
              {/* 16:9 image aspect ratio */}
              <div className="relative w-full pt-[56.25%]">
                <img
                  src={location.image}
                  alt={location.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>

              {/* Details */}
              <div className="p-5 space-y-4">
                <h3 className="text-xl font-bold text-[#22C55E]">{location.title}</h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">{location.description}</p>
                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-4 rounded-xl transition-all duration-200 font-medium shadow-lg text-center"
                >
                  View on Map
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-xl text-[#A1A1AA]">No locations found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default KnowYourCampus