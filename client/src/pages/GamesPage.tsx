import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import GameCard from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { cn, getGradeColor, getSubjectColor } from "@/lib/utils";
import { Helmet } from "react-helmet";
import { Game } from "@shared/types";
import { Loader2 } from "lucide-react";

const GamesPage = () => {
  const [location] = useLocation();
  const { toast } = useToast();
  const [selectedSubject, setSelectedSubject] = useState<string>("all");
  const [selectedGrade, setSelectedGrade] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Extract query parameters if any
  useEffect(() => {
    const searchParams = new URLSearchParams(location.split("?")[1]);
    const subject = searchParams.get("subject");
    const grade = searchParams.get("grade");
    const character = searchParams.get("character");
    
    if (subject) setSelectedSubject(subject);
    if (grade) setSelectedGrade(parseInt(grade));
    
    // If a character is specified, we could filter games by character
    // or show a toast that we're showing games featuring that character
    if (character) {
      toast({
        title: "Character Selected",
        description: `Showing games featuring your selected character!`,
        duration: 3000,
      });
    }
  }, [location, toast]);

  const { data: games, isLoading, error } = useQuery<Game[]>({
    queryKey: ['/api/games'],
  });

  if (error) {
    toast({
      title: "Error loading games",
      description: "Please try again later",
      variant: "destructive",
    });
  }

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

  // Filter games based on selected criteria
  const filteredGames = games?.filter(game => {
    if (selectedSubject !== "all" && game.subject.toLowerCase() !== selectedSubject) {
      return false;
    }
    
    if (selectedGrade !== null && (game.minGrade > selectedGrade || game.maxGrade < selectedGrade)) {
      return false;
    }
    
    if (searchTerm && !game.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <>
      <Helmet>
        <title>Games Library | LearnWithAI</title>
        <meta 
          name="description" 
          content="Explore our collection of fun educational games designed to make learning exciting for grades K-6."
        />
      </Helmet>
      
      <div className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h1 className="font-fredoka text-4xl md:text-5xl text-center mb-6">
            <span className="bg-gradient-to-r from-primary via-purple to-blue bg-clip-text text-transparent">
              Games Library
            </span>
          </h1>
          <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto mb-10">
            Explore our collection of interactive educational games designed to make learning fun while building essential skills.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for games..."
                className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="absolute right-3 top-3 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Filter Controls */}
          <div className="mb-10 flex flex-col md:flex-row gap-6 justify-center">
            <div className="bg-white p-4 rounded-2xl shadow">
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
            
            <div className="bg-white p-4 rounded-2xl shadow">
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
        </div>
      </div>
      
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          )}
          
          {/* Error State */}
          {error && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-fredoka text-gray-700 mb-4">Oops! Something went wrong</h3>
              <p className="text-gray-600 mb-6">We couldn't load the games right now.</p>
              <Button 
                onClick={() => window.location.reload()}
                className="bg-primary text-white"
              >
                Try Again
              </Button>
            </div>
          )}
          
          {/* Results Count */}
          {!isLoading && !error && (
            <div className="mb-8">
              <h2 className="font-fredoka text-2xl mb-2">
                {filteredGames?.length || 0} Games Found
              </h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
          )}
          
          {/* Games Grid */}
          {!isLoading && !error && (
            <>
              {filteredGames && filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredGames.map(game => (
                    <GameCard key={game.id} game={game} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-3xl">
                  <h3 className="text-2xl font-fredoka mb-2">No games found</h3>
                  <p className="text-gray-600 mb-6">Try changing your filters to see more games.</p>
                  <Button 
                    onClick={() => {
                      setSelectedSubject("all");
                      setSelectedGrade(null);
                      setSearchTerm("");
                    }}
                    className="bg-primary text-white"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default GamesPage;
