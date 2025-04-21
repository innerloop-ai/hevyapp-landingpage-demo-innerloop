import React from 'react';
import { Star, Download } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section id="download" className="hevy-section bg-black text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side with text content */}
          <div className="w-full md:w-1/2 space-y-6 md:pr-12 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold">
              Download <span className="text-hevy-lightPurple">Hevy</span> Now
            </h2>
            <p className="text-lg opacity-90">
              Join over 1 million users who trust Hevy to track their workouts. Available on iOS and Android.
            </p>

            <div className="flex items-center space-x-2 my-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} className="text-yellow-400 fill-yellow-400" />
              ))}
              <span className="ml-2 text-lg font-medium">4.9/5</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://apps.apple.com/app/hevy-gym-workout-tracker/id1490335177"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-hevy-darkBlue hover:bg-gray-100 transition rounded-lg px-6 py-3 flex items-center justify-center gap-2 font-semibold"
              >
                <Download size={20} /> iOS App
              </a>
              <a 
                href="https://play.google.com/store/apps/details?id=com.hevy.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-hevy-darkBlue hover:bg-gray-100 transition rounded-lg px-6 py-3 flex items-center justify-center gap-2 font-semibold"
              >
                <Download size={20} /> Android App
              </a>
            </div>
          </div>

          {/* Right side with app mockup */}
          <div className="w-full md:w-1/2 relative">
            <img 
              src="https://play.innerloop.stream/playersvc/ins-share/cu-tEeaEZt1XHHQHB39tVHDg"
              alt="Hevy App Screenshots" 
              className="w-full max-w-md mx-auto"
            />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-hevy-purple/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
