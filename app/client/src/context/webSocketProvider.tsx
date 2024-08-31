// import React, { createContext, useContext } from "react";
// import { CustomProvider } from "@types/customProvider";

// const WebSocketContext = createContext<WebSocket | null>(null);

// export const WebSocketProvider = ({ children }: CustomProvider) => {
//   const webSocket = new WebSocket(
//     import.meta.env.VITE_WEBSOCKET_URL || "http://localhost:3000"
//   );

//   return (
//     <WebSocketContext.Provider value={webSocket}>
//       {children}
//     </WebSocketContext.Provider>
//   );
// };

// export const useWebSocket = (): WebSocket | null =>
//   useContext(WebSocketContext);
