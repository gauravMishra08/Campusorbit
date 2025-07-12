import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const EventsHub = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [events, setEvents] = useState([]);
  
  const filters = ['All', 'Upcoming', 'Completed'];

  useEffect(() => {
    const sampleEvents = [
      {
        id: 1,
        title: 'X-PLAY',
        organizer: 'by aaruush_srm',
        date: '2025-07-01',
        endDate: '2025-07-20',
        time: '01 - 20 July (Online Mode)',
        image: 'https://i.postimg.cc/hPqxyKM8/X-play.jpg',
        registerLink: ''
      },
      {
        id: 2,
        title: 'MozoHack',
        organizer: 'by SRMKZilla',
        date: '2025-04-21',
        endDate: '2025-04-22',
        time: '24 hours',
        image: 'https://i.postimg.cc/SKWQCHjN/MOZO.jpg',
        registerLink: ''
      },
      {
        id: 3,
        title: 'Hackathon 9.0',
        organizer: 'by Team SRM Hackathon',
        date: '2025-04-11',
        endDate: '2025-04-12',
        time: '36 hours',
        image: 'https://i.postimg.cc/yNgyv8By/HACKATHON9-0.jpg',
        registerLink: ''
      },
      {
        id: 4,
        title: 'HACKP4GLU',
        organizer: 'by HackTheBox SRMIST',
        date: '2025-04-09',
        time: 'from 9:00 IST to 17:00 IST',
        image: 'https://i.postimg.cc/rF2LHPB2/ctf.jpg',
        registerLink: ''
      },
      {
        id: 5,
        title: 'DAYZERO',
        organizer: 'by CodeNex',
        date: '2025-04-07',
        endDate: '2025-04-08',
        time: '36 hours',
        image: 'https://i.postimg.cc/130mkpHW/DAYZERO.jpg',
        registerLink: ''
      },
      {
        id: 6,
        title: 'OSSome Hacks 2.0',
        organizer: 'by GitHub Community SRM',
        date: '2025-03-10',
        endDate: '2025-03-11',
        time: '36 hours',
        image: 'https://i.postimg.cc/bwg2kG5B/OSSOME.jpg',
        registerLink: ''
      }
    ];

    // Process events to determine their status
    const processEvents = (events) => {
      const now = new Date();
      
      return events.map(event => {
        const startDate = new Date(event.date);
        const endDate = event.endDate ? new Date(event.endDate) : startDate;
        
        // Set time to end of day for end date comparison
        const endOfEndDate = new Date(endDate);
        endOfEndDate.setHours(23, 59, 59, 999);
        
        let status = 'upcoming';
        if (now > endOfEndDate) {
          status = 'completed';
        } else if (now >= startDate && now <= endOfEndDate) {
          status = 'ongoing';
        }

        // Format date in Indian format (DD.MM.YYYY)
        const formatDate = (dateString) => {
          const [year, month, day] = dateString.split('-');
          return `${day.padStart(2, '0')}.${month.padStart(2, '0')}.${year}`;
        };

        let displayDate = formatDate(event.date);
        if (event.endDate && event.endDate !== event.date) {
          displayDate = `${formatDate(event.date)} - ${formatDate(event.endDate)}`;
        }

        return {
          ...event,
          status,
          formattedDate: displayDate,
          startDate,
          endDate: endOfEndDate
        };
      }).sort((a, b) => {
        // Sort by start date (newest first)
        return b.startDate - a.startDate;
      });
    };

    setEvents(processEvents(sampleEvents));
  }, []);

  // Filter events based on active filter
  const getFilteredEvents = () => {
    return events.filter(event => {
      if (activeFilter === 'All') return true;
      if (activeFilter === 'Upcoming') return event.status !== 'completed';
      return event.status === 'completed';
    });
  };

  return (
    <div className="space-y-8 p-4">
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
        {getFilteredEvents().length > 0 ? (
          getFilteredEvents().map((event) => (
            <div key={event.id} className="bg-[#2A2A2E] rounded-2xl overflow-hidden shadow-lg border border-[#2D2D30] hover:border-[#FF6B6B]/30 transition-all duration-200">
              {/* Only changed this part for image aspect ratio */}
              <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x225?text=Event+Image';
                  }}
                />
              </div>
              
              {/* Rest remains exactly the same */}
              <div className="p-5 space-y-4">
                <h3 className="text-xl font-bold text-[#22C55E]">{event.title}</h3>
                <div className="space-y-2 text-sm text-[#A1A1AA]">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{event.organizer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.formattedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => event.status === 'upcoming' && window.open(event.registerLink, '_blank')}
                  disabled={event.status !== 'upcoming'}
                  className={`w-full py-3 px-4 rounded-xl font-medium shadow-lg transition-all duration-200 ${
                    event.status === 'completed'
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : event.status === 'ongoing'
                      ? 'bg-[#F59E0B] text-white cursor-not-allowed'
                      : 'bg-[#3B82F6] hover:bg-[#2563EB] text-white'
                  }`}
                >
                  {event.status === 'completed' 
                    ? 'Event Ended' 
                    : event.status === 'ongoing'
                    ? 'Ongoing'
                    : 'Register Now'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-xl text-[#A1A1AA]">No {activeFilter.toLowerCase()} events found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsHub;