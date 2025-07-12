import { users, type User, type InsertUser } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUserPoints(userId: number, points: number): Promise<User | undefined>;
  updateUserStreak(userId: number, streakDays: number): Promise<User | undefined>;
  updateUserGrade(userId: number, grade: number): Promise<User | undefined>;
}

// Database implementation of storage
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async updateUserPoints(userId: number, points: number): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set({ points })
      .where(eq(users.id, userId))
      .returning();
    return user || undefined;
  }

  async updateUserStreak(userId: number, streakDays: number): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set({ streakDays })
      .where(eq(users.id, userId))
      .returning();
    return user || undefined;
  }

  async updateUserGrade(userId: number, grade: number): Promise<User | undefined> {
    const [user] = await db
      .update(users)
      .set({ grade })
      .where(eq(users.id, userId))
      .returning();
    return user || undefined;
  }
}

// Create and export a singleton instance of database storage
export const storage = new DatabaseStorage();
