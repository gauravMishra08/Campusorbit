import { useState } from "react";
import { Phone, MenuIcon, X, ChevronDown, ChevronUp, Clock, Search, Filter } from "lucide-react";

const QuickServe = () => {
  const outlets = [
    {
      id: 1,
      name: "Evergreen",
      description: "Known for its Chinese food, biryani, and pasta.",
      image: "https://i.postimg.cc/qRybkFtF/unnamed.webp",
      phone: "+91 99623 72887",
      waitTime: "15 mins",
    },
    {
    id: 2,
    name: "Butty",
    description: "Primarily a sandwich shop, but also famous for its rolls - often crowded.",
    image: "https://i.postimg.cc/CMD5gscf/butty-potheri-chengalpattu-sandwich-stalls-Cdg-A9aukgu.webp",
    phone: "+91 86376 74853",
    waitTime: "20 mins",
  },
    {
    id: 3,
    name: "Sohana Biryani",
    description: "Famous for biryani, also serves pasta, fried rice, and noodles.",
    image: "https://i.postimg.cc/bwfQPv0q/17213890153ce8e5b7-3c89-43e2-98a7-98ef85649937.jpg",
    phone: "+91 82499 89834",
    waitTime: "12 mins",
  },
    {
    id: 4,
    name: "Google+",
    description: "North Indian, Mughlai, Biryani, Chinese, Kebab, Seafood, Fast Food, Street Food",
    image: "https://i.postimg.cc/bJVBVnty/unnamed-1.webp",
    phone: "+91 99320 58224",
    waitTime: "25 mins",
  },
    {
      id: 5,
      name: "Darjeeling Momos",
      description: "Known for its momos and other Tibetan and North Indian dishes.",
      image: "https://i.postimg.cc/dVvcy8Rp/darjeeling-momos-selaiyur-chennai-restaurants-n4peboeqt9.webp",
      phone: "+91 83484 92077",
      waitTime: "25 mins",
  },
    {
      id: 6,
      name: "Mini China",
      description: "Offers dine-in and takeaway options. Hostel delivery available with additional charges.",
      image: "https://i.postimg.cc/vTRNds3k/Screenshot-2025-07-27-at-13-07-06.png",
      phone: "+91 72001 26134",
      waitTime: "30 mins",
  }
  ];

  const [foodFilter, setFoodFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };


  const filteredOutlets = outlets.filter(outlet => {
    const query = searchQuery.toLowerCase();
    return (
      outlet.name.toLowerCase().includes(query) ||
      outlet.description.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-8 p-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#FF6B6B] mb-2">QuickServe</h1>
        <p className="text-lg text-[#22C55E]">
          Browse campus food menus with prices and call the outlet to place your order.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search for outlets or dishes..."
            className="w-full bg-[#2A2A2E] border border-[#2D2D30] rounded-xl py-3 px-4 pl-10 text-[#F4F4F5] focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="w-5 h-5 text-[#A1A1AA] absolute left-3 top-3.5" />
        </div>
      </div>

      {/* Outlets Section */}
      <div>
        {filteredOutlets.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOutlets.map((outlet) => (
              <div
                key={outlet.id}
                className="bg-[#2A2A2E] rounded-2xl overflow-hidden shadow-lg border border-[#2D2D30] hover:border-[#FF6B6B]/30 transition-all duration-200"
              >
                <div className="relative w-full pt-[56.25%]">
                  <img
                    src={outlet.image}
                    alt={outlet.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    onError={(e) => e.target.src = "https://via.placeholder.com/400x225?text=Food+Outlet"}
                  />
                </div>
                
                <div className="p-5 space-y-4">
                  <h3 className="text-xl font-bold text-[#22C55E]">{outlet.name}</h3>
                  <p className="text-[#A1A1AA]">{outlet.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                    <Clock className="w-4 h-4" />
                    <span>{outlet.waitTime} wait time</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white py-2 px-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center gap-2"
                      onClick={() => handleCall(outlet.phone)}
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-[#A1A1AA]">
            {searchQuery 
              ? `No outlets found matching "${searchQuery}"`
              : "No outlets available"}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickServe;