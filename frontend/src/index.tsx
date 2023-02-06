import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'pages/App';
import { Provider } from 'react-redux';
import { AppContextProvider } from 'providers';
import { store } from './store';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Provider>
  </React.StrictMode>
);
