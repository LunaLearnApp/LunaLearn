import React from 'react';
import { Link } from 'wouter';

const SubjectCategories = () => {
  const subjects = [
    {
      id: 'academics',
      name: 'Academics',
      color: 'bg-blue-400',
      textColor: 'text-blue-800',
      borderColor: 'border-blue-300',
      children: [
        { id: 'reading', name: 'Mathematics', color: 'bg-blue-500' },
        { id: 'writing', name: 'Writing', color: 'bg-blue-400' },
        { id: 'spelling', name: 'Spelling', color: 'bg-blue-300' },
      ]
    },
    {
      id: 'technology',
      name: 'Technology',
      color: 'bg-purple-400',
      textColor: 'text-purple-800',
      borderColor: 'border-purple-300',
      children: [
        { id: 'coding', name: 'Coding', color: 'bg-purple-500' },
        { id: 'robotics', name: 'Robotics', color: 'bg-purple-400' },
        { id: 'digital-literacy', name: 'Digital Literacy', color: 'bg-purple-300' }

      ]
    },
    {
      id: 'communication',
      name: 'Communication',
      color: 'bg-pink-400',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-300',
      children: [
        { id: 'listening', name: 'Listening Comprehension', color: 'bg-pink-500' },
        { id: 'speaking', name: 'Reading', color: 'bg-pink-400' },
        { id: 'social', name: 'Social skills', color: 'bg-pink-300' }
      ]
    },
    {
      id: 'creativity',
      name: 'Creativity',
      color: 'bg-green-400',
      textColor: 'text-green-800',
      borderColor: 'border-green-300',
      children: [
        { id: 'art', name: 'Art', color: 'bg-green-500' },
        { id: 'music', name: 'Music', color: 'bg-green-400' },
        { id: 'drama', name: 'Drama and Dance', color: 'bg-green-300' },
      ]
    },
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="font-fredoka text-4xl text-center text-primary mb-10">
          Master the building blocks of early education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      
          {subjects.map((subject) => (
            <div key={subject.id} className="flex flex-col space-y-4">
              
              <div
                className={`${subject.color} ${subject.textColor} p-6 rounded-2xl font-fredoka text-xl shadow-md`}
              >
                {subject.name}
              </div>

              <div className="grid grid-cols-2 gap-3">
                {subject.children.map((child, index) => {

                  const isFullWidth = index === 0; 
                  return (
                    <Link
                      key={child.id}
                      href={`/subjects/${child.id}`}
                      className={`${
                        child.color
                      } text-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex items-center justify-center font-fredoka ${
                        isFullWidth ? "col-span-2" : ""
                      }`}
                    >
                      {child.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Quality education section */}
        <div className="mt-16 bg-pink-100 rounded-3xl p-8 shadow-lg">
          <h3 className="font-fredoka text-3xl text-center mb-6">
            Fun and easy learning, all from the comfort of your home 
          </h3>

          <p className="text-gray-700 text-lg text-center mb-6">
            Luna Learn offers programs based on educational standards for grades
            1-7.
          </p>

          {/* Character journey - like Buddy.ai progression */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {[1, 4, 7, 10].map((grade) => (
              <div key={grade} className="text-center">
                <div className="relative mb-2">
                  <div className="w-24 h-24 mx-auto relative">
                    {/* Character SVGs with different attributes based on grade */}
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className={
                          grade === 1
                            ? "fill-blue-400"
                            : grade === 4
                            ? "fill-purple-400"
                            : grade === 7
                            ? "fill-pink-400"
                            : "fill-green-400"
                        }
                      />
                      <circle cx="35" cy="40" r="8" fill="white" />
                      <circle cx="65" cy="40" r="8" fill="white" />
                      <circle cx="35" cy="40" r="4" fill="#2A2D7E" />
                      <circle cx="65" cy="40" r="4" fill="#2A2D7E" />
                      {grade >= 4 && (
                        <path
                          d="M35 65 Q50 75 65 65"
                          stroke="#FF6B6B"
                          strokeWidth="3"
                          fill="none"
                        />
                      )}
                      {grade < 4 && (
                        <path
                          d="M40 60 Q50 55 60 60"
                          stroke="#2A2D7E"
                          strokeWidth="3"
                          fill="none"
                        />
                      )}
                      {grade >= 7 && (
                        <g>
                          <rect
                            x="30"
                            y="15"
                            width="40"
                            height="15"
                            rx="7.5"
                            fill={grade === 10 ? "#FF6B6B" : "#FFD166"}
                          />
                          <rect
                            x="45"
                            y="5"
                            width="10"
                            height="15"
                            fill={grade === 10 ? "#FF6B6B" : "#FFD166"}
                          />
                        </g>
                      )}
                      {grade === 10 && (
                        <g>
                          <path d="M15 50 L25 35 L25 65 Z" fill="#A78BFA" />
                          <path d="M85 50 L75 35 L75 65 Z" fill="#A78BFA" />
                        </g>
                      )}
                    </svg>
                  </div>

                  {/* Only show arrows between items, not at the beginning or end */}
                  {grade < 7 && (
                    <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 translate-x-2">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div
                  className={`text-center ${
                    grade === 1
                      ? "bg-blue-400"
                      : grade === 4
                      ? "bg-purple-400"
                      : grade === 7
                      ? "bg-pink-400"
                      : "bg-green-400"
                  } text-white px-3 py-1 rounded-full font-fredoka`}
                >
                  Level {grade}
                </div>

                <p className="text-sm mt-2 text-gray-700">
                  {grade === 1
                    ? "Foundational skills"
                    : grade === 4
                    ? "Building knowledge"
                    : grade === 7
                    ? "Advanced concepts"
                    : "Expert challenges"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubjectCategories;