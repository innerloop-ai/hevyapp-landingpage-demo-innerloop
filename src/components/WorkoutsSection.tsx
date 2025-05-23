import React from 'react';
import { Check } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const WorkoutsSection = () => {
  return (
    <section id="workouts" className="hevy-section bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side with video */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-3xl shadow-2xl overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <iframe allowfullscreen width="760" height="515" src="https://play.innerloop.stream/playersvc/ins-share/cu-ck5HRiP6NdjPZuZUeDGzf"
                  title="review"
                  frame-border="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;encrypted-media"
                  className="w-full h-full"
                ></iframe>
              </AspectRatio>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-hevy-purple/10 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

          {/* Right side with text content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Plan & Track</span> Your Workouts
            </h2>
            <p className="text-lg text-gray-700">
              Hevy makes it simple to log your workouts, track your progress, and achieve your fitness goals. Whether you're a beginner or a seasoned athlete, our intuitive interface makes workout tracking enjoyable.
            </p>
            <ul className="space-y-3">
              {[
                "Create custom workout routines",
                "Track sets, reps, weight, and RPE",
                "Add notes and media to your exercises",
                "View exercise history and personal records",
                "Share workouts with friends and coaches",
                "Export your workout data anytime"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-hevy-purple">
                    <Check className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <a href="#download" className="hevy-button inline-block">
                Start Tracking Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutsSection;
