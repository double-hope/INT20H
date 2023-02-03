import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'pages/App';
import { ThemeProvider } from 'providers/ThemeProvider';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
