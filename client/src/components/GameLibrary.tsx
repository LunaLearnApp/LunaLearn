import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { cn, getGradeColor, getSubjectColor } from "@/lib/utils";
import GameCard from "./GameCard";

export type Game = {
  id: string;
  title: string;
  description: string;
  subject: string;
  minGrade: number;
  maxGrade: number;
  imageUrl: string;
  rating: number;
  durationMinutes: number;
};

const GameLibrary = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

  const { data: games, isLoading } = useQuery({
    queryKey: ['/api/games'],
    select: (data: Game[]) => data,
  });

  const filteredGames = games?.filter(game => {
    if (selectedSubject !== "all" && game.subject.toLowerCase() !== selectedSubject) {
      return false;
    }
    
    if (selectedGrade !== null && (game.minGrade > selectedGrade || game.maxGrade < selectedGrade)) {
      return false;
    }
    
    return true;
  });

  const subjects = ["all", "math", "science", "reading", "social studies"];
  const grades = [
    { id: null, label: "All" },
    { id: 0, label: "K" },
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
    { id: 4, label: "4" },
    { id: 5, label: "5" },
    { id: 6, label: "6" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-fredoka text-4xl text-center mb-6">Learning Games Library</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">Explore our collection of interactive educational games designed to make learning fun while building essential skills.</p>
        
        {/* Filter Controls */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-gray-50 p-4 rounded-2xl shadow">
            <h3 className="font-bold mb-3 text-center md:text-left">Subject:</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {subjects.map((subject) => (
                <button
                  key={subject}
                  className={cn(
                    "px-4 py-2 rounded-full font-bold",
                    selectedSubject === subject 
                      ? subject === "all" 
                        ? "bg-primary text-white" 
                        : getSubjectColor(subject)
                      : "bg-gray-200 text-dark hover:bg-primary/10"
                  )}
                  onClick={() => setSelectedSubject(subject)}
                >
                  {subject === "all" ? "All" : subject.charAt(0).toUpperCase() + subject.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-2xl shadow">
            <h3 className="font-bold mb-3 text-center md:text-left">Grade Level:</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {grades.map((grade) => (
                <button
                  key={grade.id !== null ? grade.id : "all"}
                  className={cn(
                    "w-10 h-10 rounded-full font-fredoka",
                    selectedGrade === grade.id 
                      ? grade.id === null 
                        ? "bg-primary text-white" 
                        : getGradeColor(grade.id)
                      : "bg-gray-200 text-dark hover:bg-primary/10"
                  )}
                  onClick={() => setSelectedGrade(grade.id)}
                >
                  {grade.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Games Grid */}
        {isLoading ? (
          <div className="flex justify-center">
            <div className="animate-spin h-10 w-10 rounded-full border-t-2 border-primary border-t-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames?.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
        
        {filteredGames && filteredGames.length > 0 ? (
          <div className="text-center mt-12">
            <button className="bg-white border-2 border-primary text-primary font-bold px-8 py-3 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all hover:-translate-y-1 duration-300">
              View All Games <svg className="w-5 h-5 ml-2 inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        ) : (
          <div className="text-center py-10">
            <h3 className="text-xl font-fredoka mb-2">No games found</h3>
            <p className="text-gray-600">Try changing your filters to see more games.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GameLibrary;
