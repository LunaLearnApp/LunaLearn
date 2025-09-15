import { Switch, Route } from "wouter";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/not-found";
import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import ParentsPage from "./pages/ParentsPage";
import DashboardPage from "./pages/DashboardPage";
import GameDetailPage from "./pages/GameDetailPage";
import HeaderDashboard from "./components/HeaderDashboard";
import ProfilePage from "./pages/ProfilePage";
import { LogIn } from "lucide-react";


function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderDashboard />
      <main className="flex-grow">
        <Switch>
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/games" component={GamesPage} />
          <Route path="/games/:id" component={GameDetailPage} />
          <Route path="/parents" component={ParentsPage} />
          <Route path="/profile" component={ProfilePage} />

          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function AppDashboard() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default AppDashboard;
