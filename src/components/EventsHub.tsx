import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface Event {
  id: number;
  title: string;
  organizer: string;
  date: string;
  endDate?: string;
  time: string;
  image: string;
  registerLink: string;
  status?: 'upcoming' | 'ongoing' | 'completed';
  formattedDate?: string;
  startDate?: Date;
}

const EventsHub = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [events, setEvents] = useState<Event[]>([]);
  
  const filters = ['All', 'Upcoming', 'Completed'];

  useEffect(() => {
    const sampleEvents = [
      {
        id: 7,
        title: 'Hack & Beyond',
        organizer: 'by Aakash Research Lab',
        date: '2025-08-11',
        endDate: '2025-08-12',
        time: 'N.A.',
        image: 'https://i.postimg.cc/W4S7gKCC/Screenshot-2025-07-26-at-22-37-13.png',
        registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLScAEzF1r7pJmBicPGLFT6No_jpW95y4Ec_LaOFeHmyJjAUNAQ/viewform'
      },
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
    const processEvents = (events: Event[]) => {
      const now = new Date();
      
      return events.map((event: Event) => {
        const startDate = new Date(event.date);
        const endDate = event.endDate ? new Date(event.endDate) : startDate;
        
        // Set time to end of day for end date comparison
        const endOfEndDate = new Date(endDate);
        endOfEndDate.setHours(23, 59, 59, 999);
        
        let status: 'upcoming' | 'ongoing' | 'completed' = 'upcoming';
        if (now > endOfEndDate) {
          status = 'completed';
        } else if (now >= startDate && now <= endOfEndDate) {
          status = 'ongoing';
        }

        // Format date in Indian format (DD.MM.YYYY)
        const formatDate = (dateString: string) => {
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
        };
      }).sort((a, b) => {
        // Sort by start date (newest first)
        return b.startDate!.getTime() - a.startDate!.getTime();
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
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
        {getFilteredEvents().length > 0 ? (
          getFilteredEvents().map((event) => (
            <CardContainer key={event.id} className="inter-var w-full sm:w-80 lg:w-72 xl:w-80" containerClassName="py-4">
              <CardBody className="bg-[#2A2A2E] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border border-[#2D2D30]">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-[#22C55E] mb-2"
                >
                  {event.title}
                </CardItem>
                
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-[#A1A1AA] text-sm max-w-sm mb-4"
                >
                  {event.organizer}
                </CardItem>
                
                <CardItem translateZ="100" className="w-full mb-4">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x225?text=Event+Image';
                    }}
                  />
                </CardItem>
                
                <div className="space-y-2 mb-6">
                  <CardItem translateZ="80" className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                    <Calendar className="w-4 h-4" />
                    <span>{event.formattedDate}</span>
                  </CardItem>
                  <CardItem translateZ="80" className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </CardItem>
                </div>
                
                <CardItem
                  translateZ={20}
                  as="button"
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
                </CardItem>
              </CardBody>
            </CardContainer>
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