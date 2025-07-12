import { useState } from "react";
import { Phone, MenuIcon, X, ChevronDown, ChevronUp, Clock, Download } from "lucide-react";

const QuickServe = () => {
  // Enhanced SRM campus outlets data
  const outlets = [
    {
      id: 1,
      name: "SRM Food Park",
      description: "Authentic Indian delicacies",
      image: "",
      phone: "+91 98765 43210",
      waitTime: "20 mins",
      menu: {
        categories: [
          {
            name: "Biryani",
            items: [
              { name: "Chennai Dum Chicken Biriyani", price: 100, type: "non-veg" },
              { name: "Hyderabadi Chicken Biriyani", price: 110, type: "non-veg" },
              { name: "Google Special Biriyani", price: 140, type: "non-veg" },
              { name: "Mogal Chicken Biriyani", price: 130, type: "non-veg" },
              { name: "Tikka Biriyani", price: 150, type: "non-veg" },
              { name: "Lollipop Biriyani", price: 140, type: "non-veg" },
              { name: "Afgani Biriyani", price: 130, type: "non-veg" },
              { name: "Hyderabadi Mutton Biriyani", price: 180, type: "non-veg" },
              { name: "Google Spl. Prawn Biriyani", price: 160, type: "non-veg" },
              { name: "Tandoori Biriyani", price: 140, type: "non-veg" },
              { name: "Egg Biriyani", price: 100, type: "non-veg" },
              { name: "Plain Biriyani", price: 80, type: "veg" },
              { name: "Veg Biriyani", price: 100, type: "veg" },
              { name: "Mushroom Biriyani", price: 100, type: "veg" },
              { name: "Panner Biriyani", price: 130, type: "veg" }
            ]
          },
          {
            name: "Rice / Noodles",
            items: [
              { name: "Chicken Fried Rice/Noodles", price: 90, type: "non-veg" },
              { name: "Sez. Rice / Noodles", price: 100, type: "veg" },
              { name: "Egg Fried Rice/Noodles", price: 90, type: "non-veg" },
              { name: "Mutton Fried Rice/Noodles", price: 130, type: "non-veg" },
              { name: "Prawn Fried Rice/Noodles", price: 130, type: "non-veg" },
              { name: "Baby Corn Fried Rice/Noodles", price: 100, type: "veg" },
              { name: "Panner Fried Rice/Noodles", price: 100, type: "veg" },
              { name: "Gobi Fried Rice/Noodles", price: 100, type: "veg" },
              { name: "Mushroom Fried Rice/Noodles", price: 100, type: "veg" },
              { name: "Mix Veg / Non Veg Rice / Noodles", price: 130, type: "non-veg" },
              { name: "Mix Veg / Rice", price: 100, type: "veg" },
              { name: "Jeera Rice", price: 60, type: "veg" },
              { name: "Ghee Rice", price: 70, type: "veg" },
              { name: "Steam Rice", price: 45, type: "veg" },
              { name: "Green Peas Pulao", price: 60, type: "veg" },
              { name: "Panner Pulao", price: 100, type: "veg" },
              { name: "Gobi Pulao", price: 90, type: "veg" },
              { name: "Mushroom Pulao", price: 100, type: "veg" },
              { name: "Kasmiri Pulao", price: 140, type: "veg" },
              { name: "Singapore Rice", price: 130, type: "non-veg" },
              { name: "Sangai Rice", price: 120, type: "non-veg" }
            ]
          },
          {
            name: "Veg Indian Gravy",
            items: [
              { name: "Dal Fry", price: 60, type: "veg" },
              { name: "Dal Makhni", price: 80, type: "veg" },
              { name: "Dal Tarka", price: 60, type: "veg" },
              { name: "Dal Butter Fry", price: 70, type: "veg" },
              { name: "Aloo Jeera", price: 80, type: "veg" },
              { name: "Aloo Palak", price: 90, type: "veg" },
              { name: "Aloo Methi", price: 70, type: "veg" },
              { name: "Aloo Dum", price: 60, type: "veg" },
              { name: "Mushroom Masala", price: 100, type: "veg" },
              { name: "Mushroom Pepper Masala", price: 100, type: "veg" },
              { name: "Kadai Mushroom", price: 100, type: "veg" },
              { name: "Mushroom Chettinadu", price: 100, type: "veg" },
              { name: "Mix Veg Masala", price: 120, type: "veg" },
              { name: "Aloo Gobi Masala", price: 100, type: "veg" },
              { name: "Chenna Masala", price: 100, type: "veg" },
              { name: "Grean Peas Masala", price: 100, type: "veg" },
              { name: "Kadai Veg", price: 100, type: "veg" },
              { name: "Panner Masala", price: 130, type: "veg" },
              { name: "Panner Pepper Masala", price: 100, type: "veg" },
              { name: "Panner Butter Masala", price: 100, type: "veg" },
              { name: "Panner Chettinadu", price: 110, type: "veg" },
              { name: "Panner Tikka Masala", price: 110, type: "veg" },
              { name: "Panner Kopta", price: 110, type: "veg" },
              { name: "Malai Kopta", price: 120, type: "veg" },
              { name: "Baby Corn Masala", price: 80, type: "veg" },
              { name: "Panner Bhurji", price: 90, type: "veg" }
            ]
          }
        ]
      }
    },
    {
      id: 2,
      name: "SRM Shawarma Hub",
      description: "Authentic Middle Eastern flavors",
      image: "",
      phone: "+91 87654 32109",
      waitTime: "15 mins",
      menu: {
        categories: [
          {
            name: "Shawarma Rolls",
            items: [
              { name: "Normal Shawarma Roll", price: 70, type: "non-veg" },
              { name: "Cheese Shawarma Roll", price: 80, type: "non-veg" },
              { name: "Spice Shawarma Roll", price: 80, type: "non-veg" },
              { name: "Cheese Spice Shawarma Roll", price: 90, type: "non-veg" },
              { name: "Tandoori Shawarma Roll", price: 90, type: "non-veg" },
              { name: "Tandoori Cheese Shawarma Roll", price: 100, type: "non-veg" },
              { name: "Tandoori Spice Shawarma Roll", price: 100, type: "non-veg" },
              { name: "Tandoori Cheese Spice Shawarma Roll", price: 110, type: "non-veg" },
              { name: "Maxican Shawarma Roll", price: 90, type: "non-veg" },
              { name: "Maxican Spice Shawarma Roll", price: 100, type: "non-veg" },
              { name: "Maxican Cheesee Spice Shawarma Roll", price: 100, type: "non-veg" },
              { name: "Periperi Shawarma Roll", price: 90, type: "non-veg" },
              { name: "Periperi Cheese Shawarma Roll", price: 100, type: "non-veg" },
              { name: "Periperi Spice Shawarma Roll", price: 100, type: "non-veg" },
              { name: "Periperi Cheesee Shawarma", price: 110, type: "non-veg" }
            ]
          },
          {
            name: "Shawarma Plates",
            items: [
              { name: "Normal Shawarma Plate", price: 100, type: "non-veg" },
              { name: "Cheese Shawarma Plate", price: 110, type: "non-veg" },
              { name: "Spice Shawarma Plate", price: 110, type: "non-veg" },
              { name: "Cheese Spice Shawarma Plate", price: 120, type: "non-veg" },
              { name: "Tandoori Shawarma Plate", price: 120, type: "non-veg" },
              { name: "Tandoori Cheese Shawarma Plate", price: 130, type: "non-veg" },
              { name: "Tandoori Spice Shawarma Plate", price: 130, type: "non-veg" },
              { name: "Tandoori Cheese Spice Shawarma Plate", price: 140, type: "non-veg" },
              { name: "Peri Peri Shawarma Plate", price: 120, type: "non-veg" },
              { name: "Periperi Cheese Shawarma Plate", price: 130, type: "non-veg" },
              { name: "Periperi Spice Shawarma Plate", price: 130, type: "non-veg" },
              { name: "Periperi Cheese Spice Shawarma Plate", price: 140, type: "non-veg" },
              { name: "Maxican Shawarma Plate", price: 120, type: "non-veg" },
              { name: "Maxican Spice Shawarma Plate", price: 130, type: "non-veg" },
              { name: "Maxican Cheese Spice Shawarma Plate", price: 140, type: "non-veg" },
              { name: "Maxican Cheese Shawarma Plate", price: 150, type: "non-veg" }
            ]
          }
        ]
      }
    }
  ];

  const [selectedOutlet, setSelectedOutlet] = useState(null);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [foodFilter, setFoodFilter] = useState("all");

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  const handleMenuClick = (outlet) => {
    setSelectedOutlet(outlet);
    setShowMenuModal(true);
    setExpandedCategories(outlet.menu.categories.map((_, index) => index));
    setFoodFilter("all");
  };

  const toggleCategory = (index) => {
    setExpandedCategories(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  const filterItems = (items) => {
    return foodFilter === "all" 
      ? items 
      : items.filter(item => item.type === foodFilter);
  };

  return (
    <div className="space-y-8 pb-8">
      {/* SRM Branded Header */}
      <div className="bg-gradient-to-r from-[#FF6B6B] to-[#22C55E] rounded-2xl p-6 text-white">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">SRM QuickServe</h1>
        <p className="text-lg">
          Browse official SRM campus outlets, view menus, and order directly
        </p>
      </div>

      {/* Outlets Section */}
      <div>
        <h2 className="text-xl font-bold text-[#F4F4F5] mb-6">
          Official SRM Campus Outlets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outlets.map((outlet) => (
            <div
              key={outlet.id}
              className="bg-[#2A2A2E] rounded-2xl overflow-hidden shadow-lg border border-[#2D2D30] hover:border-[#FF6B6B]/30 transition-all duration-200"
            >
              <div className="relative w-full pt-[56.25%]">
                <img
                  src={outlet.image}
                  alt={outlet.name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  onError={(e) => e.target.src = "https://via.placeholder.com/400x225?text=SRM+Food+Outlet"}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-lg font-bold text-white">{outlet.name}</h3>
                  <p className="text-sm text-gray-200">{outlet.description}</p>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                  <Clock className="w-4 h-4" />
                  <span>{outlet.waitTime} wait time</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    className="flex-1 bg-[#3B82F6] hover:bg-[#2563EB] text-white py-2 px-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center gap-2"
                    onClick={() => handleMenuClick(outlet)}
                  >
                    <MenuIcon className="w-4 h-4" />
                    View Menu
                  </button>
                  <button 
                    className="flex-1 bg-[#22C55E] hover:bg-[#16A34A] text-white py-2 px-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center gap-2"
                    onClick={() => handleCall(outlet.phone)}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurant-Style Menu Modal */}
      {showMenuModal && selectedOutlet && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#2A2A2E] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Menu Header */}
            <div className="sticky top-0 bg-[#2A2A2E] p-4 border-b border-[#2D2D30]">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-[#22C55E]">
                    SRM {selectedOutlet.name}
                  </h2>
                  <p className="text-sm text-[#A1A1AA]">
                    Official SRM Campus Outlet Menu
                  </p>
                </div>
                <button 
                  onClick={() => setShowMenuModal(false)}
                  className="text-[#A1A1AA] hover:text-white p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                  <Clock className="w-4 h-4" />
                  <span>{selectedOutlet.waitTime} wait time</span>
                </div>
                <button className="text-[#3B82F6] hover:text-[#2563EB] flex items-center gap-2 text-sm">
                  <Download className="w-4 h-4" />
                  Download Menu
                </button>
              </div>
            </div>
            
            {/* Food Type Filter */}
            <div className="flex border-b border-[#2D2D30] bg-[#2D2D30]">
              <button
                className={`flex-1 py-3 font-medium ${foodFilter === "all" ? "text-[#22C55E] border-b-2 border-[#22C55E]" : "text-[#A1A1AA]"}`}
                onClick={() => setFoodFilter("all")}
              >
                All Items
              </button>
              <button
                className={`flex-1 py-3 font-medium ${foodFilter === "veg" ? "text-[#22C55E] border-b-2 border-[#22C55E]" : "text-[#A1A1AA]"}`}
                onClick={() => setFoodFilter("veg")}
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="text-[#22C55E]">🟢</span> Veg
                </span>
              </button>
              <button
                className={`flex-1 py-3 font-medium ${foodFilter === "non-veg" ? "text-[#FF6B6B] border-b-2 border-[#FF6B6B]" : "text-[#A1A1AA]"}`}
                onClick={() => setFoodFilter("non-veg")}
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="text-[#FF6B6B]">🔴</span> Non-Veg
                </span>
              </button>
            </div>
            
            {/* Menu Categories - Restaurant Style */}
            <div className="p-4">
              {selectedOutlet.menu.categories.map((category, index) => (
                <div key={index} className="mb-8">
                  <div 
                    className="flex justify-between items-center cursor-pointer pb-2 border-b border-[#FF6B6B]"
                    onClick={() => toggleCategory(index)}
                  >
                    <h3 className="text-xl font-bold text-[#FF6B6B]">
                      {category.name}
                    </h3>
                    {expandedCategories.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-[#FF6B6B]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#FF6B6B]" />
                    )}
                  </div>
                  
                  {expandedCategories.includes(index) && (
                    <div className="mt-4 space-y-4">
                      {filterItems(category.items).map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-start">
                          <div className="flex items-start gap-3">
                            <span className={`mt-1 ${item.type === "veg" ? "text-[#22C55E]" : "text-[#FF6B6B]"}`}>
                              {item.type === "veg" ? "🟢" : "🔴"}
                            </span>
                            <div>
                              <h4 className="text-[#F4F4F5] font-medium">{item.name}</h4>
                              {item.description && (
                                <p className="text-sm text-[#A1A1AA] mt-1">{item.description}</p>
                              )}
                            </div>
                          </div>
                          <span className="text-[#22C55E] font-medium whitespace-nowrap">
                            ₹{item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Menu Footer */}
            <div className="sticky bottom-0 bg-[#2A2A2E] p-4 border-t border-[#2D2D30] flex justify-between items-center">
              <button 
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg flex items-center gap-2"
                onClick={() => handleCall(selectedOutlet.phone)}
              >
                <Phone className="w-5 h-5" />
                Call to Order
              </button>
              <div className="text-sm text-[#A1A1AA]">
                SRM Campus Outlet • {selectedOutlet.waitTime} wait time
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickServe;