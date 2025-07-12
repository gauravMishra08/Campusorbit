import React, { useState } from 'react';
import { Phone, Menu as MenuIcon } from 'lucide-react';

const QuickServe = () => {
  const outlets = [
    {
      id: 1,
      name: 'Classic Biriyani',
      description: 'Desi Hyderabadi Biriyani',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43210'
    },
    {
      id: 2,
      name: 'Classic Biriyani',
      description: 'Desi Hyderabadi Biriyani',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43210'
    },
    {
      id: 3,
      name: 'Classic Biriyani',
      description: 'Desi Hyderabadi Biriyani',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43210'
    },
    {
      id: 4,
      name: 'Classic Biriyani',
      description: 'Desi Hyderabadi Biriyani',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43210'
    },
    {
      id: 5,
      name: 'Classic Biriyani',
      description: 'Desi Hyderabadi Biriyani',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43210'
    },
    {
      id: 6,
      name: 'Classic Biriyani',
      description: 'Desi Hyderabadi Biriyani',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43210'
    },
    {
      id: 7,
      name: 'Classic Biriyani',
      description: 'Desi Hyderabadi Biriyani',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43210'
    },
    {
      id: 8,
      name: 'Classic Biriyani',
      description: 'Desi Hyderabadi Biriyani',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=400',
      phone: '+91 98765 43210'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-400 mb-2">QuickServe</h1>
        <p className="text-lg text-green-400">
          Order food in advance, skip queues, and enjoy your meal anytime!
        </p>
      </div>

      {/* Special Offer Banner */}
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800)'
          }}
        />
        <div className="relative p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            Special Thali Offer at Google Food Park
          </h2>
          <p className="text-gray-300 mb-4">Get 20% off on all thali orders above ₹200</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Grab Deal
          </button>
        </div>
      </div>

      {/* Outlets Section */}
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Outlets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {outlets.map((outlet) => (
            <div key={outlet.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={outlet.image}
                alt={outlet.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-bold text-green-400">{outlet.name}</h3>
                <p className="text-gray-400 text-sm">{outlet.description}</p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors font-medium flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call
                  </button>
                  <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors font-medium flex items-center justify-center gap-2">
                    <MenuIcon className="w-4 h-4" />
                    Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickServe;