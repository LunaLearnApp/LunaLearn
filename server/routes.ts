import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { games } from "./data/games";
import { characters } from "./data/characters";
import { badges } from "./data/badges";
import { progress } from "./data/progress";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  
  // Games routes
  app.get("/api/games", (req, res) => {
    res.json(games);
  });

  app.get("/api/games/:id", (req, res) => {
    const game = games.find(g => g.id === req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.json(game);
  });

  app.get("/api/games/recommended", (req, res) => {
    // Return 3 random games as recommended
    const shuffled = [...games].sort(() => 0.5 - Math.random());
    res.json(shuffled.slice(0, 3));
  });

  app.get("/api/games/related", (req, res) => {
    // Return 3 random games as related
    const shuffled = [...games].sort(() => 0.5 - Math.random());
    res.json(shuffled.slice(0, 3));
  });

  // Characters routes
  app.get("/api/characters", (req, res) => {
    res.json(characters);
  });

  app.get("/api/characters/:id", (req, res) => {
    const character = characters.find(c => c.id === req.params.id);
    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }
    res.json(character);
  });

  app.get("/api/characters/game/:gameId", (req, res) => {
    // Return a random character as the game guide
    const randomIndex = Math.floor(Math.random() * characters.length);
    res.json(characters[randomIndex]);
  });

  // Badges routes
  app.get("/api/badges", (req, res) => {
    res.json(badges);
  });

  app.get("/api/badges/:id", (req, res) => {
    const badge = badges.find(b => b.id === req.params.id);
    if (!badge) {
      return res.status(404).json({ message: "Badge not found" });
    }
    res.json(badge);
  });

  // Progress routes
  app.get("/api/progress", (req, res) => {
    res.json(progress);
  });

  // Users routes
  app.post("/api/users", async (req, res) => {
    try {
      const user = req.body;
      const newUser = await storage.createUser(user);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    try {
      const user = await storage.getUser(parseInt(req.params.id));
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: (error as Error).message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
