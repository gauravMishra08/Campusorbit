import React, { useState } from 'react';
import { Search, Users, Calendar, MapPin, MessageCircle, Bot, Zap } from 'lucide-react';

const FindRoommate = () => {
  const [hostel, setHostel] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [activeTab, setActiveTab] = useState('search');

  const quickServices = [
    {
      icon: Bot,
      title: 'Orb AI',
      description: 'Need info about campus? Ask the Orb.',
      buttonText: 'Ask Now',
      color: 'bg-cyan-500'
    },
    {
      icon: Users,
      title: 'Find My Roommate',
      description: 'Meet Your Roommate Before Moving Into hostel!',
      buttonText: 'Find My Roommate',
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: 'QuickServe',
      description: 'Pre-Order. Skip the Line. Quick, simple, no chaos.',
      buttonText: 'Prebook Now',
      color: 'bg-yellow-500'
    },
    {
      icon: Search,
      title: 'Lost & Found',
      description: 'Lost Something on Campus? Post, search, and get it back.',
      buttonText: 'See All',
      color: 'bg-red-500'
    },
    {
      icon: Calendar,
      title: 'Upcoming Events',
      description: 'Join Campus Events Before You Miss Them!',
      buttonText: 'See All',
      color: 'bg-purple-500'
    },
    {
      icon: Bot,
      title: 'Ask Orb',
      description: 'Need info fast? Ask the Orb.',
      buttonText: 'Ask Now',
      color: 'bg-green-500'
    }
  ];

  const flatmates = [
    {
      location: 'Abode Valley',
      flatmatesNeeded: 1,
      type: 'Fully Furnished',
      bhk: '2.75 BHK',
      timing: 'Shifting May',
      rent: '8000/month',
      gender: 'Girls Only',
      email: 'ah6323@srmist.edu.in',
      verified: true
    },
    {
      location: 'Estancia',
      flatmatesNeeded: 3,
      type: 'Fully Furnished',
      bhk: '3 BHK',
      timing: 'Shifting April',
      rent: '12000/month',
      gender: 'Boys Only',
      email: 'gd3424@srmist.edu.in',
      verified: true
    },
    {
      location: 'Estancia',
      flatmatesNeeded: 3,
      type: 'Fully Furnished',
      bhk: '3 BHK',
      timing: 'Shifting April',
      rent: '12000/month',
      gender: 'Boys Only',
      email: 'gd3424@srmist.edu.in',
      verified: true
    },
    {
      location: 'Abode Valley',
      flatmatesNeeded: 1,
      type: 'Fully Furnished',
      bhk: '2.75 BHK',
      timing: 'Shifting May',
      rent: '8000/month',
      gender: 'Girls Only',
      email: 'ah6323@srmist.edu.in',
      verified: true
    }
  ];

  if (activeTab === 'dashboard') {
    return (
      <div className="space-y-6">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 mb-2">
            Find My Roommate: Search by room number to instantly connect with your roommates!
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {quickServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-gray-800 rounded-lg p-6 space-y-4 hover:bg-gray-750 transition-colors">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
                  {service.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'dashboard'
              ? 'bg-green-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setActiveTab('search')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            activeTab === 'search'
              ? 'bg-green-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Find Roommate
        </button>
      </div>

      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-400 mb-2">Find Your Roommate</h1>
        <p className="text-lg text-green-400 mb-6">
          Not sure who's your roommate? Let's find out.
        </p>
      </div>

      {/* Search Form */}
      <div className="bg-gray-800 rounded-lg p-4 lg:p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Hostel"
            value={hostel}
            onChange={(e) => setHostel(e.target.value)}
            className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
          />
          <input
            type="text"
            placeholder="Room Number"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
          />
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Search
          </button>
        </div>
      </div>

      {/* Search Result */}
      <div className="bg-gray-800 rounded-lg p-4 lg:p-6 mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Gaurav Mishra</h3>
            <p className="text-gray-400">gm6674@srmist.edu.in</p>
            <p className="text-gray-400">CSE w/s Cyber Security</p>
          </div>
        </div>
      </div>

      {/* Look for Roommates/Flatmates */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">Look for Roommates/Flatmates</h2>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Post Flat Details
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {flatmates.map((flat, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-green-400">{flat.location}</h3>
                {flat.verified && (
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    VERIFIED
                  </span>
                )}
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-white font-medium">
                  {flat.flatmatesNeeded} Flatmate{flat.flatmatesNeeded > 1 ? 's' : ''} Needed
                </p>
                <p className="text-gray-400">{flat.type}</p>
                <p className="text-gray-400">{flat.bhk}</p>
                <p className="text-gray-400">{flat.timing}</p>
                <p className="text-yellow-400 font-medium">{flat.rent} | {flat.gender}</p>
                <p className="text-blue-400 text-xs">{flat.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindRoommate;