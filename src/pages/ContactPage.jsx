import { useState, useEffect } from "react";
import { AppShell } from "../components/AppShell.jsx";
import { Footer } from "../components/Footer.jsx";
import { Icon } from "../components/Icon.jsx";

// Página de contacto con formulario y historial de mensajes
export function ContactPage() {
  const [isSend, setIsSend] = useState(false);
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState({ asunto: "", mensaje: "" });

  // Cargar historial de mensajes desde localStorage al montar el componente
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("contactHistory")) || [];
    setHistory(saved);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = { ...message, fecha: new Date().toLocaleDateString() };
    const updatedHistory = [newMessage, ...history];

    localStorage.setItem("contactHistory", JSON.stringify(updatedHistory));
    setHistory(updatedHistory);
    setIsSend(true);
    setMessage({ asunto: "", mensaje: "" });
  };

  const handleChange = (e) => {
    setIsSend(false);
    setMessage({ ...message, [e.target.id]: e.target.value });
  };

  // El componente retorna una estructura con un formulario para enviar mensajes y un historial de mensajes enviados, junto con información de contacto y horarios de atención.
  return (
    <AppShell maxWidth="md:max-w-5xl">

      <section className="mt-6 bg-pink-600 rounded-2xl p-6 shadow-md text-white">
        <h1 className="text-2xl md:text-3xl font-bold italic flex items-center gap-2">
          <Icon name="chat" /> Contacto
        </h1>
        <p className="mt-1 opacity-90 text-sm">¿En qué podemos ayudarte hoy?</p>
      </section>

      {/** Columna del formulario */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        <section className="bg-white rounded-2xl p-6 shadow border border-slate-200">
          <h2 className="text-lg font-bold text-slate-800 mb-5">Nuevo Mensaje</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <fieldset className="space-y-1">
              <label htmlFor="asunto" className="text-sm font-medium text-slate-700">Asunto</label>
              <input id="asunto" type="text" onChange={handleChange} value={message.asunto} required className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-pink-500" />
            </fieldset>
            <fieldset className="space-y-1">
              <label htmlFor="mensaje" className="text-sm font-medium text-slate-700">Mensaje</label>
              <textarea id="mensaje" onChange={handleChange} value={message.mensaje} required className="min-h-[100px] w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-pink-500 resize-none"></textarea>
            </fieldset>

            {!isSend ? (
              <button type="submit" className="w-full rounded-lg bg-pink-600 py-3 font-bold text-white hover:bg-pink-700 transition shadow-md">
                Enviar mensaje
              </button>
            ) : (
              <div className="w-full bg-green-500 text-white rounded-lg py-3 font-bold flex items-center justify-center gap-2">
                <Icon name="check_circle" /> ¡Enviado correctamente!
              </div>
            )}
          </form>
        </section>

          {/** Historial de mensajes */}
        <aside className="space-y-6">

          <section className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
            <h2 className="text-md font-bold text-slate-800 flex items-center gap-2 mb-3">
              <Icon name="history" className="text-orange-500" />
              Tus Mensajes ({history.length})
            </h2>
            <div className="overflow-y-auto max-h-48 space-y-2 pr-1">
              {history.length === 0 ? (
                <p className="text-slate-400 text-xs italic">Aún no has enviado mensajes.</p>
              ) : (
                history.map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                    <span className="text-[9px] font-bold text-pink-500 uppercase">{item.fecha}</span>
                    <h3 className="font-bold text-slate-800 text-xs truncate">{item.asunto}</h3>
                  </div>
                ))
              )}
            </div>
          </section>

          {/** Información de contacto y horarios */}
          <section className="bg-white rounded-2xl p-5 border border-slate-200">
            <h2 className="text-md font-bold text-slate-800 flex items-center gap-2 mb-4">
              <Icon name="support_agent" className="text-blue-500" />
              Datos de Atención
            </h2>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <Icon name="schedule" className="text-slate-400 text-sm" />
                <span>Lun - Vie: 9:00 a 14:00</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="alternate_email" className="text-slate-400 text-sm" />
                <span>soporte@nutria.app</span>
              </div>
              <div className="flex items-center gap-3 border-t pt-3">
                <Icon name="school" className="text-slate-400 text-sm" />
                <span className="text-xs">Proyecto NutrIA - Estudiante</span>
              </div>
            </div>
          </section>

        </aside>
      </div>
      <Footer>NutrIA · Tu asistente de nutrición</Footer>
    </AppShell>
  );
}
