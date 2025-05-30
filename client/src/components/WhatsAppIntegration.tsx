import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, MessageSquare, Send, Smartphone } from 'lucide-react';
import { Input } from "@/components/ui/input";

const WhatsAppIntegration = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      setIsRegistered(true);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="font-fredoka text-4xl text-primary mb-6">
              Learn Anywhere with WhatsApp
            </h2>
            <p className="text-gray-700 mb-8">Access fun, educational content through the familiar WhatsApp app. Our chatbot delivers engaging learning games and activities right to your child's mobile device. Bring the power of personalized, AI-powered education to your family anytime, anywhere.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-green-400 flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-fredoka text-primary mb-1">24/7 Learning Support</h3>
                  <p className="text-gray-600">
                    Get homework help, explore new topics, or practice your skills anytime, anywhere 
                    through simple WhatsApp messages.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-blue-400 flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-fredoka text-primary mb-1">Minimal Data Usage</h3>
                  <p className="text-gray-600">
                    Our WhatsApp chatbot is designed to use minimal data, making it accessible 
                    even with limited internet plans.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-purple-400 flex items-center justify-center mr-4 mt-1">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-fredoka text-primary mb-1">Multilingual Support</h3>
                  <p className="text-gray-600">
                    Interact with our chatbot in multiple languages, including South African 
                    languages like isiZulu, isiXhosa, and more.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-light rounded-xl p-6">
              <h3 className="font-fredoka text-xl mb-4">Register for WhatsApp Learning</h3>
              {!isRegistered ? (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Enter your WhatsApp number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+27 71 234 5678"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      We'll send a message with instructions to get started.
                    </p>
                  </div>
                  <Button type="submit" className="w-full bg-green-400 hover:bg-green-600">
                    Register for WhatsApp Learning
                  </Button>
                </form>
              ) : (
                <div className="text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green/20">
                    <Check className="w-6 h-6 text-green-400" />
                  </div>
                  <h4 className="font-fredoka text-lg mb-2">Registration Successful!</h4>
                  <p className="text-gray-600 mb-4">
                    We've sent a message to your WhatsApp. Follow the instructions to start learning!
                  </p>
                  <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-50" onClick={() => setIsRegistered(false)}>
                    Register Another Number
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-sm mx-auto">
              {/* Phone mockup header */}
              <div className="bg-gray-800 p-4 relative">
                <div className="flex items-center">
                  <Smartphone className="text-white w-5 h-5 mr-2" />
                  <span className="text-white text-sm font-medium">WhatsApp</span>
                </div>
                <div className="absolute w-20 h-6 bg-black rounded-full top-0 left-1/2 -translate-x-1/2"></div>
              </div>
              
              {/* Chat interface */}
              <div className="bg-gray-100 p-4 h-[500px] overflow-y-auto flex flex-col space-y-3">
                {/* Bot message */}
                <div className="flex">
                  <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                    <p className="text-sm">👋 Welcome to LunaLearn! I'm your personal learning assistant. What would you like to learn today?</p>
                    <p className="text-xs text-gray-500 text-right mt-1">10:30 AM</p>
                  </div>
                </div>
                
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-green-500 text-white rounded-lg p-3 max-w-[80%] shadow-sm">
                    <p className="text-sm">Hi! I need help with math fractions</p>
                    <p className="text-xs text-white/70 text-right mt-1">10:31 AM</p>
                  </div>
                </div>
                
                {/* Bot message */}
                <div className="flex">
                  <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                    <p className="text-sm">Great! I'd be happy to help you with fractions. Would you like:</p>
                    <ol className="list-decimal pl-5 mt-2 text-sm space-y-1">
                      <li>Basic fraction concepts</li>
                      <li>Adding and subtracting fractions</li>
                      <li>Multiplying and dividing fractions</li>
                      <li>Converting fractions to decimals</li>
                    </ol>
                    <p className="text-xs text-gray-500 text-right mt-1">10:32 AM</p>
                  </div>
                </div>
                
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-green-500 text-white rounded-lg p-3 max-w-[80%] shadow-sm">
                    <p className="text-sm">2 please</p>
                    <p className="text-xs text-white/70 text-right mt-1">10:33 AM</p>
                  </div>
                </div>
                
                {/* Bot message with image */}
                <div className="flex">
                  <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                    <p className="text-sm">Here's how to add fractions with the same denominator:</p>
                    <div className="bg-gray-50 rounded-lg p-2 mt-2 text-center">
                      <p className="font-bold">1/4 + 2/4 = 3/4</p>
                      <p className="text-xs mt-1">Just add the numerators and keep the denominator the same!</p>
                    </div>
                    <p className="text-sm mt-2">Would you like to try a practice problem?</p>
                    <p className="text-xs text-gray-500 text-right mt-1">10:34 AM</p>
                  </div>
                </div>
                
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-green-500 text-white rounded-lg p-3 max-w-[80%] shadow-sm">
                    <p className="text-sm">Yes please</p>
                    <p className="text-xs text-white/70 text-right mt-1">10:35 AM</p>
                  </div>
                </div>
                
                {/* Bot message with quiz */}
                <div className="flex">
                  <div className="bg-white rounded-lg p-3 max-w-[80%] shadow-sm">
                    <p className="text-sm">Solve this problem: 3/5 + 1/5 = ?</p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <button className="bg-gray-100 p-2 rounded text-sm hover:bg-gray-200">A) 3/10</button>
                      <button className="bg-gray-100 p-2 rounded text-sm hover:bg-gray-200">B) 4/5</button>
                      <button className="bg-gray-100 p-2 rounded text-sm hover:bg-gray-200">C) 4/10</button>
                      <button className="bg-gray-100 p-2 rounded text-sm hover:bg-gray-200">D) 3/25</button>
                    </div>
                    <p className="text-xs text-gray-500 text-right mt-1">10:36 AM</p>
                  </div>
                </div>
              </div>
              
              {/* Message input */}
              <div className="bg-white p-3 border-t flex items-center">
                <Input
                  type="text"
                  placeholder="Type a message"
                  className="flex-1 mr-2"
                />
                <Button size="icon" className="bg-green-400 hover:bg-green-600 h-10 w-10 rounded-full">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="font-fredoka text-purple-600 text-2xl mb-4">Start Learning in 3 Simple Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="relative">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-fredoka text-2xl text-primary">1</span>
              </div>
              <h4 className="font-fredoka text-primary text-xl mb-2">Save Our Number</h4>
              <p className="text-gray-600">Add our WhatsApp number to your contacts for easy access.</p>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-8 left-full transform -translate-x-1/2">
                <svg className="w-12 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-fredoka text-2xl text-blue-400">2</span>
              </div>
              <h4 className="font-fredoka text-xl mb-2 text-blue-500">Send "Hello"</h4>
              <p className="text-gray-600">Start a conversation with a simple message to activate the chatbot.</p>
              
              {/* Arrow for desktop */}
              <div className="hidden md:block absolute top-8 left-full transform -translate-x-1/2">
                <svg className="w-12 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
            
            <div>
              <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-fredoka text-2xl text-green-400">3</span>
              </div>
              <h4 className="font-fredoka text-xl text-green-500 mb-2">Start Learning</h4>
              <p className="text-gray-600">Follow the prompts to access lessons, quizzes, and educational content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppIntegration;