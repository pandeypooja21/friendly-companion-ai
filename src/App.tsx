
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CompanionPage from "./pages/CompanionPage";
import RemindersPage from "./pages/RemindersPage";
import HealthPage from "./pages/HealthPage";
import EmergencyPage from "./pages/EmergencyPage";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/" element={
              // <ProtectedRoute>
                <HomePage />
              // </ProtectedRoute>
            } />
            <Route path="/companion" element={
              // <ProtectedRoute>
                <CompanionPage />
              // </ProtectedRoute>
            } />
            <Route path="/reminders" element={
              // <ProtectedRoute>
                <RemindersPage />
              // </ProtectedRoute>
            } />
            <Route path="/health" element={
              // <ProtectedRoute>
                <HealthPage />
              // </ProtectedRoute>
            } />
            <Route path="/emergency" element={
              // <ProtectedRoute>
                <EmergencyPage />
              // </ProtectedRoute>
            } />
            <Route path="/settings" element={
              // <ProtectedRoute>
                <SettingsPage />
              // </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
