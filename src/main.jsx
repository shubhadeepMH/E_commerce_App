import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import store from '../store/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Auth0Provider
    domain="dev-ihprtosv.us.auth0.com"
    clientId="3fBGOaKgximb1PJHAaWkQrZaLZwJJsrd"
    clientSecret="vIf0zvTNdIAS_BUeOlfMTFyG3MRjKtkeQv5gza7-4BVY2zpBgXdpXHV20wWEChc9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
  </Provider>

)
