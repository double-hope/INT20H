import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'pages/App';
import { AppContextProvider } from 'providers';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
      <AppContextProvider>
        <App />
      </AppContextProvider>
  </React.StrictMode>
);
