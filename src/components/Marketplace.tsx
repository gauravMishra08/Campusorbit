import React, { useState } from 'react';
import { Search, Plus, MapPin, Calendar, Tag, MessageCircle, Filter } from 'lucide-react';

const Marketplace = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const tabs = ['All', 'Buy', 'Sell'];
  
  const items = [
    {
      id: 1,
      title: 'iPhone 13 Pro Max',
      description: 'Excellent condition iPhone 13 Pro Max, 256GB, with original box and charger. Barely used for 6 months.',
      price: '₹45,000',
      location: 'Abode Valley',
      date: '2 days ago',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
      contact: 'Rahul Kumar',
      email: 'rk6674@srmist.edu.in',
      type: 'sell'
    },
    {
      id: 2,
      title: 'Engineering Mathematics Books',
      description: 'Complete set of engineering mathematics books for first year students. All in good condition.',
      price: '₹350',
      location: 'Estancia',
      date: '1 week ago',
      category: 'Books',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      contact: 'Priya Sharma',
      email: 'ps6674@srmist.edu.in',
      type: 'sell'
    },
    {
      id: 3,
      title: 'Study Table with Chair',
      description: 'Wooden study table with matching chair, perfect for hostel room. Very good condition.',
      price: '₹2,500',
      location: 'Nelson Mandela Hostel',
      date: '3 days ago',
      category: 'Furniture',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=400',
      contact: 'Amit Singh',
      email: 'as6674@srmist.edu.in',
      type: 'sell'
    },
    {
      id: 4,
      title: 'Gaming Laptop',
      description: 'High-performance gaming laptop with RTX 3060, perfect for gaming and coding. Excellent condition.',
      price: '₹55,000',
      location: 'Abode Valley',
      date: '5 days ago',
      category: 'Electronics',
      image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      contact: 'Vikash Gupta',
      email: 'vg6674@srmist.edu.in',
      type: 'sell'
    },
    {
      id: 5,
      title: 'Cricket Kit',
      description: 'Complete cricket kit with bat, pads, gloves, and helmet. Good condition, barely used.',
      price: '₹1,200',
      location: 'Estancia',
      date: '1 day ago',
      category: 'Sports',
      image: 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=400',
      contact: 'Rohit Verma',
      email: 'rv6674@srmist.edu.in',
      type: 'sell'
    },
    {
      id: 6,
      title: 'Winter Jacket',
      description: 'Warm winter jacket, size M, barely used. Perfect for cold weather.',
      price: '₹800',
      location: 'Abode Valley',
      date: '4 days ago',
      category: 'Clothing',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
      contact: 'Sneha Patel',
      email: 'sp6674@srmist.edu.in',
      type: 'sell'
    }
  ];

  const filteredItems = items.filter(item => {
    const matchesTab = activeTab === 'All' || 
                      (activeTab === 'Buy' && item.type === 'sell') || 
                      (activeTab === 'Sell' && item.type === 'sell');
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-400 mb-2">Marketplace</h1>
        <div className="space-y-2">
          <p className="text-lg text-green-400">How It Works</p>
          <div className="text-sm text-gray-300 space-y-1">
            <p>1. Want to buy or sell something on campus?</p>
            <p>2. Submit a form with item details.</p>
            <p>3. We'll display it in the Marketplace list.</p>
            <p>4. Buyer or seller gets contacted securely.</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 space-y-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Item Name</label>
              <input
                type="text"
                placeholder="e.g. 'iPhone 13 Pro Max'"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
              <input
                type="text"
                placeholder="electronics, books, furniture, etc."
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
              <textarea
                placeholder="mention any unique marks or identifiers"
                rows={3}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500 resize-none"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Price</label>
              <input
                type="text"
                placeholder="₹ amount"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
              <input
                type="text"
                placeholder="where it was lost/found"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
            </div>
            
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                <input
                  type="date"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-2">Upload Photo</label>
                <button className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-gray-400 hover:bg-gray-600 transition-colors">
                  + Upload Photo (optional)
                </button>
              </div>
            </div>
            
            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2">
                <input type="radio" name="type" value="sell" className="text-red-500" />
                <span className="text-red-400">● Sell</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="type" value="buy" className="text-green-500" />
                <span className="text-green-400">● Buy</span>
              </label>
            </div>
            
            <div>
              <input
                type="email"
                placeholder="gm6674@srmist.edu.in"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
            </div>
            
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
              Post Item
            </button>
          </div>
        </div>

        {/* Items List */}
        <div className="space-y-4">
          {/* Tabs and Search */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Sort by</span>
              <Filter className="w-4 h-4" />
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Items List */}
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-gray-800 rounded-lg p-4 flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-white text-sm truncate">{item.title}</h3>
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs flex-shrink-0">
                      Sell
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mt-1 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
                    <span className="font-medium text-green-400">{item.price}</span>
                    <span>{item.location}, {item.date}</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-400">No items found matching your criteria.</p>
              <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Be the first to post in this category
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;