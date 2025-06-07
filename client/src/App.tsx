import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import GamesPage from "@/pages/GamesPage";
import ParentsPage from "@/pages/ParentsPage";
import DashboardPage from "@/pages/DashboardPage";
import GameDetailPage from "@/pages/GameDetailPage";
import AboutUsPage from "@/pages/AboutUsPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/games" component={GamesPage} />
          <Route path="/games/:id" component={GameDetailPage} />
          <Route path="/parents" component={ParentsPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/aboutus" component={AboutUsPage}/>
 
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
