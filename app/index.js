import React from "react";
import { createRoot } from "react-dom/client";

import App from "App/src/app";

import { MAIN_APP_DOM_ID } from "App/constants";
import { LanguageProvider } from "App/src/presentation/context/LanguageContext";

createRoot(document.getElementById(MAIN_APP_DOM_ID)).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
