import { images } from "../assets.js";
import { AppShell } from "../components/AppShell.jsx";
import { Footer } from "../components/Footer.jsx";
import { Icon } from "../components/Icon.jsx";
import { ResponsiveImage } from "../components/ResponsiveImage.jsx";

const nutrition = [
  { label: "Proteína", value: "32 g" },
  { label: "Carbos", value: "48 g" },
  { label: "Grasas", value: "12 g" },
];

const tags = [
  { label: "Alta en proteína", className: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  { label: "Energía", className: "bg-orange-50 text-orange-700 border-orange-100" },
  { label: "Rápida", className: "bg-sky-50 text-sky-700 border-sky-100" },
];

const ingredients = [
  "150 g de fideos de arroz",
  "200 g de pechuga de pollo",
  "1 zanahoria",
  "1/2 pimiento rojo",
  "1/2 cebolla",
];

const steps = [
  "Cuece los fideos según las instrucciones y reserva.",
  "Saltea el pollo hasta que dore bien.",
  "Añade las verduras y cocina unos minutos.",
  "Mezcla todo, ajusta sazón y sirve caliente.",
];

export function RecipeDetailPage({ navigate }) {
  return (
    <AppShell maxWidth="md:max-w-6xl">

      <header className="mt-4 flex items-center justify-between bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl">
        <button
          onClick={() => navigate("/recetas")}
          className="flex items-center gap-2 text-white hover:text-pink-400 transition font-medium"
        >
          <Icon name="arrow_back" />
          <span className="text-sm hidden sm:inline">Explorar recetas</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-white font-bold tracking-tight">Nutr<span className="text-pink-500">IA</span></span>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-9 w-9 rounded-xl bg-white/10 hover:bg-pink-500/20 flex items-center justify-center transition group" aria-label="Favorito">
            <Icon name="favorite_border" className="text-white group-hover:text-pink-400" />
          </button>
          <button className="h-9 w-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition" aria-label="Compartir">
            <Icon name="share" className="text-white" />
          </button>
        </div>
      </header>

      <main className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">

        <section className="lg:col-span-3 space-y-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <ResponsiveImage
              mobileSrc={images.detalleMobile}
              desktopSrc={images.detalleDesktop}
              alt="Fideos de arroz con pollo"
              className="w-full h-64 md:h-[480px] object-cover"
            />
            <div className="absolute top-4 left-4 bg-slate-900/60 backdrop-blur px-4 py-2 rounded-full text-white text-sm font-semibold flex items-center gap-2">
              <Icon name="timer" className="text-orange-400 text-sm" /> 30 min
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-pink-600 text-white font-bold px-6 py-4 shadow-lg shadow-pink-500/20 hover:bg-pink-700 transition-all active:scale-95">
              <Icon name="insights" />
              Info Nutricional
            </button>
            <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 text-white font-semibold px-6 py-4 hover:bg-slate-800 transition-all active:scale-95">
              <Icon name="edit" />
              Personalizar
            </button>
          </div>
        </section>


        <section className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100">

            <div className="space-y-4">
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                Fideos de arroz con pollo y verduras
              </h1>

              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag.label} className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-lg border ${tag.className}`}>
                    {tag.label}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 pt-4">
                {nutrition.map((item) => (
                  <div key={item.label} className="bg-slate-50 border border-slate-100 rounded-2xl p-3 text-center">
                    <p className="text-[10px] text-slate-400 uppercase font-bold">{item.label}</p>
                    <p className="font-bold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-dashed border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Icon name="shopping_basket" className="text-pink-500" />
                Ingredientes
              </h2>
              <ul className="space-y-3">
                {ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-400"></span>
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-dashed border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Icon name="restaurant" className="text-orange-500" />
                Preparación
              </h2>
              <ol className="space-y-4">
                {steps.map((step, i) => (
                  <li key={i} className="flex gap-4 text-sm text-slate-600 leading-relaxed">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-500 font-bold text-xs">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>

      <Footer>NutrIA · Tu asistente de nutrición</Footer>
    </AppShell>
  );
}
