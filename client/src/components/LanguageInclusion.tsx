import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Globe, MessageSquare } from "lucide-react";
import { Link } from "wouter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LanguageInclusion = () => {
  const languages = [
    {
      id: "languages",
      name: "Languages",
      color: "bg-pink-400",
      textColor: "text-pink-800",
      borderColor: "border-pink-300",
      children: [
        { id: "en", code: "en", name: "English", color: "bg-blue-400" },
        { id: "zu", code: "zu", name: "Zulu", color: "bg-red-400" },
        { id: "xh", code: "xh", name: "Xhosa", color: "bg-purple-400" },
        { id: "af", code: "af", name: "Afrikaans", color: "bg-orange-400" },
        { id: "st", code: "st", name: "Sesotho", color: "bg-green-400" },
        { id: "tn", code: "tn", name: "Setswana", color: "bg-gray-400" },
        {
          id: "nso",
          code: "nso",
          name: "Northern Sotho",
          color: "bg-yellow-400",
        },
        { id: "ts", code: "ts", name: "Tsonga", color: "bg-pink-400" },
        { id: "ss", code: "ss", name: "Swati", color: "bg-teal-400" },
        { id: "ve", code: "ve", name: "Venda", color: "bg-orange-400" },
        { id: "nr", code: "nr", name: "Ndebele", color: "bg-purple-400" },
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-fredoka text-4xl mb-4">Language Inclusivity</h2>
        </div>

        {/* Center the sections */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {/* Language Support Section */}
          <div className="bg-purple-50 rounded-2xl p-6 relative overflow-hidden w-full md:w-1/2">
            <div className="relative z-10">
              <Globe className="mx-auto w-10 h-10 text-purple-400 mb-1" />

              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* Map through main subject categories */}
                {languages.map((languages) => (
                  <div key={languages.id} className="flex flex-col space-y-4">
                    <div
                      className={`${languages.color} ${languages.textColor} p-6 rounded-2xl font-fredoka text-xl text-center shadow-md`}
                    >
                      {languages.name}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {languages.children.map((child, index) => {
                      
                        const isFullWidth = index === 0; 
                        return (
                          <Link
                            key={child.id}
                            href={`/languages/${child.id}`}
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
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600 opacity-7 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute left-0 right-0 w-32 h-32 bg-yellow-300 opacity-7 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>

          {/* Translation Services Section */}
          <div className="bg-blue-50 rounded-2xl p-6 relative overflow-hidden w-full md:w-1/2">
            <div className="relative z-10">
              <MessageSquare className="mx-auto w-10 h-10 text-blue-400 mb-4" />
              <h3 className="p-6 rounded-2xl bg-blue-400 font-fredoka text-center text-blue-700 text-2xl mb-3">
                Translation Services
              </h3>
              <p className="text-gray-700 mb-4 text-center">
                Real-time switching between languages or get explanations in
                their preferred language.
              </p>

              <div className="bg-blue-600 p-3 rounded-xl shadow-sm mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-blue-100 text-sm">
                    Original (English)
                  </span>
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300 text-sm">
                  "The water cycle consists of evaporation, condensation, and
                  precipitation."
                </p>
              </div>

              <div className="bg-red-500 p-3 rounded-xl shadow-sm mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-red-100 text-sm">
                    Translated (isiZulu)
                  </span>
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300 text-sm">
                  "Umjikelezo wamanzi ubandakanya ukuphenduka komhwamuko,
                  ukucwiliswa, kanye nokuna."
                </p>
              </div>

              <div className="bg-pink-600 p-3 rounded-xl shadow-sm mb-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-pink-100 text-sm">
                    Translated (Xitsonga)
                  </span>
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300 text-sm">
                  "Ndzhendzheleko wa mati wu katsa nkahelo, ku n'oka ni ku na ka
                  mati."
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-700 opacity-7 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-0 left-0 w-32 h-32 bg-pink-600 opacity-7 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400 opacity-7 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageInclusion;
