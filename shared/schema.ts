import { pgTable, text, serial, integer, boolean, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  grade: integer("grade").notNull(),
  points: integer("points").default(0).notNull(),
  streakDays: integer("streak_days").default(0).notNull(),
});

export const games = pgTable("games", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  subject: text("subject").notNull(),
  minGrade: integer("min_grade").notNull(),
  maxGrade: integer("max_grade").notNull(),
  imageUrl: text("image_url"),
  rating: integer("rating").default(0).notNull(),
  durationMinutes: integer("duration_minutes").notNull(),
});

export const badges = pgTable("badges", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url"),
  subject: text("subject"),
});

export const characters = pgTable("characters", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  color: text("color").notNull(),
  skills: text("skills").array().notNull(),
  imageUrl: text("image_url"),
});

export const userBadges = pgTable("user_badges", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  badgeId: integer("badge_id").notNull().references(() => badges.id),
  level: integer("level").default(1).notNull(),
  unlocked: boolean("unlocked").default(false).notNull(),
});

export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  gameId: integer("game_id").notNull().references(() => games.id),
  score: integer("score").notNull(),
  completed: boolean("completed").default(false).notNull(),
  timeSpentMinutes: integer("time_spent_minutes").notNull(),
  completedAt: text("completed_at").notNull(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => users.id),
  name: text("name").notNull(),
  progress: integer("progress").default(0).notNull(),
  color: text("color").notNull(),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({ id: true });
export const insertGameSchema = createInsertSchema(games).omit({ id: true });
export const insertBadgeSchema = createInsertSchema(badges).omit({ id: true });
export const insertCharacterSchema = createInsertSchema(characters).omit({ id: true });
export const insertUserBadgeSchema = createInsertSchema(userBadges).omit({ id: true });
export const insertUserProgressSchema = createInsertSchema(userProgress).omit({ id: true });
export const insertSkillSchema = createInsertSchema(skills).omit({ id: true });

// Types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertGame = z.infer<typeof insertGameSchema>;
export type InsertBadge = z.infer<typeof insertBadgeSchema>;
export type InsertCharacter = z.infer<typeof insertCharacterSchema>;
export type InsertUserBadge = z.infer<typeof insertUserBadgeSchema>;
export type InsertUserProgress = z.infer<typeof insertUserProgressSchema>;
export type InsertSkill = z.infer<typeof insertSkillSchema>;

export type User = typeof users.$inferSelect;
export type Game = typeof games.$inferSelect;
export type Badge = typeof badges.$inferSelect;
export type Character = typeof characters.$inferSelect;
export type UserBadge = typeof userBadges.$inferSelect;
export type UserProgress = typeof userProgress.$inferSelect;
export type Skill = typeof skills.$inferSelect;
