const HowItWorks = () => {
  const timelineSteps = [
    {
      title: "Create Your Profile",
      description: "Sign up and choose your grade level. Our system will personalize content based on your educational needs.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2340&auto=format&fit=crop",
      color: "primary"
    },
    {
      title: "Play & Learn",
      description: "Enjoy fun, interactive games designed to teach core academic concepts while having a blast!",
      image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=2076&auto=format&fit=crop",
      color: "purple"
    },
    {
      title: "Earn Rewards",
      description: "Collect points, badges, and trophies as you master new skills and complete challenges.",
      image: "https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?q=80&w=2070&auto=format&fit=crop",
      color: "blue"
    },
    {
      title: "Track Progress",
      description: "Watch your skills grow with detailed progress tracking and personalized learning recommendations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      color: "green"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-fredoka text-4xl text-center mb-16">How LearnWithAI Works</h2>
        
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple to-blue transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16">
            {timelineSteps.map((step, index) => (
              <div key={index} className="md:flex items-center justify-between">
                <div className={`md:w-5/12 mb-8 md:mb-0 md:pr-12 ${index % 2 === 0 ? 'md:text-right' : 'order-last md:order-first'}`}>
                  {index % 2 === 0 ? (
                    <>
                      <h3 className={`font-fredoka text-2xl text-${step.color} mb-3`}>{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </>
                  ) : (
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="rounded-2xl shadow-lg h-48 w-full object-cover"
                    />
                  )}
                </div>
                
                <div className={`relative mx-auto md:mx-0 w-16 h-16 rounded-full bg-white border-4 border-${step.color} flex items-center justify-center z-10 shadow-lg`}>
                  <span className={`font-fredoka text-2xl text-${step.color}`}>{index + 1}</span>
                </div>
                
                <div className={`md:w-5/12 md:pl-12 mt-8 md:mt-0 ${index % 2 === 0 ? '' : 'md:text-right order-first md:order-last'}`}>
                  {index % 2 === 0 ? (
                    <img 
                      src={step.image}
                      alt={step.title} 
                      className="rounded-2xl shadow-lg h-48 w-full object-cover"
                    />
                  ) : (
                    <>
                      <h3 className={`font-fredoka text-2xl text-${step.color} mb-3`}>{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
