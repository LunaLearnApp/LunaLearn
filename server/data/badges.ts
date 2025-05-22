import { Badge } from "@shared/types";

export const badges: Badge[] = [
  {
    id: "math-master",
    name: "Math Master",
    description: "Awarded for exceptional math skills and completing math-based challenges.",
    unlocked: true,
    level: 1,
    subject: "Math"
  },
  {
    id: "science-explorer",
    name: "Science Explorer",
    description: "Earned by completing science experiments and discovery missions.",
    unlocked: true,
    level: 2,
    subject: "Science"
  },
  {
    id: "word-wizard",
    name: "Word Wizard",
    description: "Awarded for building vocabulary and mastering reading challenges.",
    unlocked: true,
    level: 3,
    subject: "Reading"
  },
  {
    id: "history-hero",
    name: "History Hero",
    description: "Earned by exploring historical events and understanding past cultures.",
    unlocked: false,
    level: 0,
    subject: "Social Studies"
  },
  {
    id: "art-master",
    name: "Art Master",
    description: "Awarded for creativity and artistic expression in various art activities.",
    unlocked: false,
    level: 0,
    subject: "Art"
  },
  {
    id: "music-maestro",
    name: "Music Maestro",
    description: "Earned by exploring rhythm, melody, and musical concepts.",
    unlocked: false,
    level: 0,
    subject: "Music"
  }
];
