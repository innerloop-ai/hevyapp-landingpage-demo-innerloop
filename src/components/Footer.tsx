import React from 'react';
import { Instagram, Twitter, Facebook, Dumbbell } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12 border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <Dumbbell className="h-8 w-8 text-hevy-purple" />
              <div className="font-bold text-xl text-hevy-purple ml-2">HEVY</div>
            </div>
            <p className="text-gray-600 max-w-xs">
              The workout tracker for people who want to make progress in the gym.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-hevy-purple transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-hevy-purple transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-hevy-purple transition">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-600 hover:text-hevy-purple transition">Features</a></li>
                <li><a href="#workouts" className="text-gray-600 hover:text-hevy-purple transition">Workouts</a></li>
                <li><a href="#community" className="text-gray-600 hover:text-hevy-purple transition">Community</a></li>
                <li><a href="#download" className="text-gray-600 hover:text-hevy-purple transition">Download</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-hevy-purple transition">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-hevy-purple transition">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-hevy-purple transition">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-hevy-purple transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-hevy-purple transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 hover:text-hevy-purple transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-hevy-purple transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center md:text-left text-gray-500">
          <p>&copy; {currentYear} Hevy - Workout Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
