import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
  domain= "dev-p8jpj5dccyqig58k.us.auth0.com"
  clientId="FsvWNC8mE2wREIIOsDyOeOVTJgdQAQEQ"
  redirectUri={window.location.origin}>
      <BrowserRouter>
      <div className=" bg-red-600">
        <App />
      </div>
  </BrowserRouter>
    </Auth0Provider>
);
