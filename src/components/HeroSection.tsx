
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side with text content */}
          <div className="w-full md:w-1/2 space-y-6 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Workout Tracking</span> Made Easy
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Plan, track and analyze your workouts with ease. Share your progress with friends and stay motivated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#download" className="hevy-button flex items-center justify-center gap-2">
                Download Now <ArrowRight size={18} />
              </a>
              <a href="#features" className="bg-white border-2 border-hevy-purple text-hevy-purple hover:bg-gray-50 transition-all rounded-full font-semibold px-6 py-3 text-center">
                See Features
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/24.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-hevy-purple">1M+</span> active users
              </p>
            </div>
          </div>
          
          {/* Right side with app mockup */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative animate-float">
              <img 
                src="https://www.hevyapp.com/wp-content/uploads/2023/09/hevy-screens-intro.png" 
                alt="Hevy App Screenshots" 
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hevy-purple/20 to-transparent rounded-3xl"></div>
            </div>
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-hevy-lightPurple/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-hevy-purple/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
