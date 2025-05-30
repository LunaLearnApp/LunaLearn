import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AITutorChat = () => {
  const [messages, setMessages] = useState<{text: string, sender: 'user' | 'ai', characterId?: string}[]>([
    { text: "Hi there! I'm your AI learning buddy. What would you like to learn today?", sender: 'ai', characterId: 'robot' }
  ]);
  const [input, setInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  // Mock function for handling chat - in a real implementation, this would connect to an AI API
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    
    // Simulate AI response (would be replaced with actual API call)
    setTimeout(() => {
      const aiResponses = [
        "That's a great question about math! Let's explore that together.",
        "I love reading too! Would you like to practice some reading exercises?",
        "Science is so exciting! Did you know that water can exist as a solid, liquid, and gas?",
        "Learning about history helps us understand our world better. What period interests you?",
        "I can help you with that! Let's break it down into smaller steps."
      ];
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages(prevMessages => [...prevMessages, { text: randomResponse, sender: 'ai', characterId: 'robot' }]);
    }, 1000);
  };

  // Voice recording simulation
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // In a real implementation, this would start voice recording
      // For now, we'll just simulate after a delay
      setTimeout(() => {
        setIsRecording(false);
        setInput("I want to learn about planets");
      }, 2000);
    }
  };

  // Character components
  const RobotCharacter = () => (
    <div className="w-12 h-12 rounded-full bg-blue flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <circle cx="50" cy="50" r="45" fill="#7ED6DF" />
        <rect x="35" y="35" width="30" height="40" rx="5" fill="#4ECDC4" />
        <circle cx="40" cy="45" r="5" fill="white" />
        <circle cx="60" cy="45" r="5" fill="white" />
        <circle cx="40" cy="45" r="2" fill="#2A2D7E" />
        <circle cx="60" cy="45" r="2" fill="#2A2D7E" />
        <rect x="42" y="55" width="16" height="4" rx="2" fill="white" />
        <rect x="35" y="20" width="30" height="10" rx="5" fill="#FF6B6B" />
      </svg>
    </div>
  );

  const DinoCharacter = () => (
    <div className="w-12 h-12 rounded-full bg-green flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <circle cx="50" cy="50" r="45" fill="#6BD475" />
        <circle cx="40" cy="40" r="8" fill="white" />
        <circle cx="60" cy="40" r="8" fill="white" />
        <circle cx="40" cy="40" r="4" fill="#2A2D7E" />
        <circle cx="60" cy="40" r="4" fill="#2A2D7E" />
        <path d="M40 60C45 68 55 68 60 60" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 30C35 20 65 20 70 30" fill="#4ECDC4" />
      </svg>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="font-fredoka text-primary text-4xl text-center mb-6">Chat with Your AI Learning Buddy</h2>
        <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
          Our AI tutors use voice recognition and natural language processing to create interactive, personalized learning experiences.
        </p>
        
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Chat header */}
          <div className="bg-primary p-4 flex items-center gap-3">
            <RobotCharacter />
            <div>
              <h3 className="font-fredoka text-white text-xl">Professor Byte</h3>
              <p className="text-white/80 text-sm">AI Math & Science Tutor</p>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'ai' && (
                  <div className="mr-2 flex-shrink-0">
                    {message.characterId === 'robot' ? <RobotCharacter /> : <DinoCharacter />}
                  </div>
                )}
                <div 
                  className={`rounded-2xl px-4 py-2 max-w-xs ${
                    message.sender === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          {/* Voice recording animation */}
          {isRecording && (
            <div className="flex justify-center items-center py-2 bg-pink-50">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
              <p className="text-sm text-gray-600 ml-2">Listening...</p>
            </div>
          )}
          
          {/* Chat input */}
          <div className="p-4 border-t flex items-center gap-2">
            <Button
              onClick={toggleRecording}
              className={`rounded-full w-10 h-10 flex-shrink-0 ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-purple hover:bg-purple/90'}`}
              size="icon"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </Button>
            <Input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="rounded-full"
            />
            <Button
              onClick={handleSendMessage}
              className="rounded-full w-10 h-10 flex-shrink-0 bg-blue hover:bg-blue/90"
              size="icon" 
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </Button>
          </div>
        </div>
        
        {/* AI tutor features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-2xl text-center shadow-md">
            <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-fredoka text-primary text-xl mb-2">Active Retrieval</h3>
            <p className="text-gray-600">Our AI tutors challenge students to recall previous lessons, ensuring they retain knowledge in long-term memory.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl text-center shadow-md">
            <div className="mx-auto w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-fredoka text-blue-500 text-xl mb-2">Storytelling</h3>
            <p className="text-gray-600">Learning through engaging stories makes concepts memorable and fun for young learners.</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl text-center shadow-md">
            <div className="mx-auto w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="font-fredoka text-green-400 text-xl mb-2">Spaced Repetition</h3>
            <p className="text-gray-600">We revisit concepts at optimal intervals to strengthen memory and improve learning outcomes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITutorChat;