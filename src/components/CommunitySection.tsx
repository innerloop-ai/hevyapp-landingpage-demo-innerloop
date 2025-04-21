import React from 'react';
import { Apple, Play, Download } from 'lucide-react';

const testimonials = [
  {
    content: "Hevy has transformed how I track my fitness progress. The interface is intuitive and the social features keep me motivated!",
    author: "Sarah J.",
    role: "Fitness Enthusiast",
    image: "https://play.innerloop.stream/playersvc/ins-share/cu-dL7zCFLxzCZqgsbQ2xoIQ"
  },
  {
    content: "As a personal trainer, I recommend Hevy to all my clients. The workout tracking capabilities are unmatched, and the progress charts are incredibly useful.",
    author: "Mike T.",
    role: "Personal Trainer",
    image: "https://play.innerloop.stream/playersvc/ins-share/cu--lmveEt4U3LEmhp24d_4r"
  },
  {
    content: "The best workout tracker I've used. Being able to see my friends' workouts and share my own keeps me motivated and accountable.",
    author: "Alex W.",
    role: "CrossFit Athlete",
    image: "https://play.innerloop.stream/playersvc/ins-share/cu-a4yZ6qqwQz3M-h-vIV53B"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.author} 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.author}</h4>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial.content}"</p>
    </div>
  );
};

const CommunitySection = () => {
  return (
    <section id="community" className="hevy-section">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Join Our Community</span> of Fitness Enthusiasts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with friends, share your workouts, and stay motivated together. Hevy's social features make fitness more fun and engaging.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-hevy-purple to-hevy-lightPurple rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Over 1 Million Fitness Enthusiasts</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Start tracking your workouts, achieving your goals, and connecting with like-minded fitness enthusiasts today.
          </p>
          <div className="max-w-xs mx-auto">
            <a 
              href="https://apps.apple.com/app/hevy-gym-workout-tracker/id1490335177"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 transition-transform hover:scale-105 bg-white text-hevy-darkBlue hover:bg-gray-100 rounded-lg px-6 py-3 flex items-center justify-center gap-2 font-semibold"
            >
              <Download size={20} /> iOS App
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.hevy.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-transform hover:scale-105 bg-white text-hevy-darkBlue hover:bg-gray-100 rounded-lg px-6 py-3 flex items-center justify-center gap-2 font-semibold"
            >
              <Download size={20} /> Android App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
