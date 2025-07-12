import React from 'react';
import { MessageCircle, Users, Heart, Zap, ExternalLink } from 'lucide-react';

const JoinCommunity = () => {
  const whatsappGroups = [
    {
      name: 'SRM General Discussion',
      description: 'Main campus discussion group for all students',
      members: '2.5k+ members',
      category: 'General',
      link: 'https://chat.whatsapp.com/example1',
      icon: '🎓'
    },
    {
      name: 'CSE Department',
      description: 'Computer Science students discussion and updates',
      members: '1.2k+ members',
      category: 'Academic',
      link: 'https://chat.whatsapp.com/example2',
      icon: '💻'
    },
    {
      name: 'SRM Events & Fests',
      description: 'Stay updated with all campus events and festivals',
      members: '3k+ members',
      category: 'Events',
      link: 'https://chat.whatsapp.com/example3',
      icon: '🎉'
    },
    {
      name: 'Hostel Life',
      description: 'Connect with hostel mates and share experiences',
      members: '1.8k+ members',
      category: 'Hostel',
      link: 'https://chat.whatsapp.com/example4',
      icon: '🏠'
    },
    {
      name: 'SRM Sports Club',
      description: 'For all sports enthusiasts and team formations',
      members: '800+ members',
      category: 'Sports',
      link: 'https://chat.whatsapp.com/example5',
      icon: '⚽'
    },
    {
      name: 'Study Groups',
      description: 'Form study groups and share academic resources',
      members: '1.5k+ members',
      category: 'Academic',
      link: 'https://chat.whatsapp.com/example6',
      icon: '📚'
    },
    {
      name: 'SRM Marketplace',
      description: 'Buy, sell, and exchange items within campus',
      members: '2k+ members',
      category: 'Marketplace',
      link: 'https://chat.whatsapp.com/example7',
      icon: '🛒'
    },
    {
      name: 'Lost & Found SRM',
      description: 'Report lost items and help others find their belongings',
      members: '1.1k+ members',
      category: 'Utility',
      link: 'https://chat.whatsapp.com/example8',
      icon: '🔍'
    },
    {
      name: 'SRM Foodies',
      description: 'Discuss food, restaurants, and mess reviews',
      members: '2.2k+ members',
      category: 'Food',
      link: 'https://chat.whatsapp.com/example9',
      icon: '🍕'
    }
  ];

  const categories = ['All', 'General', 'Academic', 'Events', 'Hostel', 'Sports', 'Marketplace', 'Utility', 'Food'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredGroups = activeCategory === 'All' 
    ? whatsappGroups 
    : whatsappGroups.filter(group => group.category === activeCategory);

  const handleJoinGroup = (link: string, groupName: string) => {
    // In a real app, this would open the WhatsApp group link
    window.open(link, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="text-center lg:text-left">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-400 mb-2">Join Community</h1>
        <p className="text-lg text-green-400 mb-4">
          Connect with fellow students through our WhatsApp groups. Find your tribe and stay updated!
        </p>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span>10k+ Active Members</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-green-400" />
            <span>24/7 Active Discussions</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-400" />
            <span>Supportive Community</span>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* WhatsApp Groups Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {filteredGroups.map((group, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 space-y-4 hover:bg-gray-750 transition-colors border border-gray-700">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{group.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">{group.name}</h3>
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                  {group.category}
                </span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">{group.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Users className="w-4 h-4" />
                <span>{group.members}</span>
              </div>
              <div className="flex items-center gap-1 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs">Active</span>
              </div>
            </div>

            <button
              onClick={() => handleJoinGroup(group.link, group.name)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp Group
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Community Guidelines */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
          <Zap className="w-6 h-6" />
          Community Guidelines
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
          <div className="space-y-2">
            <p>• Be respectful and kind to all members</p>
            <p>• No spam or promotional content</p>
            <p>• Keep discussions relevant to the group topic</p>
            <p>• No sharing of personal information</p>
          </div>
          <div className="space-y-2">
            <p>• Help fellow students when possible</p>
            <p>• Use appropriate language at all times</p>
            <p>• Report any inappropriate behavior</p>
            <p>• Have fun and make new connections!</p>
          </div>
        </div>
      </div>

      {filteredGroups.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No groups found in this category.</p>
          <p className="text-gray-500 text-sm mt-2">Try selecting a different category or check back later!</p>
        </div>
      )}
    </div>
  );
};

export default JoinCommunity;