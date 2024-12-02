import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "ap-northeast-1_ZRNX3Zj0z",
      userPoolClientId: "5p43lb5hmg0d106l6e3r4m1o18",
      loginWith: {
        email: true
      }
    },
  }
})

ReactDOM.createRoot(document.getElementById("root")!)?.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
