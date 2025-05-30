import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Badge } from "@shared/types";
import BadgeItem from "@/components/BadgeItem";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Trophy, Award, Star } from "lucide-react";

const AchievementsPage = () => {
  const { data: badges, isLoading: badgesLoading } = useQuery<Badge[]>({
    queryKey: ['/api/badges']
  });

  const { data: progress, isLoading: progressLoading } = useQuery({
    queryKey: ['/api/progress']
  });

  const isLoading = badgesLoading || progressLoading;

  // Calculate achievement stats
  const unlockedBadges = badges?.filter(badge => badge.unlocked).length || 0;
  const totalBadges = badges?.length || 0;
  const completionPercentage = Math.round((unlockedBadges / (totalBadges || 1)) * 100);

  return (
    <>
      <Helmet>
        <title>Achievements | LunaLearn</title>
        <meta 
          name="description" 
          content="Track your learning achievements, badges, and progress on LunaLearn"
        />
      </Helmet>
      
      <div className="pt-24 pb-16 bg-gradient-to-br from-yellow-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h1 className="font-fredoka text-4xl md:text-5xl text-center mb-6">
            <span className="bg-gradient-to-r from-primary via-purple to-yellow bg-clip-text text-transparent">
              Your Achievements
            </span>
          </h1>
          <p className="text-gray-700 text-lg text-center max-w-2xl mx-auto mb-10">
            Collect badges, earn points, and track your learning progress!
          </p>
        </div>
      </div>
      
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          ) : (
            <>
              {/* Achievement Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-600">Total Score</p>
                    <h3 className="font-fredoka text-3xl text-primary">{progress?.weeklyPoints || 0}</h3>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center">
                  <div className="w-16 h-16 rounded-full bg-yellow/20 flex items-center justify-center mr-4">
                    <Award className="w-8 h-8 text-yellow" />
                  </div>
                  <div>
                    <p className="text-gray-600">Badges Earned</p>
                    <h3 className="font-fredoka text-3xl text-yellow">{unlockedBadges} <span className="text-gray-400 text-lg">/ {totalBadges}</span></h3>
                  </div>
                </div>
                
                <div className="bg-white rounded-3xl shadow-lg p-6 flex items-center">
                  <div className="w-16 h-16 rounded-full bg-purple/20 flex items-center justify-center mr-4">
                    <Star className="w-8 h-8 text-purple" />
                  </div>
                  <div>
                    <p className="text-gray-600">Learning Streak</p>
                    <h3 className="font-fredoka text-3xl text-purple">{progress?.streakDays || 0} <span className="text-lg">days</span></h3>
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="badges" className="w-full">
                <TabsList className="w-full flex justify-center mb-8">
                  <TabsTrigger value="badges" className="text-lg">Badges</TabsTrigger>
                  <TabsTrigger value="progress" className="text-lg">Progress</TabsTrigger>
                </TabsList>
                
                <TabsContent value="badges" className="focus:outline-none">
                  {/* Achievement Progress */}
                  <div className="mb-10 bg-white rounded-3xl shadow-lg p-6">
                    <h3 className="font-fredoka text-2xl mb-4">Achievement Progress</h3>
                    <div className="mb-2 flex justify-between items-center">
                      <span className="text-gray-600">You've earned {unlockedBadges} out of {totalBadges} badges</span>
                      <span className="font-bold">{completionPercentage}%</span>
                    </div>
                    <Progress value={completionPercentage} className="h-4 bg-gray-100" />
                  </div>
                  
                  {/* Badges Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
                    {badges?.map((badge) => (
                      <BadgeItem key={badge.id} badge={badge} />
                    ))}
                  </div>
                  
                  {/* Challenge Yourself */}
                  <div className="bg-gradient-to-r from-primary to-purple rounded-3xl p-8 text-white text-center">
                    <h3 className="font-fredoka text-2xl mb-3">Challenge Yourself!</h3>
                    <p className="mb-6">Complete more learning activities to unlock new badges and rewards.</p>
                    <Button 
                      className="bg-white text-primary hover:bg-white/90 font-bold px-6 py-2 rounded-full"
                      asChild
                    >
                      <a href="/games">Play More Games</a>
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="progress" className="focus:outline-none">
                  <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
                    <h3 className="font-fredoka text-2xl mb-4">Weekly Progress</h3>
                    
                    <div className="mb-6">
                      <div className="flex justify-between mb-1">
                        <span>Weekly Points</span>
                        <span className="font-bold">{progress?.weeklyPoints || 0} / {progress?.weeklyGoal || 1000}</span>
                      </div>
                      <Progress value={(progress?.weeklyPoints || 0) / (progress?.weeklyGoal || 1000) * 100} className="h-4" />
                    </div>
                    
                    <h4 className="font-bold mb-3">Learning Streak</h4>
                    <div className="flex justify-between mb-6">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                        <div key={index} className="flex flex-col items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-1 ${
                            index < (progress?.streakDays || 0) ? "bg-yellow text-white" : "bg-gray-200 text-gray-500"
                          }`}>
                            {day}
                          </div>
                          {index < (progress?.streakDays || 0) && (
                            <svg className="w-4 h-4 text-green" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="font-bold mb-3">Your Skills</h4>
                    <div className="space-y-4">
                      {progress?.skills?.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span>{skill.name} Skills</span>
                            <span className="font-bold">{skill.progress}%</span>
                          </div>
                          <Progress value={skill.progress} className={`h-4 ${skill.color}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-3xl shadow-lg p-6">
                      <h3 className="font-fredoka text-2xl mb-4">Recent Activities</h3>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-yellow/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-yellow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 8L16 12L12 16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold">Completed "Number Blast" game</p>
                            <p className="text-gray-500 text-sm">2 hours ago</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 8L16 12L12 16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold">Earned "Math Master" badge</p>
                            <p className="text-gray-500 text-sm">Yesterday</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-purple/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 8L16 12L12 16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold">Completed "Space Explorer" game</p>
                            <p className="text-gray-500 text-sm">2 days ago</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-3xl shadow-lg p-6">
                      <h3 className="font-fredoka text-2xl mb-4">Recommendations</h3>
                      <ul className="space-y-4">
                        <li className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                          <h4 className="font-bold mb-1">Improve your Reading skills</h4>
                          <p className="text-gray-600 mb-2">Your reading skills could use more practice.</p>
                          <a href="/games?subject=reading" className="text-primary font-bold flex items-center">
                            Play Reading Games 
                            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        </li>
                        <li className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                          <h4 className="font-bold mb-1">Challenge yourself in Science</h4>
                          <p className="text-gray-600 mb-2">Try some harder science games to level up!</p>
                          <a href="/games?subject=science" className="text-primary font-bold flex items-center">
                            Play Science Games 
                            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AchievementsPage;
