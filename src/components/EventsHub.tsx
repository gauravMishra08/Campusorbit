import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const EventsHub = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Upcoming', 'Completed'];
  
  const events = [
    {
      id: 1,
      title: 'HackSRM 5.0',
      organizer: 'Github Community SRM',
      date: 'April 05-06, 2025',
      time: '11:00 IST to 17:00 IST',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg',
      type: 'HACKATHON',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Tech Symposium',
      organizer: 'SRM IEEE',
      date: 'March 15, 2025',
      time: '09:30 IST to 16:00 IST',
      image: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg',
      type: 'CONFERENCE',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Coding Challenge',
      organizer: 'SRM ACM',
      date: 'February 28, 2025',
      time: '14:00 IST to 18:00 IST',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      type: 'COMPETITION',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Startup Expo',
      organizer: 'Entrepreneurship Cell',
      date: 'January 20, 2025',
      time: '10:00 IST to 19:00 IST',
      image: 'https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg',
      type: 'EXHIBITION',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Cultural Fest',
      organizer: 'Student Union',
      date: 'December 12-14, 2024',
      time: 'All Day',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      type: 'FESTIVAL',
      status: 'completed'
    },
    {
      id: 6,
      title: 'AI Workshop',
      organizer: 'Data Science Club',
      date: 'November 25, 2024',
      time: '13:00 IST to 16:00 IST',
      image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
      type: 'WORKSHOP',
      status: 'completed'
    },
    {
      id: 7,
      title: 'Sports Tournament',
      organizer: 'Sports Council',
      date: 'October 05-07, 2024',
      time: '08:00 IST to 20:00 IST',
      image: 'https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg',
      type: 'SPORTS',
      status: 'completed'
    },
    {
      id: 8,
      title: 'Alumni Meet',
      organizer: 'SRM Alumni Association',
      date: 'September 15, 2024',
      time: '18:00 IST onwards',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      type: 'NETWORKING',
      status: 'completed'
    }
  ];

  // Filter events based on active filter
  const filteredEvents = activeFilter === 'All' 
    ? events 
    : events.filter(event => 
        activeFilter === 'Upcoming' 
          ? event.status === 'upcoming' 
          : event.status === 'completed'
      );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FF6B6B] mb-2">Events Hub</h1>
        <p className="text-lg text-[#22C55E]">
          Explore and register for upcoming SRM events.
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
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-[#2A2A2E] rounded-2xl overflow-hidden shadow-lg border border-[#2D2D30] hover:border-[#FF6B6B]/30 transition-all duration-200">
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-white text-[#0E0E10] px-3 py-1 rounded-lg font-bold text-sm">
                {event.type}
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
                {event.status === 'upcoming' ? 'Register' : 'View Details'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsHub;