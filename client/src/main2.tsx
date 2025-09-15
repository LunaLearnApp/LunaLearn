import { createRoot } from "react-dom/client";
import AppDashboard from "./AppDashboard";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <AppDashboard />
  </QueryClientProvider>
);
