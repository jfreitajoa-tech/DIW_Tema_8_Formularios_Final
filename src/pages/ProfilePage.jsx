import { useState, useEffect } from "react";
import { AppShell } from "../components/AppShell.jsx";
import { Footer } from "../components/Footer.jsx";
import { Icon } from "../components/Icon.jsx"; // Importante añadirlo

export function ProfilePage({ navigate }) {
    const [isSaved, setIsSaved] = useState(false);

    const [user, setUser] = useState({
        name: "",
        lastname: "",
        age: "",
        phone: "",
        weight: "",
        height: ""
    });

    // Manejo de cambios en los inputs
    const handleInputChange = (e) => {
        setIsSaved(false); 
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    // Guardar los datos del perfil en localStorage
    const handleSubmit = (e) => {
        e.preventDefault();

        const currentUser = localStorage.getItem("currentUser");

        localStorage.setItem(
            `profile_${currentUser}`,
            JSON.stringify(user)
        );

        setIsSaved(true);

        console.log("Perfil actualizado localmente");
    };

    // Cargar datos del perfil al montar el componente
    useEffect(() => {
        const currentUser = localStorage.getItem("currentUser");

        if (currentUser) {
            const savedUser = localStorage.getItem(`profile_${currentUser}`);
            if (savedUser) {
                setUser(JSON.parse(savedUser));
            }
        }

    }, []);

    return (
        <AppShell maxWidth="md:max-w-5xl">
            <section className="mt-6 bg-pink-600 rounded-2xl p-6 shadow-md text-white">
                <h1 className="text-2xl md:text-3xl font-bold italic flex items-center gap-2">
                    <Icon name="person_outline" /> Mi Perfil
                </h1>
                <p className="mt-1 opacity-90 text-sm">
                    Gestiona tus datos físicos para que la IA calcule mejor tus necesidades.
                </p>
            </section>

            <div className="flex justify-center py-8">
                <section className="bg-white rounded-2xl p-6 shadow border border-slate-200 w-full max-w-lg">
                    <h2 className="text-lg font-bold text-slate-800 border-b pb-2 mb-5">
                        Información Personal
                    </h2>

                    {/* Formulario de perfil */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <fieldset className="space-y-1">
                                <label className="text-sm font-medium text-slate-600">Nombre</label>
                                <input name="name" type="text" value={user.name} onChange={handleInputChange} className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-pink-500" required />
                            </fieldset>
                            <fieldset className="space-y-1">
                                <label className="text-sm font-medium text-slate-600">Apellidos</label>
                                <input name="lastname" type="text" value={user.lastname} onChange={handleInputChange} className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-pink-500" required />
                            </fieldset>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <fieldset className="space-y-1">
                                <label className="text-sm font-medium text-slate-600">Edad</label>
                                <input name="age" type="number" value={user.age} onChange={handleInputChange} className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-pink-500" />
                            </fieldset>
                            <fieldset className="space-y-1">
                                <label className="text-sm font-medium text-slate-600">Teléfono</label>
                                <input name="phone" type="tel" value={user.phone} onChange={handleInputChange} className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-pink-500" />
                            </fieldset>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <fieldset className="space-y-1">
                                <label className="text-sm font-medium text-slate-600">Altura (cm)</label>
                                <input name="height" type="number" value={user.height} onChange={handleInputChange} className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-pink-500" />
                            </fieldset>
                            <fieldset className="space-y-1">
                                <label className="text-sm font-medium text-slate-600">Peso (kg)</label>
                                <input name="weight" type="number" value={user.weight} onChange={handleInputChange} className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-pink-500" />
                            </fieldset>
                        </div>

                        <div className="flex flex-col gap-3 pt-4">
                            {!isSaved ? (
                                <button type="submit" className="w-full rounded-lg bg-pink-600 px-4 py-3 font-bold text-white hover:bg-pink-700 transition flex items-center justify-center gap-2">
                                    <Icon name="save" /> Guardar cambios
                                </button>
                            ) : (
                                <>
                                    <div className="w-full bg-green-500 text-white rounded-lg py-3 font-bold flex items-center justify-center gap-2 animate-bounce">
                                        <Icon name="check_circle" /> ¡Perfil actualizado!
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => navigate("/inicio")}
                                        className="w-full rounded-lg bg-slate-800 px-4 py-3 font-bold text-white hover:bg-slate-900 transition flex items-center justify-center gap-2"
                                    >
                                        <Icon name="home" /> Ir al inicio
                                    </button>
                                </>
                            )}
                        </div>
                    </form>
                </section>
            </div>

            <Footer>NutrIA · Tu asistente de nutrición</Footer>
        </AppShell>
    );
}
