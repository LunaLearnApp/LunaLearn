const Features = () => {
  const features = [
    {
      icon: "gamepad",
      title: "Fun Games",
      description: "Interactive games make learning math, science, and reading exciting and engaging."
    },
    {
      icon: "award",
      title: "Earn Rewards",
      description: "Collect badges, trophies and points as you complete learning challenges."
    },
    {
      icon: "brain",
      title: "AI Powered",
      description: "Our AI adapts to your child's learning pace to provide personalized challenges."
    },
    {
      icon: "chart",
      title: "Track Progress",
      description: "See how your child is improving with detailed progress reports and insights."
    },
    {
      icon: "graduation",
      title: "Grade-Based",
      description: "Content tailored specifically for each grade level from Kindergarten to 6th grade."
    },
    {
      icon: "users",
      title: "Character Guides",
      description: "Fun characters guide your child through their learning journey with encouragement."
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "gamepad":
        return (
          <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 11H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 9L8 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="16" cy="10" r="1" fill="currentColor" />
            <circle cx="14" cy="13" r="1" fill="currentColor" />
            <path d="M6.5 5H17.5C18.3284 5 19 5.67157 19 6.5V17.5C19 18.3284 18.3284 19 17.5 19H6.5C5.67157 19 5 18.3284 5 17.5V6.5C5 5.67157 5.67157 5 6.5 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "award":
        return (
          <svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="8" r="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "brain":
        return (
          <svg className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 2C7.01472 2 5 4.01472 5 6.5C5 7.17387 5.14683 7.81107 5.41417 8.37549C3.94815 9.10419 3 10.6638 3 12.5C3 13.4396 3.2842 14.315 3.7798 15.0372C3.2896 15.7308 3 16.5884 3 17.5C3 19.9853 5.01472 22 7.5 22H12H16.5C18.9853 22 21 19.9853 21 17.5C21 16.5884 20.7104 15.7308 20.2202 15.0372C20.7158 14.315 21 13.4396 21 12.5C21 10.6638 20.0518 9.10419 18.5858 8.37549C18.8532 7.81107 19 7.17387 19 6.5C19 4.01472 16.9853 2 14.5 2C13.1938 2 12.0167 2.5778 11.2 3.5C10.3833 2.5778 9.20616 2 7.9 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19Z" fill="currentColor" />
            <path d="M9 12C9 11.4477 9.44772 11 10 11C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13C9.44772 13 9 12.5523 9 12Z" fill="currentColor" />
            <path d="M13 12C13 11.4477 13.4477 11 14 11C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13C13.4477 13 13 12.5523 13 12Z" fill="currentColor" />
            <path d="M11 16C11 15.4477 11.4477 15 12 15C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16Z" fill="currentColor" />
            <path d="M8 8C8 7.44772 8.44772 7 9 7C9.55228 7 10 7.44772 10 8C10 8.55228 9.55228 9 9 9C8.44772 9 8 8.55228 8 8Z" fill="currentColor" />
            <path d="M14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9C14.4477 9 14 8.55228 14 8Z" fill="currentColor" />
          </svg>
        );
      case "chart":
        return (
          <svg className="w-10 h-10 text-green-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21H3V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 7L14 14L10 10L3 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "graduation":
        return (
          <svg className="w-10 h-10 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 10L12 5L2 10L12 15L22 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 12V17C6 17 8.5 19 12 19C15.5 19 18 17 18 17V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case "users":
        return (
          <svg className="w-10 h-10 text-pink-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-fredoka text-4xl text-center mb-16">Why Kids <span className="text-primary">Love</span> Learning With Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 text-center transition-all hover:shadow-xl hover:-translate-y-2 duration-300">
              <div className={`w-20 h-20 bg-${feature.icon === 'gamepad' ? 'primary/20' : feature.icon === 'award' ? 'blue-100' : feature.icon === 'brain' ? 'purple-100' : feature.icon === 'chart' ? 'green-100' : feature.icon === 'graduation' ? 'yellow-100' : 'pink-100'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                {getIcon(feature.icon)}
              </div>
              <h3 className="font-fredoka text-primary text-2xl mb-4">{feature.title }</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
