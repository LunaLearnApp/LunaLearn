import { UserProgress } from "@shared/types";

export const progress: UserProgress = {
  weeklyPoints: 750,
  weeklyGoal: 1000,
  previousWeekPoints: 600,
  streakDays: 5,
  skills: [
    {
      name: "Math",
      progress: 75,
      color: "bg-yellow"
    },
    {
      name: "Reading",
      progress: 60,
      color: "bg-pink"
    },
    {
      name: "Science",
      progress: 40,
      color: "bg-blue"
    }
  ]
};
