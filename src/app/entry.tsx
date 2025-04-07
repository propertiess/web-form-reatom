import React from 'react';
import ReactDOM from 'react-dom/client';

import { createCtx, connectLogger } from '@reatom/framework';
import { reatomContext } from '@reatom/npm-react';

import { App } from './App';

import './index.css';

const ctx = createCtx();
if (import.meta.env.DEV) {
  connectLogger(ctx);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <reatomContext.Provider value={ctx}>
      <App />
    </reatomContext.Provider>
  </React.StrictMode>
);
