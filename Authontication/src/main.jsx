import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
// import './tailwind.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-ujvdbt06qxca1okp.us.auth0.com"
    clientId="NBoGO7T8X5G7gXL4zZa68MkbryL91mTH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
