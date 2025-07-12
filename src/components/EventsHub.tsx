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
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF6B6B] mb-2">Events Hub</h1>
        <p className="text-lg text-[#22C55E] mb-2">
          Explore and register for upcoming SRM events. Hosting one?
        </p>
        <p className="text-lg text-[#22C55E]">
          Add your event to the list!
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              activeFilter === filter
                ? 'bg-[#22C55E] text-white shadow-lg'
                : 'bg-[#2A2A2E] text-[#A1A1AA] hover:bg-[#2D2D30] hover:text-[#F4F4F5]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-[#2A2A2E] rounded-2xl overflow-hidden shadow-lg border border-[#2D2D30] hover:border-[#FF6B6B]/30 transition-all duration-200">
            <div className="relative">
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white text-[#0E0E10] px-3 py-1 rounded-lg font-bold text-sm">
                HACKATHON
              </div>
            </div>
            <div className="p-5 space-y-4">
              <h3 className="text-xl font-bold text-[#22C55E]">{event.title}</h3>
              <div className="space-y-2 text-sm text-[#A1A1AA]">
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
              <button className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-4 rounded-xl transition-all duration-200 font-medium shadow-lg">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Event Button */}
      <div className="flex justify-center lg:justify-end">
        <button className="bg-[#22C55E] hover:bg-[#16A34A] text-white px-8 py-4 rounded-xl font-medium transition-all duration-200 flex items-center gap-3 shadow-lg">
          <Plus className="w-5 h-5" />
          Add Your Event
        </button>
      </div>
    </div>
  );
};

export default EventsHub;
