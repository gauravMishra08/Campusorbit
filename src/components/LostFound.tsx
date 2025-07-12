import React, { useState } from 'react';
import { Search, Plus, MapPin, Calendar, Tag, MessageCircle } from 'lucide-react';

const LostFound = () => {
  const [activeTab, setActiveTab] = useState('Lost');
  const [searchTerm, setSearchTerm] = useState('');
  
  const tabs = ['Lost', 'Found'];
  
  const lostItems = [
    {
      id: 1,
      title: 'Black iPhone 14',
      description: 'Lost my black iPhone 14 near the library. Has a clear case with stickers.',
      location: 'Central Library',
      date: '2 days ago',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
      contact: 'Rahul Kumar',
      reward: '₹500 reward'
    },
    {
      id: 2,
      title: 'Blue Water Bottle',
      description: 'Milton blue water bottle with my name written on it. Lost during sports hour.',
      location: 'Sports Complex',
      date: '1 day ago',
      category: 'Personal Items',
      image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=400',
      contact: 'Priya Sharma',
      reward: null
    },
    {
      id: 3,
      title: 'Engineering Notebook',
      description: 'Red colored notebook with engineering notes. Very important for exams.',
      location: 'Tech Park',
      date: '3 days ago',
      category: 'Academic',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      contact: 'Amit Singh',
      reward: null
    }
  ];

  const foundItems = [
    {
      id: 4,
      title: 'Silver Watch',
      description: 'Found a silver watch near the canteen. Looks expensive, owner can contact me.',
      location: 'Java Canteen',
      date: '1 day ago',
      category: 'Accessories',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=400',
      contact: 'Vikash Gupta'
    },
    {
      id: 5,
      title: 'Red Earphones',
      description: 'Found red colored earphones in the computer lab. Still in good condition.',
      location: 'Computer Lab',
      date: '4 hours ago',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400',
      contact: 'Sneha Patel'
    }
  ];

  const currentItems = activeTab === 'Lost' ? lostItems : foundItems;
  
  const filteredItems = currentItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-400 mb-2">Lost & Found</h1>
        <p className="text-lg text-green-400">
          Lost something on campus? Post here and get it back. Found something? Help a fellow student!
        </p>
      </div>

      {/* Search and Add Item */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search lost/found items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
          />
        </div>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Post Item
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === tab
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {tab} Items
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  activeTab === 'Lost' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
                }`}>
                  {activeTab}
                </span>
              </div>
              
              <p className="text-gray-400 text-sm line-clamp-3">{item.description}</p>
              
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span>{item.category}</span>
                </div>
                {activeTab === 'Lost' && item.reward && (
                  <div className="text-yellow-400 font-medium">{item.reward}</div>
                )}
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors font-medium flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Contact {item.contact}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            No {activeTab.toLowerCase()} items found matching your search.
          </p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Post the first {activeTab.toLowerCase()} item
          </button>
        </div>
      )}
    </div>
  );
};

export default LostFound;