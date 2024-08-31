/**
 * utils.ts
 * This file contains utility functions that are used across the API.
 */

export const extractIp = (remoteAddress: string | undefined): string => {
  if (!remoteAddress) {
    throw new Error("No IP address found from API request");
  }

  const ipRegex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/;
  const ipMatch = remoteAddress.match(ipRegex)?.[0];
  if (!ipMatch) {
    throw new Error("Invalid IP address found from API request");
  }

  return ipMatch;
};

export const isPrivateIp = (ip: string): boolean => {
  if (!ip) throw new Error("No IP address found from WebSocket connection");

  const privatePatterns = [
    /^10\./,
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./,
    /^192\.168\./,
  ];
  return privatePatterns.some((pattern) => pattern.test(ip));
};
