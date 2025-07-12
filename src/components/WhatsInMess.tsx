"use client"

import { useState } from "react"

const WhatsInMess = () => {
  // Get current day and set as default
  const getCurrentDay = () => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todayIndex = new Date().getDay();
    return days[todayIndex];
  }

  const [activeDay, setActiveDay] = useState(getCurrentDay())
  const [activeMess, setActiveMess] = useState("Sannasi") // Default to Sannasi mess

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  const sannasiMenuData = {
    Monday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Millet Dosa", "Idly Podi", "Oil", "Chutney", "Sambar",
        "Chappathi", "White Khuruma", "Tea / Coffee / Milk", "Boiled Egg"
      ],
      lunch: [
        "Chappathi", "Rajma Masala", "Jeera Pulao", "Steamed Rice", "Arachivitta Sambar",
        "Panchratna Dal", "Drumstick Brinjal", "Veg Sabji", "Pineapple Rasam",
        "Pickle", "Butter Milk", "Fryums"
      ],
      snacks: ["Pav Bajji", "Tea / Coffee"],
      dinner: [
        "Madras Paratha", "Mattar Panneer Masala", "Vegetable Idly", "Idly Podi", "Oil",
        "Special Chutney", "Steamed Rice", "Hara Moong Dal", "Sambar", "Rasam",
        "Pickle", "Fryums", "Veg Salad", "Milk", "Banana", "*Fish Gravy"
      ]
    },
    
    Tuesday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Poori", "Dal Aloo Masala", "Semia Veg Kichadi",
        "Chutney", "Tea / Coffee / Milk"
      ],
      lunch: [
        "Sweet", "Millet Chappathi", "Meal Maker Curry", "Bahara Pulao", "Variety Rice",
        "Steamed Rice", "Dal Fry", "Tomato Rasam", "Urulai Peas Roast", 
        "Pickle", "Butter Milk"
      ],
      snacks: ["Mysore Bonda", "Chutney", "Tea / Coffee"],
      dinner: [
        "Methi Chappathi", "Black Channa", "Steamed Rice", "Dal Fry", "Veg / Chilly Gobi Dry",
        "Millet Dosa", "Idly Podi", "Oil", "Sambar", "Pepper Rasam", "Pickle / Fryums",
        "Veg Salad", "Milk", "Special Fruits", "*Mutton Gravy"
      ]
    },
    Wednesday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Millet Idly", "Idly Podi", "Oil", "Sambar", "Chutney",
        "Poha", "Mint Chutney", "Tea / Coffee / Milk", "Masala Omelet"
      ],
      lunch: [
        "Chappathi", "Muttar Masala", "Bhindi Aloo Bhujiya", "Veg Pulao", "Steamed Rice",
        "Masala Sambar", "Tomato Dal", "Garlic Rasam", "Pickle", "Poriyal", "Butter Milk", "Fryums"
      ],
      snacks: ["Veg Puff / Sweet Puff", "Tea / Coffee"],
      dinner: [
        "Chappathi", "Steamed Rice", "Dal Tadka", "Butter Chicken Masala",
        "(Non-Veg) / Panneer Butter Masala / Butter Paneer", "Rasam",
        "Pickle", "Fryums", "Veg Salad", "Milk", "Banana", "*Chicken Gravy"
      ]
    },
    
    Thursday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Idiyappam (Lemon or Masala) / Millet Idiyappam",
        "Chappathi", "Channa Masala / White Khuruma Chutney", "Tea / Coffee / Milk"
      ],
      lunch: [
        "Chappathi", "Aloo Gobi Athirakki","Onion Pulao", "Steamed Rice",
        "Punjabi Dal Fry", "Kadi Pakoda", "Rasam", "Pickle", "Butter Milk", "Fryums"
      ],
      snacks: ["Pani Poori (or) Chenna Sundal", "Tea / Coffee"],
      dinner: [
        "Millet Sweet (or) Kasari", "Chole Bhature", "Chole Masala",
        "Steamed Rice", "Tomato Dal", "Idly", "Sambar", "Coconut Chutney",
        "Idly Podi", "Oil", "Rasam", "Pickle", "Fryums", "Veg Salad", "Milk", "Banana",
        "*Mutton Gravy"
      ]
    },
    
    Friday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Chappathi", "Rajma Masala", "Dosa", "Idly Podi", "Oil",
        "Sambar", "Coconut Chutney / Tomato Chutney", "Tea / Coffee / Milk"
      ],
      lunch: [
        "Dry Jamun / Bread Halwa", "Capsicum Gobi Curry","Dal Tadka", "Veg Biryani", "Raita", "Bisibelebath Rice",
        "Curd Rice", "Tomato Rasam", "Steamed Rice", "Sambar", "Pickle", "Butter Milk", "Fryums"
      ],
      snacks: ["Sambar Vada (or) Millet Vada", "Tea / Coffee"],
      dinner: [
        "Ghee Chappathi", "Aloo Mutter Masala", "Vegetable Dal", "Millet Rava Upma",
        "Coconut Chutney", "Steamed Rice", "Rasam", "Pickle", "Fryums", "Veg Salad",
        "Milk", "Special Fruits", "*Chicken Gravy"
      ]
    },
    
    Saturday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Chappathi", "Veg Khuruma", "Sambar",
        "Pongal (or) Millet Pongal Vada", "Chutney", "Tea / Coffee / Milk"
      ],
      lunch: [
        "Poori", "White Peas Curry", "Aloo Thindeli", "Kashmiri Pulao", "Steamed Rice","Dal Fry",
        "KaraKozhambu","Kootu(Cabbage)", "Rasam", "Pickle", "Butter Milk", "Fryums"
      ],
      snacks: ["Cake (or) Brownie", "Tea / Coffee"],
      dinner: [
        "Punjabi Paratha", "Potato Fry", "Steamed Rice", "Veg Jhal Pyaza", "Bagara Dal",
        "Idly","Idly Podi", "Oil", "Kathmaba Sambar", "Chutney", "Rasam", "Pickle", "Fryums", "Veg Salad",
        "Milk", "Banana", "*Chicken Gravy"
      ]
    },
    
    Sunday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Chole Bhature", "Chenna Masala",
        "Samba Rava Upma", "Coconut Chutney", "Tea / Coffee / Milk"
      ],
      lunch: [
        "Chappathi","Chicken (Pepper/Kadai)","Paneer Mutter Masala", "Dal Tadka", "Mint Pulao / Steamed Rice",
        "Mixed Veg Poriyal", "Rasam", "Pickle", "Butter Milk", "Fryums"
      ],
      snacks: ["Corn / Bajji with Chutney", "Tea / Coffee"],
      dinner: [
        "Aloo Paratha", "Masala Curry", "Steamed Rice", "Hara Moong Dal Tadka", "Kathamba Sambar", "Poriyal", "Rasam", "Pickle", "Fryums",
        "Veg Salad", "Milk", "Banana", "Cone Ice Cream", "*Chicken Gravy"
      ]
    }
  }
  const mBlockMenuData = {
    Monday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Pongal", "Sambar", "Coconut Chutney", "Vada",
        "Chappathi", "Soya Aloo Kasha", "Tea/Coffee/Milk", "Banana"
      ],
      lunch: [
        "Mint Chappathi", "Black Channa Masala", "Mutter Pulao", "Dal Makhni",
        "Steamed Rice", "Sambar", "Keerai Koothu", "Rasam", "Butter milk", "Frymes", "Pickle"
      ],
      snacks: ["Samosa / Veg Spring Roll", "Tea / Lemon Juice / Milk", "Bread/Butter/Jam"],
      dinner: [
        "Chappathi", "Tomato Dal", "Idli", "Chutney", "Sambar", "Idli podi", "Oil",
        "Steamed Rice", "Rasam", "Buttermilk", "Pickle", "Salad", "Milk", "Fish Gravy"
      ]
    },
    
    Tuesday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Poori", "Aloo Masala", "Veg Rava Kitchadi",
        "Sambar", "Chutney", "Tea/Coffee/Milk", "Banana"
      ],
      lunch: [
        "Payasam", "Chappathi", "White Peas Curry", "Jeera Pulao", "Dal Fry",
        "Steamed Rice", "Kara Kuzhambu","Rasam", "Cabbage Koothu", "Butter Milk", "Frymes", "Pickle"
      ],
      snacks: ["Pani Pori / Pav Bhaji", "Tea / Coffee / Milk", "Bread/Butter/Jam"],
      dinner: [
        "Millet Chappathi", "Black Channa Masala", "Dosa", "Sambar", "Chutney",
        "Idli Podi", "Oil", "Steamed Rice", "Rasam", "Buttermilk", "Salad", "Pickle", "Milk", "Mutton Kulambu"
      ]
    },
    
    Wednesday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Idiyappam", "Vada Curry / Veg Stew", "Mint Chutney",
        "Poha", "Tea/Coffee/Milk", "Banana"
      ],
      lunch: [
        "Chappathi", "Rajma Masala", "Variety Rice", "Curd Rice", "Urulai Kara Masala",
        "Steamed Rice", "Rasam", "Appalam", "Pickle"
      ],
      snacks: ["Bakery Snacks", "Tea / Coffee / Milk", "Bread/Butter/Jam"],
      dinner: [
        "Chappathi", "Paneer Butter Masala", "Steamed Rice", "Sambar", "Jeera Rasam","Butter Milk",
        "Pickle", "Milk", "*Non-Veg (Chicken Gravy / Chicken Biryani)"
      ]
    },
    
    Thursday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Idli", "Groundnut Chutney", "Sambar",
        "Chappathi", "White Peas Masala", "Tea/Coffee/Milk", "Banana"
      ],
      lunch: [
        "Sweet Pongal / Boondhi", "Beetroot Chappathi", "Gobi Capsicum",
        "Dal Fry", "Veg Pulao", "Steamed Rice", "Karakozhambu", "Keerai Koothu",
        "Rasam", "Buttermilk", "Frymes"
      ],
      snacks: ["Navadhaniyam Sundal", "Tea / Coffee / Milk", "Bread/Butter/Jam"],
      dinner: [
        "Chole Poori", "Channa Masala", "Dosa", "Sambar", "Chutney",
        "Steamed Rice", "Rasam", "Buttermilk", "Onion Salad", "Pickle", "Milk", "*Cup Ice Cream", "*Chicken Gravy"
      ]
    },
    
    Friday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Chappathi", "Channa Dal", "Kal Dosa", "Sambar", "Chutney",
        "Omelette", "Tea/Coffee/Milk", "Seasonal Fruit", "Idli Podi", "Oil"
      ],
      lunch: [
        "Chappathi", "Dal Tadka", "Peas Pulao", "Spinach Aloo", "Steamed Rice", "Sambar",
        "Mix Veg Poriyal", "Rasam", "Buttermilk", "Frymes", "Pickle"
      ],
      snacks: ["Bajji / Mysore Bonda", "Chutney", "Tea/ Rose Milk / Milk", "Bread/Butter/Jam"],
      dinner: [
        "Veg Soup", "Chappathi", "Veg Manchurian Gravy", "Fried Rice / Noodles", "Dal Fry",
        "Steamed Rice", "Rasam", "Buttermilk", "Milk", "Salad", "Pickle", "*Chicken Gravy"
      ]
    },
    
    Saturday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Aloo Paratha", "Curd", "Idli", "Sambar",
        "Groundnut Chutney", "Tea/Coffee/Milk", "Banana", "Boiled Egg"
      ],
      lunch: [
        "Gulab Jamun / Millet Payasam", "Chappathi", "Meal Maker Curry", "Veg Biryani",
        "Raitha", "Curd Rice", "Steamed Rice", "Rasam", "Keerai Koothu", "Frymes", "Pickle"
      ],
      snacks: ["Cake Variety", "Tea / Coffee / Milk", "Bread/Butter/Jam"],
      dinner: [
        "Paratha", "Veg Salna", "Dosa", "Chutney", "Tiffin Sambar", "Idli Podi", "Oil",
        "Steamed Rice", "Rasam", "Buttermilk", "Milk", "Salad", "Pickle", "*Mutton Gravy"
      ]
    },
    
    Sunday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Chole Bhature", "Chenna Masala", "Rava Upma",
        "Coconut Chutney", "Sambar", "Tea/Coffee/Milk", "Banana"
      ],
      lunch: [
        "Chappathi", "Chicken Gravy / Paneer Mutter Masala", "Steamed Rice", "Sambar",
        "Garlic Rasam", "Poriyal", "Buttermilk", "Frymes", "Pickle"
      ],
      snacks: ["Peanut Sundal / Channa Sundal", "Tea / Coffee / Milk", "Bread/Butter/Jam"],
      dinner: [
        "Chappathi", "Mix Veg Curry", "Dal Fry", "Chicken Gravy", "Steamed Rice","Kadamba Sambar",
        "Rasam", "Poriyal", "Buttermilk", "Milk", "Salad", "Pickle", "*Cone Ice Cream"
      ]
    }
  }

  const currentMessData = activeMess === "Sannasi" ? sannasiMenuData : mBlockMenuData
  const currentMenu = currentMessData[activeDay] || currentMessData.Monday

  const mealSections = [
    { name: "Breakfast", items: currentMenu.breakfast, color: "bg-[#FF6B6B]", textColor: "text-[#FF6B6B]" },
    { name: "Lunch", items: currentMenu.lunch, color: "bg-[#22C55E]", textColor: "text-[#22C55E]" },
    { name: "Snacks", items: currentMenu.snacks, color: "bg-[#3B82F6]", textColor: "text-[#3B82F6]" },
    { name: "Dinner", items: currentMenu.dinner, color: "bg-[#EF4444]", textColor: "text-[#EF4444]" },
  ]

  return (
    <div className="space-y-8 p-4 md:p-6">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF6B6B] mb-2">What's in Mess</h1>
      </div>

      {/* Mess selector */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setActiveMess("Sannasi")}
          className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
            activeMess === "Sannasi"
              ? "bg-[#22C55E] text-white shadow-lg"
              : "bg-[#2A2A2E] text-[#A1A1AA] hover:bg-[#2D2D30] hover:text-[#F4F4F5]"
          }`}
        >
          Sannasi/Agashtiyar/D-Mess
        </button>
        <button
          onClick={() => setActiveMess("MBlock")}
          className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
            activeMess === "MBlock"
              ? "bg-[#22C55E] text-white shadow-lg"
              : "bg-[#2A2A2E] text-[#A1A1AA] hover:bg-[#2D2D30] hover:text-[#F4F4F5]"
          }`}
        >
          M-Block/PF
        </button>
      </div>

      {/* Day selector */}
      <div className="flex flex-wrap gap-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 text-sm lg:text-base ${
              activeDay === day
                ? "bg-[#22C55E] text-white shadow-lg"
                : "bg-[#2A2A2E] text-[#A1A1AA] hover:bg-[#2D2D30] hover:text-[#F4F4F5]"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Menu sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mealSections.map((section) => (
          <div key={section.name} className="space-y-4">
            <div className={`${section.color} text-white text-center py-4 rounded-2xl font-bold text-lg shadow-lg`}>
              {section.name}
            </div>
            <div className="bg-[#2A2A2E] rounded-2xl p-5 border border-[#2D2D30]">
              <ul className="space-y-3">
                {section.items.map((item, index) => (
                  <li
                    key={index}
                    className={`text-sm font-medium ${section.textColor} bg-[#0E0E10] px-3 py-2 rounded-lg border border-[#2D2D30]`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatsInMess