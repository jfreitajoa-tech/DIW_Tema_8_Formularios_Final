import { Footer } from "../components/Footer.jsx";

export function LandingPage({ navigate }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-500 via-orange-400 to-orange-300">

            <div className="mx-auto w-full max-w-md md:max-w-6xl px-4 md:px-8 py-10">

                {/* Cabecera */}
                <section className="bg-white/15 backdrop-blur rounded-3xl p-6 shadow-lg text-white">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        NutrIA · Tu asistente nutricional
                    </h1>

                    <p className="mt-3 text-white/90">
                        Mejora tu alimentación registrando tus hábitos y recibiendo recomendaciones personalizadas.
                    </p>

                    {/* botones */}
                    <div className="mt-6 flex flex-col md:flex-row gap-3">
                        <button
                            onClick={() => navigate("/registro")}
                            className="w-full md:w-auto bg-white text-pink-600 font-semibold px-5 py-3 rounded-xl hover:bg-slate-100 transition"
                        >
                            Crear cuenta
                        </button>

                        <button
                            onClick={() => navigate("/login")}
                            className="w-full md:w-auto bg-slate-900 text-white font-semibold px-5 py-3 rounded-xl hover:bg-slate-800 transition"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </section>

                {/* Que ofrece Nutria */}
                <section className="mt-10 bg-white rounded-3xl p-6 shadow-lg">
                    <h2 className="text-xl font-semibold text-slate-900">
                        ¿Qué puedes hacer con NutrIA?
                    </h2>

                    <div className="mt-6 grid md:grid-cols-3 gap-4">

                        <div className="p-4 rounded-xl bg-slate-50">
                            <span className="material-icons text-pink-600">person</span>
                            <h3 className="font-semibold mt-2">Perfil personalizado</h3>
                            <p className="text-sm text-slate-600 mt-1">
                                Guarda tus datos personales y preferencias.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50">
                            <span className="material-icons text-orange-500">restaurant_menu</span>
                            <h3 className="font-semibold mt-2">Hábitos alimenticios</h3>
                            <p className="text-sm text-slate-600 mt-1">
                                Define tu dieta, objetivos y restricciones.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50">
                            <span className="material-icons text-green-500">menu_book</span>
                            <h3 className="font-semibold mt-2">Recetas</h3>
                            <p className="text-sm text-slate-600 mt-1">
                                Accede a recetas adaptadas a tus necesidades.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Video tutorial */}
                <section className="mt-10 bg-white rounded-3xl p-6 shadow-lg">
                    <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                        <span className="material-icons text-pink-600">play_circle</span>
                        Videotutorial
                    </h2>

                    <p className="mt-2 text-sm text-slate-600">
                        Descubre cómo funciona la aplicación paso a paso.
                    </p>

                    <div className="mt-4 rounded-2xl overflow-hidden shadow">
                        <video className="w-full" controls>
                            <source src="/assets/video/tutorial.mp4" type="video/mp4" />
                        </video>
                    </div>
                </section>

                {/* Llamada a la acción */}
                <section className="mt-10 bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 text-center text-white">
                    <h2 className="text-2xl font-bold">
                        Empieza ahora con NutrIA
                    </h2>

                    <p className="mt-2 text-white/90">
                        Crea tu cuenta y mejora tu alimentación hoy mismo.
                    </p>

                    <button
                        onClick={() => navigate("/registro")}
                        className="mt-5 bg-pink-600 px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition"
                    >
                        Empezar
                    </button>
                </section>

                <Footer>NutrIA · Tu asistente de nutrición </Footer>

            </div>
        </div>
    );
}