import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import PokemonPage from "./pages/PokemonPage";

window.document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    invoke("close_splashscreen");
  }, 3000);
});

function App() {
  return (
    <div className="w-screen h-screen bg-white">
      <PokemonPage />
    </div>
  );
}

export default App;
