import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from '../src/redux/store.jsx';
import App from './App.jsx';
import ErrorBoundary from './ErrorBoundary';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
);
