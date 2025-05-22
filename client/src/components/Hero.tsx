import { Button } from "@/components/ui/button";
import GradeLevelSelector from "./GradeLevelSelector";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 z-10">
          <h1 className="font-fredoka text-5xl md:text-6xl leading-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-purple to-blue bg-clip-text text-transparent">
              Learning is Super Fun with AI Friends!
            </span>
          </h1>
          <p className="text-gray-700 text-xl mb-8 max-w-lg">
            Interactive games and challenges designed by education experts and powered by AI to make learning exciting for grades K-6.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-primary text-white font-bold px-8 py-7 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 text-lg"
              size="lg"
            >
              Get Started Now
            </Button>
            <Button 
              variant="outline" 
              className="bg-white text-dark font-bold px-8 py-7 rounded-full shadow flex items-center gap-2 hover:shadow-lg transition-all hover:-translate-y-1 duration-300 text-lg"
              size="lg"
            >
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 3L19 12L5 21V3Z" fill="currentColor"/>
              </svg>
              See How It Works
            </Button>
          </div>
          
          {/* Grade Level Selector */}
          <div className="mt-12">
            <GradeLevelSelector />
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          {/* A friendly robot character with educational elements floating around it */}
          <div className="w-full max-w-md mx-auto drop-shadow-2xl animate-float">
            <RobotCharacter />
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-10 right-20 bg-yellow text-dark p-3 rounded-full shadow-lg animate-float" style={{animationDelay: "1s"}}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 5.5H4.5C3.94772 5.5 3.5 5.94772 3.5 6.5V19.5C3.5 20.0523 3.94772 20.5 4.5 20.5H19.5C20.0523 20.5 20.5 20.0523 20.5 19.5V6.5C20.5 5.94772 20.0523 5.5 19.5 5.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 3.5V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 3.5V5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3.5 9.5H20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 13L11 15L15 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute bottom-20 left-0 bg-pink text-dark p-3 rounded-full shadow-lg animate-float" style={{animationDelay: "1.5s"}}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="absolute top-40 left-10 bg-blue text-dark p-3 rounded-full shadow-lg animate-float" style={{animationDelay: "2s"}}>
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 21H5C3.89543 21 3 20.1046 3 19V15M21 9V5C21 3.89543 20.1046 3 19 3H15M15 21H19C20.1046 21 21 20.1046 21 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M14 10L17 7M10 14L7 17M17 17L14 14M7 7L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 left-0 w-full h-20 bg-white rounded-t-[50%]"></div>
      
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-300/10 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-300/10 rounded-full translate-x-1/4 translate-y-1/4 z-0"></div>
    </section>
  );
};

// Robot character SVG component
const RobotCharacter = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="95" fill="#7ED6DF" />
    <rect x="65" y="60" width="70" height="90" rx="15" fill="#4ECDC4" />
    <circle cx="85" cy="85" r="10" fill="white" />
    <circle cx="115" cy="85" r="10" fill="white" />
    <circle cx="85" cy="85" r="5" fill="#2A2D7E" />
    <circle cx="115" cy="85" r="5" fill="#2A2D7E" />
    <rect x="85" y="110" width="30" height="8" rx="4" fill="white" />
    <path d="M60 55L75 35H125L140 55H60Z" fill="#2A2D7E" />
    <rect x="75" y="25" width="50" height="15" rx="7.5" fill="#FF6B6B" />
    <rect x="55" y="150" width="20" height="30" rx="5" fill="#A78BFA" />
    <rect x="125" y="150" width="20" height="30" rx="5" fill="#A78BFA" />
    <circle cx="100" cy="40" r="5" fill="#FFD166" />
  </svg>
);

export default Hero;
