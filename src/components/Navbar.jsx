import { useState } from "react";
import logo from "../assets/images/nutrialogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const showNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <header className="flex items-center justify-between py-4">
            <a href="#/inicio" className="font-bold text-white"><img src={logo} alt="logo" className="h-8 w-auto" /></a>

            <nav className={`fixed top-0 right-0 h-full w-64 bg-white p-6 shadow-lg transition-transform duration-300 md:static md:h-auto md:w-auto md:bg-transparent md:p-0 md:shadow-none ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
                }`}>

                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <a href="#/inicio" onClick={closeNavbar} className="text-slate-900 md:text-white">Inicio</a>
                    <a href="#/recetas" onClick={closeNavbar} className="text-slate-900 md:text-white">Recetas</a>
                    <a href="#/perfil" onClick={closeNavbar} className="text-slate-900 md:text-white">Perfil</a>
                    <a href="#/sugerencias" onClick={closeNavbar} className="text-slate-900 md:text-white">Sugerencias</a>
                    <a href="#/contacto" onClick={closeNavbar} className="text-slate-900 md:text-white">Contacto</a>
                    <a href="#/" onClick={closeNavbar} className="text-slate-900 md:text-white">Cerrar sesión</a>
                </div>

                <button className="absolute right-4 top-4 text-slate-900 md:hidden" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>

            <button className="text-white md:hidden" onClick={showNavbar}><FaBars/></button>
        </header>
    );
}