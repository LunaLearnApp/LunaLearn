import React from "react";


const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-pink-200 to-blue-200 py-44">
      <div className="container mx-auto flex items-center gap-12 px-6">
        <div className="flex-1 z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Discover the Joy of Learning with AI-Powered Games for Kids.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg font-semibold">
            Engage your child in fun, adaptive learning games that build skills in math, reading, science, and more.
          </p>
          <div className="flex gap-5">
            <button className="bg-primary text-white font-bold py-3 px-6 rounded-full shadow hover:shadow-lg transition-transform transform hover:-translate-y-1">
              Try for Free
            </button>
            <button className="bg-primary text-white font-bold py-3 px-6 rounded-full shadow hover:shadow-lg transition-transform transform hover:-translate-y-1">
              How It Works
            </button>
          </div>
        </div>
        <div className="flex-1 relative z-0 text-center">
          <img
            src="https://shorturl.at/MRorC"
            alt="Happy Robot"
            className="w-full max-w-md mx-auto animate-float"
          />
          <div className="absolute top-[-10px] left-[-700px] w-[500px] h-[500px] bg-primary opacity-30 rounded-full"></div>
          <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-400 opacity-30 rounded-full"></div>
          <div className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] bg-blue-400 opacity-30 rounded-full"></div>
        
          <div className="absolute top-10 left-[-15rem] text-purple text-2xl">✦</div>
          <div className="absolute top-[-5rem] left-[-45rem] text-secondary text-xl">✦</div>
          <div className="absolute bottom-60 right-[20rem] text-primary text-2xl">✦</div>

          <div className="absolute top-[15rem] left-[25rem] text-primary text-3xl">✦</div>
          <div className="absolute top-[15rem] right-[70rem] text-secondary text-xl">✦</div>
          <div className="absolute bottom-60 left-[-50rem] text-purple text-2xl">✦</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
