import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./store"; // Import the store
import './index.css';
import App from './App';
import './style.css';
import './App.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>
);
