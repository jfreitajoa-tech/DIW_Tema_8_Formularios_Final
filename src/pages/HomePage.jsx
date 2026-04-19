import { images } from "../assets.js";
import { AppShell } from "../components/AppShell.jsx";
import { Footer } from "../components/Footer.jsx";
import { Icon } from "../components/Icon.jsx";
import { ResponsiveImage } from "../components/ResponsiveImage.jsx";
import { quickLinks } from "../data/home.js";
import { todayRecipes } from "../data/recipes.js";

export function HomePage() {
  return (
    <AppShell>
      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">

          <div>
            <p className="text-white/90 text-sm">Hola, bienvenida/o a</p>
            <h1 className="text-white text-xl font-bold tracking-tight">NutrIA</h1>
          </div>
        </div>

      </header>

      <main>
        <section className="mt-6 bg-white/15 backdrop-blur rounded-3xl p-6 shadow-lg">
          <h2 className="text-white text-2xl md:text-3xl font-bold">Come mejor, sin complicarte</h2>
          <p className="mt-2 text-white/90">Recetas y menús adaptados a tus objetivos y preferencias.</p>

          <div className="mt-4 rounded-2xl overflow-hidden shadow-md">
            <ResponsiveImage
              mobileSrc={images.heroMobile}
              desktopSrc={images.heroDesktop}
              alt="Plato saludable listo para servir"
              className="w-full h-40 md:h-56 object-cover"
            />
          </div>

          <div className="mt-4 flex flex-col md:flex-row gap-3">
            <a href="#/recetas" aria-label="Ver recetas" className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white text-pink-600 font-semibold px-4 py-3 shadow hover:opacity-90 transition">
              <Icon name="restaurant_menu" />
              Explorar recetas
            </a>
            <a href="#" aria-label="Hablar con NutrIA" className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/20 text-white font-semibold px-4 py-3 hover:bg-white/30 transition">
              <Icon name="chat" />
              Crear menú conmigo
            </a>
          </div>
        </section>

        {/* Accesos rápidos */}
        <section className="mt-8">
          <h3 className="text-white font-semibold text-lg">Accesos rápidos</h3>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <a key={link.title} href={link.href} className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition">
                <Icon name={link.icon} className={link.iconClassName} />
                <p className="mt-2 font-semibold text-slate-800">{link.title}</p>
                <p className="text-xs text-slate-500">{link.description}</p>
              </a>
            ))}
          </div>
        </section>
          
        {/* Recetas para hoy */}
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold text-lg">Recetas para hoy</h3>
            <a href="#/recetas" className="text-white text-sm underline">Ver todas</a>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {todayRecipes.map((recipe) => (
              <article key={recipe.title} className="bg-white rounded-2xl overflow-hidden shadow">
                <img src={recipe.image} alt={recipe.alt} className="h-40 w-full object-cover" loading="lazy" />
                <div className="p-4">
                  <h4 className="font-semibold text-slate-900">{recipe.title}</h4>
                  <p className="text-sm text-slate-500">{recipe.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer>NutrIA · Tu asistente de nutrición</Footer>
    </AppShell>
  );
}
