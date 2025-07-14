import { useState } from "react";
import { Phone, MenuIcon, X, ChevronDown, ChevronUp, Clock, Search, Filter } from "lucide-react";

const QuickServe = () => {
  const outlets = [
    {
      id: 1,
      name: "MP Foods-Estancia",
      description: "Authentic biriyani and continental cuisine",
      image: "",
      phone: "+91 98765 43210",
      waitTime: "15 mins",
      menu: {
        categories: [
          {
            name: "Continental Dishes",
            items: [
              { name: "Vegetable Augratin", price: 150, type: "veg" },
              { name: "Corn Augratin", price: 150, type: "veg" },
              { name: "Mushroom Augratin", price: 160, type: "veg" },
              { name: "Macaroni Augratin", price: 150, type: "veg" },
              { name: "Macaroni Millanise", price: 150, type: "veg" },
              { name: "Corn Mushroom Augratin", price: 160, type: "veg" },
              { name: "Spicy Corn Test", price: 160, type: "veg" },
              { name: "Speghetti Burmese", price: 160, type: "veg" },
              { name: "Speghetti Napolitan", price: 160, type: "veg" }
            ]
          },
          {
            name: "Biryani Specials",
            items: [
              { name: "Chicken Biryani", price: 180, type: "non-veg" },
              { name: "Mutton Biryani", price: 220, type: "non-veg" },
              { name: "Veg Biryani", price: 120, type: "veg" },
              { name: "Paneer Biryani", price: 150, type: "veg" }
            ]
          }
        ]
      }
    },
    {
      id: 2,
      name: "Google Food Park",
      description: "Authentic Indian delicacies",
      image: "",
      phone: "+91 87654 32109",
      waitTime: "20 mins",
      menu: {
        categories: [
          {
            name: "Biryani",
            items: [
              { name: "Hyderabadi Chicken Biriyani", price: 110, type: "non-veg" },
              { name: "Google Special Biriyani", price: 140, type: "non-veg" },
              { name: "Veg Biriyani", price: 100, type: "veg" }
            ]
          }
        ]
      }
    },
    {
      id: 3,
      name: "Godavari",
      description: "Spice of Andhra",
      image: "",
      phone: "+91 76543 21098",
      waitTime: "8 mins",
      menu: {
        categories: [
          {
            name: "Andhra Specials",
            items: [
              { name: "Andhra Chicken Curry", price: 150, type: "non-veg" },
              { name: "Gongura Mutton", price: 200, type: "non-veg" }
            ]
          }
        ]
      }
    },
    {
      id: 4,
      name: "EverGreen",
      description: "Continental cuisine with local twist",
      image: "",
      phone: "+91 65432 10987",
      waitTime: "20 mins",
      menu: {
        categories: [
          {
            name: "Continental",
            items: [
              { name: "Pasta Alfredo", price: 150, type: "veg" },
              { name: "Margherita Pizza", price: 180, type: "veg" }
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
  const [searchQuery, setSearchQuery] = useState("");

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

      {/* Promotional Banner */}
      <div className="relative bg-[#2A2A2E] rounded-2xl overflow-hidden border border-[#2D2D30] mb-6">
        <div className="relative h-48 w-full">
          <img
            src="https://i.postimg.cc/mg6wdCLb/pexels-photo-958545-jpeg-cs-srgb-dl-pexels-chanwalrus-958545.jpg"
            alt="Campus food delivery"
            className="w-full h-full object-cover"
            onError={(e) => e.target.src = "https://via.placeholder.com/1200x400?text=Campus+Food+Delivery"}
          />
          <div className="absolute inset-0 bg-[#FF6B6B] bg-opacity-80"></div>
        </div>
        <div className="absolute inset-0 flex items-center p-6 text-white text-left">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Free Hostel Delivery</h2>
            <p className="text-base sm:text-lg">On all orders above ₹100 from selected outlets</p>
          </div>
        </div>
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
                      className="flex-1 bg-[#3B82F6] hover:bg-[#2563EB] text-white py-2 px-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center gap-2"
                      onClick={() => handleMenuClick(outlet)}
                    >
                      <MenuIcon className="w-4 h-4" />
                      Menu
                    </button>
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

      {/* Menu Modal */}
      {showMenuModal && selectedOutlet && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#2A2A2E] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Menu Header */}
            <div className="sticky top-0 bg-[#2A2A2E] p-6 border-b border-[#2D2D30]">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-[#22C55E]">
                    {selectedOutlet.name}
                  </h2>
                  <p className="text-sm text-[#A1A1AA]">
                    {selectedOutlet.description}
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
              </div>
            </div>
            
            {/* Food Type Filter */}
            <div className="flex border-b border-[#2D2D30] bg-[#2D2D30] sticky top-[104px] z-10">
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
                Veg
              </button>
              <button
                className={`flex-1 py-3 font-medium ${foodFilter === "non-veg" ? "text-[#FF6B6B] border-b-2 border-[#FF6B6B]" : "text-[#A1A1AA]"}`}
                onClick={() => setFoodFilter("non-veg")}
              >
                Non-Veg
              </button>
            </div>
            
            {/* Menu Categories */}
            <div className="p-6">
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
                {selectedOutlet.waitTime} wait time
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickServe;