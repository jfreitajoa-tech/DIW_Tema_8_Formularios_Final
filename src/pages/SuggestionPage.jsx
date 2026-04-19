import { useState, useEffect } from "react";
import { AppShell } from "../components/AppShell.jsx";
import { Footer } from "../components/Footer.jsx";
import { Icon } from "../components/Icon.jsx";

export function SuggestionPage() {
  const [isSend, setIsSend] = useState(false);
  
  const initialFormState = {
    category: "recetas",
    title: "",
    detail: "",
  };

  const [suggestion, setSuggestion] = useState(initialFormState);
  const [history, setHistory] = useState([]);
  
  // Estado para validación visual de caracteres
  const MAX_DETAIL = 200;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userSuggestion")) || [];
    setHistory(saved);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de carga para mejorar la sensación de "envío"
    setIsSend(true);
    
    const updatedHistory = [suggestion, ...history]; // Nueva sugerencia arriba
    localStorage.setItem("userSuggestion", JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
    setSuggestion(initialFormState);

    // Volver al estado normal tras 3 segundos para permitir enviar otra
    setTimeout(() => setIsSend(false), 3000);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Restricción de longitud en el detalle
    if (id === "detail" && value.length > MAX_DETAIL) return;
    setSuggestion({ ...suggestion, [id]: value });
  };

  return (
    <AppShell maxWidth="md:max-w-5xl">
      <section className="mt-6 bg-gradient-to-r from-pink-500 to-orange-500 rounded-3xl p-6 md:p-8 shadow-xl text-white">
        <div className="flex items-center gap-3">
            <div className="bg-white/20 p-3 rounded-2xl">
                <Icon name="tips_and_updates" className="text-white text-3xl" />
            </div>
            <div>
                <h1 className="text-2xl md:text-3xl font-bold italic">Tu opinión cuenta</h1>
                <p className="text-white/80 text-sm md:text-base">Ayúdanos a evolucionar NutrIA.</p>
            </div>
        </div>
      </section>

      {/* Formulario de sugerencias */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-6">
            <Icon name="edit_note" className="text-pink-600" />
            Redactar Propuesta
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-4">
                <fieldset className="space-y-1">
                    <label htmlFor="category" className="text-xs font-bold uppercase text-slate-500 ml-1">Área</label>
                    <select
                        id="category"
                        value={suggestion.category}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                    >
                        <option value="recetas">Recetas</option>
                        <option value="perfil">Perfil</option>
                        <option value="habitos">📈 Habitos</option>
                        <option value="accesibilidad">Accesibilidad</option>
                        <option value="otro">Otro</option>
                    </select>
                </fieldset>

                <fieldset className="space-y-1">
                    <label htmlFor="title" className="text-xs font-bold uppercase text-slate-500 ml-1">Título corto</label>
                    <input
                        id="title"
                        type="text"
                        value={suggestion.title}
                        onChange={handleChange}
                        placeholder="¿Qué quieres mejorar?"
                        required
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all"
                    />
                </fieldset>

                <fieldset className="space-y-1">
                    <div className="flex justify-between items-end ml-1">
                        <label htmlFor="detail" className="text-xs font-bold uppercase text-slate-500">Detalles de la idea</label>
                        <span className={`text-[10px] ${suggestion.detail.length >= MAX_DETAIL ? 'text-red-500 font-bold' : 'text-slate-400'}`}>
                            {suggestion.detail.length}/{MAX_DETAIL}
                        </span>
                    </div>
                    <textarea
                        id="detail"
                        value={suggestion.detail}
                        onChange={handleChange}
                        placeholder="Explica tu propuesta..."
                        required
                        className="min-h-[120px] w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all resize-none"
                    ></textarea>
                </fieldset>
            </div>

            <button 
                type="submit" 
                disabled={isSend}
                className={`w-full rounded-xl py-4 font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                    isSend ? 'bg-green-500 animate-bounce' : 'bg-slate-900 hover:bg-pink-600 active:scale-95'
                }`}
            >
                {isSend ? (
                    <> <Icon name="check_circle" /> Enviado con éxito </>
                ) : (
                    <> <Icon name="send" /> Publicar sugerencia </>
                )}
            </button>
          </form>
        </section>

        <aside>
          <section className="bg-slate-50 rounded-3xl p-6 border border-dashed border-slate-300">
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-4">
              <Icon name="auto_awesome" className="text-orange-500" />
              Historial reciente
            </h2>
            
            <div className="space-y-4 overflow-y-auto max-h-[450px] pr-2 custom-scrollbar">
              {history.length === 0 ? (
                <div className="text-center py-10">
                    <Icon name="cloud_off" className="text-slate-300 text-5xl mb-2" />
                    <p className="text-slate-400 text-sm">Aún no hay propuestas.</p>
                </div>
              ) : (
                history.map((item, index) => (
                  <div key={index} className="group bg-white p-4 rounded-2xl shadow-sm border border-slate-100 hover:border-pink-200 transition-all transform hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-2">
                        <span className="px-2 py-1 bg-pink-100 text-pink-600 text-[10px] font-black uppercase rounded-lg">
                            {item.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-medium italic">Hace un momento</span>
                    </div>
                    <h3 className="font-bold text-slate-800 leading-tight group-hover:text-pink-600 transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-xs mt-2 italic leading-relaxed">"{item.detail}"</p>
                  </div>
                ))
              )}
            </div>
          </section>
        </aside>
      </div>

      <Footer>NutrIA · Tu asistente de nutrición</Footer>
    </AppShell>
  );
}
