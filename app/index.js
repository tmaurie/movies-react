import React from 'react';
import { createRoot } from 'react-dom/client';

import App from 'App/src/app';

import { MAIN_APP_DOM_ID } from 'App/constants';

createRoot(document.getElementById(MAIN_APP_DOM_ID)).render(
  <App />
);
