import React, { useState } from 'react';
import { Send, Star, MessageCircle, ThumbsUp, Bug, Lightbulb, Mail } from 'lucide-react';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedbackType, setFeedbackType] = useState('general');
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const feedbackTypes = [
    { id: 'general', label: 'General Feedback', icon: MessageCircle },
    { id: 'bug', label: 'Report Bug', icon: Bug },
    { id: 'feature', label: 'Feature Request', icon: Lightbulb },
    { id: 'compliment', label: 'Compliment', icon: ThumbsUp }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ rating, feedbackType, feedback, email });
    setRating(0);
    setFeedback('');
    setEmail('');
    alert('Thank you for your feedback! We appreciate your input.');
  };

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#FF5E5B] mb-4">
          Your Feedback Matters!
        </h1>
        <p className="text-lg text-[#CFCFCF] leading-relaxed">
          Help us improve CampusOrbit! Every update is shaped by your voice.
        </p>
      </div>

      <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-gray-800">
        {/* Feedback Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Feedback Type */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">What would you like to share?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {feedbackTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFeedbackType(type.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 group ${
                      feedbackType === type.id
                        ? 'border-[#FF5E5B] bg-[#FF5E5B]/10'
                        : 'border-gray-700 hover:border-[#FF5E5B]/30'
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`p-3 rounded-lg mb-2 ${
                        feedbackType === type.id 
                          ? 'bg-[#FF5E5B]/20' 
                          : 'bg-[#0F0F0F] group-hover:bg-[#FF5E5B]/10'
                      }`}>
                        <Icon 
                          className={`w-5 h-5 ${
                            feedbackType === type.id 
                              ? 'text-[#FF5E5B]' 
                              : 'text-[#808080] group-hover:text-[#FF5E5B]'
                          }`}
                        />
                      </div>
                      <span className={`text-sm font-medium ${
                        feedbackType === type.id 
                          ? 'text-white' 
                          : 'text-[#CFCFCF] group-hover:text-white'
                      }`}>
                        {type.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Rating */}
          <div>
            <h2 className="text-xl font-bold text-white mb-6">How would you rate your experience?</h2>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= rating
                        ? 'text-[#FF5E5B] fill-current'
                        : 'text-[#808080] hover:text-[#FF5E5B]/70'
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center text-[#CFCFCF] mt-3">
                {rating === 1 && 'Poor'}
                {rating === 2 && 'Fair'}
                {rating === 3 && 'Good'}
                {rating === 4 && 'Very Good'}
                {rating === 5 && 'Excellent'}
              </p>
            )}
          </div>

          {/* Feedback Message */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Your Feedback</h2>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us what you think about CampusOrbit. What features do you love? What can we improve?"
              rows={5}
              className="w-full bg-[#0F0F0F] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-[#808080] focus:outline-none focus:border-[#FF5E5B] resize-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Email (Optional)</h2>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@srmist.edu.in"
              className="w-full bg-[#0F0F0F] border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-[#808080] focus:outline-none focus:border-[#FF5E5B]"
            />
            <p className="text-sm text-[#808080] mt-2">
              We'll only use this to follow up on your feedback if needed.
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto mx-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#FF5E5B] text-white font-semibold rounded-xl hover:bg-[#FF7875] transform hover:scale-105 transition-all duration-200 active:scale-95"
            >
              <Send className="w-5 h-5" />
              Submit Feedback
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0F0F0F] rounded-xl p-6 border border-gray-700 text-center">
              <h3 className="text-[#CFCFCF] mb-2">WhatsApp</h3>
              <p className="text-[#FF5E5B] font-medium">+91 98765 43210</p>
            </div>
            <div className="bg-[#0F0F0F] rounded-xl p-6 border border-gray-700 text-center">
              <h3 className="text-[#CFCFCF] mb-2">Instagram</h3>
              <p className="text-[#FF5E5B] font-medium">@campusorbit_srm</p>
            </div>
            <div className="bg-[#0F0F0F] rounded-xl p-6 border border-gray-700 text-center">
              <h3 className="text-[#CFCFCF] mb-2">Email</h3>
              <p className="text-[#FF5E5B] font-medium">feedback@campusorbit.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="mt-8 bg-[#1A1A1A] rounded-2xl p-8 border border-gray-800">
        <h2 className="text-xl font-bold text-white mb-6 text-center">Community Feedback</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-[#FF5E5B]">1,247</p>
            <p className="text-[#CFCFCF]">Total Feedback</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center items-center gap-1">
              <p className="text-3xl font-bold text-[#FF5E5B]">4.6</p>
              <Star className="w-5 h-5 text-[#FF5E5B] fill-current" />
            </div>
            <p className="text-[#CFCFCF]">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#FF5E5B]">23</p>
            <p className="text-[#CFCFCF]">Features Added</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-[#FF5E5B]">156</p>
            <p className="text-[#CFCFCF]">Bugs Fixed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;