import { useState, useEffect } from "react";
import { Icon } from "../components/Icon.jsx";

export function LoginPage({ navigate }) {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(
            (u) =>
                u.username === user.username &&
                u.password === user.password
        );

        if (foundUser) {
            console.log("Inicio de sesión exitoso");
            setError(false);

            localStorage.setItem("currentUser", foundUser.username);

            navigate("/inicio");
        } else {
            setError(true);
        }
    };

    const handleInput = (e) => {
        setError(false);
        setUser({ ...user, [e.target.id]: e.target.value });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-500 via-orange-400 to-orange-300 px-4">
            <div className={`w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl transition-transform ${error ? 'animate-shake' : ''}`}>
                <h1 className="text-3xl font-bold text-slate-900 text-center tracking-tight">Bienvenido a NutrIA</h1>
                <p className="text-slate-500 text-center mt-2">Introduce tus credenciales de registro</p>

                {/* Formulario de inicio de sesión */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
                            <Icon name="error" />
                            Usuario o contraseña incorrectos
                        </div>
                    )}

                    <fieldset className="space-y-1">
                        <label className="block text-sm font-semibold text-slate-700 ml-1">Usuario</label>
                        <input
                            id="username"
                            onChange={handleInput}
                            type="text"
                            value={user.username}
                            required
                            className={`w-full rounded-xl border ${error ? 'border-red-500 ring-red-100' : 'border-slate-200'} px-4 py-3 text-slate-900 outline-none focus:ring-4 focus:ring-pink-100 transition-all`}
                        />
                    </fieldset>

                    <fieldset className="space-y-1">
                        <label className="block text-sm font-semibold text-slate-700 ml-1">Contraseña</label>
                        <div className="relative">
                            <input
                                id="password"
                                onChange={handleInput}
                                type={showPassword ? "text" : "password"}
                                value={user.password}
                                required
                                className={`w-full rounded-xl border ${error ? 'border-red-500 ring-red-100' : 'border-slate-200'} px-4 py-3 text-slate-900 outline-none focus:ring-4 focus:ring-pink-100 transition-all`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-pink-500"
                            >
                                <Icon name={showPassword ? "visibility_off" : "visibility"} />
                            </button>
                        </div>
                    </fieldset>

                    <button className="w-full rounded-xl bg-gradient-to-r from-pink-600 to-orange-500 py-3.5 font-bold text-white shadow-lg shadow-pink-200 hover:brightness-110 active:scale-95 transition-all">
                        Entrar ahora
                    </button>
                </form>

                <div className="mt-8 text-center border-t border-slate-100 pt-6">
                    <p className="text-slate-600 text-sm">
                        ¿Aún no tienes cuenta? <a href="#/registro" className="text-pink-600 font-bold hover:underline">Regístrate gratis</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
