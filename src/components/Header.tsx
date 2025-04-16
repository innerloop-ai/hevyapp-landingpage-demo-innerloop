import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Dumbbell } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 md:h-10 md:w-10 text-hevy-purple" />
              <div className="font-bold text-xl md:text-2xl text-hevy-purple">HEVY</div>
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-hevy-purple font-medium transition">Features</a>
            <a href="#workouts" className="text-foreground/80 hover:text-hevy-purple font-medium transition">Workouts</a>
            <a href="#community" className="text-foreground/80 hover:text-hevy-purple font-medium transition">Community</a>
            <a href="#download" className="hevy-button">Download</a>
          </nav>
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-16 px-4 md:hidden transform transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 mt-8">
          <a 
            href="#features" 
            className="text-foreground font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a 
            href="#workouts" 
            className="text-foreground font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Workouts
          </a>
          <a 
            href="#community" 
            className="text-foreground font-medium text-lg py-2 border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Community
          </a>
          <a 
            href="#download" 
            className="hevy-button text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Download
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
