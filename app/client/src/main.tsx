import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { AxiosProvider } from "./context/axiosProvider";
// import { WebSocketProvider } from "./context/webSocketProvider";
import { ResizeListenerProvider } from "./context/resizeListener";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ResizeListenerProvider>
      <AxiosProvider>
        {/* <WebSocketProvider> */}
        <App />
        {/* </WebSocketProvider> */}
      </AxiosProvider>
    </ResizeListenerProvider>
  </React.StrictMode>
);
