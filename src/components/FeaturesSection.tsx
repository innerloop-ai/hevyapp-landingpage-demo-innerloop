
import React from 'react';
import { Dumbbell, TrendingUp, Users, Smartphone, Clock, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Dumbbell,
    title: "1000+ Exercises",
    description: "Access an extensive library of exercises with detailed instructions and animations",
    className: "bg-blue-50"
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your workout performance and see your strength improvements over time",
    className: "bg-purple-50"
  },
  {
    icon: Users,
    title: "Social Community",
    description: "Connect with friends, share workouts and motivate each other",
    className: "bg-green-50"
  },
  {
    icon: Smartphone,
    title: "Cross Platform",
    description: "Available on iOS and Android with seamless cloud sync across devices",
    className: "bg-amber-50"
  },
  {
    icon: Clock,
    title: "Timer & Rest",
    description: "Built-in timer to track sets and rest periods with customizable presets",
    className: "bg-red-50"
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Comprehensive statistics and visual analytics to understand your performance",
    className: "bg-indigo-50"
  }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  const Icon = feature.icon;
  
  return (
    <div className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all duration-300">
      <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4", feature.className)}>
        <Icon className="text-hevy-purple" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="hevy-section">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Everything You Need</span> for Your Fitness Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hevy provides all the tools you need to plan, track and analyze your workouts with a beautiful and intuitive interface.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
