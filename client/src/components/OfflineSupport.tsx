import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Wifi, WifiOff } from 'lucide-react';

const OfflineSupport = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-3xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mr-4">
                  <WifiOff className="text-white" />
                </div>
                <h2 className="font-fredoka text-3xl">Offline Learning</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Access educational content even without internet connection. 
                Download lessons, games, and learning materials to use offline, 
                ensuring continuous learning regardless of connectivity.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-xl flex-1 min-w-[200px]">
                  <h3 className="font-fredoka text-xl mb-2 text-blue">Download Content</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Save activities and lessons to use when you don't have internet access.
                  </p>
                  <Button className="w-full bg-blue hover:bg-blue-600">
                    <Download className="w-4 h-4 mr-2" />
                    Download Lessons
                  </Button>
                </div>
                
                <div className="bg-green-50 p-4 rounded-xl flex-1 min-w-[200px]">
                  <h3 className="font-fredoka text-xl mb-2 text-green">Sync Progress</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Your offline activities will sync automatically when you're back online.
                  </p>
                  <Button variant="outline" className="w-full border-green text-green hover:bg-green-100">
                    <Wifi className="w-4 h-4 mr-2" />
                    Learn About Syncing
                  </Button>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-xl mb-4">
                <h3 className="font-fredoka text-lg mb-2 text-yellow-800">Low Data Mode</h3>
                <p className="text-gray-600 text-sm">
                  Enable low data mode to minimize data usage when you're on a limited connection.
                  Images and videos will be optimized to use less bandwidth.
                </p>
                <div className="flex items-center mt-3">
                  <div className="bg-yellow w-12 h-6 rounded-full flex items-center p-1 cursor-pointer">
                    <div className="bg-white w-4 h-4 rounded-full ml-auto"></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Enable Low Data Mode</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="font-fredoka text-3xl mb-6">
              Learning Without Limits
            </h2>
            <p className="text-gray-700 mb-4">
              In many underserved communities, young people have limited exposure to technology
              and inconsistent internet access. LunaLearn is designed to bridge this gap with:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-700">
                  <strong className="font-semibold">Offline-First Design:</strong> Download content once and access it anytime, 
                  even without internet connection.
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-blue flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-700">
                  <strong className="font-semibold">Low Data Requirements:</strong> Optimized content that uses minimal data, 
                  making it accessible even with limited internet plans.
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-green flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-700">
                  <strong className="font-semibold">Progress Synchronization:</strong> Your learning progress is 
                  saved offline and syncs seamlessly when internet becomes available.
                </span>
              </li>
              <li className="flex items-start">
                <div className="h-6 w-6 rounded-full bg-purple flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-gray-700">
                  <strong className="font-semibold">WhatsApp Integration:</strong> Access educational content through WhatsApp, 
                  a platform already widely used in underserved communities.
                </span>
              </li>
            </ul>
            
            <div className="bg-primary/10 p-4 rounded-xl">
              <p className="text-gray-700 italic">
                "No one should be excluded from digital education due to language or connectivity limitations.
                We're making sure everyone has access to quality learning resources."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfflineSupport;