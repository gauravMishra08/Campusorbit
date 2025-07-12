import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const About = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const founders = [
    {
      name: 'Hanush Singh',
      role: 'Founder & Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      portfolio: '#'
    },
    {
      name: 'Utkarsh Jaiswal',
      role: 'Developer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      portfolio: '#'
    },
    {
      name: 'Saatvik Shashank',
      role: 'Developer',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      portfolio: '#'
    },
    {
      name: 'Rashmika Das',
      role: 'Developer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      portfolio: '#'
    },
    {
      name: 'Gaurav Mishra',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      portfolio: '#'
    }
  ];

  const faqs = [
    {
      question: 'What is CampusOrbit?',
      answer: 'CampusOrbit is a student-driven platform designed to simplify and enhance college life. From academic needs to social events, everything you need is just a tap away.'
    },
    {
      question: 'Who can use CampusOrbit?',
      answer: 'Any student from your campus can use CampusOrbit - whether you\'re a fresher or a final-year student. It\'s built for the entire college community.'
    },
    {
      question: 'Is CampusOrbit an official SRM app?',
      answer: 'CampusOrbit is developed by SRM students for SRM students. While it\'s not officially affiliated with SRM management yet, it\'s a thriving, community-driven initiative.'
    },
    {
      question: 'How do I give feedback or suggest a new feature?',
      answer: 'Use the Feedback section or reach out via WhatsApp or Instagram. We actively consider all suggestions from students!'
    },
    {
      question: 'Will more features be added soon?',
      answer: 'Absolutely! We\'re constantly evolving. Stay tuned for new tools, features, and updates.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      {/* About Section */}
      <div className="bg-[#0F0F0F]/90 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FF5E5B] mb-6">About CampusOrbit</h1>
        <div className="space-y-4 text-[#CFCFCF] leading-relaxed">
          <p className="text-lg">
            CampusOrbit is a student-driven digital platform created to unify and simplify every aspect of college life - 
            from academics and hostel life to community, creativity, and convenience.
          </p>
          <p>
            We're more than just an app - we're a movement to centralize and simplify your campus experience.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#0F0F0F]/90 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FF5E5B] mb-4">Vision</h2>
          <p className="text-[#CFCFCF] leading-relaxed">
            To empower every college student through a unified digital ecosystem that enhances learning, living, and 
            connecting.
          </p>
        </div>
        
        <div className="bg-[#0F0F0F]/90 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <h2 className="text-2xl font-bold text-[#FF5E5B] mb-4">Mission</h2>
          <p className="text-[#CFCFCF] leading-relaxed">
            To deliver intuitive tools and seamless access to everything you need - whether it's finding a roommate, 
            joining a community, pre-booking meals, or exploring campus events.
          </p>
        </div>
      </div>

      {/* Why Choose CampusOrbit */}
      <div className="bg-[#0F0F0F]/90 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
        <h2 className="text-2xl font-bold text-[#FF5E5B] mb-6">Why Choose CampusOrbit?</h2>
        <div className="space-y-4 text-[#CFCFCF]">
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-[#FF5E5B] rounded-full mt-2 flex-shrink-0"></div>
            <p>Tired of juggling between scattered and outdated portals?</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-[#FF5E5B] rounded-full mt-2 flex-shrink-0"></div>
            <p>Struggling to find like-minded peers or relevant student communities?</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-2 h-2 bg-[#FF5E5B] rounded-full mt-2 flex-shrink-0"></div>
            <p>Want to feel more at home on your campus?</p>
          </div>
        </div>
        <p className="text-[#CFCFCF] mt-6">
          CampusOrbit is your all-in-one solution - where technology meets student life.
        </p>
      </div>

      {/* Meet the Founders */}
      <div className="bg-[#0F0F0F]/90 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
        <h2 className="text-2xl font-bold text-[#FF5E5B] mb-4">Meet the Founders</h2>
        <p className="text-[#CFCFCF] mb-8">
          The passionate student team behind CampusOrbit - building for the community, by the community:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {founders.map((founder, index) => (
            <div key={index} className="bg-[#1A1A1A] rounded-lg p-4 text-center border border-gray-800 hover:border-gray-700 transition-all">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-[#FF5E5B]/30"
              />
              <h3 className="text-white font-bold text-lg">{founder.name}</h3>
              <p className="text-[#808080] text-sm mb-3">{founder.role}</p>
              <button 
                onClick={() => window.open(founder.portfolio, '_blank')}
                className="text-[#FF5E5B] hover:text-[#FF5E5B]/80 text-sm flex items-center justify-center gap-1 mx-auto transition-colors"
              >
                View Portfolio
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-[#0F0F0F]/90 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
        <h2 className="text-2xl font-bold text-[#FF5E5B] mb-6">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#1A1A1A] rounded-lg border border-gray-800 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1F1F1F] transition-colors"
              >
                <h3 className="text-[#FF5E5B] font-medium text-lg">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-[#808080] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#808080] flex-shrink-0" />
                )}
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#CFCFCF] leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;