import { useState } from "react";
import { Phone, MenuIcon, X, ChevronDown, ChevronUp, Leaf, Beef } from "lucide-react";

const QuickServe = () => {
  // Sample outlets data with veg/non-veg tags
  const outlets = [
    {
      id: 1,
      name: "Classic Biriyani",
      description: "Authentic Hyderabadi Dum Biriyani",
      image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
      phone: "+91 98765 43210",
      menu: {
        categories: [
          {
            name: "Biriyanis",
            items: [
              { name: "Chicken Biriyani", price: 220, type: "non-veg" },
              { name: "Mutton Biriyani", price: 280, type: "non-veg" },
              { name: "Veg Biriyani", price: 180, type: "veg" },
              { name: "Prawns Biriyani", price: 250, type: "non-veg" }
            ]
          },
          {
            name: "Starters",
            items: [
              { name: "Chicken 65", price: 160, type: "non-veg" },
              { name: "Paneer Tikka", price: 150, type: "veg" },
              { name: "Gobi Manchurian", price: 120, type: "veg" }
            ]
          }
        ]
      }
    },
    {
      id: 2,
      name: "Green Bites",
      description: "Pure vegetarian cuisine",
      image: "https://images.pexels.com/photos/725990/pexels-photo-725990.jpeg",
      phone: "+91 87654 32109",
      menu: {
        categories: [
          {
            name: "Main Course",
            items: [
              { name: "Paneer Butter Masala", price: 200, type: "veg" },
              { name: "Dal Tadka", price: 150, type: "veg" },
              { name: "Veg Kofta", price: 180, type: "veg" }
            ]
          },
          {
            name: "Breads",
            items: [
              { name: "Butter Naan", price: 40, type: "veg" },
              { name: "Roti", price: 20, type: "veg" }
            ]
          }
        ]
      }
    }
  ];

  // State management
  const [selectedOutlet, setSelectedOutlet] = useState(null);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [foodFilter, setFoodFilter] = useState("all"); // 'all', 'veg', 'non-veg'

  // Handle call button
  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`);
  };

  // Handle menu button click
  const handleMenuClick = (outlet) => {
    setSelectedOutlet(outlet);
    setShowMenuModal(true);
    setExpandedCategories(outlet.menu.categories.map((_, index) => index));
    setFoodFilter("all"); // Reset filter when opening new menu
  };

  // Toggle category expansion
  const toggleCategory = (index) => {
    if (expandedCategories.includes(index)) {
      setExpandedCategories(expandedCategories.filter(i => i !== index));
    } else {
      setExpandedCategories([...expandedCategories, index]);
    }
  };

  // Filter menu items based on selection
  const filterItems = (items) => {
    if (foodFilter === "all") return items;
    return items.filter(item => item.type === foodFilter);
  };

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF6B6B] mb-2">QuickServe</h1>
        <p className="text-lg text-[#22C55E]">Order food in advance, skip queues, and enjoy your meal anytime!</p>
      </div>

      {/* Special Offer Banner */}
      <div className="relative bg-gradient-to-r from-[#2A2A2E] to-[#2D2D30] rounded-2xl overflow-hidden border border-[#2D2D30]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg)",
          }}
        />
        <div className="relative p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#F4F4F5] mb-2">Today's Special</h2>
          <p className="text-[#A1A1AA] mb-4">10% off on all vegetarian meals above ₹150</p>
          <button className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 shadow-lg">
            View Offers
          </button>
        </div>
      </div>

      {/* Outlets Section */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-[#F4F4F5] mb-6">Outlets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outlets.map((outlet) => (
            <div
              key={outlet.id}
              className="bg-[#2A2A2E] rounded-2xl overflow-hidden shadow-lg border border-[#2D2D30] hover:border-[#FF6B6B]/30 transition-all duration-200"
            >
              <img 
                src={outlet.image} 
                alt={outlet.name} 
                className="w-full h-40 object-cover"
                onError={(e) => e.target.src = "/placeholder.svg"}
              />
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#22C55E]">{outlet.name}</h3>
                  <p className="text-[#A1A1AA] text-sm">{outlet.description}</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    className="flex-1 bg-[#3B82F6] hover:bg-[#2563EB] text-white py-2 px-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center gap-2 shadow-lg"
                    onClick={() => handleCall(outlet.phone)}
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </button>
                  <button 
                    className="flex-1 bg-[#FF6B6B] hover:bg-[#EF4444] text-white py-2 px-4 rounded-xl transition-all duration-200 font-medium flex items-center justify-center gap-2 shadow-lg"
                    onClick={() => handleMenuClick(outlet)}
                  >
                    <MenuIcon className="w-4 h-4" />
                    Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Modal */}
      {showMenuModal && selectedOutlet && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-[#2A2A2E] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#2A2A2E] p-4 border-b border-[#2D2D30] flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-[#22C55E]">{selectedOutlet.name}</h2>
                <p className="text-sm text-[#A1A1AA]">Browse our delicious offerings</p>
              </div>
              <button 
                onClick={() => setShowMenuModal(false)}
                className="text-[#A1A1AA] hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Food Type Filter */}
            <div className="flex border-b border-[#2D2D30]">
              <button
                className={`flex-1 py-3 font-medium ${foodFilter === "all" ? "text-[#22C55E] border-b-2 border-[#22C55E]" : "text-[#A1A1AA]"}`}
                onClick={() => setFoodFilter("all")}
              >
                All Items
              </button>
              <button
                className={`flex-1 py-3 font-medium flex items-center justify-center gap-2 ${foodFilter === "veg" ? "text-[#22C55E] border-b-2 border-[#22C55E]" : "text-[#A1A1AA]"}`}
                onClick={() => setFoodFilter("veg")}
              >
                <Leaf className="w-4 h-4" /> Veg
              </button>
              <button
                className={`flex-1 py-3 font-medium flex items-center justify-center gap-2 ${foodFilter === "non-veg" ? "text-[#FF6B6B] border-b-2 border-[#FF6B6B]" : "text-[#A1A1AA]"}`}
                onClick={() => setFoodFilter("non-veg")}
              >
                <Beef className="w-4 h-4" /> Non-Veg
              </button>
            </div>
            
            {/* Menu Categories */}
            <div className="p-6">
              {selectedOutlet.menu.categories.map((category, index) => (
                <div key={index} className="mb-6">
                  <div 
                    className="flex justify-between items-center cursor-pointer pb-2 border-b border-[#2D2D30]"
                    onClick={() => toggleCategory(index)}
                  >
                    <h3 className="text-lg font-bold text-[#F4F4F5]">{category.name}</h3>
                    {expandedCategories.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-[#A1A1AA]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#A1A1AA]" />
                    )}
                  </div>
                  
                  {expandedCategories.includes(index) && (
                    <div className="mt-4 space-y-3">
                      {filterItems(category.items).map((item, itemIndex) => (
                        <div key={itemIndex} className="flex justify-between items-center bg-[#2D2D30] p-3 rounded-lg">
                          <div className="flex items-center gap-3">
                            {item.type === "veg" ? (
                              <Leaf className="w-4 h-4 text-[#22C55E]" />
                            ) : (
                              <Beef className="w-4 h-4 text-[#FF6B6B]" />
                            )}
                            <h4 className="text-[#F4F4F5]">{item.name}</h4>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-[#22C55E] font-medium">₹{item.price}</span>
                            <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-3 py-1 rounded-lg text-sm">
                              Add
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-[#2A2A2E] p-4 border-t border-[#2D2D30] flex justify-end">
              <button 
                className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 shadow-lg"
                onClick={() => {
                  alert(`Order from ${selectedOutlet.name} will be processed!`);
                  setShowMenuModal(false);
                }}
              >
                Proceed to Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickServe;