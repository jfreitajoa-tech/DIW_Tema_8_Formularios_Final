import { useState, useEffect } from "react";
import { AppShell } from "../components/AppShell.jsx";
import { Footer } from "../components/Footer.jsx";
import { Icon } from "../components/Icon.jsx";

export function HabitsPage({ navigate }) {

    const [isSaved, setIsSaved] = useState(false);

    const [habits, setHabits] = useState({
        goal: "comer-mejor",
        diet: "recomendada",
        avoids: "",
        cookingTime: "menos-15",
        mealsPerDay: "3",
        level: "principiante",
    });

    useEffect(() => {
        const saved = localStorage.getItem("userHabits");
        if (saved) setHabits(JSON.parse(saved));
    }, []);

    const handleChange = (e) => {
        setHabits({ ...habits, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userHabits", JSON.stringify(habits));
        setIsSaved(true);
        setTimeout(() => navigate("/perfil"), 1500);
    };

    const selectClass = "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-50 appearance-none font-medium text-slate-700 transition-all";

    return (
        <AppShell maxWidth="md:max-w-5xl">
            <section className="mt-6 bg-gradient-to-br from-pink-500 to-orange-400 rounded-3xl p-6 shadow-xl text-white">
                <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                    <Icon name="auto_awesome" /> Configura tu plan
                </h1>
                <p className="mt-2 text-white/90 text-sm">
                    Personaliza NutrIA para obtener recetas que se adapten a tu ritmo de vida.
                </p>
            </section>

            {/** Formulario */}
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

                <section className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 space-y-6">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b pb-3">
                        <Icon name="settings_suggest" className="text-pink-600" />
                        Preferencias Base
                    </h2>

                    {/** Selector de Objetivo (Sin .map) */}
                    <div className="space-y-2">
                        <label htmlFor="goal" className="text-sm font-bold text-slate-500 uppercase tracking-tight">Tu Objetivo</label>
                        <div className="relative">
                            <select id="goal" value={habits.goal} onChange={handleChange} className={selectClass}>
                                <option value="comer-mejor">Comer mejor</option>
                                <option value="bajar-peso">Bajar peso</option>
                                <option value="ganar-musculo">Musculación</option>
                                <option value="mantener">Mantener peso</option>
                            </select>
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                                <Icon name="expand_more" />
                            </div>
                        </div>
                    </div>

                    {/** Selector de Dieta */}
                    <div className="space-y-2">
                        <label htmlFor="diet" className="text-sm font-bold text-slate-500 uppercase tracking-tight">Tipo de Dieta</label>
                        <div className="relative">
                            <select id="diet" value={habits.diet} onChange={handleChange} className={selectClass}>
                                <option value="recomendada">Recomendada</option>
                                <option value="vegetariana">Vegetariana</option>
                                <option value="vegana">Vegana</option>
                                <option value="mediterranea">Mediterránea</option>
                                <option value="keto">Keto / Low Carb</option>
                            </select>
                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                                <Icon name="expand_more" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Conocimientos en cocina y alergias*/}
                <aside className="space-y-6">
                    <section className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 space-y-5">
                        <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2 border-b pb-3">
                            <Icon name="timer" className="text-orange-500" />
                            Comidas y conocimientos
                        </h2>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="mealsPerDay" className="text-xs font-bold text-slate-400 uppercase">Comidas/día</label>
                                <input
                                    id="mealsPerDay"
                                    type="number"
                                    min="1" max="6"
                                    value={habits.mealsPerDay}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-slate-200 px-4 py-2 font-bold text-slate-700 bg-slate-50 focus:ring-2 focus:ring-orange-200 outline-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="level" className="text-xs font-bold text-slate-400 uppercase">Nivel</label>
                                <div className="relative">
                                    <select id="level" value={habits.level} onChange={handleChange} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm appearance-none outline-none focus:ring-2 focus:ring-orange-200">
                                        <option value="principiante">Principiante</option>
                                        <option value="intermedio">Intermedio</option>
                                        <option value="chef">Avanzado</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-slate-400">
                                        <Icon name="expand_more" className="text-sm" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="avoids" className="text-xs font-bold text-slate-400 uppercase tracking-widest">Restricciones</label>
                            <textarea
                                id="avoids"
                                value={habits.avoids}
                                onChange={handleChange}
                                placeholder="Ej: Alergia al gluten, sin lactosa..."
                                className="w-full rounded-xl border border-slate-200 p-4 text-sm min-h-[100px] outline-none focus:border-orange-400 transition-all bg-orange-50/30 placeholder:italic"
                            />
                        </div>

                        {!isSaved ? (
                            <button
                                type="submit"
                                className="w-full bg-slate-900 text-white rounded-2xl py-4 font-bold shadow-xl hover:bg-pink-600 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                            >
                                <Icon name="save" /> Guardar Perfil
                            </button>
                        ) : (
                            <div className="w-full bg-green-500 text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2 animate-bounce">
                                <Icon name="check_circle" /> ¡Todo guardado!
                            </div>
                        )}
                    </section>
                </aside>
            </form>

            <Footer>NutrIA · Tu asistente de nutrición</Footer>
        </AppShell>
    );
}
