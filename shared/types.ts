export interface Game {
  id: string;
  title: string;
  description: string;
  subject: string;
  minGrade: number;
  maxGrade: number;
  imageUrl?: string;
  rating: number;
  durationMinutes: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  level: number;
  subject?: string;
  imageUrl?: string;
}

export interface Character {
  id: string;
  name: string;
  description: string;
  color: string;
  skills: string[];
  imageUrl?: string;
}

export interface Skill {
  name: string;
  progress: number;
  color: string;
}

export interface UserProgress {
  weeklyPoints: number;
  weeklyGoal: number;
  previousWeekPoints: number;
  streakDays: number;
  skills: Skill[];
}

export interface User {
  id: string;
  username: string;
  grade: number;
  points: number;
  streakDays: number;
}

export interface UserGame {
  gameId: string;
  score: number;
  completed: boolean;
  timeSpentMinutes: number;
  completedAt: string;
}
