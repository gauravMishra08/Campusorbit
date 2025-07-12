import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Plus } from 'lucide-react';

const EventsHub = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Upcoming', 'Completed'];
  
  const events = Array(8).fill(null).map((_, index) => ({
    id: index + 1,
    title: 'HackSRM 5.0',
    organizer: 'Github Community SRM',
    date: 'April 05-06, 2025',
    time: 'from 11:00 IST to 17:00 IST',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400',
    status: 'upcoming'
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-400 mb-2">Events Hub</h1>
        <p className="text-lg text-green-400 mb-2">
          Explore and register for upcoming SRM events. Hosting one?
        </p>
        <p className="text-lg text-green-400">
          Add your event to the list!
        </p>
      </div>

      {/* Filter Tabs */}
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

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white text-gray-900 px-3 py-1 rounded-lg font-bold text-sm">
                HACKATHON
              </div>
            </div>
            <div className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-green-400">{event.title}</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>by {event.organizer}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{event.time}</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Event Button */}
      <div className="flex justify-center lg:justify-end">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          Add Your Event
        </button>
      </div>
    </div>
  );
};

export default EventsHub;