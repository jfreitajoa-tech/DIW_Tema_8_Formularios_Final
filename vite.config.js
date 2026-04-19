import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/DIW_Tema_8_Formularios_Final/', // Exactamente el nombre de tu repo
  plugins: [react()],
});
