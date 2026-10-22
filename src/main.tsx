import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { AppProviders } from "@/app/providers/AppProviders.tsx";
import "@/app/styles/main.scss";

const rootElement = document.getElementById("root")!;

createRoot(rootElement).render(
  <StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </StrictMode>,
);
