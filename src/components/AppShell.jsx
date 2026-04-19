import { Navbar } from "./Navbar.jsx";

export function AppShell({ children, maxWidth = "md:max-w-6xl" }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 via-orange-400 to-orange-300">
      <div className={`mx-auto w-full max-w-md ${maxWidth} px-4 md:px-8 py-6`}>
        <Navbar/>
          <main>
              {children}
          </main>
      </div>
    </div>
  );
}
