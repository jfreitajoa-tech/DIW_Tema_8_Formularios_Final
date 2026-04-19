import { useState, useEffect } from "react";
import { Icon } from "../components/Icon.jsx"; // Asegúrate de tener este componente para los iconos

export function RegisterPage({ navigate }) {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    // Estado para mostrar la contraseña y para la fuerza de la contraseña
    const [showPassword, setShowPassword] = useState(false);
    const [strength, setStrength] = useState(0);

    // Calcular la fuerza de la contraseña
    const calculateStrength = (pass) => {
        let score = 0;
        if (pass.length >= 8) score++;
        if (/[A-Z]/.test(pass)) score++; 
        if (/[0-9]/.test(pass)) score++; 
        if (/[^A-Za-z0-9]/.test(pass)) score++; 
        return score;
    };

    // Handler para el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (strength < 3) {
            alert("Por favor, elige una contraseña más segura");
            return;
        }

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        
        const updatedUsers = [...existingUsers, user];

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        localStorage.setItem("currentUser", user.username);

        console.log("Usuario registrado correctamente");

        navigate("/habitos");
    };

    // Handler para el cambio en el campo de contraseña, que también calcula la fuerza
    const handlePasswordInput = (e) => {
        const pass = e.target.value;
        setUser({ ...user, password: pass });
        setStrength(calculateStrength(pass));
    };

    // Función para obtener el color de la barra de fuerza de la contraseña
    const getStrengthColor = () => {
        if (strength === 0) return "bg-slate-200";
        if (strength <= 2) return "bg-red-400";
        if (strength === 3) return "bg-orange-400";
        return "bg-green-500";
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-500 via-orange-400 to-orange-300 px-4 py-10">
            <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl">
                <h1 className="text-3xl font-bold text-slate-900 text-center tracking-tight">Crea tu cuenta</h1>
                <p className="text-slate-500 text-center mt-2">Únete a NutrIA y mejora tu vida</p>

                {/* Formulario de registro */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <fieldset className="space-y-1">
                        <label className="block text-sm font-semibold text-slate-700 ml-1">Usuario</label>
                        <input 
                            onChange={(e) => setUser({ ...user, username: e.target.value })} 
                            type="text" 
                            value={user.username} 
                            required 
                            placeholder="Tu nombre de usuario"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all" 
                        />
                    </fieldset>

                    <fieldset className="space-y-1">
                        <label className="block text-sm font-semibold text-slate-700 ml-1">Correo electrónico</label>
                        <input 
                            onChange={(e) => setUser({ ...user, email: e.target.value })} 
                            type="email" 
                            value={user.email} 
                            required 
                            placeholder="ejemplo@correo.com"
                            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all" 
                        />
                    </fieldset>

                    {/* Contraseña con indicador de fuerza */}  
                    <fieldset className="space-y-1">
                        <label className="block text-sm font-semibold text-slate-700 ml-1">Contraseña</label>
                        <div className="relative">
                            <input 
                                onChange={handlePasswordInput} 
                                type={showPassword ? "text" : "password"} 
                                value={user.password} 
                                required 
                                placeholder="Mínimo 8 caracteres"
                                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-100 transition-all" 
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-pink-500 transition-colors"
                            >
                                <Icon name={showPassword ? "visibility_off" : "visibility"} />
                            </button>
                        </div>

                        <div className="pt-2 px-1">
                            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full transition-all duration-500 ${getStrengthColor()}`}
                                    style={{ width: `${(strength / 4) * 100}%` }}
                                ></div>
                            </div>
                            <div className="flex justify-between mt-1.5">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                    Seguridad: <span className={strength > 2 ? "text-green-600" : "text-slate-500"}>
                                        {strength <= 1 ? "Débil" : strength === 2 ? "Media" : strength === 3 ? "Buena" : "Excelente"}
                                    </span>
                                </p>
                                <p className="text-[10px] text-slate-400 italic">Mín. 8 caracteres</p>
                            </div>
                        </div>
                    </fieldset>

                    <button
                        type="submit"
                        disabled={strength < 2}
                        className={`w-full rounded-xl py-3.5 font-bold text-white shadow-lg transition-all transform active:scale-95 ${
                            strength < 2 
                            ? "bg-slate-300 cursor-not-allowed" 
                            : "bg-gradient-to-r from-pink-600 to-orange-500 hover:brightness-110 shadow-pink-200"
                        }`}
                    >
                        Crear mi cuenta
                    </button>
                </form>

                <div className="mt-8 text-center border-t border-slate-100 pt-6">
                    <p className="text-slate-600 text-sm">
                        ¿Ya tienes cuenta? <a href="#/login" className="text-pink-600 font-bold hover:underline">Inicia sesión</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
