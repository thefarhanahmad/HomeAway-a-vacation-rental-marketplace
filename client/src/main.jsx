import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { PlaceProvider } from './providers/PlaceProvider';
import { UserProvider } from './providers/UserProvider';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <UserProvider>
          <PlaceProvider>
            <App />
          </PlaceProvider>
        </UserProvider>
      </GoogleOAuthProvider>
      <ToastContainer autoClose={2000} transition={Slide} />
    </BrowserRouter>
  </React.StrictMode>,
);
