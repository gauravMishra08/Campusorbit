import React, { useState } from 'react';

const WhatsInMess = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const menuData = {
    Monday: {
      breakfast: [
        'Bread', 'Butter', 'Jam', 'Millet Dosa', 'Idly Podi', 'Oil', 
        'Chutney', 'Sambar', 'Chapathi', 'White Khururna', 
        'Tea/Coffee/Milk', 'Boiled Egg'
      ],
      lunch: [
        'Chappathi', 'Rajma Masala', 'Jeera Pulao', 'Steamed Rice',
        'Arachivitta Sambar', 'Panchratna Dal', 'Drumstick Mochai',
        'Veg Sabji', 'Pineapple Rasam', 'Pickle', 'Butter Milk', 'Fryums'
      ],
      snacks: [
        'Pav Bhaji', 'Tea/Coffee'
      ],
      dinner: [
        'Madras Paratha', 'Mattar Paneer Masala', 'Vegetable Idly',
        'Idly Podi', 'Oil', 'Special Chutney', 'Steamed Rice',
        'Hara Moong Dal', 'Sambar', 'Rasam', 'Pickle Fryums',
        'Veg Salad', 'Milk', 'Banana', 'Fish Gravy'
      ]
    }
  };

  const currentMenu = menuData[activeDay] || menuData.Monday;

  const mealSections = [
    { name: 'Breakfast', items: currentMenu.breakfast, color: 'bg-orange-500' },
    { name: 'Lunch', items: currentMenu.lunch, color: 'bg-green-500' },
    { name: 'Snacks', items: currentMenu.snacks, color: 'bg-pink-500' },
    { name: 'Dinner', items: currentMenu.dinner, color: 'bg-blue-500' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-red-400 mb-2">What's in Mess</h1>
        <p className="text-lg text-green-400">
          Check daily and weekly menus for all meal slots.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeDay === day
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mealSections.map((section) => (
          <div key={section.name} className="space-y-4">
            <div className={`${section.color} text-white text-center py-3 rounded-lg font-bold text-lg`}>
              {section.name}
            </div>
            <div className="bg-gray-800 rounded-lg p-4 min-h-[400px]">
              <ul className="space-y-2">
                {section.items.map((item, index) => (
                  <li 
                    key={index} 
                    className={`text-sm font-medium ${
                      section.name === 'Breakfast' ? 'text-yellow-400' :
                      section.name === 'Lunch' ? 'text-green-400' :
                      section.name === 'Snacks' ? 'text-pink-400' :
                      'text-blue-400'
                    }`}
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
  );
};

export default WhatsInMess;