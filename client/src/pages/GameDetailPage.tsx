import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { GameIcons } from "@/assets/svg/game-icons";
import { CharacterAvatars } from "@/assets/svg/characters";
import { getSubjectColor, formatGradeLevel, createConfetti } from "@/lib/utils";
import { Game, Character } from "@shared/types";
import { Star, Clock, ArrowLeft, Play, Award, Share2, Bookmark, BookOpen, Brain, Target, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GameDetailPage = () => {
  const [, setLocation] = useLocation();
  const { id } = useParams();
  const { toast } = useToast();
  const [confettiContainer, setConfettiContainer] = useState<HTMLDivElement | null>(null);
  
  const { data: game, isLoading: gameLoading } = useQuery<Game>({
    queryKey: [`/api/games/${id}`],
  });
  
  const { data: relatedGames, isLoading: relatedLoading } = useQuery<Game[]>({
    queryKey: ['/api/games/related', id],
    enabled: !!game,
  });
  
  const { data: gameCharacter, isLoading: characterLoading } = useQuery<Character>({
    queryKey: ['/api/characters/game', id],
    enabled: !!game,
  });
  
  const isLoading = gameLoading || relatedLoading || characterLoading;
  
  useEffect(() => {
    if (!id) {
      setLocation("/games");
    }
  }, [id, setLocation]);
  
  const handlePlay = () => {
    if (confettiContainer) {
      createConfetti(confettiContainer, 100);
    }
    
    toast({
      title: "Game Started!",
      description: "Have fun learning with this game!",
      duration: 3000,
    });
  };
  
  if (isLoading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!game) {
    return (
      <div className="pt-24 pb-16 min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-fredoka mb-4">Game Not Found</h1>
          <p className="text-gray-600 mb-6">The game you're looking for doesn't exist or has been removed.</p>
          <Button 
            onClick={() => setLocation("/games")}
            className="bg-primary text-white"
          >
            Back to Games
          </Button>
        </div>
      </div>
    );
  }
  
  const gradeBadge = game.minGrade === game.maxGrade 
    ? formatGradeLevel(game.minGrade)
    : `${formatGradeLevel(game.minGrade)}-${formatGradeLevel(game.maxGrade)}`;

  return (
    <>
      <Helmet>
        <title>{game.title} | LunaLearn Games</title>
        <meta 
          name="description" 
          content={game.description}
        />
      </Helmet>
      
      <div ref={setConfettiContainer} className="pt-24 pb-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            className="mb-6 pl-0 text-gray-600 hover:text-primary hover:bg-transparent"
            onClick={() => setLocation("/games")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Games
          </Button>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/5 lg:w-1/3">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-w-4 aspect-h-3 bg-gray-100 flex items-center justify-center">
                  <div className="w-24 h-24">
                    {GameIcons[game.subject.toLowerCase() as keyof typeof GameIcons]}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <Badge className={getSubjectColor(game.subject)}>
                      {game.subject}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">
                      {gradeBadge}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {game.durationMinutes} min
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary text-white font-bold h-12 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300 flex items-center justify-center gap-2"
                    onClick={handlePlay}
                  >
                    <Play className="w-5 h-5 fill-current" />
                    Play Now
                  </Button>
                  
                  <div className="flex justify-between mt-4">
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <Bookmark className="w-4 h-4 mr-1" />
                      Save
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <Share2 className="w-4 h-4 mr-1" />
                      Share
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500">
                      <Award className="w-4 h-4 mr-1" />
                      Rewards
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Character Guide */}
              {gameCharacter && (
                <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
                  <h3 className="font-fredoka text-xl mb-4">Your Learning Guide</h3>
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-full ${gameCharacter.color}`}>
                      {CharacterAvatars[gameCharacter.id as keyof typeof CharacterAvatars]}
                    </div>
                    <div>
                      <h4 className="font-bold">{gameCharacter.name}</h4>
                      <p className="text-sm text-gray-600">
                        I'll help you master {game.subject.toLowerCase()} concepts!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="md:w-3/5 lg:w-2/3">
              <h1 className="font-fredoka text-4xl mb-4">{game.title}</h1>
              <p className="text-gray-700 text-lg mb-6">{game.description}</p>
              
              <Tabs defaultValue="about" className="w-full">
                <TabsList>
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="skills">Skills & Learning</TabsTrigger>
                  <TabsTrigger value="how-to-play">How to Play</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="p-4 bg-white rounded-lg mt-4">
                  <h3 className="font-fredoka text-xl mb-3">Game Overview</h3>
                  <p className="text-gray-700 mb-4">
                    {game.title} is an interactive educational game designed to make learning {game.subject.toLowerCase()} concepts fun and engaging for kids in {gradeBadge}.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-blue" />
                      </div>
                      <div>
                        <h4 className="font-bold">Educational Content</h4>
                        <p className="text-sm text-gray-600">Aligned with {gradeBadge} curriculum standards</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                        <Brain className="w-5 h-5 text-yellow" />
                      </div>
                      <div>
                        <h4 className="font-bold">Cognitive Skills</h4>
                        <p className="text-sm text-gray-600">Develops critical thinking and problem-solving</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <Target className="w-5 h-5 text-purple" />
                      </div>
                      <div>
                        <h4 className="font-bold">Adaptive Difficulty</h4>
                        <p className="text-sm text-gray-600">Adjusts based on player performance</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                        <Award className="w-5 h-5 text-pink" />
                      </div>
                      <div>
                        <h4 className="font-bold">Rewards & Badges</h4>
                        <p className="text-sm text-gray-600">Earn points and unlock achievements</p>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="font-fredoka text-xl mb-3">Reviews</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < 5 ? 'text-yellow fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <span className="ml-2 font-bold">Parent of 3rd Grader</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        "My child loves this game! It's made learning math so much more fun, and I've seen real improvement in their skills."
                      </p>
                    </div>
                    
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <span className="ml-2 font-bold">Teacher</span>
                      </div>
                      <p className="text-sm text-gray-700">
                        "Great educational content that aligns well with our curriculum. Students find it engaging and ask to play it during free time."
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="skills" className="p-4 bg-white rounded-lg mt-4">
                  <h3 className="font-fredoka text-xl mb-3">Skills You'll Build</h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Problem Solving</span>
                        <span className="font-bold">Advanced</span>
                      </div>
                      <Progress value={85} className="h-3" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Critical Thinking</span>
                        <span className="font-bold">Intermediate</span>
                      </div>
                      <Progress value={70} className="h-3" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Subject Knowledge</span>
                        <span className="font-bold">Comprehensive</span>
                      </div>
                      <Progress value={90} className="h-3" />
                    </div>
                  </div>
                  
                  <h3 className="font-fredoka text-xl mb-3">Learning Objectives</h3>
                  <ul className="space-y-2 list-disc list-inside text-gray-700">
                    <li>Master key concepts in {game.subject.toLowerCase()}</li>
                    <li>Develop problem-solving strategies</li>
                    <li>Build confidence through progressive challenges</li>
                    <li>Apply knowledge in interactive scenarios</li>
                    <li>Track progress and identify areas for improvement</li>
                  </ul>
                  
                  <h3 className="font-fredoka text-xl mt-6 mb-3">Badges You Can Earn</h3>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto">
                        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="32" cy="32" r="30" fill="#FFD166" />
                          <circle cx="32" cy="32" r="25" fill="#FFDA85" />
                          <path d="M22 22L42 42" stroke="#2A2D7E" strokeWidth="4" strokeLinecap="round" />
                          <path d="M42 22L22 42" stroke="#2A2D7E" strokeWidth="4" strokeLinecap="round" />
                          <path d="M32 16V48" stroke="#2A2D7E" strokeWidth="4" strokeLinecap="round" />
                          <path d="M16 32H48" stroke="#2A2D7E" strokeWidth="4" strokeLinecap="round" />
                          <circle cx="32" cy="32" r="7" fill="white" />
                          <circle cx="32" cy="32" r="5" fill="#FF6B6B" />
                        </svg>
                      </div>
                      <p className="text-sm font-bold mt-2">Math Master</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto">
                        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="32" cy="32" r="30" fill="#7ED6DF" />
                          <circle cx="32" cy="32" r="25" fill="#A5E9EF" />
                          <path d="M28 20V38C28 41.3137 25.3137 44 22 44V44" stroke="#2A2D7E" strokeWidth="3" strokeLinecap="round" />
                          <path d="M36 20V38C36 41.3137 38.6863 44 42 44V44" stroke="#2A2D7E" strokeWidth="3" strokeLinecap="round" />
                          <rect x="25" y="15" width="14" height="5" rx="2.5" fill="#2A2D7E" />
                          <circle cx="28" cy="32" r="3" fill="#FF6B6B" />
                          <circle cx="36" cy="26" r="2" fill="#A78BFA" />
                          <circle cx="32" cy="36" r="2" fill="#F9A8D4" />
                        </svg>
                      </div>
                      <p className="text-sm font-bold mt-2">Science Pro</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="how-to-play" className="p-4 bg-white rounded-lg mt-4">
                  <h3 className="font-fredoka text-xl mb-3">Game Instructions</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold">Start the Game</h4>
                        <p className="text-gray-700">
                          Click the "Play Now" button to begin your learning adventure!
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold">Select Your Level</h4>
                        <p className="text-gray-700">
                          Choose the difficulty level that matches your skills - beginner, intermediate, or advanced.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center text-dark font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold">Complete Challenges</h4>
                        <p className="text-gray-700">
                          Solve puzzles and answer questions to progress through the game. Each correct answer earns points!
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold">Earn Rewards</h4>
                        <p className="text-gray-700">
                          Collect points, stars, and badges as you demonstrate your knowledge and skills.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-bold">Track Progress</h4>
                        <p className="text-gray-700">
                          View your achievements and progress on your dashboard. Challenge yourself to improve!
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow/10 rounded-lg border border-yellow/20">
                    <h4 className="font-bold flex items-center gap-2">
                      <svg className="w-5 h-5 text-yellow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Parent Tip
                    </h4>
                    <p className="text-sm text-gray-700 mt-1">
                      Sit with your child during their first few games to help them understand the concepts and navigation. Ask them to explain their thinking process as they solve problems!
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
              
              {/* Related Games */}
              {relatedGames && relatedGames.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-fredoka text-2xl mb-4">Similar Games You Might Like</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {relatedGames.slice(0, 3).map((relatedGame) => (
                      <Card key={relatedGame.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="h-24 bg-gray-100 flex items-center justify-center">
                          <div className="w-12 h-12">
                            {GameIcons[relatedGame.subject.toLowerCase() as keyof typeof GameIcons]}
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-bold mb-1">{relatedGame.title}</h4>
                          <div className="flex justify-between items-center">
                            <Badge className={getSubjectColor(relatedGame.subject)}>
                              {relatedGame.subject}
                            </Badge>
                            <Button size="sm" variant="ghost" asChild className="p-0">
                              <a href={`/games/${relatedGame.id}`}>
                                <ArrowRight className="w-4 h-4" />
                              </a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetailPage;
