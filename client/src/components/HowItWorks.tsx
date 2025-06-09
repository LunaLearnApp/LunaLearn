const HowItWorks = () => {
  const timelineSteps = [
    {
      title: "Create Your Profile",
      image:"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/014/original/profile_creat.png?1748693489",
      color: "primary",
      textColor: "primary",
      icon: "👦",
      description: "Choose an Avatar the expresses who you are"
    },
    {
      title: "Play & Learn",
      image:"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/015/original/playt.png?1748693582",
      color: "purple-300",
      textColor: "purple-600",
      icon: "🎮",
      description: "Plenty of games to choose from"
    },
    {
      title: "Earn Rewards",
      image:"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/017/original/reward.png?1748693719",
      color: "blue-300",
      textColor: "blue-500",
      icon: "🏆",
      description: "Earn rewards as you skill up and gain more knowledge"
    },
    {
      title: "Track Progress",
      image:"https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/018/original/progress.png?1748693842",
      color: "green-400",
      textColor: "green-600",
      icon: "📈",
      description: "See how far you have come "
    },
  ];

  return (
    <section className="overflow-hidden py-8 bg-gradient-to-br from-blue-200 to-purple-200 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-fredoka text-4xl text-center mb-16 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          How LunaLearn Works
        </h2>
        
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-3 bg-gradient-to-b from-primary via-purple-500 to-blue-500 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-16">
              {timelineSteps.map((step, index) => (
                <div key={index} className="md:flex items-center justify-between">
                  {/* Left content (text or image) */}
                  <div className={`md:w-5/12 mb-8 md:mb-0 md:pr-12 ${ index % 2 === 0 ? "md:text-right" : "order-last md:order-first"}`}>
                    {index % 2 === 0 ? (
                      <>
                        <h3 className={`font-fredoka text-2xl text-${step.textColor} mb-3`}>
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </>
                    ) : (
                      <div className="relative h-48 w-full">
                        <img src={step.image} alt={step.title} className={`bg-${step.color} rounded-2xl  shadow-lg h-full w-full object-contain`}/>
                      </div>
                    )}
                  </div>

                  {/* Center circle */}
                  <div
                    className={`relative mx-auto md:mx-0 w-28 h-28 rounded-full bg-white border-8 border-${step.color} flex items-center justify-center z-10 shadow-lg`} >
                    <span className="text-4xl">{step.icon}</span>
                  </div>

                  {/* Right content */}
                  <div className={`md:w-5/12 md:pl-12 mt-8 md:mt-0 ${ index % 2 === 0 ? "" : "md:text-left order-first md:order-last" }`}>
                    {index % 2 === 0 ? (
                      <div className="relative h-48 w-full">
                        <img src={step.image} alt={step.title} className={`bg-${step.color} rounded-2xl  shadow-lg h-full w-full object-contain`} />
                      </div>
                    ) : (
                      <>
                        <h3 className={`font-fredoka text-2xl text-${step.textColor} mb-3`} >
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </>
                    )}
                  </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-[-20rem] left-[-10rem] w-[600px] h-[600px] bg-yellow-400 opacity-60 rounded-full"></div>
        <div className="absolute top-[40rem] left-[0rem] w-[200px] h-[200px] bg-green-400 opacity-60 rounded-full"></div>
        <div className="absolute top-[17rem] left-[800px] w-[200px] h-[200px] bg-primary opacity-60 rounded-full"></div>
        <div className="absolute top-[20rem] right-[-10rem] w-[300px] h-[300px] bg-purple-400 opacity-60 rounded-full"></div>
        <div className="absolute bottom-[0px] right-[0px] w-[250px] h-[250px] bg-pink-400 opacity-60 rounded-full"></div>

        <div className="absolute top-10 right-10 text-teal-600 text-3xl">✦</div>
        <div className="absolute top-20 left-20 text-secondary text-5xl">✦</div>
        <div className="absolute bottom-40 right-20 text-primary text-2xl">✦</div>
        <div className="absolute top-[45rem] left-80 text-purple-500 text-3xl">✦</div>
        <div className="absolute bottom-[50rem] right-[60rem] text-yellow-600 text-3xl">✦</div>
        <div className="absolute bottom-60 right-[30rem] text-pink-500 text-2xl">✦</div>
        <div className="absolute top-[54rem] left-20 text-purple text-3xl">✦</div>
      </div>
    </section>
  );
};

export default HowItWorks;
