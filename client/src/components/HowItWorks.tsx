const HowItWorks = () => {
  const timelineSteps = [
    {
      title: "Create Your Profile",
      image:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/014/original/profile_creat.png?1748693489",
      color: "primary",
      icon: "👦",
    },
    {
      title: "Play & Learn",
      image:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/015/original/playt.png?1748693582",
      color: "purple",
      icon: "🎮",
    },
    {
      title: "Earn Rewards",
      image:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/017/original/reward.png?1748693719",
      color: "blue",
      icon: "🏆",
    },
    {
      title: "Track Progress",
      image:
        "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/167/018/original/progress.png?1748693842",
      color: "green",
      icon: "📈",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-fredoka text-4xl text-center mb-16 text-primary">
          How LunaLearn Works
        </h2>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-blue-500 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16">
            {timelineSteps.map((step, index) => (
              <div key={index} className="md:flex items-center justify-between">
                {/* Left content (text or image) */}
                <div
                  className={`md:w-5/12 mb-8 md:mb-0 md:pr-12 ${
                    index % 2 === 0
                      ? "md:text-right"
                      : "order-last md:order-first"
                  }`}
                >
                  {index % 2 === 0 ? (
                    <>
                      <h3
                        className={`font-fredoka text-2xl text-${step.color} mb-3`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </>
                  ) : (
                    <div className="relative h-48 w-full">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="rounded-2xl shadow-lg h-full w-full object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Center circle */}
                <div
                  className={`relative mx-auto md:mx-0 w-16 h-16 rounded-full bg-white border-4 border-${step.color} flex items-center justify-center z-10 shadow-lg`}
                >
                  <span className="text-3xl">{step.icon}</span>
                </div>

                {/* Right content */}
                <div
                  className={`md:w-5/12 md:pl-12 mt-8 md:mt-0 ${
                    index % 2 === 0
                      ? ""
                      : "md:text-right order-first md:order-last"
                  }`}
                >
                  {index % 2 === 0 ? (
                    <div className="relative h-48 w-full">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="rounded-2xl shadow-lg h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <>
                      <h3
                        className={`font-fredoka text-2xl text-${step.color} mb-3`}
                      >
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
      </div>
    </section>
  );
};

export default HowItWorks;
