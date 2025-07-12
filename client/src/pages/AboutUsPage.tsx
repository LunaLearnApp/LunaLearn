import React, { Children, useState } from 'react';

const AboutUsPage = () => {
  
  return (
    <section className="py-16 bg-white">
      <div className="container p-10 mx-auto px-4">
        
        <div className="bg-gradient-to-r from-pink-200 to-blue-200 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-fredoka text-3xl mb-6 text-primary text-center">Why Language Matters</h2>
            <div className="bg-white/90 rounded-2xl p-6 mb-8">
              <p className="text-gray-700 mb-4">
                In South Africa, only about 40% of households have reliable internet access, 
                and most available online educational content is predominantly in English, 
                making it less accessible to non-English speakers.
              </p>
              <p className="text-gray-700">
                Our platform is designed to overcome these challenges. No one should be 
                excluded from digital education due to language limitations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/90 rounded-2xl p-5">
                <h3 className="font-fredoka text-xl mb-3 text-center text-primary">Benefits for Learners</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">Improved comprehension and retention of concepts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">Increased confidence and engagement in learning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">Preservation of cultural identity while learning</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/90 rounded-2xl p-5">
                <h3 className="font-fredoka text-xl mb-3 text-center text-blue-400">Community Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-400 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">Broader access to quality education for all</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-400 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">Reduced educational inequality across language groups</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-400 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">Support for local languages and cultural preservation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;