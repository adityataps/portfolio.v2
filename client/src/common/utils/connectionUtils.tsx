/**
 * connectionUtils.tsx
 * This file contains utility functions for the Express API and WebSocket.
 */

/**
 * Gets the Express API URL.
 * @returns {string} The Express API URL
 */
export const getApiUrl = (): string =>
  import.meta.env.VITE_API_URL || "http://localhost:3000";

/**
 * Gets the WebSocket URL.
 * @returns {string} The WebSocket URL
 */
export const getWebSocketUrl = (): string =>
  import.meta.env.VITE_WEBSOCKET_URL || "ws://localhost:3000";
