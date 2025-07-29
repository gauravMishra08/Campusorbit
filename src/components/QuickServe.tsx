import { useState } from "react";
import { Phone, MenuIcon, X, ChevronDown, ChevronUp, Clock, Search, Filter } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {filteredOutlets.map((outlet) => (
              <CardContainer key={outlet.id} className="inter-var w-full sm:w-80 lg:w-72 xl:w-80" containerClassName="py-4">
                <CardBody className="bg-[#2A2A2E] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border border-[#2D2D30]">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-[#22C55E] mb-2"
                  >
                    {outlet.name}
                  </CardItem>
                  
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-[#A1A1AA] text-sm mb-4"
                  >
                    {outlet.description}
                  </CardItem>
                  
                  <CardItem translateZ="100" className="w-full mb-4">
                    <img
                      src={outlet.image}
                      alt={outlet.name}
                      className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/400x225?text=Food+Outlet";
                      }}
                    />
                  </CardItem>
                  
                  <CardItem translateZ="80" className="flex items-center gap-2 text-sm text-[#A1A1AA] mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{outlet.waitTime} wait time</span>
                  </CardItem>
                  
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="w-full bg-[#22C55E] hover:bg-[#16A34A] text-white py-2 px-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center gap-2"
                    onClick={() => handleCall(outlet.phone)}
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </CardItem>
                </CardBody>
              </CardContainer>
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