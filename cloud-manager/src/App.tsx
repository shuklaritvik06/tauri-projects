import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";

window.document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    invoke("close_splashscreen");
  }, 3000);
});

function App() {
  return <div></div>;
}

export default App;
