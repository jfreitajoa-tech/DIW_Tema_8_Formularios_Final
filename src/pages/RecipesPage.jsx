import { images } from "../assets.js";
import { AppShell } from "../components/AppShell.jsx";
import { Footer } from "../components/Footer.jsx";
import { Icon } from "../components/Icon.jsx";
import { RecipeCard } from "../components/RecipeCard.jsx";
import { recipes } from "../data/recipes.js";

export function RecipesPage() {
  return (
    <AppShell>
      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">

          <div className="min-w-0">
            <p className="text-white/90 text-sm">Explorar</p>
            <h1 className="text-white text-xl font-bold tracking-tight truncate">Recetas NutrIA</h1>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          <a href="#" aria-label="Buscar" className="h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
            <Icon name="search" className="text-white" />
          </a>
          <a href="#" aria-label="Filtrar" className="h-11 w-11 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition">
            <Icon name="tune" className="text-white" />
          </a>
        </nav>
      </header>

      <section className="mt-6 bg-white/15 backdrop-blur rounded-3xl p-6 shadow-lg">
        <h2 className="text-white text-2xl md:text-3xl font-bold">Encuentra tu próxima receta</h2>
        <p className="mt-2 text-white/90">Elige por tiempo, por tipo de comida o por lo que te apetezca hoy.</p>
      </section>

      <main className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>

      <Footer>NutrIA · Tu asistente de nutrición</Footer>
    </AppShell>
  );
}
