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
        "Sweet", "Bread", "Butter", "Jam", "Idly", "Sambar", "Spl Chutney",
        "Poori", "Aloo Dal Masala", "Tea / Coffee / Milk", "Boiled Egg", "Banana"
      ],
      lunch: [
        "Chappathi", "Chapp Kasa", "Jeera Pulao", "Steamed Rice",
        "Masala Sambar", "Bagara Dal", "Mix Veg Usili", "Lemon Rasam",
        "Pickle", "Butter Milk", "Fryums"
      ],
      snacks: ["Pav Bajji", "Tea / Coffee"],
      dinner: [
        "Punjabi Paratha", "Rajma Makkan Wala", "Dosa", "Idly Podi", "Oil",
        "Special Chutney", "Steamed Rice", "Vegetable Dal", "Rasam",
        "Pickle", "Fryums", "Veg-Salad", "*Mutton Gravy"
      ]
    },
    Tuesday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Ghee Pongal", "Vadai", "Veg Kosthu",
        "Coconut Chutney", "Poha", "Mint Chutney", "Tea / Coffee / Milk", "Masala Omlet"
      ],
      lunch: [
        "Sweet", "Poori", "Mattar Ghugni", "Variety Rice", "Steamed Rice",
        "Sambar", "Dal Lasooni", "Tomato Rasam", "Gobi-65 / Bhindi Jaipuri",
        "Fryums", "Butter Milk", "Pickle"
      ],
      snacks: ["Boiled Peanut / Black Channa Sundal", "Tea / Coffee"],
      dinner: [
        "Chappathi", "Mix veg Khurma", "Fried Rice / Noodles", "Manchurian Dry / Crispy Vegetable",
        "Steamed Rice", "Rasam", "Dal Fry", "Pickle", "Fryums", "Veg-Salad",
        "Milk", "Spl Fruits", "*Chicken Gravy"
      ]
    },
    Wednesday: {
      "breakfast": [
        "Bread", "Butter", "Jam", "Dosa", "Idly Podi", "Oil", "Arachivitta Sambar",
        "Chutney", "Chappathi", "Aloo Rajma Masala", "Tea / Coffee / Milk", "Banana"
      ],
      lunch: [
        "Butter Roti", "Aloo Palak", "Peas Pulao", "Dal Makhni", "Kadai Vegetable",
        "Steamed Rice", "Drumstick Brinjal Sambar", "Garlic Rasam", "Pickle",
        "Fryums", "Butter Milk"
      ],
      snacks: ["Veg Puff / Sweet Bun", "Juice (or) Tea / Coffee"],
      dinner: [
        "Chappathi", "Steamed Rice", "Dal Tadka", "Chicken Masala / Panneer Butter Masala", "Rasam", "Pickle", "Fryums",
        "Veg Salad", "Milk", "*Chicken Gravy"
      ]
    },
    Thursday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Chappathi", "Aloo Meal Maker Kasa",
        "Veg Semiya Khichadi", "Coconut Chutney", "Boiled Egg", "Tea / Coffee / Milk"
      ],
      lunch: [
        "Luchi", "Kashmiri Dum Aloo", "Onion Pulao", "Steamed Rice",
        "Mysore Dal Fry", "Kadi Pakoda", "Pepper Rasam", "Poriyal",
        "Pickle", "Fryums", "Butter Milk"
      ],
      snacks: ["Pani Poori (or) Chunda Nasta", "Tea / Coffee"],
      dinner: [
        "Ghee Pulao / Kaju Pulao (Basmati Rice)", "Chappathi", "Muttar Panneer",
        "Steamed Rice", "Dal Tadka", "Rasam", "Aloo Peas Masala", "Fryums",
        "Pickle", "Veg Salad", "Milk", "Ice Cream", "*Mutton Gravy"
      ]
    },
    Friday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Podi Dosa", "Idly Podi", "Oil",
        "Chilli Sambar", "Chutney", "Chappathi", "Muttar Masala",
        "Tea / Coffee / Milk", "Boiled Egg", "Banana"
      ],
      lunch: [
        "Dry Jamun / Bread Halwa", "Veg Biryani", "Mix Raitha", "Bisibelebath",
        "Curd Rice", "Steamed Rice", "Tomato Rasam", "Aloo Gobi Adraki",
        "Moongdal Tadka", "Pickle", "Fryums"
      ],
      snacks: ["Bonda / Vada", "Chutney", "Tea / Coffee"],
      dinner: [
        "Chole Bhatura", "Steamed Rice", "Tomato Dal", "Samba Rava Upma",
        "Coconut Chutney", "Rasam", "Cabbage Poriyal", "Pickle",
        "Fryums", "Veg Salad", "Milk", "*Chicken Gravy"
      ]
    },
    Saturday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Chappathi", "Veg Khurma", "Idiyappam (Lemon or Masala)",
        "Coconut Chutney", "Tea / Coffee / Milk", "Boiled Egg"
      ],
      lunch: [
        "Poori", "Dal Aloo Masala", "Veg Pulao", "Steamed Rice", "Punjabi Dal Tadka",
        "Bhindi Do Pyasa", "Kara Kuzhambu", "Kootu", "Jeera Rasam", "Pickle",
        "pecial Fryums", "Butter Milk"
      ],
      snacks: ["Cake (or) Brownie", "Tea / Coffee"],
      dinner: [
        "Sweet", "Malabar Paratha", "Meal Maker Curry", "Mix Vegetable Sabji",
        "Steamed Rice", "Dal Makhni", "Idly", "Idly Podi", "Oil", "Chutney",
        "Tiffen Sambar", "Rasam", "Pickle", "Fryums", "Veg Salad", "Milk", "Special Fruit", "*Fish Gravy"
      ]
    },
    Sunday: {
      breakfast: [
        "Bread", "Butter", "Jam", "Chole Poori", "Veg Upma", "Coconut Chutney", "Tea / Coffee / Milk"
      ],
      lunch: [
        "Chappathi", "Chicken (Pepper / Kadai)", "Paneer Butter Masala (or) Kadai Panneer",
        "Dal Dhadka", "Mint Pulao", "Steamed Rice", "Garlic Rasam", "Poriyal",
        "Pickle", "Fryums", "Butter Milk", "*Chicken Gravy"
      ],
      snacks: ["Corn / Bajji", "Chutney", "Tea / Coffee"],
      dinner: [
        "Variety Stuffing Paratha", "Curd", "Steamed Rice", "Hara Moong Dal Tadka",
        "Kathamba Sambar", "Poriyal", "Rasam", "Pickle", "Fryums",
        "Veg Salad", "Milk", "Ice Cream", "*Chicken Gravy"
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