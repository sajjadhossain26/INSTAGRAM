import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from "react-router-dom"
import AuthContextProvider from './providers/AuthContextProviders';
import LoaderContextProvider from './providers/LoaderContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <AuthContextProvider>
      <LoaderContextProvider>
        <App />
      </LoaderContextProvider>
     </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
