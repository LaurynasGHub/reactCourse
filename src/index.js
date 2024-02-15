import React from 'react';
import { createContext } from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './variables.css';
import './index.css';
import App from './App';

export const AppContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContext.Provider
        value={{
          data: [],
          cardData: [],
          setData: () => {
            console.log('cia yra setData funk');
          },
        }}
      >
        <App />
      </AppContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
