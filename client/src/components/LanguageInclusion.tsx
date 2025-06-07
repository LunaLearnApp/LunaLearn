import React, { Children, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Globe, MessageSquare } from 'lucide-react';
import { Link } from 'wouter';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const LanguageInclusion = () => {
  
  const languages = [
    {
      id: 'languages',
      name: 'Languages',
      color: 'bg-pink-400',
      textColor: 'text-pink-800',
      borderColor: 'border-pink-300',
      children: [
        {id: 'en', code: 'en',name: 'English', Name: 'English', color: 'bg-blue-400'},
        {id: 'zu', code: 'zu', name: 'Zulu', Name: 'isiZulu' , color: 'bg-red-400'},
        {id: 'xh', code: 'xh', name: 'Xhosa', Name: 'isiXhosa', color: 'bg-purple-400'},
        {id: 'af', code: 'af', name: 'Afrikaans', Name: 'Afrikaans', color: 'bg-orange-400' },
        {id: 'st', code: 'st', name: 'Sesotho', Name: 'Sesotho', color: 'bg-green-400' },
        {id: 'tn', code: 'tn', name: 'Setswana', Name: 'Setswana', color: 'bg-gray-400' },
        {id: 'nso', code: 'nso', name: 'Northern Sotho', Name: 'Sepedi', color: 'bg-yellow-400' },
        {id: 'ts', code: 'ts', name: 'Tsonga', Name: 'Xitsonga', color: 'bg-pink-400' },
        {id: 'ss', code: 'ss', name: 'Swati', Name: 'siSwati', color: 'bg-teal-400' },
        {id: 've', code: 've', name: 'Venda', Name: 'Tshivenḓa', color: 'bg-orange-400' },
        {id: 'nr', code: 'nr', name: 'Ndebele', Name: 'isiNdebele', color: 'bg-purple-400' },
        {id: 'sl', code: 'sl', name: 'SASL', Name: 'SA Sign Language', color: 'bg-pink-400' },
      ]
    }
    
  ];
 
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-fredoka text-4xl mb-4">Language Inclusivity</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Breaking language barriers to make education accessible to everyone. 
            Our platform delivers content in multiple languages to ensure no one is 
            left behind due to language limitations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-purple-50 rounded-2xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <Globe className="mx-auto w-10 h-10 text-purple-400 mb-1" />

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* Map through main subject categories */}
                {languages.map((languages) => (
                  <div key={languages.id} className="flex flex-col space-y-4">
                    {/* Parent category */}
                    <div className={`${languages.color} ${languages.textColor} p-6 rounded-2xl font-fredoka text-xl text-center shadow-md`}>
                      {languages.name}
                    </div>
                    
                    {/* Child categories */}
                    <div className="grid grid-cols-2 gap-3">
                      {languages.children.map((child, index) => {
                        // For each category, determine size
                       // First child is full width
                        return (
                          <Link
                            key={child.id}
                            href={`/languages/${child.id}`}
                            className={`${child.color} text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 flex items-center justify-center font-fredoka `}>
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600 opacity-7 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute left-0 right-0 w-32 h-32 bg-yellow-300 opacity-7 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <MessageSquare className="mx-auto w-10 h-10 text-blue-400 mb-4" />
              <h3 className="p-6 rounded-2xl bg-blue-400 font-fredoka text-center text-blue-700 text-2xl mb-3">Translation Services</h3>
              <p className="text-gray-700 mb-4 text-center">
                Real-time switching between languages or get explanations in their preferred language.
              </p>

              <div className="bg-blue-600 p-3 rounded-xl shadow-sm mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-100 text-sm">Original (English)</span>
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300 text-sm">
                  "The water cycle consists of evaporation, condensation, and precipitation."
                </p>
              </div>

              <div className="bg-red-500 p-3 rounded-xl shadow-sm mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-red-100 text-sm">Translated (isiZulu)</span>
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300 text-sm">
                  "Umjikelezo wamanzi ubandakanya ukuphenduka komhwamuko, ukucwiliswa, kanye nokuna."
                </p>
              </div>

              <div className="bg-pink-600 p-3 rounded-xl shadow-sm mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-pink-100 text-sm">Translated (Xitsonga)</span>
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300 text-sm">
                  "Ndzhendzheleko wa mati wu katsa nkahelo, ku n'oka ni ku na ka mati."
                </p>
              </div>

            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-700 opacity-7 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-pink-600 opacity-7 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400 opacity-7 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
          
          <div className="bg-green-50 rounded-2xl p-6 relative overflow-hidden">
            <div className="relative z-10">
              <svg className="mx-auto w-10 h-10 text-green-400 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="p-6 rounded-2xl bg-green-400 font-fredoka text-center text-green-700 text-2xl mb-3">Cultural Context</h3>
              <p className="text-gray-700 mb-4">
                Learning materials are culturally relevant and adapted to local contexts,
                with examples that resonate with learners' lived experiences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green flex items-center justify-center mr-2">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Local examples and references</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green flex items-center justify-center mr-2">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Culturally diverse character representation</span>
                </li>
                <li className="flex items-center">
                  <div className="h-5 w-5 rounded-full bg-green flex items-center justify-center mr-2">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-700 text-sm">Respect for diverse learning traditions</span>
                </li>
              </ul>
            </div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-green-400 opacity-7 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute bottom-[-10rem] right-0 w-72 h-72 bg-purple-600 opacity-4 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
        
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

export default LanguageInclusion;