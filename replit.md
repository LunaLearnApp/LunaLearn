# LearnWithAI - Educational Games Platform

## Overview

LearnWithAI is an educational platform providing interactive games for children in grades K-6. The application features a React-based frontend with a modern UI, an Express backend API, and uses Drizzle ORM for database interactions. The platform includes game recommendations, achievements/badges, character guides, and progress tracking for young learners.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a classic client-server architecture with:

1. **Client**: React-based SPA (Single Page Application) using React Query for data fetching, Tailwind CSS for styling, and shadcn/ui components.
2. **Server**: Express.js backend with RESTful API endpoints.
3. **Database**: PostgreSQL with Drizzle ORM for data access.

The application is bundled and served using Vite, with server-side rendering capabilities. The codebase is written in TypeScript for type safety throughout the stack.

## Key Components

### Frontend Components

1. **Pages**: 
   - HomePage: Landing page with introduction to the platform
   - GamesPage: Library of educational games
   - GameDetailPage: Individual game information
   - AchievementsPage: User badges and rewards
   - DashboardPage: User progress and statistics
   - ParentsPage: Dashboard for parents to monitor child progress

2. **UI Components**:
   - Built with shadcn/ui library (based on Radix UI)
   - Responsive design with Tailwind CSS
   - Custom theme with educational-friendly colors

3. **Data Management**:
   - React Query for data fetching, caching, and state management
   - Type-safe API interactions with shared types

### Backend Components

1. **API Routes**:
   - Games endpoints for discovering and retrieving game info
   - Characters endpoints for learning companions
   - Badges and achievements endpoints
   - Progress tracking endpoints

2. **Data Layer**:
   - Drizzle ORM for database interactions
   - PostgreSQL schema defined in shared/schema.ts
   - Sample data stored in server/data/* files

3. **Server Configuration**:
   - Express middleware for request handling
   - Vite integration for development mode

## Data Flow

1. **User Interaction**:
   - User interacts with the UI (e.g., clicking on a game)
   - React components trigger data fetching via React Query

2. **Data Fetching**:
   - React Query makes API calls to backend endpoints
   - Responses are cached and managed by React Query

3. **Server Processing**:
   - Express server receives API requests
   - Server retrieves data from database using Drizzle ORM
   - Server returns JSON responses

4. **Database Interactions**:
   - Drizzle ORM executes queries against PostgreSQL database
   - Data is returned to Express server

## External Dependencies

1. **UI/Frontend**:
   - React and React DOM for UI rendering
   - Tailwind CSS for styling
   - shadcn/ui and Radix UI for component library
   - React Query for data fetching
   - Wouter for routing
   - Lucide React for icons

2. **Backend/Server**:
   - Express.js for server functionality
   - Drizzle ORM for database interactions
   - Zod for validation

3. **Build/Development**:
   - Vite for building and development
   - TypeScript for type safety
   - ESBuild for server bundle

## Database Schema

The application uses a PostgreSQL database with the following tables:

1. **users**: Stores user information including username, password, grade level, points, and streak days
2. **games**: Educational games with title, description, subject, grade range, and other metadata
3. **badges**: Achievements users can earn
4. **characters**: Learning companion characters with skills and attributes
5. **user_badges**: Junction table for tracking which badges users have earned

The schema is defined using Drizzle ORM in `shared/schema.ts`.

## Deployment Strategy

The application is configured to run on Replit with:

1. **Development Mode**: 
   - `npm run dev` runs the development server with hot reloading
   - Uses Vite for frontend development

2. **Production Build**:
   - Vite builds the frontend assets
   - ESBuild compiles the server code
   - Static assets served by Express

3. **Database**:
   - Uses the PostgreSQL module provided by Replit
   - Database credentials supplied via environment variables

4. **Environment Configuration**:
   - Development vs Production mode controlled by NODE_ENV
   - Database connection managed via DATABASE_URL environment variable

The deployment flow in production is:
1. Build frontend with Vite
2. Bundle server with ESBuild
3. Start the application with Node.js