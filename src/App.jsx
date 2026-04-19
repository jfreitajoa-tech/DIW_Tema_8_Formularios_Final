import { useEffect, useState } from "react";
import { ContactPage } from "./pages/ContactPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { RecipeDetailPage } from "./pages/RecipeDetailPage.jsx";
import { RecipesPage } from "./pages/RecipesPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { LandingPage } from "./pages/LandingPage.jsx";
import { HabitsPage } from "./pages/HabitsPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { SuggestionPage } from "./pages/SuggestionPage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";

const routes = {
  "/": LandingPage,
  "/inicio": HomePage,
  "/recetas": RecipesPage,
  "/detalle": RecipeDetailPage,
  "/contacto": ContactPage,
  "/habitos": HabitsPage,
  "/login": LoginPage,
  "/registro": RegisterPage,
  "/perfil": ProfilePage,
  "/sugerencias": SuggestionPage
};

function getRouteFromHash() {
  return window.location.hash.replace("#", "") || "/";
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash);

  const navigate = (path) => {
    window.location.hash = path;
  };

  const isLogged = localStorage.getItem("userLogin");

  const Page = routes[route] ?? LandingPage;

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return <Page navigate={navigate} isLogged={isLogged} />;
}