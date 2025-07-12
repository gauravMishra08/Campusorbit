import React, { useState } from 'react';

const KnowYourCampus = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Academics', 'Food', 'Hostel & Stay', 'Essentials', 'Beyond Campus'];
  
  const locations = [
    {
      id: 1,
      title: 'Arch Gate',
      description: 'First place you\'ll see at SRM. A landmark for deliveries, meetups, and a common pickup point for cabs. Ideal entry to everything around.',
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Essentials'
    },
    {
      id: 2,
      title: 'Tech Park (TP)',
      description: 'Usually where second-year CSE and IT students have their classes. TP is one of the biggest academic buildings and houses several core departments.',
      image: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Academics'
    },
    {
      id: 3,
      title: 'Central Library',
      description: 'A multi-storey silent zone with study spaces, references, and Wi-Fi. Peak-time crowd during exam weeks. Perfect for focused group work.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Academics'
    },
    {
      id: 4,
      title: 'Nelson Mandela Hostel',
      description: 'Hostel with spacious rooms in proximity to key campus zones. Preferred by senior students. Offers good facilities and quiet space.',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Hostel & Stay'
    },
    {
      id: 5,
      title: 'YouPrints Xerox Shop',
      description: 'Located near Meenakshi Hostel. Go-to for printing, copying, or emergency submissions. Open till late. Usually crowded during peak hours.',
      image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Essentials'
    },
    {
      id: 6,
      title: 'SRM Hospital',
      description: 'The in-campus medical center for general check-ups and emergencies. Pharmacy available with extended hours. Visit only if really needed.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Essentials'
    },
    {
      id: 7,
      title: 'Mahindra World City',
      description: 'Shopping and café hub 15 mins away. Popular for Domino\'s, CCD, Subway. Ideal for weekend visits or outings. Reachable by auto from Arch Gate.',
      image: 'https://images.pexels.com/photos/1058277/pexels-photo-1058277.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Beyond Campus'
    },
    {
      id: 8,
      title: 'Java Canteen',
      description: 'Offers wide variety of quick meals. Famous for Batey ka Roti, sandwiches, and lemon juice. Always crowded. Great for casual group meals.',
      image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Food'
    }
  ];

  const filteredLocations = activeFilter === 'All' 
    ? locations 
    : locations.filter(location => location.category === activeFilter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-red-400 mb-2">Know Your Campus</h1>
        <p className="text-lg text-green-400">
          From academic blocks to food joints and nearby essentials - view pictures, 
          descriptions, and map locations.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredLocations.map((location) => (
          <div key={location.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src={location.image}
              alt={location.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-green-400">{location.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {location.description}
              </p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                View on Map
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowYourCampus;